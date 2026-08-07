"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import { facilitiesData, allFacilities, type Facility } from "@/lib/facilitiesData";
import Loading from "@/components/Loading";

const CARD_WIDTH = 280;
const GAP_MOBILE = 16;
const GAP_DESKTOP = 30;
const ITEM_WIDTH = CARD_WIDTH + GAP_MOBILE;

// Komponen Kartu Other Facilities
function OtherCard({ item }: { item: Facility }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    console.log("Card diklik, menuju:", item.route);
    setIsLoading(true);
    setTimeout(() => {
      router.push(item.route);
    }, 500);
  };

  return (
    <>
      {isLoading && <Loading />}
      <div
        role="link"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleClick();
        }}
        style={{
          cursor: "pointer",
          textDecoration: "none",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(226, 176, 101, 0.15)",
          borderRadius: "20px",
          padding: "18px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
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
        <div
          style={{
            width: "100%",
            aspectRatio: "1/1",
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          <img
            src={item.cardImage}
            alt={item.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
        <h3 className="font-luxury" style={{ fontSize: "1.25rem", color: "var(--accent-gold)" }}>
          {item.title}
        </h3>
        <span style={{ fontSize: "0.75rem", letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--accent-sunset)", fontWeight: 600 }}>
          View Details →
        </span>
      </div>
    </>
  );
}

export default function FacilityDetail({ slug }: { slug: string }) {
  const data = facilitiesData[slug];
  const others = allFacilities.filter((f) => f.slug !== slug);

  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Ref untuk Other Facilities
  const trackOtherRef = useRef<HTMLDivElement>(null);
  const isAdjustingOther = useRef(false);

  // Ref untuk Gallery
  const trackGalleryRef = useRef<HTMLDivElement>(null);
  const isAdjustingGallery = useRef(false);
  const GALLERY_ITEM_WIDTH = 220 + 12; // width + gap

  // Deteksi mobile
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // --- LOGIC INFINITE SCROLL OTHER FACILITIES ---
  useEffect(() => {
    if (!isMobile || !trackOtherRef.current) return;
    trackOtherRef.current.scrollLeft = others.length * ITEM_WIDTH;
  }, [isMobile, others.length]);

  const handleScrollOther = useCallback(() => {
    const el = trackOtherRef.current;
    if (!el || isAdjustingOther.current) return;

    const total = others.length * ITEM_WIDTH;
    const current = el.scrollLeft;

    if (current < total) {
      isAdjustingOther.current = true;
      el.scrollLeft += total;
      setTimeout(() => { isAdjustingOther.current = false; }, 250);
    } else if (current >= total * 2) {
      isAdjustingOther.current = true;
      el.scrollLeft -= total;
      setTimeout(() => { isAdjustingOther.current = false; }, 250);
    }
  }, [others.length]);

  const trackOtherItems = isMobile ? [...others, ...others, ...others] : others;

  // --- LOGIC INFINITE SCROLL GALLERY ---
  useEffect(() => {
    if (!isMobile || !trackGalleryRef.current || !data) return;
    trackGalleryRef.current.scrollLeft = data.gallery.length * GALLERY_ITEM_WIDTH;
  }, [isMobile, data]);

  const handleScrollGallery = useCallback(() => {
    const el = trackGalleryRef.current;
    if (!el || isAdjustingGallery.current || !data) return;

    const total = data.gallery.length * GALLERY_ITEM_WIDTH;
    const current = el.scrollLeft;

    if (current < total) {
      isAdjustingGallery.current = true;
      el.scrollLeft += total;
      setTimeout(() => { isAdjustingGallery.current = false; }, 250);
    } else if (current >= total * 2) {
      isAdjustingGallery.current = true;
      el.scrollLeft -= total;
      setTimeout(() => { isAdjustingGallery.current = false; }, 250);
    }
  }, [data]);

  const trackGalleryItems = data && isMobile ? [...data.gallery, ...data.gallery, ...data.gallery] : data?.gallery ?? [];

  if (!data) {
    return (
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--bg-ocean)" }}>
        <div style={{ textAlign: "center" }}>
          <h1 className="font-luxury" style={{ color: "var(--text-light)", marginBottom: "1rem" }}>
            Facility not found
          </h1>
          <Link href="/#recovery" style={{ color: "var(--accent-gold)" }}>
            ← Back to Recovery
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* ================= HALAMAN 1: HERO + BENEFITS ================= */}
      <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* HERO */}
        <section
          style={{
            position: "relative",
            minHeight: "45vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "120px 5% 60px 5%",
            backgroundImage: `
              linear-gradient(to bottom, rgba(10,15,30,0.5) 0%, rgba(10,15,30,0.35) 50%, var(--bg-ocean) 100%),
              url("${data.heroImage}")
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="font-luxury" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "var(--text-light)", marginBottom: "1rem" }}>
            {data.title}
          </h1>
          <p style={{ color: "var(--text-light)", opacity: 0.85, fontSize: "1.1rem", maxWidth: "600px" }}>
            {data.tagline}
          </p>
        </section>

        {/* BENEFITS */}
        <section style={{ backgroundColor: "var(--bg-ocean)", padding: "40px 5% 80px 5%", display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: "1100px" }}>
            <span style={{ display: "block", color: "var(--accent-sunset)", letterSpacing: "2px", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "2rem" }}>
              Benefits
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.75rem" }}>
              {data.benefits.map((b) => (
                <div
                  key={b.title}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(226, 176, 101, 0.15)",
                    borderRadius: "16px",
                    padding: "1.75rem",
                  }}
                >
                  <h3 className="font-luxury" style={{ color: "var(--accent-gold)", fontSize: "1.2rem", marginBottom: "0.6rem" }}>
                    {b.title}
                  </h3>
                  <p style={{ color: "var(--text-light)", opacity: 0.8, fontSize: "0.92rem", lineHeight: 1.6 }}>
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ================= HALAMAN 2: GALLERY + OTHER FACILITIES ================= */}
      <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* GALLERY + OTHER FACILITIES (SATU SECTION) */}
        <section style={{ backgroundColor: "var(--bg-ocean)", padding: "0 5% 120px 5%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: "100%", maxWidth: "1200px" }}>

            {/* GALLERY */}
            <span style={{ display: "block", color: "var(--accent-sunset)", letterSpacing: "2px", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "2rem" }}>
              Gallery
            </span>

            {/* ✅ Teks deskriptif untuk Gallery */}
            <p style={{ color: "var(--text-light)", opacity: 0.7, maxWidth: "600px", marginBottom: "2rem", fontSize: "0.95rem", lineHeight: 1.6 }}>
              A glimpse into our luxurious spaces – every corner designed for your comfort and recovery.
            </p>

            {/* Gallery Grid - Desktop */}
            <div
              className="gallery-grid-desktop"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
                marginBottom: "80px",
              }}
            >
              {data.gallery.map((src) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setLightboxImg(src)}
                  style={{
                    border: "none",
                    padding: 0,
                    cursor: "zoom-in",
                    borderRadius: "12px",
                    overflow: "hidden",
                    aspectRatio: "1/1",
                    background: "rgba(255,255,255,0.03)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <img
                    src={src}
                    alt={data.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Gallery Scroll - Mobile (Center Peek + Infinite) */}
            <div
              ref={trackGalleryRef}
              onScroll={handleScrollGallery}
              className="gallery-track-mobile"
              style={{
                display: "none",
                flexDirection: "row",
                flexWrap: "nowrap",
                gap: "12px",
                overflowX: "auto",
                paddingLeft: "calc(50% - 110px)",
                paddingRight: "calc(50% - 110px)",
                scrollPaddingLeft: "calc(50% - 110px)",
                scrollPaddingRight: "calc(50% - 110px)",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                touchAction: "pan-x",
                marginBottom: "60px",
              }}
            >
              {trackGalleryItems.map((src, i) => (
                <button
                  key={`${src}-${i}`}
                  type="button"
                  onClick={() => setLightboxImg(src)}
                  style={{
                    border: "none",
                    padding: 0,
                    cursor: "zoom-in",
                    borderRadius: "12px",
                    overflow: "hidden",
                    flex: "0 0 220px",
                    width: "220px",
                    minWidth: "220px",
                    aspectRatio: "1/1",
                    background: "rgba(255,255,255,0.03)",
                    scrollSnapAlign: "center",
                  }}
                >
                  <img
                    src={src}
                    alt={data.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </button>
              ))}
            </div>

            {/* OTHER FACILITIES */}
            <span style={{ display: "block", color: "var(--accent-sunset)", letterSpacing: "2px", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "2rem" }}>
              Other Facilities
            </span>

            {/* ✅ Teks deskriptif untuk Other Facilities */}
            <p style={{ color: "var(--text-light)", opacity: 0.7, maxWidth: "600px", marginBottom: "2rem", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Discover more of our premium amenities – each crafted to enhance your wellness journey.
            </p>

            {/* Other Desktop Grid */}
            <div className="other-grid-desktop" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "30px" }}>
              {others.map((item) => (
                <OtherCard key={item.slug} item={item} />
              ))}
            </div>

            {/* Other Mobile Infinite Scroll (Center Peek) */}
            <div
              ref={trackOtherRef}
              onScroll={handleScrollOther}
              className="other-track-mobile"
              style={{
                display: "none",
                flexDirection: "row",
                flexWrap: "nowrap",
                gap: `${GAP_MOBILE}px`,
                overflowX: "auto",
                paddingLeft: "calc(50% - 140px)",
                paddingRight: "calc(50% - 140px)",
                scrollPaddingLeft: "calc(50% - 140px)",
                scrollPaddingRight: "calc(50% - 140px)",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                touchAction: "pan-x",
                willChange: "transform",
                width: "100%",
              }}
            >
              {trackOtherItems.map((item, i) => (
                <OtherCard key={`${item.slug}-${i}`} item={item} />
              ))}
            </div>

          </div>
        </section>
      </div>

      {/* LIGHTBOX */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100dvh",
            backgroundColor: "rgba(0,0,0,0.92)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
          }}
        >
          <img
            src={lightboxImg}
            alt={data.title}
            style={{
              maxWidth: "94vw",
              maxHeight: "94dvh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              borderRadius: "8px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
              display: "block",
            }}
          />

          {/* Tombol Close */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxImg(null);
            }}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              fontSize: "1.5rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            ✕
          </button>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .gallery-grid-desktop {
            display: none !important;
          }
          .gallery-track-mobile {
            display: flex !important;
          }
          .gallery-track-mobile::-webkit-scrollbar {
            display: none !important;
          }
          .other-grid-desktop {
            display: none !important;
          }
          .other-track-mobile {
            display: flex !important;
          }
          .other-track-mobile::-webkit-scrollbar {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}