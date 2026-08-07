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
      <nav className="navbar">
        <Link href="/" onClick={handleLogoClick} className="navbar-logo">
          
          {/* ✅ HANYA LOGO (TANPA LINGKARAN PUTIH/HITAM) */}
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
              fill={true}          // Mengisi penuh div
              priority={true}      // Menghilangkan warning LCP
              sizes="58px"         // Menghilangkan warning missing sizes
              style={{ objectFit: 'contain' }}
            />
          </div>
        </Link>

        <div className="nav-desktop-menu">
          <button onClick={() => handleNav("about")} className="nav-link-btn">About</button>
          <button onClick={() => handleNav("recovery")} className="nav-link-btn">Recovery</button>
          <button onClick={() => handleNav("pricelist")} className="nav-link-btn">Pricelist</button>
          <button onClick={() => handleNav("restaurant")} className="nav-link-btn">Restaurant</button>
          <Link href="/#contact" className="btn-book">Book Now</Link>
        </div>

        <button
          className={`nav-hamburger-btn ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      <div className={`nav-overlay ${isOpen ? "open" : ""}`} onClick={closeMenu} />

      <div className={`nav-mobile-menu ${isOpen ? "open" : ""}`}>
        <button className="nav-close-btn" onClick={closeMenu} aria-label="Close menu">
          <span className="close-line" />
          <span className="close-line" />
        </button>
        <div className="nav-mobile-content">
          <button onClick={() => handleNav("about")} className="mobile-link">About</button>
          <button onClick={() => handleNav("recovery")} className="mobile-link">Recovery</button>
          <button onClick={() => handleNav("pricelist")} className="mobile-link">Pricelist</button>
          <button onClick={() => handleNav("restaurant")} className="mobile-link">Restaurant</button>
          <Link href="/#contact" onClick={closeMenu} className="btn-book-mobile">Book Your Visit</Link>
        </div>
      </div>
    </>
  );
}