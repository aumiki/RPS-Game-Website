"use client";
import { useRouter } from "next/navigation";

export default function LobbyPage() {
  const router = useRouter();

  const topLegends = [
    { rank: 1, name: "BattleKing_99", pts: "12,840", avatar: "🧑‍🦱" },
    { rank: 2, name: "MoonChild", pts: "11,200", avatar: "👩‍🦰" },
    { rank: 3, name: "Maximus_Prime", pts: "10,950", avatar: "🧑" },
  ];

  return (
    <main style={{
      minHeight: "100vh", background: "#FDF0EE",
      fontFamily: "sans-serif", paddingBottom: "100px"
    }}>
      {/* Navbar */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "16px 24px", borderBottom: "1px solid rgba(0,0,0,0.06)",
        background: "#FDF0EE"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "40px", height: "40px", borderRadius: "50%",
            background: "#E8737A", display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: "20px", border: "2px solid #fff"
          }}>🐼</div>
          <div>
            <div style={{ fontWeight: "800", fontSize: "16px", color: "#8B2635", letterSpacing: "-0.5px" }}>JANKEN</div>
            <div style={{ fontSize: "11px", color: "#4CAF7D", fontWeight: "700" }}>● 2,450 PTS</div>
          </div>
        </div>
        <span style={{ fontSize: "20px", cursor: "pointer" }}>🔔</span>
      </nav>

      <div style={{ padding: "24px 20px", maxWidth: "680px", margin: "0 auto" }}>

        {/* Ranked Match Banner */}
        <div style={{
          background: "#8B2635", borderRadius: "24px", padding: "32px 28px",
          marginBottom: "24px", position: "relative", overflow: "hidden"
        }}>
          <div style={{
            position: "absolute", right: "-20px", top: "-10px",
            fontSize: "120px", opacity: "0.12", transform: "rotate(15deg)"
          }}>✊</div>
          <div style={{
            display: "inline-block", background: "rgba(255,255,255,0.2)",
            color: "#fff", fontSize: "11px", fontWeight: "700",
            padding: "4px 12px", borderRadius: "20px", letterSpacing: "1px",
            marginBottom: "12px"
          }}>SEASON 4 IS LIVE</div>
          <h2 style={{
            color: "#fff", fontSize: "32px", fontWeight: "900",
            margin: "0 0 10px", letterSpacing: "-0.5px"
          }}>RANKED MATCH</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px", margin: "0 0 24px", lineHeight: "1.6", maxWidth: "280px" }}>
            Climb the leaderboard and prove your might in the arena with players worldwide.
          </p>
          <button
            onClick={() => router.push("/game")}
            style={{
              background: "#fff", color: "#8B2635", border: "none",
              padding: "12px 28px", borderRadius: "50px", fontSize: "13px",
              fontWeight: "800", cursor: "pointer", letterSpacing: "1.5px",
              display: "flex", alignItems: "center", gap: "8px"
            }}
          >PLAY NOW ⚡</button>
        </div>

        {/* Create Room & Join Code */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "32px" }}>
          {/* Create Room */}
          <div
            onClick={() => router.push("/waiting")}
            style={{
              flex: 1, background: "#fff", borderRadius: "20px",
              padding: "28px 20px", textAlign: "center", cursor: "pointer",
              boxShadow: "0 2px 16px rgba(0,0,0,0.05)", transition: "transform 0.15s"
            }}
            onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div style={{
              width: "56px", height: "56px", borderRadius: "50%",
              background: "#A8DCE7", display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: "24px", margin: "0 auto 14px"
            }}>➕</div>
            <div style={{ fontWeight: "800", fontSize: "16px", color: "#2D6A9F", letterSpacing: "0.5px", marginBottom: "8px" }}>
              CREATE<br />ROOM
            </div>
            <div style={{ fontSize: "12px", color: "#888", lineHeight: "1.5" }}>
              Play with your friends locally or online
            </div>
          </div>

          {/* Join Code */}
          <div
            onClick={() => router.push("/waiting")}
            style={{
              flex: 1, background: "#fff", borderRadius: "20px",
              padding: "28px 20px", textAlign: "center", cursor: "pointer",
              boxShadow: "0 2px 16px rgba(0,0,0,0.05)", transition: "transform 0.15s"
            }}
            onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div style={{
              width: "56px", height: "56px", borderRadius: "50%",
              background: "#4CAF7D", display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: "24px", margin: "0 auto 14px"
            }}>🔢</div>
            <div style={{ fontWeight: "800", fontSize: "16px", color: "#1a6a4a", letterSpacing: "0.5px", marginBottom: "8px" }}>
              JOIN CODE
            </div>
            <div style={{ fontSize: "12px", color: "#888", lineHeight: "1.5" }}>
              Enter a match code to join a lobby
            </div>
          </div>
        </div>

        {/* Top Legends */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "18px" }}>📊</span>
              <span style={{ fontWeight: "800", fontSize: "18px", color: "#1a1a1a", letterSpacing: "-0.3px" }}>TOP LEGENDS</span>
            </div>
            <span
              onClick={() => router.push("/leaderboard")}
              style={{ fontSize: "13px", color: "#8B2635", fontWeight: "700", cursor: "pointer" }}
            >VIEW ALL RANKINGS</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {topLegends.map(p => (
              <div key={p.rank} style={{
                background: "#fff", borderRadius: "16px", padding: "16px 20px",
                display: "flex", alignItems: "center", gap: "14px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)"
              }}>
                <span style={{ fontSize: "14px", color: "#aaa", fontWeight: "700", width: "16px" }}>{p.rank}</span>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  background: "#fde8e8", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "20px", flexShrink: 0
                }}>{p.avatar}</div>
                <span style={{ flex: 1, fontWeight: "600", fontSize: "15px", color: "#1a1a1a" }}>{p.name}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{
                    width: "22px", height: "22px", borderRadius: "50%",
                    background: p.rank === 1 ? "#4CAF7D" : "#f0f0f0",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px"
                  }}>{p.rank === 1 ? "⭐" : "★"}</span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#1a1a1a" }}>{p.pts}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Players Banner */}
        <div style={{
          background: "#D6EEF5", borderRadius: "50px", padding: "12px 24px",
          textAlign: "center", fontSize: "13px", fontWeight: "600", color: "#2D5A7A"
        }}>
          ⚡ 4,203 players fighting right now!
        </div>
      </div>

      {/* Bottom Nav */}
      <div style={{
        position: "fixed", bottom: "0", left: "0", right: "0",
        background: "#fff", borderTop: "1px solid rgba(0,0,0,0.07)",
        display: "flex", padding: "12px 0 20px"
      }}>
        {[
          { label: "Lobby", icon: "🎮", path: "/lobby", active: true },
          { label: "Rank", icon: "📊", path: "/leaderboard", active: false },
          { label: "Profile", icon: "👤", path: "/profile", active: false },
        ].map(item => (
          <button
            key={item.label}
            onClick={() => router.push(item.path)}
            style={{
              flex: 1, background: item.active ? "#8B2635" : "transparent",
              border: "none", borderRadius: item.active ? "50px" : "0",
              padding: "10px 16px", cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", gap: "4px",
              margin: item.active ? "0 8px" : "0"
            }}
          >
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