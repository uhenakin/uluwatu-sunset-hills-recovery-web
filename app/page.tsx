import About from "../components/About";
import Recovery from "../components/Recovery";
import Pricelist from "../components/Pricelist";
import Restaurant from "../components/Restaurant";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      {/* SECTION 1: HERO */}
      <section className="hero-section">
        <h1 className="hero-title font-luxury" style={{ color: '#ffffff' }}>
          Uluwatu Sunset Hills <br />
          <span style={{ color: 'var(--accent-sunset)', fontStyle: 'italic' }}>Recovery</span>
        </h1>
        <p className="hero-desc">
          Elevate your physical and mental wellbeing at Uluwatu's most exclusive recovery sanctuary. Ice baths, saunas, and holistic therapies await.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            Book a Session
          </a>
          <a href="#about" className="btn-secondary">
            Discover More
          </a>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <About />

      {/* SECTION 3: RECOVERY */}
      <Recovery />

      {/* SECTION 4: PRICELIST */}
      <Pricelist />

      {/* SECTION 5: RESTAURANT */}
      <Restaurant />

      {/* SECTION 6: CONTACT */}
      <Contact />
      
    </main>
  );
}