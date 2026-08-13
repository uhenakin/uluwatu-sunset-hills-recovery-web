"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; 
import Image from "next/image"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter(); 
  const isHome = pathname === "/";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const handleNav = (sectionId: string) => {
    closeMenu();
    if (isHome) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    closeMenu();
    router.push('/'); 
    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <nav className="navbar" style={{ backgroundColor: "rgba(250, 248, 239, 0.9)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(213, 161, 92, 0.2)" }}>
        <Link href="/" onClick={handleLogoClick} className="navbar-logo">
          
          <div style={{ 
            position: 'relative', 
            height: '58px', 
            width: 'auto', 
            aspectRatio: '1 / 1',
            cursor: 'pointer', 
            pointerEvents: 'auto' 
          }}>
            <Image
              src="/images/logo/logo-new.webp"
              alt="Uluwatu Sunset Hills"
              fill={true}
              priority={true}
              sizes="58px"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </Link>

        <div className="nav-desktop-menu">
          <button onClick={() => handleNav("about")} className="nav-link-btn" style={{ color: "#2c2c2c" }}>About</button>
          <button onClick={() => handleNav("recovery")} className="nav-link-btn" style={{ color: "#2c2c2c" }}>Recovery</button>
          <button onClick={() => handleNav("pricelist")} className="nav-link-btn" style={{ color: "#2c2c2c" }}>Pricelist</button>
          <button onClick={() => handleNav("restaurant")} className="nav-link-btn" style={{ color: "#2c2c2c" }}>Restaurant</button>
          <Link href="/#contact" className="btn-book" style={{ backgroundColor: "#d5a15c", color: "#ffffff", border: "1px solid #d5a15c" }}>Book Now</Link>
        </div>

        <button
          className={`nav-hamburger-btn ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          type="button"
          style={{ color: "#2c2c2c" }}
        >
          <span className="hamburger-line" style={{ backgroundColor: "#2c2c2c" }} />
          <span className="hamburger-line" style={{ backgroundColor: "#2c2c2c" }} />
          <span className="hamburger-line" style={{ backgroundColor: "#2c2c2c" }} />
        </button>
      </nav>

      <div className={`nav-overlay ${isOpen ? "open" : ""}`} onClick={closeMenu} />

      <div className={`nav-mobile-menu ${isOpen ? "open" : ""}`} style={{ backgroundColor: "#faf8ef" }}>
        <button className="nav-close-btn" onClick={closeMenu} aria-label="Close menu">
          <span className="close-line" style={{ backgroundColor: "#2c2c2c" }} />
          <span className="close-line" style={{ backgroundColor: "#2c2c2c" }} />
        </button>
        <div className="nav-mobile-content">
          <button onClick={() => handleNav("about")} className="mobile-link" style={{ color: "#2c2c2c" }}>About</button>
          <button onClick={() => handleNav("recovery")} className="mobile-link" style={{ color: "#2c2c2c" }}>Recovery</button>
          <button onClick={() => handleNav("pricelist")} className="mobile-link" style={{ color: "#2c2c2c" }}>Pricelist</button>
          <button onClick={() => handleNav("restaurant")} className="mobile-link" style={{ color: "#2c2c2c" }}>Restaurant</button>
          <Link href="/#contact" onClick={closeMenu} className="btn-book-mobile" style={{ backgroundColor: "#d5a15c", color: "#ffffff" }}>Book Your Visit</Link>
        </div>
      </div>
    </>
  );
}