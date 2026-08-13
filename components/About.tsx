"use client";

import Reveal from "./Reveal";

export default function About() {
  const stats = [
    { value: "6°", label: "Ice Bath" },
    { value: "40°", label: "Hot Pool" },
    { value: "12m", label: "Swimming Pool" },
    { value: "80°", label: "Sauna" },
  ];

  return (
    <Reveal>
      <section id="about" style={{
        minHeight: '100vh',
        padding: '120px 5%',
        backgroundColor: 'var(--bg-ocean)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative'
      }}>

        <h2 className="font-luxury" style={{
          fontSize: 'clamp(3rem, 6vw, 4.5rem)',
          color: 'var(--text-light)',
          marginBottom: '40px'
        }}>
          The <span style={{ color: 'var(--accent-sunset)', fontStyle: 'italic' }}>Sanctuary</span>
        </h2>

        <div style={{
          maxWidth: '900px',
          display: 'flex',
          flexDirection: 'column',
          gap: '25px'
        }}>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            lineHeight: '2',
            color: 'var(--text-light)',
            opacity: '0.9',
            fontWeight: '300'
          }}>
            Uluwatu Sunset Hills Recovery is a premium recovery and relaxation destination, perched atop the cliffs of Uluwatu, Bali, overlooking the Indian Ocean. Born from the need for a quality sanctuary amid modern lifestyle demands, we provide a holistic space to restore your body and mind — set apart from the noise below, where the ocean air and open sky become part of the recovery itself.
          </p>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            lineHeight: '2',
            color: 'var(--text-light)',
            opacity: '0.9',
            fontWeight: '300'
          }}>
            Our approach combines the benefits of warm water immersion, sauna therapy, and ice baths to support your recovery journey. Immerse yourself in our signature contrast therapy, unwind in our hotpool, and restore your inner balance with treatments tailored to you.
          </p>

        </div>

        {/* ============ HIGHLIGHT STATS ============ */}
        <div
          className="about-stats"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            flexWrap: 'wrap',
            gap: '0',
            marginTop: '70px',
            width: '100%',
            maxWidth: '860px',
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="about-stat-item"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flex: '1 1 0',
                minWidth: '130px',
                padding: '10px 24px',
                borderLeft: index === 0 ? 'none' : '1px solid rgba(226, 176, 101, 0.2)',
              }}
            >
              <span className="font-luxury" style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                color: 'var(--accent-gold)',
                lineHeight: '1',
                marginBottom: '10px',
              }}>
                {stat.value}
              </span>
              <span style={{
                fontSize: '0.7rem',
                letterSpacing: '2px',
                color: 'var(--text-light)',
                opacity: '0.6',
                fontWeight: '500',
                textTransform: 'uppercase',
              }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </section>

      <style jsx>{`
        @media (max-width: 640px) {
          .about-stats {
            gap: 20px 0 !important;
          }
          .about-stat-item {
            flex: 1 1 40% !important;
            min-width: 40% !important;
          }
          .about-stat-item:nth-child(1),
          .about-stat-item:nth-child(3),
          .about-stat-item:nth-child(5) {
            border-left: none !important;
          }
          .about-stat-item:nth-child(n+3) {
            border-top: 1px solid rgba(226, 176, 101, 0.2);
            padding-top: 20px !important;
          }
        }
      `}</style>
    </Reveal>
  );
}