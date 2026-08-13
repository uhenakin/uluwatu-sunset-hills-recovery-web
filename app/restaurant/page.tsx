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

      {/* Tombol Book Now yang Lebih Hidup */}
      <div style={{ textAlign: "center", marginTop: "50px", marginBottom: "40px" }}>
        <a 
          href="/#contact" 
          className="btn-book-alive"
        >
          Book Now
        </a>
      </div>

      {/* CSS Khusus untuk mengatur tampilan Desktop vs Mobile & Animasi */}
      <style jsx>{`
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
          
          /* Efek denyut (pulse) terus-menerus */
          animation: pulse-gold 2s infinite;
        }

        /* Efek saat kursor diarahkan (hover) */
        .btn-book-alive:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 30px rgba(213, 161, 92, 0.5);
          background-color: #c4904a;
          animation: none; /* Hentikan denyut saat di-hover */
        }

        /* Keyframes untuk efek denyut memancarkan warna emas */
        @keyframes pulse-gold {
          0% {
            box-shadow: 0 0 0 0 rgba(213, 161, 92, 0.6);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(213, 161, 92, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(213, 161, 92, 0);
          }
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