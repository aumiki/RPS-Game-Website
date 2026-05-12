import { io } from "socket.io-client";

let socket = null;

export function getSocket() {
  if (!socket) {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    // NEXT_PUBLIC_SOCKET_URL = URL Railway server (standalone Socket.io game server)
    // Vercel berjalan serverless — Socket.IO persistent connection TIDAK bisa berjalan di Vercel.
    // Semua game event (create_room, join_room, ranked match) harus diarahkan ke Railway.
    const serverUrl = process.env.NEXT_PUBLIC_SOCKET_URL || "https://rps-socket-server-production.up.railway.app";

    if (!serverUrl && typeof window !== "undefined") {
      console.warn("[SOCKET] NEXT_PUBLIC_SOCKET_URL belum di-set di environment Vercel!");
    }

    socket = io(serverUrl, {
      path: "/api/socket",
      auth: { token },
      autoConnect: false,
      transports: ["websocket", "polling"], // coba WebSocket dulu, fallback ke polling
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    if (typeof window !== "undefined") {
      socket.on("connect", () => {
        console.log("[SOCKET] Terhubung ke Railway server | ID:", socket.id);
      });
      socket.on("connect_error", (err) => {
        console.error("[SOCKET] Gagal terhubung:", err.message);
      });
    }
  }
  return socket;
}

export function connectSocket() {
  const s = getSocket();
  if (!s.connected) s.connect();
  return s;
}

export function disconnectSocket() {
  if (socket?.connected) socket.disconnect();
}

// Reset socket (panggil saat logout agar token baru digunakan)
export function resetSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}
