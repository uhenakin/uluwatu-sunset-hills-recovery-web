"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { facilitiesData, allFacilities, type Facility } from "@/lib/facilitiesData";
import Loading from "@/components/Loading";

const CARD_WIDTH = 280;
const GAP_MOBILE = 16;
const GAP_DESKTOP = 30;
const ITEM_WIDTH = CARD_WIDTH + GAP_MOBILE;

function OtherCard({ item }: { item: Facility }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push(item.route);
    }, 900);
  };

  return (
    <>
      {isLoading && <Loading />}
      <div
        role="link"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleClick(e);
        }}
        style={{
          cursor: "pointer",
          textDecoration: "none",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(213, 161, 92, 0.25)",
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
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.borderColor = "rgba(213, 161, 92, 0.25)";
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

        <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "20px" }}>
          <h3 className="font-luxury" style={{ fontSize: "1.35rem", color: "#d5a15c", marginBottom: "8px" }}>
            {item.title}
          </h3>
          
          {item.tagline && (
            <p style={{ color: "#4a4a4a", opacity: 0.9, lineHeight: 1.6, fontSize: "0.9rem", margin: 0 }}>
              {item.tagline}
            </p>
          )}

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
      </div>
    </>
  );
}

export default function FacilityDetail({ slug }: { slug: string }) {
  const data = facilitiesData[slug];
  const others = allFacilities.filter((f) => f.slug !== slug);

  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false); 

  const trackOtherRef = useRef<HTMLDivElement>(null);
  const isAdjustingOther = useRef(false);

  const trackGalleryRef = useRef<HTMLDivElement>(null);
  const isAdjustingGallery = useRef(false);
  const GALLERY_ITEM_WIDTH = 220 + 12;

  useEffect(() => {
    setMounted(true);
    const mql = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

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
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#faf8ef" }}>
        <div style={{ textAlign: "center" }}>
          <h1 className="font-luxury" style={{ color: "#d5a15c", marginBottom: "1rem" }}>
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
      <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#faf8ef" }}>
        
        <section
          style={{
            position: "relative",
            minHeight: "35vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "120px 5% 40px 5%",
            background: "none",
            backgroundColor: "#faf8ef",
          }}
        >
          <h1 className="font-luxury detail-hero-title" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#d5a15c", marginBottom: "1rem" }}>
            {data.title}
          </h1>
          <p className="detail-hero-tagline" style={{ color: "#2c2c2c", opacity: 0.9, fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 2, fontWeight: 400, maxWidth: "600px" }}>
            {data.tagline}
          </p>
        </section>

        <section style={{ backgroundColor: "#faf8ef", padding: "40px 5% 80px 5%", display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: "1100px" }}>
            <span className="font-luxury detail-section-title" style={{ display: "block", color: "#d5a15c", letterSpacing: "1px", textTransform: "capitalize", fontSize: "clamp(1.5rem, 4vw, 2.2rem)", marginBottom: "2rem", fontWeight: 600 }}>
              Benefits
            </span>
            <div className="benefits-container">
              {data.benefits.map((b) => (
                <div key={b.title} className="benefit-item">
                  <h3 className="font-luxury benefit-title">
                    {b.title}
                  </h3>
                  <p className="benefit-desc">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#faf8ef" }}>
        <section style={{ backgroundColor: "#faf8ef", padding: "0 5% 120px 5%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: "100%", maxWidth: "1200px" }}>

            <span className="font-luxury detail-section-title" style={{ display: "block", color: "#d5a15c", letterSpacing: "1px", textTransform: "capitalize", fontSize: "clamp(1.5rem, 4vw, 2.2rem)", marginBottom: "1rem", fontWeight: 600 }}>
              Gallery
            </span>
            <p className="detail-section-desc" style={{ color: "#2c2c2c", opacity: 0.9, fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 2, fontWeight: 400, maxWidth: "600px", marginBottom: "2rem" }}>
              A glimpse into our luxurious spaces – every corner designed for your comfort and recovery.
            </p>

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
                    background: "rgba(213, 161, 92, 0.1)",
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
                    background: "rgba(213, 161, 92, 0.1)",
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

            <span className="font-luxury detail-section-title" style={{ display: "block", color: "#d5a15c", letterSpacing: "1px", textTransform: "capitalize", fontSize: "clamp(1.5rem, 4vw, 2.2rem)", marginBottom: "1rem", fontWeight: 600 }}>
              Other Facilities
            </span>
            <p className="detail-section-desc" style={{ color: "#2c2c2c", opacity: 0.9, fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 2, fontWeight: 400, maxWidth: "600px", marginBottom: "2rem" }}>
              Discover more of our premium amenities – each crafted to enhance your wellness journey.
            </p>

            <div className="other-grid-desktop" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px", width: "100%" }}>
              {others.map((item) => (
                <OtherCard key={item.slug} item={item} />
              ))}
            </div>

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

      {mounted && lightboxImg && createPortal(
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100dvh",
            backgroundColor: "rgba(0,0,0,0.92)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
          }}
        >
          <img
            src={lightboxImg}
            alt="Gallery Fullscreen"
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
          <button
            type="button"
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
          >
            ✕
          </button>
        </div>,
        document.body
      )}

      <style jsx>{`
        .benefits-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2.5rem;
        }
        
        .benefit-item {
          background-color: transparent !important;
          border: none !important;
          padding: 0 !important;
          border-radius: 0 !important;
          position: relative;
        }
        
        .benefit-title {
          color: #d5a15c;
          font-size: 1.2rem;
          margin-bottom: 0.6rem;
        }
        
        /* ✅ Paragraf benefit dibesarkan sedikit */
        .benefit-desc {
          color: #4a4a4a;
          opacity: 0.9;
          font-size: 1rem; /* Naik sedikit dari 0.92rem */
          line-height: 1.65;
        }

        @media (max-width: 768px) {
          .gallery-grid-desktop { display: none !important; }
          .gallery-track-mobile { display: flex !important; }
          .gallery-track-mobile::-webkit-scrollbar { display: none !important; }
          .other-grid-desktop { display: none !important; }
          .other-track-mobile { display: flex !important; }
          .other-track-mobile::-webkit-scrollbar { display: none !important; }
          
          .detail-hero-title {
            font-size: 2.1rem !important;
            margin-bottom: 0.8rem !important;
          }
          .detail-section-title {
            font-size: 1.8rem !important;
            margin-bottom: 1.2rem !important;
          }
          .detail-hero-tagline, .detail-section-desc {
            font-size: 0.88rem !important;
            line-height: 1.6 !important;
          }

          /* ✅ Penyesuaian agar di layar mobile juga sedikit lebih nyaman dibaca */
          .benefit-desc {
            font-size: 0.95rem !important; 
          }
          
          .benefits-container { display: flex; flex-direction: column; gap: 3rem; }
          .benefit-item:nth-child(odd) { text-align: left; padding-right: 15%; }
          .benefit-item:nth-child(even) { text-align: right; padding-left: 15%; }
          .benefit-item::before { content: ""; position: absolute; top: -12px; width: 40px; height: 2px; background-color: var(--accent-gold); opacity: 0.6; }
          .benefit-item:nth-child(odd)::before { left: 0; }
          .benefit-item:nth-child(even)::before { right: 0; }
        }
      `}</style>
    </>
  );
}