"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <Link href="/" onClick={closeMenu} className="navbar-logo">
          <img src="/images/logo/logo-new.png" alt="Uluwatu Sunset Hills" />
        </Link>

        <div className="nav-desktop-menu">
          <Link href="/#about">About</Link>
          <Link href="/#recovery">Recovery</Link>
          <Link href="/#pricelist">Pricelist</Link>
          <Link href="/#restaurant">Restaurant</Link>
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

      {/* Overlay gelap di belakang */}
      <div 
        className={`nav-overlay ${isOpen ? "open" : ""}`}
        onClick={closeMenu}
      />

      {/* Menu setengah layar (slide dari kanan) */}
      <div className={`nav-mobile-menu ${isOpen ? "open" : ""}`}>
        {/* Tombol X */}
        <button className="nav-close-btn" onClick={closeMenu} aria-label="Close menu">
          <span className="close-line"></span>
          <span className="close-line"></span>
        </button>

        <div className="nav-mobile-content">
          <Link href="/#about" onClick={closeMenu} className="mobile-link">About</Link>
          <Link href="/#recovery" onClick={closeMenu} className="mobile-link">Recovery</Link>
          <Link href="/#pricelist" onClick={closeMenu} className="mobile-link">Pricelist</Link>
          <Link href="/#restaurant" onClick={closeMenu} className="mobile-link">Restaurant</Link>

          <Link href="/#contact" onClick={closeMenu} className="btn-book-mobile">
            Book Your Visit
          </Link>
        </div>
      </div>
    </>
  );
}