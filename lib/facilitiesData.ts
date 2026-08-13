export type Facility = {
  slug: string;
  route: string;
  title: string;
  tagline: string;
  cardImage: string;
  heroImage: string;
  benefits: { title: string; desc: string }[];
  gallery: string[];
};

export const facilitiesData: Record<string, Facility> = {
  sauna: {
    slug: "sauna",
    route: "/sauna",
    title: "Sauna",
    tagline: "Wood-fired heat, the old way — detoxify and unwind.",
    cardImage: "/images/card/sauna.webp", // ✅ DIUBAH KE WEBP
    heroImage: "/images/sauna/bg-sauna.webp", // ✅ DIUBAH KE WEBP
    benefits: [
      { title: "Deep Detoxification", desc: "Dry heat opens pores and promotes sweating, helping flush toxins from the body." },
      { title: "Cardiovascular Boost", desc: "Regular sauna sessions raise heart rate similarly to light exercise, supporting circulation." },
      { title: "Muscle Relaxation", desc: "Heat penetrates deep into muscle tissue, easing tension built up from surf, training, or travel." },
      { title: "Better Sleep", desc: "The post-sauna drop in body temperature signals the body to wind down, improving sleep quality." },
    ],
    gallery: [
      "/images/sauna/sauna-1.webp", // ✅ DIUBAH KE WEBP
      "/images/sauna/sauna-2.webp", // ✅ DIUBAH KE WEBP
      "/images/sauna/sauna-3.webp", // ✅ DIUBAH KE WEBP
      "/images/sauna/sauna-4.webp", // ✅ DIUBAH KE WEBP
    ],
  },
  "ice-bath": {
    slug: "ice-bath",
    route: "/ice-bath",
    title: "Ice Bath",
    tagline: "Full-body cold immersion — reset the nervous system.",
    cardImage: "/images/card/icebath.webp", // ✅ DIUBAH KE WEBP
    heroImage: "/images/icebath/bg-icebath.webp", // ✅ DIUBAH KE WEBP
    benefits: [
      { title: "Reduced Inflammation", desc: "Cold exposure constricts blood vessels, helping to reduce swelling and muscle soreness." },
      { title: "Faster Recovery", desc: "Athletes use cold immersion to speed up recovery time between training sessions." },
      { title: "Mental Resilience", desc: "Guided breathing through the cold builds focus and stress tolerance over time." },
      { title: "Improved Circulation", desc: "The shift between cold and warm afterwards drives blood flow throughout the body." },
    ],
    gallery: [
      "/images/icebath/icebath-1.webp", // ✅ DIUBAH KE WEBP
      "/images/icebath/icebath-2.webp", // ✅ DIUBAH KE WEBP
      "/images/icebath/icebath-3.webp", // ✅ DIUBAH KE WEBP
      "/images/icebath/icebath-4.webp", // ✅ DIUBAH KE WEBP
    ],
  },
  "hot-pool": {
    slug: "hot-pool",
    route: "/hot-pool",
    title: "Hot Pool",
    tagline: "Therapeutic warmth for joints, muscles, and mind.",
    cardImage: "/images/card/hotpool.webp", // ✅ DIUBAH KE WEBP
    heroImage: "/images/hotpool/bg-hotpool.webp", // ✅ DIUBAH KE WEBP
    benefits: [
      { title: "Joint Relief", desc: "Warm mineral water eases stiffness and supports joint mobility." },
      { title: "Stress Reduction", desc: "The soothing heat lowers cortisol and encourages deep relaxation." },
      { title: "Restorative Sleep", desc: "A warm soak before bed helps prepare the body for deeper, more restful sleep." },
      { title: "Skin Nourishment", desc: "Mineral-rich water can help soften and nourish the skin with regular use." },
    ],
    gallery: [
      "/images/hotpool/hotpool-1.webp", // ✅ DIUBAH KE WEBP
      "/images/hotpool/hotpool-2.webp", // ✅ DIUBAH KE WEBP
      "/images/hotpool/hotpool-3.webp", // ✅ DIUBAH KE WEBP
      "/images/hotpool/hotpool-4.webp", // ✅ DIUBAH KE WEBP
    ],
  },
  "swimming-pool": {
    slug: "swimming-pool",
    route: "/swimming-pool",
    title: "Swimming Pool",
    tagline: "Crystal-clear water, framed by the ocean breeze.",
    cardImage: "/images/card/swimpool.webp", // ✅ DIUBAH KE WEBP
    heroImage: "/images/swimmingpool/bg-swimpool.webp", // ✅ DIUBAH KE WEBP
    benefits: [
      { title: "Low-Impact Movement", desc: "Swimming works the whole body while staying gentle on joints and tendons." },
      { title: "Active Recovery", desc: "A light swim keeps blood flowing without overloading tired muscles." },
      { title: "Mental Reset", desc: "Time in the water, framed by the cliffside view, offers a natural pause from the day." },
      { title: "Full-Body Conditioning", desc: "Regular laps build endurance and strength across the entire body." },
    ],
    gallery: [
      "/images/swimmingpool/swimpool-1.webp", // ✅ DIUBAH KE WEBP
      "/images/swimmingpool/swimpool-2.webp", // ✅ DIUBAH KE WEBP
      "/images/swimmingpool/swimpool-3.webp", // ✅ DIUBAH KE WEBP
      "/images/swimmingpool/swimpool-4.webp", // ✅ DIUBAH KE WEBP
    ],
  },
};

export const allFacilities = Object.values(facilitiesData);