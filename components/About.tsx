import Reveal from "./Reveal";

export default function About() {
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
            Uluwatu Sunset Hills Recovery is located at the peak of the Padang Padang Hills, overlooking the deep blue waters of the Indian Ocean. Comprising thirteen private villas, each with ocean views, 365 days of sunsets, and all you could want at your fingertips.
          </p>

          <p style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
            lineHeight: '2', 
            color: 'var(--text-light)', 
            opacity: '0.9',
            fontWeight: '300'
          }}>
            Beyond our breathtaking surroundings, we offer a world-class holistic recovery experience designed to rejuvenate your mind, body, and soul. Immerse yourself in our signature contrast therapy featuring premium ice baths and traditional saunas, unwind in our mineral-rich hot pools, and restore your inner balance with bespoke wellness treatments.
          </p>

        </div>
        
      </section>
    </Reveal>
  );
}