"use client";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const stats = [
    { icon: "🎮", value: "1,240", label: "MATCHES" },
    { icon: "🏆", value: "842", label: "WINS" },
    { icon: "💔", value: "398", label: "LOSSES" },
    { icon: "⭐", value: "14.5k", label: "POINTS" },
  ];

  const battles = [
    { result: "VICTORY", vs: "SteelPulse", time: "2m ago", xp: "+45", icon: "🖐️", win: true },
    { result: "DEFEAT", vs: "RockStar", time: "1h ago", xp: "-12", icon: "✊", win: false },
    { result: "VICTORY", vs: "PaperCut", time: "4h ago", xp: "+38", icon: "✌️", win: true },
  ];

  return (
    <main style={{
      minHeight: "100vh", background: "#FDF0EE",
      fontFamily: "sans-serif", paddingBottom: "100px"
    }}>
      {/* Navbar */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "18px 24px", borderBottom: "1px solid rgba(0,0,0,0.06)",
        background: "#FDF0EE"
      }}>
        <span style={{ fontWeight: "900", fontSize: "20px", color: "#8B2635", letterSpacing: "-0.5px" }}>
          JANKEN
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600", color: "#555" }}>Alex "Hand" Master</span>
            <div style={{
              width: "36px", height: "36px", borderRadius: "50%",
              background: "#F4A090", display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: "18px",
              border: "2px solid #fff", boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}>🧑‍🦱</div>
          </div>
        </div>
      </nav>

      <div style={{ padding: "24px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", minWidth: "220px", flex: "0 0 240px" }}>

            {/* Profile Card */}
            <div style={{
              background: "#fff", borderRadius: "20px", padding: "24px 20px",
              textAlign: "center", boxShadow: "0 2px 16px rgba(0,0,0,0.05)"
            }}>
              {/* Avatar */}
              <div style={{ position: "relative", display: "inline-block", marginBottom: "12px" }}>
                <div style={{
                  width: "88px", height: "88px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #F4A090, #8B2635)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "44px", border: "3px solid #fff",
                  boxShadow: "0 4px 16px rgba(139,38,53,0.2)"
                }}>🧑‍🦱</div>
                <div style={{
                  position: "absolute", bottom: "0", left: "50%", transform: "translateX(-50%)",
                  background: "#2D6A6A", color: "#fff", fontSize: "10px",
                  fontWeight: "800", padding: "3px 10px", borderRadius: "10px",
                  whiteSpace: "nowrap", letterSpacing: "0.5px"
                }}>GOLD IV</div>
              </div>

              <div style={{ fontSize: "17px", fontWeight: "800", color: "#1a1a1a", marginBottom: "4px" }}>
                Alex "Hand" Master
              </div>
              <div style={{ fontSize: "12px", color: "#aaa", marginBottom: "20px" }}>
                Member since Jan 2024
              </div>

              <button style={{
                width: "100%", padding: "12px", background: "#8B2635",
                color: "#fff", border: "none", borderRadius: "50px",
                fontSize: "13px", fontWeight: "800", cursor: "pointer",
                letterSpacing: "1px", marginBottom: "10px"
              }}>EDIT PROFILE</button>

              <button
                onClick={() => router.push("/login")}
                style={{
                  width: "100%", padding: "11px", background: "#fde8e8",
                  color: "#8B2635", border: "none", borderRadius: "50px",
                  fontSize: "13px", fontWeight: "700", cursor: "pointer",
                  letterSpacing: "1px", display: "flex", alignItems: "center",
                  justifyContent: "center", gap: "6px"
                }}>↪ LOGOUT</button>
            </div>

            {/* Win Rate Card */}
            <div style={{
              background: "#fff", borderRadius: "20px", padding: "20px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.05)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ fontSize: "14px", fontWeight: "600", color: "#1a1a1a" }}>Win Rate</span>
                <span style={{ fontSize: "14px", fontWeight: "800", color: "#8B2635" }}>68%</span>
              </div>
              <div style={{ height: "8px", background: "#fde8e8", borderRadius: "4px", overflow: "hidden", marginBottom: "8px" }}>
                <div style={{ width: "68%", height: "100%", background: "#4CAF7D", borderRadius: "4px" }}></div>
              </div>
              <div style={{ fontSize: "12px", color: "#aaa", textAlign: "center" }}>Top 15% this season</div>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ flex: 1, minWidth: "280px", display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Stats Grid */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {stats.map(s => (
                <div key={s.label} style={{
                  flex: "1", minWidth: "100px", background: "#fff", borderRadius: "16px",
                  padding: "16px 12px", textAlign: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)"
                }}>
                  <div style={{ fontSize: "20px", marginBottom: "6px" }}>{s.icon}</div>
                  <div style={{ fontSize: "22px", fontWeight: "900", color: "#1a1a1a", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: "10px", fontWeight: "700", color: "#aaa", letterSpacing: "1px", marginTop: "4px" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Recent Battles */}
            <div style={{
              background: "#fff", borderRadius: "20px", padding: "20px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.05)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{ fontSize: "16px", fontWeight: "800", color: "#1a1a1a" }}>Recent Battles</span>
                <span style={{ fontSize: "12px", color: "#8B2635", fontWeight: "700", cursor: "pointer" }}>SEE ALL</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {battles.map((b, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    paddingBottom: i < battles.length - 1 ? "12px" : 0,
                    borderBottom: i < battles.length - 1 ? "1px solid #fde8e8" : "none"
                  }}>
                    {/* Color bar */}
                    <div style={{
                      width: "4px", height: "44px", borderRadius: "2px",
                      background: b.win ? "#4CAF7D" : "#E24B4A", flexShrink: 0
                    }}></div>

                    {/* Icon */}
                    <div style={{
                      width: "40px", height: "40px", borderRadius: "50%",
                      background: "#fde8e8", display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: "18px", flexShrink: 0
                    }}>{b.icon}</div>

                    {/* Info */}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "13px", fontWeight: "800", color: "#1a1a1a" }}>{b.result}</div>
                      <div style={{ fontSize: "12px", color: "#aaa" }}>vs. {b.vs} • {b.time}</div>
                    </div>

                    {/* XP */}
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: "18px", fontWeight: "900", color: b.win ? "#4CAF7D" : "#E24B4A" }}>
                        {b.xp}
                      </div>
                      <div style={{ fontSize: "10px", color: "#aaa", fontWeight: "700" }}>XP</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div style={{
        position: "fixed", bottom: "0", left: "0", right: "0",
        background: "#f5eded", borderTop: "1px solid rgba(0,0,0,0.06)",
        display: "flex", padding: "10px 16px 20px", gap: "8px"
      }}>
        {[
          { label: "Lobby", icon: "🎮", path: "/lobby", active: false },
          { label: "Rank", icon: "📊", path: "/leaderboard", active: false },
          { label: "Profile", icon: "👤", path: "/profile", active: true },
        ].map(item => (
          <button key={item.label} onClick={() => router.push(item.path)} style={{
            flex: 1, background: item.active ? "#8B2635" : "transparent",
            border: "none", borderRadius: "50px", padding: "10px",
            cursor: "pointer", display: "flex", flexDirection: "column",
            alignItems: "center", gap: "4px"
          }}>
            <span style={{ fontSize: "18px" }}>{item.icon}</span>
            <span style={{ fontSize: "11px", fontWeight: "700", color: item.active ? "#fff" : "#888" }}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </main>
  );
}