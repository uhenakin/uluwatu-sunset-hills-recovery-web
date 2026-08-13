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
    <main>
      <section className="hero-section">
        {/* ✅ TULISAN ULUWATU SUNSET HILLS SEKARANG HITAM (#2c2c2c) */}
        <h1 className="hero-title font-luxury" style={{ color: '#2c2c2c' }}>
          <span style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>Uluwatu Sunset Hills</span>
          <br />
          <span style={{ color: 'var(--accent-sunset)', fontStyle: 'italic' }}>Recovery</span>
        </h1>
        
        <p className="hero-desc" style={{ color: '#4a4a4a' }}>
          Elevate your physical and mental wellbeing at Uluwatu's most exclusive recovery sanctuary. Ice baths, saunas, and holistic therapies await.
        </p>
        
        <div className="hero-buttons">
          <a href="#recovery" className="btn-primary">
            Recovery
          </a>
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

      <style jsx>{`
        @media (max-width: 767px) {
          .hero-title {
            font-size: 2.5rem !important; 
            line-height: 1.2;
          }
          .hero-buttons {
            margin-top: 40px !important; 
          }
        }
      `}</style>
    </main>
  );
}