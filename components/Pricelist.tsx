"use client";

import Reveal from "./Reveal";

export default function Pricelist() {
  const plans = [
    { badge: "VALID 1 DAY", title: "Day Pass", price: "Rp 350.000", desc: "Unlimited access for 1 day" },
    { badge: "VALID 7 DAYS", title: "Weekly Pass", price: "Rp 1.200.000", desc: "Unlimited access for 7 days" },
    { badge: "VALID 30 DAYS", title: "10 Session Pass", price: "Rp 2.000.000", desc: "10 sessions valid for 30 days" },
    { badge: "VALID 30 DAYS", title: "Monthly Pass", price: "Rp 3.000.000", desc: "Unlimited access for 30 days" },
    { badge: "VALID 90 DAYS", title: "3 Months Pass", price: "Rp 8.000.000", desc: "Unlimited access for 90 days" },
    { badge: "VALID 180 DAYS", title: "6 Months Pass", price: "Rp 14.000.000", desc: "Unlimited access for 180 days" },
    { badge: "VALID 365 DAYS", title: "1 Year Pass", price: "Rp 25.000.000", desc: "Unlimited access for 365 days" }
  ];

  const PriceCard = ({ item }: { item: typeof plans[0] }) => (
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      border: '1px solid rgba(226, 176, 101, 0.3)',
      borderRadius: '12px',
      padding: '22px 16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'transform 0.3s ease, border-color 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      height: '100%',
      minHeight: '260px',
      width: '100%',
    }}>
      <div>
        <span style={{
          fontSize: '0.7rem', letterSpacing: '2px', color: 'var(--accent-sunset)',
          fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '8px'
        }}>
          {item.badge}
        </span>
        <h3 className="font-luxury" style={{
          fontSize: '1.2rem', color: 'var(--accent-gold)', marginBottom: '10px', lineHeight: '1.3'
        }}>
          {item.title}
        </h3>
        <p style={{
          color: '#2c2c2c', opacity: '0.7', lineHeight: '1.5', fontSize: '0.8rem', marginBottom: '16px'
        }}>
          {item.desc}
        </p>
      </div>
      <div>
        <div style={{
          fontSize: '1.2rem', fontWeight: '600', color: '#2c2c2c', marginBottom: '14px', letterSpacing: '0.5px'
        }}>
          {item.price}
        </div>
        <a href="#contact" style={{
          display: 'block', width: '100%', padding: '10px 0', textAlign: 'center',
          backgroundColor: 'transparent', border: '1px solid var(--accent-gold)',
          color: 'var(--accent-gold)', fontSize: '0.75rem', letterSpacing: '1px',
          textTransform: 'uppercase', textDecoration: 'none', fontWeight: '500',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--accent-gold)';
          e.currentTarget.style.color = '#ffffff';
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

  return (
    <Reveal>
      <section id="pricelist" style={{
        padding: '120px 5% 80px 5%',
        /* ✅ Gradasi memudar: Putih (atas) -> Krem (tengah) -> Putih (bawah) */
        background: 'linear-gradient(to bottom, #ffffff 0%, #faf8ef 15%, #faf8ef 85%, #ffffff 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        scrollMarginTop: '100px'
      }}>
        <div style={{ textAlign: 'center', width: '100%', maxWidth: '1200px' }}>
          <h2 className="font-luxury" style={{
            fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
            color: '#d5a15c', 
            marginBottom: '20px'
          }}>
            Recovery <span style={{ color: '#d5a15c', fontStyle: 'italic' }}>Pricelist</span>
          </h2>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: '1.8',
            color: '#2c2c2c', maxWidth: '800px', opacity: '0.8',
            fontWeight: '300', margin: '0 auto 60px auto'
          }}>
            "Your recovery starts with the right choice. Find the session, pass or membership that fits your journey at Uluwatu Sunset Hills Recovery"
          </p>
        </div>

        <div
          className="pricelist-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '30px',
            width: '100%',
            maxWidth: '1200px',
          }}
        >
          {plans.map((item, index) => (
            <div
              key={index}
              className="pricelist-card-wrap"
              style={{
                gridColumn: index < 4 ? 'span 3' : 'span 4',
              }}
            >
              <PriceCard item={item} />
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 640px) {
          .pricelist-grid { gap: 16px !important; grid-template-columns: 1fr !important; }
          .pricelist-card-wrap { grid-column: span 1 !important; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .pricelist-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .pricelist-card-wrap { grid-column: span 1 !important; }
        }
      `}</style>
    </Reveal>
  );
}