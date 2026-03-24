import type { ServiceSubCategory } from "../../definitions";

export const paintingMaintenance = {
  overview: {
    label: "Painting Maintenance Overview",
    labelFarsi: "معرفی نگهداری و ترمیم رنگ",
    image: [],
    description: [
      "Painting maintenance services help preserve presentation, address wear and tear, and extend the life of painted surfaces.",
    ],
    items: [
      "Residential maintenance",
      "Commercial maintenance",
      "Rental property touch-ups",
      "Strata upkeep",
      "Pre-sale refreshes",
      "Ongoing repaint programs",
    ] as const,
  },

  touchUpsRepainting: {
    label: "Touch-Ups & Repainting",
    labelFarsi: "ترمیم جزئی و رنگ‌آمیزی مجدد",
    image: [],
    description: [
      "Targeted touch-ups and repainting can restore appearance without always requiring a full repaint of the entire property.",
    ],
    items: [
      "Wall touch-ups",
      "Ceiling repainting",
      "Trim and door refreshes",
      "Colour matching where possible",
      "Patch painting",
      "End-of-lease refresh works",
    ] as const,
  },

  surfaceRepairs: {
    label: "Surface Repairs & Preparation",
    labelFarsi: "ترمیم سطوح و آماده‌سازی",
    image: [],
    description: [
      "Surface issues should be repaired properly before painting to achieve a cleaner finish and better paint performance.",
    ],
    items: [
      "Minor plaster patching",
      "Crack filling",
      "Peeling paint removal",
      "Sanding rough surfaces",
      "Gap sealing and caulking",
      "Priming repaired areas",
    ] as const,
  },

  protectiveMaintenance: {
    label: "Protective Maintenance Painting",
    labelFarsi: "رنگ‌آمیزی محافظتی و نگهداری",
    image: [],
    description: [
      "Regular maintenance painting helps protect surfaces from weather, moisture, age, and general wear in busy environments.",
    ],
    items: [
      "Exterior recoating",
      "Timber protection",
      "Fence and gate repainting",
      "Moisture-prone area recoating",
      "Weather-exposed surfaces",
      "Preventative maintenance works",
    ] as const,
  },

  propertyPresentation: {
    label: "Property Presentation Improvements",
    labelFarsi: "بهبود ظاهر ملک",
    image: [],
    description: [
      "Painting maintenance is also a practical way to improve presentation before sale, lease, inspection, or business reopening.",
    ],
    items: [
      "Pre-sale paint refresh",
      "Rental property presentation",
      "Office and shop refresh works",
      "Strata common area improvements",
      "Make-good painting",
      "General cosmetic upgrades",
    ] as const,
  },
} as const satisfies ServiceSubCategory;