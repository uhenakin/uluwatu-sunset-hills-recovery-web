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
      <section id="about" className="responsive-section-vh" style={{
        background: 'linear-gradient(to bottom, #ffffff 0%, #faf8ef 15%, #faf8ef 85%, #ffffff 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative'
      }}>

        <h2 className="font-luxury about-title" style={{
          color: '#d5a15c', 
          marginBottom: '30px',
          textShadow: 'none'
        }}>
          The <span style={{ color: '#d5a15c', fontStyle: 'italic' }}>Sanctuary</span>
        </h2>

        <div style={{
          width: '100%',
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <p className="about-text">
            Uluwatu Sunset Hills Recovery is a premium recovery and relaxation destination, perched atop the cliffs of Uluwatu, Bali, overlooking the Indian Ocean. 
          </p>
          <p className="about-text"> 
            Born from the need for a quality sanctuary amid modern lifestyle demands, we provide a holistic space to restore your body and mind — set apart from the noise below, where the ocean air and open sky become part of the recovery itself.
          </p>
          <p className="about-text">
            Our approach combines the benefits of warm water immersion, sauna therapy, and ice baths to support your recovery journey. Immerse yourself in our signature contrast therapy, unwind in our hotpool, and restore your inner balance with treatments tailored to you.
          </p>
        </div>

        <div
          className="about-stats"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            flexWrap: 'wrap',
            gap: '0',
            marginTop: '60px',
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
                borderLeft: index === 0 ? 'none' : '1px solid rgba(213, 161, 92, 0.3)',
              }}
            >
              <span className="font-luxury" style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
                color: '#d5a15c',
                lineHeight: '1',
                marginBottom: '8px',
              }}>
                {stat.value}
              </span>
              <span style={{
                fontSize: '0.65rem',
                letterSpacing: '2px',
                color: '#2c2c2c',
                opacity: '0.8',
                fontWeight: '600',
                textTransform: 'uppercase',
              }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </section>

      <style jsx>{`
        .responsive-section-vh {
          padding: 140px 5% 100px 5%;
          scroll-margin-top: 80px;
          min-height: 100vh;
        }

        .about-title {
          font-size: clamp(3rem, 6vw, 4.5rem);
        }
        
        .about-text {
          font-size: clamp(1rem, 2vw, 1.25rem);
          line-height: 2;
          color: #2c2c2c;
          opacity: 0.9;
          font-weight: 400;
          text-align: justify !important;
          text-align-last: center !important;
        }

        @media (max-width: 768px) {
          /* ✅ Di HP jarak atas juga diperkecil agar mendekat ke Hero */
          .responsive-section-vh {
            padding: 40px 5% 60px 5%;
            scroll-margin-top: 70px;
            min-height: auto;
          }

          .about-title {
            font-size: 2.1rem !important;
            margin-bottom: 20px !important;
          }
          .about-text {
            font-size: 0.88rem !important;
            line-height: 1.6 !important;
            text-align: center !important;
            text-align-last: center !important;
            padding: 0 15px;
          }
          .about-stats {
            gap: 20px 0 !important;
            margin-top: 40px !important;
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
            border-top: 1px solid rgba(213, 161, 92, 0.3);
            padding-top: 15px !important;
          }
        }
      `}</style>
    </Reveal>
  );
}