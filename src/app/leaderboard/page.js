"use client";
import { useRouter } from "next/navigation";

export default function LeaderboardPage() {
  const router = useRouter();

  const top3 = [
    { rank: 2, name: "Maki", pts: "2,840", avatar: "🧑‍🦱", color: "#A8DCE7", avatarBg: "#A8DCE7" },
    { rank: 1, name: "SkyLord", pts: "3,120", avatar: "🤖", color: "#F4A090", avatarBg: "#F4A090" },
    { rank: 3, name: "BopIt", pts: "2,415", avatar: "🧟", color: "#4CAF7D", avatarBg: "#4CAF7D" },
  ];

  const others = [
    { rank: 4, name: "NeonPaws", pts: "2,100", avatar: "👾" },
    { rank: 5, name: "VibeCheck", pts: "1,950", avatar: "🧑‍🚀" },
    { rank: 6, name: "åenHand", pts: "1,820", avatar: "🥷" },
    { rank: 7, name: "EchoMage", pts: "1,640", avatar: "🧙" },
  ];

  const podiumOrder = [top3[0], top3[1], top3[2]]; // 2, 1, 3
  const heights = [120, 160, 100];

  return (
    <main style={{
      minHeight: "100vh", background: "#FDF0EE",
      fontFamily: "sans-serif", paddingBottom: "100px"
    }}>
      {/* Navbar */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 24px", borderBottom: "1px solid rgba(0,0,0,0.06)"
      }}>
        <span style={{ fontWeight: "800", fontSize: "20px", color: "#8B2635", letterSpacing: "-0.5px" }}>
          JANKEN
        </span>
        <span style={{ fontSize: "20px", cursor: "pointer" }}>🔔</span>
      </nav>

      <div style={{ padding: "24px 20px", maxWidth: "540px", margin: "0 auto" }}>

        {/* Podium */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "10px", marginBottom: "32px", paddingTop: "24px" }}>
          {podiumOrder.map((p, i) => (
            <div key={p.rank} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
              {/* Avatar */}
              <div style={{ position: "relative", marginBottom: "8px" }}>
                {p.rank === 1 && (
                  <div style={{
                    position: "absolute", top: "-20px", left: "50%", transform: "translateX(-50%)",
                    width: "28px", height: "28px", borderRadius: "50%",
                    background: "#4CAF7D", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "14px", zIndex: 2
                  }}>⭐</div>
                )}
                <div style={{
                  width: p.rank === 1 ? "64px" : "52px",
                  height: p.rank === 1 ? "64px" : "52px",
                  borderRadius: "50%", background: p.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: p.rank === 1 ? "28px" : "22px",
                  border: "3px solid #fff",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.1)"
                }}>{p.avatar}</div>
                <div style={{
                  position: "absolute", bottom: "-4px", right: "-2px",
                  width: "20px", height: "20px", borderRadius: "50%",
                  background: p.rank === 1 ? "#F4A090" : p.rank === 2 ? "#A8DCE7" : "#4CAF7D",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "10px", fontWeight: "800", color: "#fff",
                  border: "2px solid #fff"
                }}>{p.rank}</div>
              </div>

              {/* Podium block */}
              <div style={{
                width: "100%", height: `${heights[i]}px`,
                background: p.color, borderRadius: "14px 14px 0 0",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: "4px"
              }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "rgba(0,0,0,0.6)" }}>{p.name}</span>
                <span style={{ fontSize: p.rank === 1 ? "22px" : "18px", fontWeight: "900", color: "rgba(0,0,0,0.75)" }}>{p.pts}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Others */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
          {others.map(p => (
            <div key={p.rank} style={{
              background: "#fff", borderRadius: "16px", padding: "16px 20px",
              display: "flex", alignItems: "center", gap: "14px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)"
            }}>
              <span style={{ fontSize: "13px", color: "#bbb", fontWeight: "700", width: "16px" }}>{p.rank}</span>
              <div style={{
                width: "40px", height: "40px", borderRadius: "50%",
                background: "#f0e8e8", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "20px", flexShrink: 0
              }}>{p.avatar}</div>
              <span style={{ flex: 1, fontWeight: "600", fontSize: "15px", color: "#1a1a1a" }}>{p.name}</span>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "18px", fontWeight: "900", color: "#8B2635" }}>{p.pts}</div>
                <div style={{ fontSize: "10px", color: "#aaa", fontWeight: "700", letterSpacing: "0.5px" }}>PTS</div>
              </div>
            </div>
          ))}
        </div>

        {/* Your Rank Card */}
        <div style={{
          background: "#8B2635", borderRadius: "20px", padding: "20px 24px",
          boxShadow: "0 4px 20px rgba(139,38,53,0.2)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
            <div style={{
              width: "44px", height: "44px", borderRadius: "50%",
              background: "#F4A090", display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: "22px", flexShrink: 0
            }}>🧑</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "10px", fontWeight: "700", color: "rgba(255,255,255,0.6)", letterSpacing: "1.5px", marginBottom: "2px" }}>
                YOUR RANK
              </div>
              <div style={{ fontSize: "22px", fontWeight: "900", color: "#fff" }}>Rank #12</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "10px", fontWeight: "700", color: "rgba(255,255,255,0.6)", letterSpacing: "1px" }}>POINTS</div>
              <div style={{ fontSize: "22px", fontWeight: "900", color: "#fff" }}>1,420</div>
            </div>
          </div>

          {/* Progress */}
          <div style={{ height: "6px", background: "rgba(255,255,255,0.2)", borderRadius: "3px", overflow: "hidden", marginBottom: "8px" }}>
            <div style={{ width: "72%", height: "100%", background: "#4CAF7D", borderRadius: "3px" }}></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.6)", fontWeight: "600", letterSpacing: "0.5px" }}>
              REACH RANK #10 AT 1,550 PTS
            </span>
            <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)", fontWeight: "700" }}>72% COMPLETE</span>
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
          { label: "Rank", icon: "📊", path: "/leaderboard", active: true },
          { label: "Profile", icon: "👤", path: "/profile", active: false },
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