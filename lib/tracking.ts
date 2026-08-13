// Helper tracking analytics, dipakai di page.tsx (page_view) dan Contact.tsx (click events)

const TRACK_URL = `${process.env.NEXT_PUBLIC_API_URL}/track`;

export function track(eventType: string, meta?: Record<string, unknown>) {
  try {
    fetch(TRACK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // wajib, biar cookie session "vid" ikut kekirim & diset
      keepalive: true, // request tetap jalan walau user langsung pindah tab/halaman
      body: JSON.stringify({
        event_type: eventType,
        path: window.location.pathname,
        meta: meta ?? null,
      }),
    }).catch(() => {
      // sengaja di-silent-kan: kalau tracking gagal, jangan ganggu pengalaman user
    });
  } catch {
    // no-op
  }
}