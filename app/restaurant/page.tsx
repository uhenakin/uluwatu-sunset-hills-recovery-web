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
        className="hero-section responsive-hero" 
        style={{ 
          backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.88) 60%, rgba(255, 255, 255, 1) 100%), url("/images/bg/bg-hero.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          borderBottom: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <h1 className="hero-title font-luxury" style={{ textShadow: 'none', marginBottom: '30px' }}>
          <span style={{ color: '#d5a15c', whiteSpace: 'nowrap', display: 'inline-block' }}>Uluwatu Sunset Hills</span>
          <br />
          <span style={{ color: '#d5a15c', fontStyle: 'italic' }}>Recovery</span>
        </h1>
        
        <p className="hero-desc">
          Elevate your well-being on the edge of the Uluwatu hills. Discover a hidden sanctuary where restorative therapies meet the endless horizon of the Indian Ocean and golden sunsets.
        </p>
        
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
        :global(section) {
          border-bottom: none !important;
          border-top: none !important;
        }

        /* ✅ Responsif Padding untuk Hero */
        .responsive-hero {
          padding: 140px 5% 80px 5%;
        }

        .hero-desc {
          font-size: clamp(1rem, 2vw, 1.25rem);
          line-height: 2;
          color: #2c2c2c;
          opacity: 0.9;
          font-weight: 400;
          text-shadow: none;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 80px; 
          text-align: justify;
          text-align-last: center;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          width: 100%;
        }

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
          .responsive-hero {
            padding: 100px 5% 40px 5%;
          }
          
          .hero-title {
            font-size: clamp(2.1rem, 7.5vw, 2.5rem) !important; 
            line-height: 1.15;
          }
          
          .hero-desc {
            font-size: 0.88rem !important;
            line-height: 1.6 !important;
            padding: 0 15px;
            margin-bottom: 40px !important; 
            text-align: center !important;
            text-align-last: center !important;
          }
          
          .hero-buttons {
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
            flex-direction: row; /* ✅ Diubah menjadi row agar bersebelahan (kiri kanan) */
            gap: 12px;
            padding: 0 10px;
          }
          
          .btn-recovery-hero, .btn-pricelist-hero {
            padding: 14px 10px; /* ✅ Menyesuaikan padding agar rapi */
            font-size: 0.75rem;
            flex: 1; /* ✅ Membagi lebar tombol persis 50:50 */
            width: auto;
          }
        }
      `}</style>
    </main>
  );
}