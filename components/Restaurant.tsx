"use client";

import Link from "next/link";

export default function Restaurant() {
  return (
    <section
      id="restaurant"
      style={{
        position: "relative",
        padding: "140px 5%",
        backgroundImage: `
          linear-gradient(to bottom, var(--bg-ocean) 0%, rgba(10, 15, 30, 0.70) 35%, rgba(10, 15, 30, 0.70) 65%, var(--bg-ocean) 100%),
          url("/images/bg/bg-resto.png")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        textAlign: "center",
      }}
    >
      {/* KONTEN UTAMA RESTAURANT */}
      <div style={{ width: "100%", maxWidth: "900px", zIndex: 2 }}>
        
        <h2
          className="font-luxury"
          style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", color: "var(--text-light)", marginBottom: "30px" }}
        >
          Prana <span style={{ color: "var(--accent-sunset)", fontStyle: "italic" }}>Restaurant</span>
        </h2>

        {/* Garis Pemisah Atas */}
        <div style={{ width: "100px", height: "3px", backgroundColor: "var(--accent-gold)", margin: "0 auto 25px auto" }} />

        <p
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
            lineHeight: 1.8,
            color: "var(--text-light)",
            opacity: 0.9,
            fontWeight: 300,
            marginBottom: "30px",
          }}
        >
          Our restaurant features plant-based and vegetarian delights that will feed your soul and make your tastebuds come alive with exciting new fresh flavors! We feel food can be delicious without compromising its nutritional value. Please Enjoy!!
        </p>

        {/* Garis Pemisah Bawah */}
        <div style={{ width: "100px", height: "3px", backgroundColor: "var(--accent-gold)", margin: "0 auto 40px auto" }} />

        {/* JAM OPERASIONAL */}
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginBottom: "40px" }}>
          <div>
            <h3 className="font-luxury" style={{ fontSize: "1.4rem", color: "var(--accent-gold)", letterSpacing: "1px" }}>
              BREAKFAST
            </h3>
            <p style={{ fontSize: "1rem", opacity: 0.85, marginTop: "4px" }}>8AM - 11AM</p>
          </div>
          
          <div style={{ marginTop: "5px" }}>
            <h3 className="font-luxury" style={{ fontSize: "1.3rem", color: "var(--accent-gold)", letterSpacing: "1px" }}>
              LUNCH ~ DINNER ~ GRAZING PLATTERS
            </h3>
            <p style={{ fontSize: "1rem", opacity: 0.85, marginTop: "4px" }}>12PM - 8PM</p>
          </div>
        </div>

        {/* TOMBOL MENU LENGKAP */}
        <div style={{ marginBottom: "20px" }}>
          <Link
            href="/restaurant"
            style={{
              display: "inline-block",
              padding: "16px 45px",
              backgroundColor: "var(--accent-gold)",
              color: "#070a14",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              fontSize: "0.9rem",
              borderRadius: "6px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Explore Complete Menu →
          </Link>
        </div>

        <p style={{ fontSize: "0.8rem", opacity: 0.6, fontStyle: "italic", marginTop: "20px" }}>
          Prices are subject to Government TAX 10% + 5% service charge.
        </p>

      </div>
    </section>
  );
}