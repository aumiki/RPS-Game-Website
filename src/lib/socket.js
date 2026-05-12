import { io } from "socket.io-client";

let socket = null;

export function getSocket() {
  if (!socket) {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    // Harus pakai SOCKET GAME SERVER (standalone) dari Railway.
    // Jangan fallback ke URL lain, karena bisa nyambung ke socket yang salah (event game:* tidak ada).
    const serverUrl = process.env.NEXT_PUBLIC_SOCKET_URL;

    if (!serverUrl) {
      const msg =
        "[SOCKET] NEXT_PUBLIC_SOCKET_URL belum di-set. Agar PLAY RANKED & BUAT ROOM jalan, set environment NEXT_PUBLIC_SOCKET_URL ke URL socket game server (Railway).";
      if (typeof window !== "undefined") {
        console.error(msg);
      }
      throw new Error(msg);
    }

    socket = io(serverUrl, {
      path: "/api/socket",
      auth: { token },
      autoConnect: false,
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    if (typeof window !== "undefined") {
      socket.on("connect", () => {
        console.log("[SOCKET] Terhubung ke Socket Game Server | ID:", socket.id);
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

