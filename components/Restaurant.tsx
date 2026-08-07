"use client";

import Link from "next/link";
import Reveal from "./Reveal";

export default function Restaurant() {
  return (
    <Reveal>
      <section
        id="restaurant"
        style={{
          position: "relative",
          padding: "140px 5%",
          backgroundImage: `
            linear-gradient(to bottom, var(--bg-ocean) 0%, rgba(10, 15, 30, 0.70) 35%, rgba(10, 15, 30, 0.70) 65%, var(--bg-ocean) 100%),
            url("/images/bg/bg-resto.webp")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "900px", zIndex: 2 }}>
          
          <h2
            className="font-luxury"
            style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", color: "var(--text-light)", marginBottom: "30px" }}
          >
            Prana <span style={{ color: "var(--accent-sunset)", fontStyle: "italic" }}>Restaurant</span>
          </h2>

          <div style={{ width: "100px", height: "3px", backgroundColor: "var(--accent-gold)", margin: "0 auto 25px auto" }} />

          <p
            style={{
              fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
              lineHeight: 1.8,
              color: "var(--text-light)",
              opacity: 0.9,
              fontWeight: 300,
              marginBottom: "30px",
            }}
          >
            Our restaurant features plant-based and vegetarian delights that will feed your soul and make your tastebuds come alive with exciting new fresh flavors! We feel food can be delicious without compromising its nutritional value. Please Enjoy!!
          </p>

          <div style={{ width: "100px", height: "3px", backgroundColor: "var(--accent-gold)", margin: "0 auto 40px auto" }} />

          {/* BAGIAN JADWAL YANG DIPERBAIKI */}
          <div className="schedule-container">
            
            {/* Item 1: Breakfast */}
            <div className="schedule-item">
              <h3 className="schedule-title font-luxury">BREAKFAST</h3>
              <span className="schedule-time">8AM - 11AM</span>
            </div>
            
            {/* Item 2: Lunch */}
            <div className="schedule-item">
              <h3 className="schedule-title font-luxury">LUNCH ~ DINNER ~ GRAZING PLATTERS</h3>
              <span className="schedule-time">12PM - 8PM</span>
            </div>

          </div>

          <div style={{ marginBottom: "20px" }}>
            <Link
              href="/restaurant"
              style={{
                display: "inline-block",
                padding: "16px 45px",
                backgroundColor: "var(--accent-gold)",
                color: "#070a14",
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontSize: "0.9rem",
                borderRadius: "6px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Explore Complete Menu →
            </Link>
          </div>

          <p style={{ fontSize: "0.7rem", opacity: 0.6, fontStyle: "italic", marginTop: "20px" }}>
            Prices are subject to Government TAX 10% + 5% service charge.
          </p>

        </div>

        {/* ✅ CSS KHUSUS DENGAN UKURAN FONT YANG LEBIH KECIL DI MOBILE */}
        <style jsx>{`
          .schedule-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 40px;
          }

          .schedule-item {
            display: flex;
            flex-direction: column; /* Mobile: Judul di atas, Jam di bawah */
            align-items: center;
            gap: 6px;
            padding: 12px 0;
            border-bottom: 1px solid rgba(226, 176, 101, 0.2);
          }
          
          .schedule-item:last-child {
            border-bottom: none;
          }

          /* ✅ DIPERKECIL SEDIKIT DI MOBILE */
          .schedule-title {
            font-size: 0.95rem; /* Sebelumnya 1.1rem */
            color: var(--accent-gold);
            letter-spacing: 1px;
            margin: 0;
          }

          .schedule-time {
            font-size: 0.85rem; /* Sebelumnya 1rem */
            opacity: 0.85;
            color: var(--text-light);
          }

          /* ✅ TAMPILAN DESKTOP (Font dikembalikan sedikit lebih besar) */
          @media (min-width: 600px) {
            .schedule-item {
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              padding: 16px 0;
              gap: 20px;
            }

            .schedule-title {
              font-size: 1.25rem;
            }
            
            .schedule-time {
              font-size: 1rem;
            }
          }
        `}</style>
        
      </section>
    </Reveal>
  );
}