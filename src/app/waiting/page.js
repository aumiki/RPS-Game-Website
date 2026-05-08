"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RoomWaitingPage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [timer, setTimer] = useState(165); // 2:45

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(t => (t > 0 ? t - 1 : 165));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (s) => {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("8291");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const buffs = [
    { icon: "⚡", name: "Quick Strike", desc: "+15% Speed", color: "#4CAF7D" },
    { icon: "🛡️", name: "Stone Wall", desc: "+20% Armor", color: "#2D6A9F" },
    { icon: "🔥", name: "Fire Fist", desc: "+10% Damage", color: "#8B2635" },
  ];

  return (
    <main style={{
      minHeight: "100vh", background: "#FDF0EE",
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

      <div style={{ padding: "32px 24px", maxWidth: "680px", margin: "0 auto" }}>

        {/* Room Code */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "36px" }}>
          <div style={{
            background: "#fff", borderRadius: "50px", padding: "12px 24px",
            display: "flex", alignItems: "center", gap: "10px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.06)"
          }}>
            <span style={{ fontSize: "13px", fontWeight: "600", color: "#888", letterSpacing: "1px" }}>
              ROOM CODE
            </span>
            <span style={{ fontSize: "22px", fontWeight: "900", color: "#8B2635", letterSpacing: "1px" }}>
              #8291
            </span>
            <button
              onClick={handleCopy}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: "16px", padding: "4px", borderRadius: "6px",
                color: copied ? "#4CAF7D" : "#aaa"
              }}
              title="Copy code"
            >{copied ? "✅" : "📋"}</button>
          </div>
        </div>

        {/* Players */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
          {/* You */}
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{
              borderRadius: "20px", border: "2.5px solid #8B2635",
              overflow: "hidden", marginBottom: "12px",
              boxShadow: "0 4px 20px rgba(139,38,53,0.15)"
            }}>
              <div style={{
                background: "linear-gradient(135deg, #3a1a1a, #8B2635)",
                height: "200px", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "80px"
              }}>🧑‍🦱</div>
            </div>
            <div style={{ fontSize: "14px", color: "#8B2635", fontWeight: "600", marginBottom: "4px" }}>You</div>
            <div style={{ fontSize: "13px", fontWeight: "800", color: "#4CAF7D", letterSpacing: "1px" }}>READY</div>
          </div>

          {/* Waiting */}
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{
              borderRadius: "20px", border: "2px dashed #e0c8c8",
              height: "200px", marginBottom: "12px",
              background: "#fff",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: "12px"
            }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "50%",
                background: "#f0e8e8", display: "flex",
                alignItems: "center", justifyContent: "center", fontSize: "24px"
              }}>👤</div>
              <span style={{
                fontSize: "12px", fontWeight: "700", color: "#ccc",
                letterSpacing: "1px", textAlign: "center", padding: "0 16px"
              }}>WAITING FOR CHALLENGER...</span>
            </div>
            <div style={{ fontSize: "13px", color: "#ccc", marginBottom: "4px" }}>---</div>
            <div style={{ fontSize: "13px", fontWeight: "700", color: "#ccc", letterSpacing: "1px" }}>NOT READY</div>
          </div>
        </div>

        {/* Buffs */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <span style={{ fontSize: "15px", fontWeight: "600", color: "#1a1a1a" }}>This Round's Buffs</span>
            <span style={{ fontSize: "12px", color: "#aaa", fontWeight: "600", letterSpacing: "0.5px" }}>
              REFRESHES IN {formatTime(timer)}
            </span>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            {buffs.map((buff) => (
              <div key={buff.name} style={{
                flex: 1, background: "#fff", borderRadius: "16px",
                padding: "20px 12px", textAlign: "center",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
              }}>
                <div style={{ fontSize: "24px", marginBottom: "10px", color: buff.color }}>{buff.icon}</div>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#1a1a1a", marginBottom: "4px" }}>{buff.name}</div>
                <div style={{ fontSize: "11px", color: buff.color, fontWeight: "600" }}>{buff.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Start Game Button */}
        <button
          onClick={() => router.push("/game")}
          style={{
            width: "100%", padding: "18px", background: "#8B2635",
            color: "#fff", border: "none", borderRadius: "50px",
            fontSize: "15px", fontWeight: "800", cursor: "pointer",
            letterSpacing: "2px", display: "flex", alignItems: "center",
            justifyContent: "center", gap: "10px", marginBottom: "12px",
            transition: "opacity 0.15s"
          }}
          onMouseOver={e => e.currentTarget.style.opacity = "0.88"}
          onMouseOut={e => e.currentTarget.style.opacity = "1"}
        >
          ▶ START GAME
        </button>
        <p style={{ textAlign: "center", fontSize: "12px", color: "#aaa", margin: 0 }}>
          Both players must be ready
        </p>
      </div>
    </main>
  );
}