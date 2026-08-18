"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Reveal from "./Reveal";
import Loading from "./Loading";

const facilities = [
  {
    slug: "swimming-pool",
    title: "25m Lap Pool",
    desc: "Enjoy a refreshing dip in our crystal-clear 25-meter lap pool, perfectly positioned to capture the ocean breeze.",
    cardImage: "/images/card/swimpool.webp"
  },
  {
    slug: "ice-bath",
    title: "Cold Plunge",
    desc: "Accelerate healing with our cold plunges. Proven to reduce inflammation and minimize muscle soreness.",
    cardImage: "/images/card/icebath.webp"
  },
  {
    slug: "hot-pool",
    title: "Jacuzzi",
    desc: "Melt away stress in our therapeutic jacuzzi. The soothing warmth relaxes joints for restorative sleep.",
    cardImage: "/images/card/hotpool.webp"
  },
  {
    slug: "sauna",
    title: "Sauna",
    desc: "Detoxify and unwind in our premium hot stone saunas. Let the healing steam relieve tension and promote cardiovascular health.",
    cardImage: "/images/card/sauna.webp"
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
        backgroundColor: "transparent",
        border: "1px solid rgba(213, 161, 92, 0.25)",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: "380px",
        transition: "transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
        scrollSnapAlign: "center",
        flex: `0 0 ${CARD_WIDTH}px`,
        width: `${CARD_WIDTH}px`,
        minWidth: `${CARD_WIDTH}px`,
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.borderColor = "var(--accent-gold)";
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.borderColor = "rgba(213, 161, 92, 0.25)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img
        src={item.cardImage}
        alt={item.title}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div style={{ position: "relative", display: "flex", flexDirection: "column", flex: 1, padding: "20px", justifyContent: "flex-end", zIndex: 1 }}>
        <h3 className="font-luxury" style={{ fontSize: "1.35rem", color: "#d5a15c", marginBottom: "8px" }}>
          {item.title}
        </h3>
        <p style={{ backgroundColor: "transparent", color: "rgba(255, 255, 255, 0.9)", opacity: 0.95, lineHeight: 1.6, fontSize: "0.9rem", margin: 0 }}>
          {item.desc}
        </p>

        <span
          style={{
            display: "inline-block",
            marginTop: "14px",
            paddingTop: "0",
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
    setTimeout(() => {
      router.push(`/${slug}`);
    }, 900);
  };

  const mobileTrackItems = [...facilities, ...facilities, ...facilities];

  return (
    <section
      id="recovery"
      className="responsive-section"
      style={{
        position: "relative",
        backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.88) 20%, rgba(255, 255, 255, 0.88) 80%, rgba(255, 255, 255, 1) 100%), url("/images/bg/bg-recovery.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
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
            className="font-luxury recovery-title"
            style={{ 
              fontSize: "clamp(3rem, 6vw, 4.5rem)", 
              color: "#d5a15c", 
              marginBottom: "30px" 
            }}
          >
            The <span style={{ color: "#d5a15c", fontStyle: "italic" }}>Recovery</span>
          </h2>

          <p
            className="recovery-desc"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              lineHeight: 2,
              color: "#2c2c2c",
              maxWidth: "100%",
              opacity: 0.9,
              fontWeight: 400,
              margin: "0 auto 80px auto", 
            }}
          >Experience the ultimate cycle of renewal. Our contrast therapies use ice and heat to accelerate healing and calm the mind—surrounded by Uluwatu's hills and ocean breeze.
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
          paddingLeft: "calc(50% - 140px)",
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
        /* ✅ Standar jarak seragam untuk semua section */
        .responsive-section {
          padding: 110px 5% 90px 5%;
          scroll-margin-top: 72px; /* Offset pas dengan navbar saat diklik */
        }

        .recovery-desc {
          text-align: justify;
          text-align-last: center;
        }

        @media (max-width: 768px) {
          .responsive-section {
            padding: 80px 5% 60px 5%;
            scroll-margin-top: 64px;
          }

          .recovery-desktop-grid {
            display: none !important;
          }
          .recovery-mobile-scroll {
            display: flex !important;
          }
          .recovery-mobile-scroll::-webkit-scrollbar {
            display: none !important;
          }
          .recovery-title {
            font-size: 2.1rem !important;
          }
          
          .recovery-desc {
            font-size: 0.88rem !important;
            line-height: 1.6 !important;
            margin-bottom: 40px !important;
            text-align: center !important;
            text-align-last: center !important;
            padding: 0 15px;
          }
        }
      `}</style>
    </section>
  );
}