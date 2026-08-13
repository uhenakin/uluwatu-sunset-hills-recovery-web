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
          backgroundImage: "none",
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "900px", zIndex: 2 }}>
          
          <h2
            className="font-luxury restaurant-title"
            style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", color: "#d5a15c", marginBottom: "30px" }}
          >
            Prana <span style={{ color: "#d5a15c", fontStyle: "italic" }}>Restaurant</span>
          </h2>

          <div style={{ width: "100px", height: "3px", backgroundColor: "var(--accent-gold)", margin: "0 auto 25px auto" }} />

          <p
            className="restaurant-desc"
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
              className="btn-menu-gold-box"
            >
              Explore Complete Menu →
            </Link>
          </div>

          <p style={{ fontSize: "0.75rem", fontWeight: 500, fontStyle: "italic", marginTop: "20px", color: "#2c2c2c" }}>
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
            color: #d5a15c;
            font-weight: 700;
            letter-spacing: 1px;
            margin: 0;
          }

          .schedule-time {
            font-size: 0.85rem;
            color: #2c2c2c;
            font-weight: 600;
          }

          /* ✅ Kotak emas dengan efek hover yang jauh lebih hidup dan dinamis */
          :global(.btn-menu-gold-box),
          .btn-menu-gold-box {
            display: inline-block !important;
            padding: 16px 45px !important;
            background-color: #d5a15c !important;
            color: #ffffff !important;
            border: 1px solid #d5a15c !important;
            font-weight: 600 !important;
            text-decoration: none !important;
            letter-spacing: 1.5px !important;
            text-transform: uppercase !important;
            font-size: 0.9rem !important;
            border-radius: 6px !important;
            box-shadow: 0 4px 20px rgba(213, 161, 92, 0.35) !important;
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
            animation: pulse-gold-menu 2s infinite;
          }

          .btn-menu-gold-box:hover {
            transform: translateY(-6px) scale(1.06) !important;
            box-shadow: 0 15px 35px rgba(213, 161, 92, 0.6) !important;
            background-color: #c4904a !important;
            color: #ffffff !important;
            border-color: #c4904a !important;
            animation: none !important;
          }

          @keyframes pulse-gold-menu {
            0% { box-shadow: 0 0 0 0 rgba(213, 161, 92, 0.6); }
            70% { box-shadow: 0 0 0 14px rgba(213, 161, 92, 0); }
            100% { box-shadow: 0 0 0 0 rgba(213, 161, 92, 0); }
          }

          @media (max-width: 767px) {
            .restaurant-title {
              font-size: 2.1rem !important;
              margin-bottom: 20px !important;
            }
            .restaurant-desc {
              font-size: 0.88rem !important;
              line-height: 1.6 !important;
              margin-bottom: 25px !important;
            }
            .btn-menu-gold-box {
              padding: 14px 25px !important;
              font-size: 0.8rem !important;
            }
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