import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET || "janken_secret_2024";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  if (error || !code) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL}/login?error=google_cancelled`,
    );
  }

  try {
    // Tukar code dengan access token
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/google/callback`,
        grant_type: "authorization_code",
      }),
    });

    const tokenData = await tokenRes.json();

    if (!tokenData.access_token) {
      throw new Error("Gagal mendapatkan access token");
    }

    // Ambil profil dari Google
    const profileRes = await fetch(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
      },
    );

    const profile = await profileRes.json();

    if (!profile.email) {
      throw new Error("Gagal mengambil email dari Google");
    }

    // Cari user di DB
    let user = await prisma.user.findFirst({
      where: {
        OR: [{ googleId: profile.id }, { email: profile.email }],
      },
    });

    if (user) {
      // Update googleId dan avatar kalau belum ada
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          googleId: profile.id,
          avatar: user.avatar || profile.picture || null,
        },
      });
    } else {
      // Buat user baru
      let baseUsername = profile.name
        .toLowerCase()
        .replace(/\s+/g, "_")
        .replace(/[^a-z0-9_]/g, "")
        .slice(0, 15);

      if (!baseUsername) baseUsername = "player";

      // Pastikan username unik
      let username = baseUsername;
      let counter = 1;
      while (await prisma.user.findUnique({ where: { username } })) {
        username = `${baseUsername}${counter}`;
        counter++;
      }

      user = await prisma.user.create({
        data: {
          username,
          email: profile.email,
          password: "", // ← string kosong, Google user tidak butuh password
          googleId: profile.id,
          avatar: profile.picture || null,
        },
      });
    }

    // Buat JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" },
    );

    // Encode data user untuk dikirim ke client
    const userData = encodeURIComponent(
      JSON.stringify({
        id: user.id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        rankedPoints: user.rankedPoints,
        wins: user.wins,
        losses: user.losses,
      }),
    );

    const res = NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback?token=${token}&user=${userData}`,
    );

    res.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });

    return res;
  } catch (err) {
    console.error("[GOOGLE AUTH ERROR]:", err.message);
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL}/login?error=google_failed`,
    );
  }
}
