"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Reveal from "./Reveal";
import Loading from "./Loading";

const facilities = [
  {
    slug: "sauna",
    title: "Sauna",
    desc: "Detoxify and unwind in our premium wood-fired saunas. Relieving tension and promoting cardiovascular health.",
    // ✅ DIUBAH KE WEBP
    cardImage: "/images/card/sauna.webp"
  },
  {
    slug: "ice-bath",
    title: "Ice Bath",
    desc: "Accelerate healing with our cold plunges. Proven to reduce inflammation and minimize muscle soreness.",
    // ✅ DIUBAH KE WEBP
    cardImage: "/images/card/icebath.webp"
  },
  {
    slug: "hot-pool",
    title: "Hot Pool",
    desc: "Melt away stress in our therapeutic hot pools. The soothing warmth relaxes joints for restorative sleep.",
    // ✅ DIUBAH KE WEBP
    cardImage: "/images/card/hotpool.webp"
  },
  {
    slug: "swimming-pool",
    title: "Swimming Pool",
    desc: "Enjoy a refreshing dip in our crystal-clear pool, perfectly positioned to capture the ocean breeze.",
    // ✅ DIUBAH KE WEBP
    cardImage: "/images/card/swimpool.webp"
  }
];

const CARD_WIDTH = 280;
const GAP = 20;
const ITEM_WIDTH = CARD_WIDTH + GAP;

function RecoveryCard({
  item,
  onNavigate,
}: {
  item: (typeof facilities)[number];
  onNavigate: (slug: string) => void;
}) {
  return (
    <Link
      href={`/${item.slug}`}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(item.slug);
      }}
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
        scrollSnapAlign: "center",
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.cardImage}
          alt={item.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "20px" }}>
        <h3 className="font-luxury" style={{ fontSize: "1.35rem", color: "var(--accent-gold)", marginBottom: "8px" }}>
          {item.title}
        </h3>
        <p style={{ color: "var(--text-light)", opacity: 0.85, lineHeight: 1.6, fontSize: "0.9rem", margin: 0 }}>
          {item.desc}
        </p>

        <span
          style={{
            display: "inline-block",
            marginTop: "auto",
            paddingTop: "14px",
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
  const router = useRouter();
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollLeft = facilities.length * ITEM_WIDTH;
    }
  }, []);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const total = facilities.length * ITEM_WIDTH;
    if (el.scrollLeft < total * 0.5) {
      el.scrollLeft += total;
    } else if (el.scrollLeft > total * 1.5) {
      el.scrollLeft -= total;
    }
  };

  const handleNavigate = (slug: string) => {
    setShowLoading(true);
    // Biar loading sempat kelihatan sebentar sebelum pindah halaman
    setTimeout(() => {
      router.push(`/${slug}`);
    }, 900);
  };

  const mobileTrackItems = [...facilities, ...facilities, ...facilities];

  return (
    <section
      id="recovery"
      style={{
        position: "relative",
        padding: "140px 5%",
        backgroundImage: `
          linear-gradient(to bottom, var(--bg-ocean) 0%, rgba(10, 15, 30, 0.55) 35%, rgba(10, 15, 30, 0.55) 65%, var(--bg-ocean) 100%),
          url("/images/bg/bg-recovery.webp")
        `,
        backgroundSize: "cover",
        /* ✅ Diubah posisi agar bergeser ke kanan (65% dari kiri) */
        backgroundPosition: "65% center", 
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {showLoading && <Loading />}

      <Reveal style={{ width: "100%", maxWidth: "1200px" }}>
        <div style={{ textAlign: "center", width: "100%", zIndex: 2 }}>
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
            "Our contrast therapies offer a profound restorative journey, designed to accelerate physical healing, soothe the mind, and elevate your overall well-being. Here, amid the cliffs and ocean air of Uluwatu, the ritual of ice and heat becomes more than recovery — it becomes a moment of stillness, strength, and renewal"
          </p>
        </div>
      </Reveal>

      <Reveal delay={150} style={{ width: "100%", maxWidth: "1200px" }}>
        <div
          className="recovery-desktop-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
            width: "100%",
            zIndex: 2,
            alignItems: "stretch",
          }}
        >
          {facilities.map((item) => (
            <RecoveryCard key={item.slug} item={item} onNavigate={handleNavigate} />
          ))}
        </div>
      </Reveal>

      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="recovery-mobile-scroll"
        style={{
          display: "none",
          flexDirection: "row",
          flexWrap: "nowrap",
          gap: `${GAP}px`,
          width: "100%",
          overflowX: "auto",
          // Biar card aktif selalu di tengah
          paddingLeft: "calc(50% - 140px)", // 140 = CARD_WIDTH / 2
          paddingRight: "calc(50% - 140px)",
          scrollPaddingLeft: "calc(50% - 140px)",
          scrollPaddingRight: "calc(50% - 140px)",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-x",
          zIndex: 2,
        }}
      >
        {mobileTrackItems.map((item, i) => (
          <RecoveryCard key={`${item.slug}-${i}`} item={item} onNavigate={handleNavigate} />
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