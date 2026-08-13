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
      <nav className="navbar" style={{ backgroundColor: "rgba(250, 248, 239, 0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(213, 161, 92, 0.25)" }}>
        <Link href="/" onClick={handleLogoClick} className="navbar-logo">
          
          <div className="logo-container" style={{ 
            position: 'relative', 
            height: '86px', /* Logo desktop/tablet tetap megah */
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
              sizes="86px"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </Link>

        <div className="nav-desktop-menu">
          <button onClick={() => handleNav("about")} className="nav-link-btn" style={{ color: "#2c2c2c" }}>About</button>
          <button onClick={() => handleNav("recovery")} className="nav-link-btn" style={{ color: "#2c2c2c" }}>Recovery</button>
          <button onClick={() => handleNav("pricelist")} className="nav-link-btn" style={{ color: "#2c2c2c" }}>Pricelist</button>
          <button onClick={() => handleNav("restaurant")} className="nav-link-btn" style={{ color: "#2c2c2c" }}>Restaurant</button>
          
          <button onClick={() => handleNav("contact")} className="btn-book-alive" style={{ cursor: 'pointer' }}>Book Now</button>
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
          
          <button onClick={() => handleNav("contact")} className="btn-book-mobile btn-book-alive" style={{ cursor: 'pointer', width: '100%', marginTop: '36px' }}>Book Your Visit</button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          padding: 20px 5% !important;
        }

        .nav-desktop-menu {
          gap: 42px !important;
        }

        .nav-link-btn {
          font-size: 1.05rem !important;
          letter-spacing: 1.5px !important;
          font-weight: 500;
        }

        .btn-book-alive {
          background-color: #d5a15c;
          color: #ffffff;
          border: 1px solid #d5a15c;
          padding: 12px 28px;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border-radius: 4px;
          box-shadow: 0 4px 15px rgba(213, 161, 92, 0.35);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: pulse-gold-nav 2s infinite;
        }

        .btn-book-alive:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 25px rgba(213, 161, 92, 0.55);
          background-color: #c4904a;
          animation: none;
        }

        @keyframes pulse-gold-nav {
          0% {
            box-shadow: 0 0 0 0 rgba(213, 161, 92, 0.6);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(213, 161, 92, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(213, 161, 92, 0);
          }
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 14px 5% !important;
          }
          .logo-container {
            height: 48px !important; /* ✅ Logo mobile disesuaikan menjadi 48px agar tidak terlalu besar */
            width: 48px !important;
          }
        }
      `}</style>
    </>
  );
}