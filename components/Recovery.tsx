"use client";

import Link from "next/link";
import { useEffect, useRef, useCallback } from "react";

const facilities = [
  {
    slug: "sauna",
    title: "Traditional Sauna",
    desc: "Detoxify and unwind in our premium wood-fired saunas. Relieving tension and promoting cardiovascular health.",
    cardImage: "/images/card/sauna.jpeg"
  },
  {
    slug: "ice-bath",
    title: "Ice Bath",
    desc: "Accelerate healing with our cold plunges. Proven to reduce inflammation and minimize muscle soreness.",
    cardImage: "/images/card/icebath.jpeg"
  },
  {
    slug: "hot-pool",
    title: "Mineral Hot Pool",
    desc: "Melt away stress in our therapeutic hot pools. The soothing warmth relaxes joints for restorative sleep.",
    cardImage: "/images/card/hotpool.jpeg"
  },
  {
    slug: "swimming-pool",
    title: "Swimming Pool",
    desc: "Enjoy a refreshing dip in our crystal-clear pool, perfectly positioned to capture the ocean breeze.",
    cardImage: "/images/card/swimpool.jpeg"
  }
];

const CARD_WIDTH = 280;
const GAP_MOBILE = 16; 
const GAP_DESKTOP = 30;
const ITEM_WIDTH = CARD_WIDTH + GAP_MOBILE;

// Komponen Kartu Satuan
function RecoveryCard({ item }: { item: (typeof facilities)[number] }) {
  return (
    <Link
      href={`/${item.slug}`}
      style={{
        textDecoration: "none",
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(226, 176, 101, 0.15)",
        borderRadius: "20px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
        scrollSnapAlign: "center", // PERBAIKAN UTAMA: Browser akan snap tepat di tengah layar
        flex: `0 0 ${CARD_WIDTH}px`,
        width: `${CARD_WIDTH}px`,
        minWidth: `${CARD_WIDTH}px`,
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.borderColor = "var(--accent-gold)";
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.35)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.borderColor = "rgba(226, 176, 101, 0.15)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ width: "100%", height: "210px", position: "relative", flexShrink: 0 }}>
        <img
          src={item.cardImage}
          alt={item.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "20px 22px 24px" }}>
        <h3 className="font-luxury" style={{ fontSize: "1.35rem", color: "var(--accent-gold)", marginBottom: "10px" }}>
          {item.title}
        </h3>
        <p style={{ color: "var(--text-light)", opacity: 0.85, lineHeight: 1.6, fontSize: "0.9rem", margin: 0 }}>
          {item.desc}
        </p>
        
        <span
          style={{
            display: "inline-block",
            marginTop: "auto",
            paddingTop: "16px",
            fontSize: "0.75rem",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "var(--accent-sunset)",
            fontWeight: 600,
          }}
        >
          Learn More →
        </span>
      </div>
    </Link>
  );
}

export default function Recovery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isAdjusting = useRef(false); 

  // Mengatur posisi awal infinite scroll ke 'set kedua'
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollLeft = facilities.length * ITEM_WIDTH;
    }
  }, []);

  const handleScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el || isAdjusting.current) return;

    const total = facilities.length * ITEM_WIDTH;
    const current = el.scrollLeft;

    if (current < total) {
      isAdjusting.current = true;
      el.scrollLeft += total;
      setTimeout(() => { isAdjusting.current = false; }, 250);
    } else if (current >= total * 2) {
      isAdjusting.current = true;
      el.scrollLeft -= total;
      setTimeout(() => { isAdjusting.current = false; }, 250);
    }
  }, []);

  const mobileTrackItems = [...facilities, ...facilities, ...facilities];

  return (
    <section
      id="recovery"
      style={{
        position: "relative",
        padding: "clamp(80px, 12vw, 140px) 5%",
        scrollMarginTop: "100px",
        backgroundImage: `
          linear-gradient(to bottom, var(--bg-ocean) 0%, rgba(10, 15, 30, 0.70) 35%, rgba(10, 15, 30, 0.70) 65%, var(--bg-ocean) 100%),
          url("/images/bg/bg-recovery.png")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div style={{ textAlign: "center", width: "100%", maxWidth: "1200px", zIndex: 2 }}>
        <h2
          className="font-luxury"
          style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", color: "var(--text-light)", marginBottom: "20px" }}
        >
          The <span style={{ color: "var(--accent-sunset)", fontStyle: "italic" }}>Recovery</span>
        </h2>

        <p
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
            lineHeight: 1.8,
            color: "var(--text-light)",
            maxWidth: "800px",
            opacity: 0.9,
            fontWeight: 300,
            margin: "0 auto 60px auto",
          }}
        >
          Our contrast therapies provide a profound restorative journey. Aiming to accelerate
          physical healing, soothe the mind, and elevate your overall well-being.
        </p>
      </div>

      {/* 1. TAMPILAN DESKTOP & TABLET (GRID) */}
      <div
        className="recovery-desktop-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
          gap: `${GAP_DESKTOP}px`,
          width: "100%",
          maxWidth: "1200px",
          zIndex: 2,
          alignItems: "stretch",
        }}
      >
        {facilities.map((item) => (
          <RecoveryCard key={item.slug} item={item} />
        ))}
      </div>

      {/* 2. TAMPILAN MOBILE (HORIZONTAL INFINITE SCROLL DENGAN CENTER SNAP) */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="recovery-mobile-scroll"
        style={{
          display: "none", 
          flexDirection: "row",
          flexWrap: "nowrap",
          gap: `${GAP_MOBILE}px`,
          width: "100%", // Menggunakan 100% agar pas dengan induk
          // PERBAIKAN PROPORSIONAL:
          // Rumus ini membuat posisi kartu pertama tepat di tengah layar.
          // `140px` adalah setengah dari lebar kartu (CARD_WIDTH / 2).
          paddingLeft: "calc(50% - 140px)",
          paddingRight: "calc(50% - 140px)",
          scrollPaddingLeft: "calc(50% - 140px)",
          scrollPaddingRight: "calc(50% - 140px)",
          overflowX: "auto",
          scrollSnapType: "x mandatory", // Menggunakan mandatory agar snap presisi di tengah
          WebkitOverflowScrolling: "touch",
          zIndex: 2,
          touchAction: "pan-x",
          willChange: "transform",
        }}
      >
        {mobileTrackItems.map((item, i) => (
          <RecoveryCard key={`${item.slug}-${i}`} item={item} />
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .recovery-desktop-grid {
            display: none !important;
          }
          .recovery-mobile-scroll {
            display: flex !important;
          }
          .recovery-mobile-scroll::-webkit-scrollbar {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}