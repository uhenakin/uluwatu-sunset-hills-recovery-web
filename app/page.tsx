"use client";

import { useEffect } from "react";
import { usePageLoading } from "@/hooks/usePageLoading";
import Loading from "@/components/Loading";
import About from "../components/About";
import Recovery from "../components/Recovery";
import Pricelist from "../components/Pricelist";
import Restaurant from "../components/Restaurant";
import Contact from "../components/Contact";
import { track } from "@/lib/tracking";

export default function Home() {
  const isLoading = usePageLoading();

  useEffect(() => {
    if (!isLoading) {
      track("page_view");
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "auto", block: "start" });
        }
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      <section 
        className="hero-section" 
        style={{ 
          backgroundImage: 'none', 
          backgroundColor: '#ffffff' 
        }}
      >
        <h1 className="hero-title font-luxury" style={{ textShadow: 'none' }}>
          <span style={{ color: '#d5a15c', whiteSpace: 'nowrap', display: 'inline-block' }}>Uluwatu Sunset Hills</span>
          <br />
          <span style={{ color: '#d5a15c', fontStyle: 'italic' }}>Recovery</span>
        </h1>
        
        <p className="hero-desc" style={{ color: '#2c2c2c', fontWeight: 500, textShadow: 'none' }}>
          Elevate your physical and mental wellbeing at Uluwatu's most exclusive recovery sanctuary. Ice baths, saunas, and holistic therapies await.
        </p>
        
        {/* Tombol Recovery (Latar Emas, Teks Putih) & Pricelist (Latar Putih, Teks Emas) */}
        <div className="hero-buttons">
          <a href="#recovery" className="btn-recovery-hero">
            Recovery
          </a>
          <a href="#pricelist" className="btn-pricelist-hero">
            Pricelist
          </a>
        </div>
      </section>

      <About />
      <Recovery />
      <Pricelist />
      <Restaurant />
      <Contact />

      <style jsx>{`
        /* --- TOMBOL RECOVERY (Latar Emas, Teks Putih) --- */
        .btn-recovery-hero {
          display: inline-block;
          padding: 16px 45px;
          background-color: #d5a15c;
          color: #ffffff;
          border: 1px solid #d5a15c;
          text-decoration: none;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 4px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(213, 161, 92, 0.35);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: pulse-gold-rec 2s infinite;
        }

        .btn-recovery-hero:hover {
          transform: translateY(-4px) scale(1.04);
          background-color: #ffffff;
          color: #d5a15c;
          border-color: #d5a15c;
          box-shadow: 0 10px 25px rgba(213, 161, 92, 0.4);
          animation: none;
        }

        /* --- TOMBOL PRICELIST (Latar Putih, Teks Emas) --- */
        .btn-pricelist-hero {
          display: inline-block;
          padding: 16px 45px;
          background-color: #ffffff;
          color: #d5a15c;
          border: 1px solid #d5a15c;
          text-decoration: none;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 4px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(213, 161, 92, 0.25);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: pulse-white-price 2s infinite;
        }

        .btn-pricelist-hero:hover {
          transform: translateY(-4px) scale(1.04);
          background-color: #d5a15c;
          color: #ffffff;
          border-color: #d5a15c;
          box-shadow: 0 10px 25px rgba(213, 161, 92, 0.4);
          animation: none;
        }

        @keyframes pulse-gold-rec {
          0% { box-shadow: 0 0 0 0 rgba(213, 161, 92, 0.6); }
          70% { box-shadow: 0 0 0 12px rgba(213, 161, 92, 0); }
          100% { box-shadow: 0 0 0 0 rgba(213, 161, 92, 0); }
        }

        @keyframes pulse-white-price {
          0% { box-shadow: 0 0 0 0 rgba(213, 161, 92, 0.4); }
          70% { box-shadow: 0 0 0 12px rgba(213, 161, 92, 0); }
          100% { box-shadow: 0 0 0 0 rgba(213, 161, 92, 0); }
        }

        @media (max-width: 767px) {
          .hero-title {
            font-size: 2.5rem !important; 
            line-height: 1.2;
          }
          .hero-buttons {
            margin-top: 20px !important; 
          }
        }
      `}</style>
    </main>
  );
}