"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveAuth } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [showGuest, setShowGuest] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const url = mode === "login" ? "/api/auth/login" : "/api/auth/register";
      const body =
        mode === "login"
          ? { email: form.email, password: form.password }
          : form;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Terjadi kesalahan.");
        setLoading(false);
        return;
      }
      if (mode === "register") {
        setMode("login");
        setError("");
        setForm({ ...form, password: "" });
        setLoading(false);
        return;
      }
      saveAuth(data.token, data.user);
      router.push("/lobby");
    } catch {
      setError("Gagal terhubung ke server.");
      setLoading(false);
    }
  }

  async function handleGuest(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/guest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: guestName }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Gagal masuk sebagai tamu.");
        setLoading(false);
        return;
      }
      saveAuth(data.token, data.user);
      router.push("/lobby");
    } catch {
      setError("Gagal terhubung ke server.");
      setLoading(false);
    }
  }

  const inp = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    border: "1.5px solid #e0d8d8",
    fontSize: "15px",
    outline: "none",
    background: "#fff",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FDF0EE",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          animation: "fadeIn 0.4s ease",
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div style={{ fontSize: "48px", marginBottom: "8px" }}>✊🖐️✌️</div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "900",
              color: "#8B2635",
              letterSpacing: "-1px",
            }}
          >
            JANKEN
          </h1>
          <p style={{ color: "#888", fontSize: "14px", marginTop: "4px" }}>
            Rock Paper Scissors Battle Arena
          </p>
        </div>

        {/* Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: "24px",
            padding: "32px",
            boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
          }}
        >
          {/* Tabs */}
          <div
            style={{
              display: "flex",
              background: "#f5eded",
              borderRadius: "12px",
              padding: "4px",
              marginBottom: "24px",
            }}
          >
            {["login", "register"].map((m) => (
              <button
                key={m}
                onClick={() => {
                  setMode(m);
                  setError("");
                }}
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "10px",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "700",
                  background: mode === m ? "#8B2635" : "transparent",
                  color: mode === m ? "#fff" : "#888",
                  transition: "all 0.2s",
                }}
              >
                {m === "login" ? "Masuk" : "Daftar"}
              </button>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {mode === "register" && (
              <input
                style={inp}
                placeholder="Username"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                required
                minLength={3}
              />
            )}
            <input
              style={inp}
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              style={inp}
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              minLength={6}
            />

            {error && (
              <div
                style={{
                  background: "#fde8e8",
                  color: "#8B2635",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                background: "#8B2635",
                color: "#fff",
                border: "none",
                padding: "14px",
                borderRadius: "12px",
                fontSize: "15px",
                fontWeight: "800",
                letterSpacing: "1px",
                opacity: loading ? 0.7 : 1,
                transition: "opacity 0.2s",
              }}
            >
              {loading
                ? "⏳ Loading..."
                : mode === "login"
                  ? "MASUK"
                  : "DAFTAR"}

              {/* Divider */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  margin: "20px 0 0",
                }}
              >
                <div
                  style={{ flex: 1, height: "1px", background: "#f0e8e8" }}
                />
                <span
                  style={{ fontSize: "12px", color: "#bbb", fontWeight: "600" }}
                >
                  ATAU
                </span>
                <div
                  style={{ flex: 1, height: "1px", background: "#f0e8e8" }}
                />
              </div>

              {/* Tombol Google */}
              <a
                href="/api/auth/google"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  width: "100%",
                  padding: "13px",
                  borderRadius: "12px",
                  border: "1.5px solid #e0d8d8",
                  background: "#fff",
                  color: "#333",
                  fontWeight: "700",
                  fontSize: "14px",
                  textDecoration: "none",
                  marginTop: "12px",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
                Lanjutkan dengan Google
              </a>
            </button>
          </form>

          {showGuest ? (
            <form
              onSubmit={handleGuest}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                marginTop: "16px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "36px" }}>👤</div>
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: "800",
                    color: "#8B2635",
                    margin: "6px 0 2px",
                  }}
                >
                  Main sebagai Tamu
                </h2>
                <p style={{ color: "#aaa", fontSize: "13px", margin: 0 }}>
                  Ketik nama yang ingin ditampilkan
                </p>
              </div>
              <input
                style={inp}
                placeholder="Nama kamu (min. 2 karakter)"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
                minLength={2}
                maxLength={20}
                autoFocus
              />
              {error && (
                <div
                  style={{
                    background: "#fde8e8",
                    color: "#8B2635",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: "#8B2635",
                  color: "#fff",
                  border: "none",
                  padding: "14px",
                  borderRadius: "12px",
                  fontSize: "15px",
                  fontWeight: "800",
                  letterSpacing: "1px",
                  opacity: loading ? 0.7 : 1,
                  transition: "opacity 0.2s",
                }}
              >
                {loading ? "⏳ Loading..." : "MAIN SEKARANG"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowGuest(false);
                  setError("");
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#aaa",
                  fontSize: "13px",
                  cursor: "pointer",
                  padding: "4px",
                }}
              >
                ← Kembali ke login
              </button>
            </form>
          ) : (
            <>
              {/* Tombol Guest */}
              <button
                type="button"
                onClick={() => {
                  setShowGuest(true);
                  setError("");
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  width: "100%",
                  padding: "13px",
                  borderRadius: "12px",
                  border: "1.5px dashed #e0d8d8",
                  background: "transparent",
                  color: "#888",
                  fontWeight: "700",
                  fontSize: "14px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                👤 Main sebagai Tamu
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
