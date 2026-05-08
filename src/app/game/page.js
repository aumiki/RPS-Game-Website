"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GamePage() {
  const router = useRouter();
  const [selected, setSelected] = useState("PAPER");
  const [seconds, setSeconds] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => (s > 0 ? s - 1 : 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const weapons = [
    { key: "ROCK", icon: "💎" },
    { key: "PAPER", icon: "📄" },
    { key: "SCISSORS", icon: "✂️" },
  ];

  const selectedEmoji = {
    ROCK: "✊",
    PAPER: "🖐️",
    SCISSORS: "✌️",
  };

  return (
    <main style={{
      minHeight: "100vh", background: "#FDF0EE",
      fontFamily: "sans-serif", paddingBottom: "100px"
    }}>
      {/* Navbar */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "16px 24px", borderBottom: "1px solid rgba(0,0,0,0.06)"
      }}>
        <div>
          <div style={{ fontWeight: "800", fontSize: "18px", color: "#8B2635", letterSpacing: "-0.5px" }}>JANKEN</div>
          <div style={{ fontSize: "11px", color: "#888", fontWeight: "600", letterSpacing: "0.5px" }}>ROUND 04 / 10</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            background: "#8B2635", color: "#fff", borderRadius: "50px",
            padding: "6px 14px", fontSize: "13px", fontWeight: "700",
            display: "flex", alignItems: "center", gap: "6px"
          }}>
            <span>⭐</span> 2,450
          </div>
          <span style={{ fontSize: "20px", cursor: "pointer" }}>🔔</span>
        </div>
      </nav>

      <div style={{ padding: "28px 24px", maxWidth: "540px", margin: "0 auto" }}>

        {/* Timer */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
          <div style={{
            width: "110px", height: "110px", borderRadius: "50%",
            border: `4px solid #8B2635`,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            background: "#fff",
            boxShadow: seconds <= 3 ? "0 0 0 6px rgba(139,38,53,0.15)" : "none",
            transition: "box-shadow 0.3s"
          }}>
            <span style={{
              fontSize: "40px", fontWeight: "800",
              color: seconds <= 3 ? "#E24B4A" : "#8B2635",
              lineHeight: 1
            }}>{String(seconds).padStart(2, "0")}</span>
            <span style={{ fontSize: "10px", color: "#aaa", letterSpacing: "2px", fontWeight: "600" }}>SECONDS</span>
          </div>
        </div>

        {/* VS Area */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "16px", marginBottom: "20px" }}>

          {/* You */}
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontSize: "12px", fontWeight: "700", color: "#2D6A9F", letterSpacing: "1px", marginBottom: "10px" }}>YOU</div>
            <div style={{
              width: "130px", height: "130px", borderRadius: "50%",
              border: "3px solid #8B2635", margin: "0 auto",
              overflow: "hidden", background: "#F4A090",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "64px"
            }}>
              {selectedEmoji[selected]}
            </div>
            <div style={{ fontSize: "18px", fontWeight: "800", color: "#1a1a1a", marginTop: "12px" }}>
              {selected.charAt(0) + selected.slice(1).toLowerCase()}
            </div>
          </div>

          {/* VS */}
          <div style={{ paddingTop: "60px" }}>
            <div style={{
              width: "40px", height: "40px", borderRadius: "50%",
              background: "#8B2635", color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "13px", fontWeight: "800"
            }}>VS</div>
          </div>

          {/* CPU */}
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{
              display: "inline-block", background: "#f0e8e8", color: "#888",
              fontSize: "11px", fontWeight: "700", padding: "4px 14px",
              borderRadius: "20px", letterSpacing: "1px", marginBottom: "10px"
            }}>CPU</div>
            <div style={{
              width: "130px", height: "130px", borderRadius: "50%",
              border: "2px solid #e8d8d8", margin: "0 auto",
              background: "#f5efef",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "48px", color: "#ccc"
            }}>?</div>
            <div style={{ fontSize: "18px", fontWeight: "600", color: "#bbb", marginTop: "12px" }}>
              Thinking...
            </div>
          </div>
        </div>

        {/* Buffs */}
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "28px" }}>
          <div style={{
            background: "#fff", borderRadius: "50px", padding: "8px 16px",
            fontSize: "12px", fontWeight: "700", color: "#4CAF7D",
            display: "flex", alignItems: "center", gap: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
          }}>⚡ 2X SCORE</div>
          <div style={{
            background: "#fff", borderRadius: "50px", padding: "8px 16px",
            fontSize: "12px", fontWeight: "700", color: "#2D6A9F",
            display: "flex", alignItems: "center", gap: "6px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
          }}>🛡️ LIVES REGEN</div>
        </div>

        {/* Choose Weapon */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <span style={{ fontSize: "12px", fontWeight: "700", color: "#888", letterSpacing: "2px" }}>
            CHOOSE YOUR WEAPON
          </span>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {weapons.map(w => (
            <button
              key={w.key}
              onClick={() => setSelected(w.key)}
              style={{
                flex: 1, background: "#fff",
                border: selected === w.key ? "2.5px solid #8B2635" : "2px solid transparent",
                borderRadius: "20px", padding: "20px 12px",
                cursor: "pointer", textAlign: "center",
                boxShadow: selected === w.key
                  ? "0 4px 20px rgba(139,38,53,0.15)"
                  : "0 2px 12px rgba(0,0,0,0.05)",
                transition: "all 0.15s"
              }}
            >
              <div style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: "#fde8e8", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "20px",
                margin: "0 auto 10px",
                color: selected === w.key ? "#8B2635" : "#ccc"
              }}>{w.icon}</div>
              <div style={{
                fontSize: "13px", fontWeight: "800", letterSpacing: "0.5px",
                color: selected === w.key ? "#8B2635" : "#1a1a1a"
              }}>{w.key}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div style={{
        position: "fixed", bottom: "0", left: "0", right: "0",
        background: "#f5eded", borderTop: "1px solid rgba(0,0,0,0.06)",
        display: "flex", padding: "10px 16px 20px", gap: "8px"
      }}>
        {[
          { label: "Lobby", icon: "🎮", path: "/lobby", active: true },
          { label: "Rank", icon: "📊", path: "/leaderboard", active: false },
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