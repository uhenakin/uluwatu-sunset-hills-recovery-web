"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 4) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#faf8ef", // ✅ Diubah ke warna krem solid tema baru[cite: 14]
        backdropFilter: "blur(8px)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {/* Logo di atas */}
      <div style={{ marginBottom: "50px" }}>
        <Image
          src="/images/logo/logo-new.webp" 
          alt="Prana Uluwatu"
          width={100}
          height={100}
          style={{ opacity: 0.95 }}
        />
      </div>

      {/* Progress Bar dengan efek shimmer */}
      <div
        style={{
          width: "80%",
          maxWidth: "300px",
          height: "6px",
          backgroundColor: "rgba(213, 161, 92, 0.2)", // ✅ Disesuaikan dengan warna gold baru[cite: 14]
          borderRadius: "3px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#d5a15c", // ✅ Diubah ke warna gold baru (#d5a15c)[cite: 14]
            borderRadius: "3px",
            transition: "width 0.2s ease",
            position: "relative",
          }}
        >
          {/* Efek shimmer */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
              animation: "shimmer 1.2s infinite",
            }}
          />
        </div>
      </div>

      {/* Teks kecil */}
      <p
        style={{
          color: "#4a4a4a", // ✅ Diubah ke teks gelap agar jelas terbaca di background krem[cite: 14]
          fontSize: "0.7rem",
          letterSpacing: "2px",
          marginTop: "16px",
          fontFamily: "var(--font-manrope), sans-serif",
          fontWeight: 600,
        }}
      >
        Loading
      </p>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}