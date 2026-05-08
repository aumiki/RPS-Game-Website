"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Swords, Trophy, Users, Bell, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" } })
};

export default function LandingPage() {
  const router = useRouter();

  return (
    <main style={{ backgroundColor: "#FDF0EE", minHeight: "100vh", fontFamily: "sans-serif" }}>
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "20px 40px", borderBottom: "1px solid rgba(0,0,0,0.06)"
        }}>
        <span style={{ fontWeight: "900", fontSize: "20px", color: "#8B2635", letterSpacing: "-0.5px" }}>JANKEN</span>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/login")}
          style={{ background: "none", border: "none", cursor: "pointer" }}>
          <Users size={22} color="#8B2635" />
        </motion.button>
      </motion.nav>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "60px 20px 40px" }}>
        {/* Hand cards */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "16px", marginBottom: "40px" }}>
          {["✊", "🖐️", "✌️"].map((hand, i) => (
            <motion.div key={i}
              custom={i} variants={fadeUp} initial="hidden" animate="show"
              whileHover={{ scale: 1.08, rotate: i === 1 ? 0 : i === 0 ? -5 : 5 }}
              style={{
                width: i === 1 ? "120px" : "100px",
                height: i === 1 ? "120px" : "100px",
                background: "#fff", borderRadius: "20px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: i === 1 ? "52px" : "42px",
                boxShadow: i === 1 ? "0 4px 24px rgba(139,38,53,0.18)" : "0 2px 12px rgba(0,0,0,0.08)",
                border: i === 1 ? "2.5px solid #8B2635" : "none",
                transform: i !== 1 ? "translateY(10px)" : "none",
                position: "relative", cursor: "default"
              }}>
              {i === 1 && (
                <div style={{
                  position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)",
                  background: "#2D6A6A", color: "#fff", fontSize: "10px", fontWeight: "700",
                  padding: "3px 12px", borderRadius: "20px", letterSpacing: "1px", whiteSpace: "nowrap"
                }}>WINNER</div>
              )}
              {hand}
            </motion.div>
          ))}
        </div>

        <motion.h1 variants={fadeUp} custom={3} initial="hidden" animate="show"
          style={{ fontSize: "clamp(36px, 6vw, 58px)", fontWeight: "900", color: "#1a1a1a", margin: "0 0 16px", letterSpacing: "-1px" }}>
          JANKEN.
        </motion.h1>

        <motion.p variants={fadeUp} custom={4} initial="hidden" animate="show"
          style={{ fontSize: "16px", color: "#888", maxWidth: "400px", margin: "0 auto 40px", lineHeight: "1.7" }}>
          The ultimate tactical Rock, Paper, Scissors arena. Fast games, real stakes, pure skill.
        </motion.p>

        <motion.div variants={fadeUp} custom={5} initial="hidden" animate="show"
          style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/login")}
            style={{
              background: "#8B2635", color: "#fff", border: "none",
              padding: "16px 40px", borderRadius: "50px", fontSize: "15px",
              fontWeight: "800", cursor: "pointer", letterSpacing: "1.5px",
              display: "flex", alignItems: "center", gap: "8px"
            }}>
            PLAY NOW <ChevronRight size={18} />
          </motion.button>

          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/leaderboard")}
            style={{
              background: "#A8DCE7", color: "#1a4a4a", border: "none",
              padding: "16px 40px", borderRadius: "50px", fontSize: "15px",
              fontWeight: "800", cursor: "pointer", letterSpacing: "1.5px",
              display: "flex", alignItems: "center", gap: "8px"
            }}>
            <Trophy size={18} /> LEADERBOARD
          </motion.button>
        </motion.div>
      </section>

      {/* Stats */}
      <section style={{ padding: "20px 32px 40px", display: "flex", gap: "16px", maxWidth: "900px", margin: "0 auto", flexWrap: "wrap" }}>
        {[
          { label: "ACTIVE BATTLES", value: "1,284", sub: "LIVE", color: "#2D6A6A", icon: <Swords size={18} color="#2D6A6A" /> },
          { label: "PRIZE POOL", value: "$5,400", icon: <Trophy size={22} color="#8B2635" />, color: "#8B2635" },
          { label: "PLAYERS", value: "42.8k", icon: <Users size={22} color="#2D5A7A" />, color: "#2D5A7A" },
        ].map((s, i) => (
          <motion.div key={s.label} custom={i} variants={fadeUp} initial="hidden" animate="show"
            whileHover={{ y: -4, boxShadow: "0 8px 28px rgba(0,0,0,0.1)" }}
            style={{
              flex: i === 0 ? "1.5" : "1", minWidth: i === 0 ? "240px" : "150px",
              background: "#fff", borderRadius: "20px", padding: "24px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.05)", transition: "box-shadow 0.2s"
            }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", color: s.color }}>{s.label}</span>
              {s.sub && <span style={{ fontSize: "11px", color: s.color, display: "flex", alignItems: "center", gap: "4px" }}>
                <motion.span animate={{ opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}
                  style={{ width: "7px", height: "7px", borderRadius: "50%", background: s.color, display: "inline-block" }} />
                LIVE
              </span>}
              {!s.sub && s.icon}
            </div>
            <div style={{ fontSize: "32px", fontWeight: "900", color: "#1a1a1a" }}>{s.value}</div>
            {i === 0 && <div style={{ height: "4px", background: "#f0f0f0", borderRadius: "2px", marginTop: "12px" }}>
              <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} transition={{ duration: 1, delay: 0.5 }}
                style={{ height: "100%", background: "#2D6A6A", borderRadius: "2px" }} />
            </div>}
          </motion.div>
        ))}
      </section>

      {/* Level Up */}
      <section style={{ padding: "0 32px 60px", maxWidth: "900px", margin: "0 auto" }}>
        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}
          style={{
            background: "#fff", borderRadius: "24px", overflow: "hidden",
            display: "flex", flexWrap: "wrap", boxShadow: "0 2px 16px rgba(0,0,0,0.05)"
          }}>
          <div style={{
            flex: 1, minWidth: "280px", minHeight: "260px",
            background: "linear-gradient(135deg, #E8956D, #F4B89A)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: "80px"
          }}>🏛️</div>
          <div style={{ flex: 1, minWidth: "240px", padding: "44px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "900", color: "#1a1a1a", margin: "0 0 14px", letterSpacing: "-0.5px" }}>
              Level Up Your Rank
            </h2>
            <p style={{ fontSize: "15px", color: "#888", lineHeight: "1.7", margin: "0 0 28px" }}>
              Climb from Novice to Battle Master in our seasonal ranked leagues. Earn exclusive cosmetics and prestige badges.
            </p>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              onClick={() => router.push("/leaderboard")}
              style={{
                alignSelf: "flex-start", background: "#2D6A6A", color: "#fff",
                border: "none", padding: "13px 26px", borderRadius: "50px",
                fontSize: "13px", fontWeight: "800", cursor: "pointer", letterSpacing: "1.5px",
                display: "flex", alignItems: "center", gap: "8px"
              }}>
              LEARN MORE <ChevronRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      </section>

      <footer style={{
        textAlign: "center", padding: "20px",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        fontSize: "11px", color: "#bbb", letterSpacing: "1px"
      }}>
        © 2024 BATTLE HAND ARENA. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}