import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "janken_secret_2024";

export async function POST(req) {
  try {
    const { username } = await req.json();

    if (!username || username.trim().length < 2) {
      return NextResponse.json(
        { error: "Nama minimal 2 karakter." },
        { status: 400 },
      );
    }

    const trimmed = username.trim().slice(0, 20);
    const guestId = "guest_" + Math.random().toString(36).substring(2, 12);

    const user = {
      id: guestId,
      username: trimmed,
      email: null,
      avatar: null,
      isGuest: true,
      rankedPoints: 0,
      wins: 0,
      losses: 0,
    };

    const token = jwt.sign(
      { id: guestId, username: trimmed, isGuest: true },
      JWT_SECRET,
      { expiresIn: "12h" },
    );

    return NextResponse.json({ token, user });
  } catch (e) {
    console.error("[GUEST AUTH ERROR]", e);
    return NextResponse.json(
      { error: "Gagal membuat akun tamu." },
      { status: 500 },
    );
  }
}
