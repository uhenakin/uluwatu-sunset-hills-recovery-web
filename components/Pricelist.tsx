"use client";

import { useEffect, useRef, useCallback } from "react";

export default function Pricelist() {
  const plans = [
    {
      category: "SESSION",
      title: "Single Ice & Heat Session",
      price: "Rp 250.000",
      desc: "Perfect for a quick reset. Full access to our signature ice baths and thermal recovery facilities for one session."
    },
    {
      category: "SESSION",
      title: "10-Session Recovery Bundle",
      price: "Rp 2.000.000",
      desc: "Ideal for regular practitioners looking to commit to their physical recovery and wellness routine."
    },
    {
      category: "PASS",
      title: "Day Recovery Pass",
      price: "Rp 350.000",
      desc: "Enjoy full flexibility with unlimited access throughout the entire day."
    },
    {
      category: "PASS",
      title: "Weekly Unlimited Pass",
      price: "Rp 1.200.000",
      desc: "Immerse in a full week of consistent contrast therapy and holistic rejuvenation."
    },
    {
      category: "MEMBERSHIP",
      title: "Monthly Wellness",
      price: "Rp 3.000.000",
      desc: "Our most popular membership for sustained health, optimized recovery, and deep relaxation."
    },
    {
      category: "MEMBERSHIP",
      title: "VIP 3 Months Pass",
      price: "Rp 8.000.000",
      desc: "Extended access designed for dedicated athletes and wellness enthusiasts."
    },
    {
      category: "MEMBERSHIP",
      title: "VIP 6 Months Pass",
      price: "Rp 14.000.000",
      desc: "Long-term commitment to peak physical condition and holistic lifestyle integration."
    },
    {
      category: "MEMBERSHIP",
      title: "VIP 1 Year Pass",
      price: "Rp 25.000.000",
      desc: "The ultimate tier of exclusivity. 365 days of unlimited access to all sanctuary and recovery facilities."
    }
  ];

  // --- KONFIGURASI UKURAN (SAMA SEPERTI RECOVERY) ---
  const CARD_WIDTH = 280;
  const GAP_MOBILE = 16;
  const GAP_DESKTOP = 30;
  const ITEM_WIDTH = CARD_WIDTH + GAP_MOBILE;

  // --- KOMPONEN KARTU ---
  const PriceCard = ({ item }: { item: typeof plans[0] }) => (
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid rgba(226, 176, 101, 0.15)',
      borderRadius: '12px',
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'transform 0.3s ease, border-color 0.3s ease',
      flex: `0 0 ${CARD_WIDTH}px`,
      minWidth: `${CARD_WIDTH}px`,
      width: `${CARD_WIDTH}px`,
      scrollSnapAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div>
        <span style={{
          fontSize: '0.75rem', letterSpacing: '2px', color: 'var(--accent-sunset)',
          fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '10px'
        }}>
          {item.category}
        </span>

        <h3 className="font-luxury" style={{ 
          fontSize: '1.5rem', color: 'var(--accent-gold)', marginBottom: '15px', lineHeight: '1.3'
        }}>
          {item.title}
        </h3>

        <p style={{ 
          color: 'var(--text-light)', opacity: '0.7', lineHeight: '1.6', fontSize: '0.9rem', marginBottom: '25px'
        }}>
          {item.desc}
        </p>
      </div>

      <div>
        <div style={{ 
          fontSize: '1.4rem', fontWeight: '600', color: 'var(--text-light)', marginBottom: '20px', letterSpacing: '0.5px'
        }}>
          {item.price}
        </div>

        <a href="#contact" style={{
          display: 'block', width: '100%', padding: '12px 0', textAlign: 'center',
          backgroundColor: 'transparent', border: '1px solid var(--accent-gold)',
          color: 'var(--accent-gold)', fontSize: '0.85rem', letterSpacing: '1px',
          textTransform: 'uppercase', textDecoration: 'none', fontWeight: '500',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--accent-gold)';
          e.currentTarget.style.color = 'var(--bg-ocean)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = 'var(--accent-gold)';
        }}>
          Select Plan
        </a>
      </div>
    </div>
  );

  // --- KOMPONEN SECTION DENGAN INFINITE SCROLL LOGIC ---
  const PriceSection = ({ title, items }: { title: string, items: typeof plans }) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const isAdjusting = useRef(false);

    // Atur posisi awal ke set kedua
    useEffect(() => {
      if (trackRef.current) {
        trackRef.current.scrollLeft = items.length * ITEM_WIDTH;
      }
    }, [items.length]);

    const handleScroll = useCallback(() => {
      const el = trackRef.current;
      if (!el || isAdjusting.current) return;

      const total = items.length * ITEM_WIDTH;
      const current = el.scrollLeft;

      if (current < total) {
        isAdjusting.current = true;
        el.scrollLeft += total;
        setTimeout(() => { isAdjusting.current = false; }, 250);
      } else if (current >= total * 2) {
        isAdjusting.current = true;
        el.scrollLeft -= total;
        setTimeout(() => { isAdjusting.current = false; }, 250);
      }
    }, [items.length]);

    // Triplikasi data untuk infinite scroll
    const infiniteItems = [...items, ...items, ...items];

    return (
      <div style={{ width: '100%', marginBottom: '50px' }}>
        <h3 className="font-luxury" style={{ 
          fontSize: '2rem', color: 'var(--accent-gold)', marginBottom: '25px', 
          borderBottom: '1px solid rgba(226, 176, 101, 0.2)', paddingBottom: '10px' 
        }}>
          {title}
        </h3>

        {/* 1. DESKTOP (GRID) */}
        <div className="pricelist-grid-desktop" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: `${GAP_DESKTOP}px`,
          width: '100%',
        }}>
          {items.map((item, index) => (
            <PriceCard key={index} item={item} />
          ))}
        </div>

        {/* 2. MOBILE (INFINITE SCROLL + CENTER PEEKING) */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="pricelist-track-mobile"
          style={{
            display: 'none',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: `${GAP_MOBILE}px`,
            overflowX: 'auto',
            paddingLeft: 'calc(50% - 140px)',
            paddingRight: 'calc(50% - 140px)',
            scrollPaddingLeft: 'calc(50% - 140px)',
            scrollPaddingRight: 'calc(50% - 140px)',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x',
            willChange: 'transform',
            width: '100%',
          }}
        >
          {infiniteItems.map((item, index) => (
            <PriceCard key={`${item.title}-${index}`} item={item} />
          ))}
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .pricelist-grid-desktop { display: none !important; }
            .pricelist-track-mobile { display: flex !important; }
            .pricelist-track-mobile::-webkit-scrollbar { display: none !important; }
          }
        `}</style>
      </div>
    );
  };

  // --- FILTER DATA ---
  const sessions = plans.filter(p => p.category === "SESSION");
  const passes = plans.filter(p => p.category === "PASS");
  const memberships = plans.filter(p => p.category === "MEMBERSHIP");

  return (
    <section id="pricelist" style={{ 
      padding: '120px 5% 80px 5%', 
      backgroundColor: 'var(--bg-ocean)', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      scrollMarginTop: '100px'
    }}>
      
      <div style={{ textAlign: 'center', width: '100%', maxWidth: '1200px' }}>
        <h2 className="font-luxury" style={{ 
          fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--text-light)', marginBottom: '20px'
        }}>
          Recovery <span style={{ color: 'var(--accent-sunset)', fontStyle: 'italic' }}>Pricelist</span>
        </h2>
        <p style={{
          fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: '1.8', 
          color: 'var(--text-light)', maxWidth: '800px', opacity: '0.8',
          fontWeight: '300', margin: '0 auto 60px auto'
        }}>
          Choose the ideal session, pass, or membership tailored to your recovery journey. Experience world-class contrast therapy at Uluwatu Sunset Hills.
        </p>
      </div>

      <div style={{ width: '100%', maxWidth: '1200px' }}>
        <PriceSection title="Sessions" items={sessions} />
        <PriceSection title="Passes" items={passes} />
        <PriceSection title="Memberships" items={memberships} />
      </div>

    </section>
  );
}