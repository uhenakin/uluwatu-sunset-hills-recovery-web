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
          /* ✅ Memasang background bg-resto.webp dengan gradasi putih mulus di atas dan bawah */
          backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.88) 20%, rgba(255, 255, 255, 0.88) 80%, rgba(255, 255, 255, 1) 100%), url("/images/bg/bg-resto.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
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
            className="font-luxury restaurant-title"
            style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", color: "#d5a15c", marginBottom: "30px" }}
          >
            Prana <span style={{ color: "#d5a15c", fontStyle: "italic" }}>Restaurant</span>
          </h2>

          <div style={{ width: "100px", height: "3px", backgroundColor: "var(--accent-gold)", margin: "0 auto 25px auto" }} />

          <p
            className="restaurant-desc"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              lineHeight: 2,
              color: "#2c2c2c",
              opacity: 0.9,
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
              <h3 className="schedule-title font-luxury">LUNCH - DINNER - GRAZING PLATTERS</h3>
              <span className="schedule-time">12PM - 8PM</span>
            </div>

          </div>

          <div style={{ marginBottom: "20px" }}>
            <Link
              href="/restaurant"
              className="btn-menu-gold-box"
            >
              Explore Complete Menu
            </Link>
          </div>

          <p className="tax-notice">
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

          .tax-notice {
            font-size: 0.95rem;
            font-weight: 500;
            font-style: italic;
            margin-top: 20px;
            color: #2c2c2c;
            opacity: 0.85;
          }

          /* ✅ Tombol hidup dengan ukuran font & padding persis seperti Book Now (10px 24px, 0.88rem)[cite: 3, 4] */
          :global(.btn-menu-gold-box),
          .btn-menu-gold-box {
            position: relative !important;
            overflow: hidden !important;
            display: inline-block !important;
            padding: 10px 24px !important;
            background: linear-gradient(45deg, #c4904a, #d5a15c, #e8c38c, #d5a15c, #c4904a) !important;
            background-size: 300% auto !important;
            color: #ffffff !important;
            border: none !important;
            font-weight: 600 !important;
            text-decoration: none !important;
            letter-spacing: 1.2px !important;
            text-transform: uppercase !important;
            font-size: 0.88rem !important;
            border-radius: 4px !important;
            box-shadow: 0 4px 15px rgba(213, 161, 92, 0.35) !important;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            animation: pulse-gold-menu 2s infinite, gradient-shift 4s ease infinite !important;
          }

          .btn-menu-gold-box::after {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 50%;
            height: 100%;
            background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
            transform: skewX(-25deg);
            animation: shine-menu 3s infinite;
          }

          .btn-menu-gold-box:hover {
            transform: translateY(-3px) scale(1.05) !important;
            box-shadow: 0 10px 25px rgba(213, 161, 92, 0.55) !important;
            background-color: #c4904a !important;
            animation: gradient-shift 2s ease infinite !important;
          }

          @keyframes pulse-gold-menu {
            0% { box-shadow: 0 0 0 0 rgba(213, 161, 92, 0.6); }
            70% { box-shadow: 0 0 0 12px rgba(213, 161, 92, 0); }
            100% { box-shadow: 0 0 0 0 rgba(213, 161, 92, 0); }
          }

          @keyframes shine-menu {
            0% { left: -100%; }
            20% { left: 200%; }
            100% { left: 200%; }
          }

          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
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
            .tax-notice {
              font-size: 0.68rem !important;
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