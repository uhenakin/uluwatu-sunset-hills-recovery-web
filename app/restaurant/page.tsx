"use client";

import { usePageLoading } from "@/hooks/usePageLoading";
import Loading from "@/components/Loading";

export default function RestaurantPage() {
  const isLoading = usePageLoading();
  
  // Array 19 gambar menu (sudah format .webp)[cite: 12]
  const menuImages = Array.from({ length: 19 }, (_, i) => `/images/restaurant/${i + 1}.webp`);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={{ backgroundColor: "#faf8ef", minHeight: "100vh", padding: "80px 20px" }}>

      {/* Loop untuk menampilkan semua gambar */}
      {menuImages.map((src, index) => (
        <div
          key={index}
          className="desktop-wide-wrapper"
          style={{
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid rgba(213, 161, 92, 0.3)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <img 
            src={src} 
            alt={`Menu ${index + 1}`} 
            style={{ 
              width: "100%", 
              height: "auto", 
              display: "block",
            }} 
          />
        </div>
      ))}

      {/* Tombol Book Now */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a 
          href="/#contact" 
          style={{ 
            display: "inline-block",
            padding: "14px 40px",
            backgroundColor: "#d5a15c",
            color: "#ffffff",
            fontWeight: 600,
            textDecoration: "none",
            borderRadius: "6px",
            fontSize: "0.9rem",
            letterSpacing: "1px",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
          }}
        >
          Book Now
        </a>
      </div>

      {/* CSS Khusus untuk mengatur tampilan Desktop vs Mobile */}
      <style jsx>{`
        /* --- TAMPILAN MOBILE / HP (Default) --- */
        .desktop-wide-wrapper {
          max-width: 400px;
          margin: 20px auto;
        }

        /* --- TAMPILAN DESKTOP (Layar di atas 1024px) --- */
        @media (min-width: 1024px) {
          .desktop-wide-wrapper {
            max-width: 1200px;
            width: 100%;
            margin: 30px auto;
          }
        }
      `}</style>
    </div>
  );
}