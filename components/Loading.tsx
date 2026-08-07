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
        backgroundColor: "rgba(0, 0, 0, 0.85)", // Transparan hitam
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
          src="/images/logo/logo-new.webp" // ✅ DIUBAH KE WEBP
          alt="Prana Uluwatu"
          width={100}
          height={100}
          style={{ opacity: 0.9 }}
        />
      </div>

      {/* Progress Bar dengan efek shimmer */}
      <div
        style={{
          width: "80%",
          maxWidth: "300px",
          height: "6px",
          backgroundColor: "rgba(255,255,255,0.15)",
          borderRadius: "3px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#E2B065",
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
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
              animation: "shimmer 1.2s infinite",
            }}
          />
        </div>
      </div>

      {/* Teks kecil */}
      <p
        style={{
          color: "rgba(255,255,255,0.4)",
          fontSize: "0.7rem",
          letterSpacing: "2px",
          marginTop: "16px",
          fontFamily: "var(--font-manrope), sans-serif",
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