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
          /* ✅ Gradasi murni menggunakan warna krem (#faf8ef) agar solid dan menyatu */
          backgroundImage: `
            linear-gradient(to bottom, #faf8ef 0%, rgba(250, 248, 239, 0.92) 25%, rgba(250, 248, 239, 0.92) 75%, #faf8ef 100%),
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
            style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", color: "#2c2c2c", marginBottom: "30px" }}
          >
            Prana <span style={{ color: "var(--accent-sunset)", fontStyle: "italic" }}>Restaurant</span>
          </h2>

          <div style={{ width: "100px", height: "3px", backgroundColor: "var(--accent-gold)", margin: "0 auto 25px auto" }} />

          <p
            style={{
              fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
              lineHeight: 1.8,
              color: "#2c2c2c",
              fontWeight: 400,
              marginBottom: "30px",
            }}
          >
            Our restaurant features plant-based and vegetarian delights that will feed your soul and make your tastebuds come alive with exciting new fresh flavors! We feel food can be delicious without compromising its nutritional value. Please Enjoy!!
          </p>

          <div style={{ width: "100px", height: "3px", backgroundColor: "var(--accent-gold)", margin: "0 auto 40px auto" }} />

          <div className="schedule-container">
            
            <div className="schedule-item">
              <h3 className="schedule-title font-luxury">BREAKFAST</h3>
              <span className="schedule-time">8AM - 11AM</span>
            </div>
            
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
                color: "#ffffff",
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
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Explore Complete Menu →
            </Link>
          </div>

          <p style={{ fontSize: "0.75rem", fontWeight: 500, fontStyle: "italic", marginTop: "20px", color: "#4a4a4a" }}>
            Prices are subject to Government TAX 10% + 5% service charge.
          </p>

        </div>

        <style jsx>{`
          .schedule-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 40px;
          }

          .schedule-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
            padding: 12px 0;
            border-bottom: 1px solid rgba(213, 161, 92, 0.3);
          }
          
          .schedule-item:last-child {
            border-bottom: none;
          }

          .schedule-title {
            font-size: 0.95rem;
            color: #2c2c2c;
            font-weight: 700;
            letter-spacing: 1px;
            margin: 0;
          }

          .schedule-time {
            font-size: 0.85rem;
            color: #4a4a4a;
            font-weight: 600;
          }

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