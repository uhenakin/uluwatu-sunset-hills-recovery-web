"use client";

import { usePageLoading } from "@/hooks/usePageLoading";
import Loading from "@/components/Loading";

export default function RestaurantPage() {
  const isLoading = usePageLoading();
  
  // Array 19 gambar menu (sudah format .webp)
  const menuImages = Array.from({ length: 19 }, (_, i) => `/images/restaurant/${i + 1}.webp`);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={{ backgroundColor: "#070a14", minHeight: "100vh", padding: "80px 20px" }}>

      {/* Loop untuk menampilkan semua gambar */}
      {menuImages.map((src, index) => (
        <div
          key={index}
          // Semua gambar menggunakan class yang sama (lebar di desktop, kartu di mobile)
          className="desktop-wide-wrapper"
          style={{
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid rgba(226, 176, 101, 0.2)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            backgroundColor: "rgba(255,255,255,0.03)",
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

      {/* Tombol Kembali */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a 
          href="/" 
          style={{ 
            display: "inline-block",
            padding: "14px 40px",
            backgroundColor: "#e2b065",
            color: "#070a14",
            fontWeight: 600,
            textDecoration: "none",
            borderRadius: "6px",
            fontSize: "0.9rem",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          ← Back to Home
        </a>
      </div>

      {/* CSS Khusus untuk mengatur tampilan Desktop vs Mobile */}
      <style jsx>{`
        /* --- TAMPILAN MOBILE / HP (Default) --- */
        /* Semua gambar akan tampil sebagai kartu rapi ukuran 400px */
        .desktop-wide-wrapper {
          max-width: 400px;
          margin: 20px auto;
        }

        /* --- TAMPILAN DESKTOP (Layar di atas 1024px) --- */
        @media (min-width: 1024px) {
          /* ✅ SEMUA GAMBAR menjadi besar, tapi tetap ada SPACE di kiri-kanan */
          .desktop-wide-wrapper {
            max-width: 1200px; /* Tidak full ke pinggir layar */
            width: 100%;
            margin: 30px auto; /* Diberi jarak napas 30px di atas dan bawah */
          }
        }
      `}</style>
    </div>
  );
}