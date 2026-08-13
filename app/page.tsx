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

  // Catat page_view sekali setelah loading selesai (bukan pas masih di layar Loading)
  useEffect(() => {
    if (!isLoading) {
      track("page_view");
    }
  }, [isLoading]);

  // Hanya untuk memastikan hash tetap di-handle setelah loading
  useEffect(() => {
    if (!isLoading) {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          // Gunakan scrollIntoView dengan behavior 'auto' (instan, tanpa animasi)
          element.scrollIntoView({ behavior: "auto", block: "start" });
        }
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <section className="hero-section">
        <h1 className="hero-title font-luxury" style={{ color: '#ffffff' }}>
          <span style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>Uluwatu Sunset Hills</span>
          <br />
          <span style={{ color: 'var(--accent-sunset)', fontStyle: 'italic' }}>Recovery</span>
        </h1>
        
        <p className="hero-desc">
          Elevate your physical and mental wellbeing at Uluwatu's most exclusive recovery sanctuary. Ice baths, saunas, and holistic therapies await.
        </p>
        
        {/* ✅ TOMBOL DIPERBARUI: RECOVERY DAN PRICELIST */}
        <div className="hero-buttons">
          {/* Tombol pertama: Recovery, arahkan ke #recovery */}
          <a href="#recovery" className="btn-primary">
            Recovery
          </a>
          {/* Tombol kedua: Pricelist, arahkan ke #pricelist */}
          <a href="#pricelist" className="btn-secondary">
            Pricelist
          </a>
        </div>
      </section>

      <About />
      <Recovery />
      <Pricelist />
      <Restaurant />
      <Contact />

      {/* ✅ CSS KHUSUS UNTUK HP (Mobile) */}
      <style jsx>{`
        @media (max-width: 767px) {
          .hero-title {
            /* Menyesuaikan ukuran font di HP agar muat satu baris tanpa terlalu kecil */
            font-size: 2.5rem !important; 
            line-height: 1.2;
          }

          /* ✅ Menurunkan posisi tombol */
          .hero-buttons {
            margin-top: 40px !important; /* Memberikan jarak 40px dari teks deskripsi */
          }
        }
      `}</style>
    </main>
  );
}