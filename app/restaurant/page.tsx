export default function CompleteMenuPage() {
  // Array otomatis dari angka 1 sampai 19
  const menuImages = Array.from({ length: 19 }, (_, i) => `/images/restaurant/${i + 1}.jpg`);

  return (
    <main style={{ backgroundColor: "#070a14", minHeight: "100vh", padding: "80px 20px", textAlign: "center" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Daftar Foto Menu Berurutan dari 1 sampai 19 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          {menuImages.map((src, index) => (
            <div 
              key={index}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                border: "1px solid rgba(226, 176, 101, 0.2)"
              }}
            >
              <img 
                src={src} 
                alt={`Menu Page ${index + 1}`} 
                style={{ 
                  width: "100%", 
                  height: "auto", 
                  display: "block" 
                }} 
              />
            </div>
          ))}
        </div>

        {/* Tombol Kembali ke Beranda */}
        <div style={{ marginTop: "60px" }}>
          <a
            href="/"
            style={{
              display: "inline-block",
              padding: "14px 35px",
              backgroundColor: "var(--accent-gold)",
              color: "#070a14",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              borderRadius: "6px",
            }}
          >
            ← Back to Home
          </a>
        </div>

      </div>
    </main>
  );
}