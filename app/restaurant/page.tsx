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
    <div style={{ backgroundColor: "#faf8ef", minHeight: "100vh", padding: "80px 20px" }}>

      {/* Loop untuk menampilkan semua gambar dengan efek sudut bergradasi menyatu dengan background */}
      {menuImages.map((src, index) => (
        <div
          key={index}
          className="desktop-wide-wrapper menu-vignette-container"
          style={{
            /* ✅ Kita hapus border dan shadow agar gambar benar-benar melebur */
            borderRadius: "12px",
            overflow: "hidden",
            position: "relative",
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
          {/* ✅ Lapisan gradasi tebal di setiap sisi menggunakan warna background halaman (#faf8ef) */}
          <div className="vignette-overlay" />
        </div>
      ))}

      {/* Tombol Book Now yang Lebih Hidup */}
      <div style={{ textAlign: "center", marginTop: "50px", marginBottom: "40px" }}>
        <a 
          href="/#contact"
          className="btn-book-alive"
        >
          Book Now
        </a>
      </div>

      <style jsx>{`
        /* --- EFEK GRADASI MENYATU DENGAN BACKGROUND (#faf8ef) --- */
        .menu-vignette-container {
          position: relative;
        }

        .vignette-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          border-radius: 12px;
          /* ✅ Membayangkan warna krem #faf8ef masuk dari ke-4 sisi gambar */
          box-shadow: 
            inset 0px 15px 25px -10px #faf8ef,   /* Atas */
            inset 0px -15px 25px -10px #faf8ef,  /* Bawah */
            inset 15px 0px 25px -10px #faf8ef,   /* Kiri */
            inset -15px 0px 25px -10px #faf8ef;  /* Kanan */
        }

        /* --- TAMPILAN MOBILE / HP (Default) --- */
        .desktop-wide-wrapper {
          max-width: 400px;
          margin: 20px auto;
        }

        /* --- ANIMASI TOMBOL BOOK NOW --- */
        .btn-book-alive {
          display: inline-block;
          padding: 16px 45px;
          background-color: #d5a15c;
          color: #ffffff;
          font-weight: 600;
          text-decoration: none;
          border-radius: 8px;
          font-size: 1rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(213, 161, 92, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: pulse-gold 2s infinite;
        }

        .btn-book-alive:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 30px rgba(213, 161, 92, 0.5);
          background-color: #c4904a;
          animation: none;
        }

        @keyframes pulse-gold {
          0% { box-shadow: 0 0 0 0 rgba(213, 161, 92, 0.6); }
          70% { box-shadow: 0 0 0 15px rgba(213, 161, 92, 0); }
          100% { box-shadow: 0 0 0 0 rgba(213, 161, 92, 0); }
        }

        /* --- TAMPILAN DESKTOP (Layar di atas 1024px) --- */
        @media (min-width: 1024px) {
          .desktop-wide-wrapper {
            max-width: 1200px;
            width: 100%;
            margin: 0px auto; /* Margin dihilangkan agar tumpukan gambar lebih padat menyatu */
          }
          
          /* Efek gradasi dipertebal di desktop agar semakin blur pinggirannya */
          .vignette-overlay {
            box-shadow: 
              inset 0px 40px 60px -20px #faf8ef,
              inset 0px -40px 60px -20px #faf8ef,
              inset 40px 0px 60px -20px #faf8ef,
              inset -40px 0px 60px -20px #faf8ef;
          }
        }
      `}</style>
    </div>
  );
}