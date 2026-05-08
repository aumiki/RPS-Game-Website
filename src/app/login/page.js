"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [tab, setTab] = useState("login");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #fde8e8 0%, #fdf0ee 40%, #e8f4f8 100%)",
      fontFamily: "sans-serif"
    }}>
      {/* Navbar */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 40px", borderBottom: "1px solid rgba(0,0,0,0.06)"
      }}>
        <span style={{ fontWeight: "800", fontSize: "20px", color: "#8B2635", letterSpacing: "-0.5px" }}>
          JANKEN
        </span>
        <span style={{ fontSize: "20px", cursor: "pointer" }}>🔔</span>
      </nav>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "48px 20px" }}>

        {/* Icon + Version */}
        <div style={{ position: "relative", marginBottom: "20px" }}>
          <div style={{
            width: "72px", height: "72px", borderRadius: "50%",
            background: "#E8737A", display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: "30px"
          }}>🎮</div>
          <div style={{
            position: "absolute", bottom: "-6px", left: "50%", transform: "translateX(-50%)",
            background: "#4CAF7D", color: "#fff", fontSize: "10px", fontWeight: "700",
            padding: "2px 8px", borderRadius: "10px", whiteSpace: "nowrap"
          }}>V 1.0</div>
        </div>

        <h1 style={{ fontSize: "32px", fontWeight: "800", color: "#8B2635", margin: "0 0 8px", letterSpacing: "-0.5px" }}>
          {tab === "login" ? "Welcome Back" : "Create Account"}
        </h1>
        <p style={{ fontSize: "14px", color: "#888", margin: "0 0 32px" }}>
          {tab === "login" ? "Choose your hand and join the battle arena." : "Join the battle arena and start your journey."}
        </p>

        {/* Card */}
        <div style={{
          background: "#fff", borderRadius: "24px", padding: "32px",
          width: "100%", maxWidth: "420px",
          boxShadow: "0 4px 32px rgba(139,38,53,0.08)"
        }}>
          {/* Tab */}
          <div style={{
            display: "flex", background: "#fde8e8", borderRadius: "50px",
            padding: "4px", marginBottom: "28px"
          }}>
            {["login", "register"].map(t => (
              <button key={t} onClick={() => setTab(t)} style={{
                flex: 1, padding: "10px", borderRadius: "50px", border: "none",
                background: tab === t ? "#8B2635" : "transparent",
                color: tab === t ? "#fff" : "#888",
                fontWeight: "600", fontSize: "14px", cursor: "pointer",
                textTransform: "capitalize", transition: "all 0.2s"
              }}>{t === "login" ? "Login" : "Register"}</button>
            ))}
          </div>

          {/* ===== LOGIN FORM ===== */}
          {tab === "login" && (
            <div>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", color: "#555", display: "block", marginBottom: "8px" }}>
                  USERNAME OR EMAIL
                </label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#ccc" }}>👤</span>
                  <input type="text" placeholder="Enter your username" style={{
                    width: "100%", padding: "14px 14px 14px 42px", borderRadius: "12px",
                    border: "none", background: "#fde8e8", fontSize: "14px",
                    outline: "none", boxSizing: "border-box", color: "#333"
                  }} />
                </div>
              </div>

              <div style={{ marginBottom: "8px" }}>
                <label style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", color: "#555", display: "block", marginBottom: "8px" }}>
                  PASSWORD
                </label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#ccc" }}>🔒</span>
                  <input type={showPass ? "text" : "password"} placeholder="••••••••" style={{
                    width: "100%", padding: "14px 42px 14px 42px", borderRadius: "12px",
                    border: "none", background: "#fde8e8", fontSize: "14px",
                    outline: "none", boxSizing: "border-box", color: "#333"
                  }} />
                  <span onClick={() => setShowPass(!showPass)} style={{
                    position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)",
                    color: "#ccc", cursor: "pointer"
                  }}>{showPass ? "🙈" : "👁️"}</span>
                </div>
              </div>

              <div style={{ textAlign: "right", marginBottom: "24px" }}>
                <span style={{ fontSize: "13px", color: "#2D6A9F", cursor: "pointer", fontWeight: "600" }}>
                  Forgot Password?
                </span>
              </div>

              <button
                onClick={() => router.push("/lobby")}
                style={{
                  width: "100%", padding: "16px", background: "#8B2635", color: "#fff",
                  border: "none", borderRadius: "14px", fontSize: "15px",
                  fontWeight: "800", cursor: "pointer", letterSpacing: "2px",
                  marginBottom: "24px"
                }}
              >LOGIN NOW</button>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ flex: 1, height: "1px", background: "#f0e8e8" }}></div>
                <span style={{ fontSize: "11px", color: "#aaa", letterSpacing: "1px" }}>OR CONNECT WITH</span>
                <div style={{ flex: 1, height: "1px", background: "#f0e8e8" }}></div>
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                {[{ label: "GOOGLE", icon: "🔍" }, { label: "FACEBOOK", icon: "📘" }].map(s => (
                  <button key={s.label} style={{
                    flex: 1, padding: "12px", background: "#fde8e8", border: "none",
                    borderRadius: "12px", fontSize: "12px", fontWeight: "700",
                    color: "#555", cursor: "pointer", display: "flex",
                    alignItems: "center", justifyContent: "center", gap: "8px", letterSpacing: "1px"
                  }}>
                    <span>{s.icon}</span>{s.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ===== REGISTER FORM ===== */}
          {tab === "register" && (
            <div>
              {/* Username */}
              <div style={{ marginBottom: "16px" }}>
                <label style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", color: "#555", display: "block", marginBottom: "8px" }}>
                  USERNAME
                </label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#ccc" }}>👤</span>
                  <input type="text" placeholder="Choose a username" style={{
                    width: "100%", padding: "14px 14px 14px 42px", borderRadius: "12px",
                    border: "none", background: "#fde8e8", fontSize: "14px",
                    outline: "none", boxSizing: "border-box", color: "#333"
                  }} />
                </div>
              </div>

              {/* Email */}
              <div style={{ marginBottom: "16px" }}>
                <label style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", color: "#555", display: "block", marginBottom: "8px" }}>
                  EMAIL
                </label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#ccc" }}>✉️</span>
                  <input type="email" placeholder="Enter your email" style={{
                    width: "100%", padding: "14px 14px 14px 42px", borderRadius: "12px",
                    border: "none", background: "#fde8e8", fontSize: "14px",
                    outline: "none", boxSizing: "border-box", color: "#333"
                  }} />
                </div>
              </div>

              {/* Password */}
              <div style={{ marginBottom: "16px" }}>
                <label style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", color: "#555", display: "block", marginBottom: "8px" }}>
                  PASSWORD
                </label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#ccc" }}>🔒</span>
                  <input type={showPass ? "text" : "password"} placeholder="Create a password" style={{
                    width: "100%", padding: "14px 42px 14px 42px", borderRadius: "12px",
                    border: "none", background: "#fde8e8", fontSize: "14px",
                    outline: "none", boxSizing: "border-box", color: "#333"
                  }} />
                  <span onClick={() => setShowPass(!showPass)} style={{
                    position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)",
                    color: "#ccc", cursor: "pointer"
                  }}>{showPass ? "🙈" : "👁️"}</span>
                </div>
              </div>

              {/* Confirm Password */}
              <div style={{ marginBottom: "28px" }}>
                <label style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", color: "#555", display: "block", marginBottom: "8px" }}>
                  CONFIRM PASSWORD
                </label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#ccc" }}>🔒</span>
                  <input type={showConfirm ? "text" : "password"} placeholder="Repeat your password" style={{
                    width: "100%", padding: "14px 42px 14px 42px", borderRadius: "12px",
                    border: "none", background: "#fde8e8", fontSize: "14px",
                    outline: "none", boxSizing: "border-box", color: "#333"
                  }} />
                  <span onClick={() => setShowConfirm(!showConfirm)} style={{
                    position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)",
                    color: "#ccc", cursor: "pointer"
                  }}>{showConfirm ? "🙈" : "👁️"}</span>
                </div>
              </div>

              <button
                onClick={() => router.push("/lobby")}
                style={{
                  width: "100%", padding: "16px", background: "#8B2635", color: "#fff",
                  border: "none", borderRadius: "14px", fontSize: "15px",
                  fontWeight: "800", cursor: "pointer", letterSpacing: "2px"
                }}
              >CREATE ACCOUNT</button>
            </div>
          )}
        </div>

        {/* Terms */}
        <p style={{ fontSize: "13px", color: "#888", margin: "24px 0 32px", textAlign: "center" }}>
          By signing in, you agree to our{" "}
          <span style={{ color: "#E8737A", fontWeight: "600", cursor: "pointer" }}>Terms of Service</span>
        </p>

        {/* Weekly Tournament Banner */}
        <div style={{
          background: "#D6EEF5", borderRadius: "20px", padding: "20px 24px",
          maxWidth: "420px", width: "100%",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px"
        }}>
          <div>
            <div style={{ fontWeight: "700", fontSize: "16px", color: "#1a4a5a", marginBottom: "6px" }}>
              Weekly Tournament
            </div>
            <div style={{ fontSize: "13px", color: "#4a7a8a", lineHeight: "1.5" }}>
              Join the current league for a chance to win exclusive hand skins.
            </div>
          </div>
          <span style={{ fontSize: "32px", flexShrink: 0 }}>🏆</span>
        </div>
      </div>
    </main>
  );
}