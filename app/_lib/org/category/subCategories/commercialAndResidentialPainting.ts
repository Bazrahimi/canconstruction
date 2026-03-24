import type { ServiceSubCategory } from "../../definitions";

export const commercialAndResidentialPainting = {
  overview: {
    label: "Painting Services Overview",
    labelFarsi: "معرفی خدمات رنگ‌آمیزی",
    image: [],
    description: [
      "We provide commercial and residential painting services for new builds, houses, apartments, renovations, and maintenance projects across Victoria.",
    ],
    items: [
      "New houses",
      "Apartments and units",
      "Townhouses",
      "Commercial buildings",
      "Renovation projects",
      "Maintenance and repaint works",
    ] as const,
  },

  residentialPainting: {
    label: "Residential Painting",
    labelFarsi: "رنگ‌آمیزی مسکونی",
    image: [],
    description: [
      "Residential painting services designed to improve presentation, protect surfaces, and deliver clean interior and exterior finishes for homes of all sizes.",
    ],
    items: [
      "Interior house painting",
      "Exterior house painting",
      "New home painting",
      "Apartment and unit painting",
      "Walls, ceilings, doors, and trims",
      "Repaints and touch-ups",
    ] as const,
  },

  commercialPainting: {
    label: "Commercial Painting",
    labelFarsi: "رنگ‌آمیزی تجاری",
    image: [],
    description: [
      "Commercial painting solutions for business premises, shared buildings, and project sites requiring durable coatings and reliable delivery.",
    ],
    items: [
      "Office painting",
      "Retail shop painting",
      "Warehouse painting",
      "Common area painting",
      "Apartment complex painting",
      "Commercial repaint and maintenance works",
    ] as const,
  },

  newBuildsAndMaintenance: {
    label: "New Builds, Repaints & Maintenance",
    labelFarsi: "ساختمان‌های نوساز، رنگ مجدد و نگهداری",
    image: [],
    description: [
      "We work across both new construction and existing properties, providing complete paint systems or smaller maintenance-based refresh works.",
    ],
    items: [
      "New build painting",
      "Final coat application",
      "Maintenance painting",
      "End-of-project touch-ups",
      "Rental property repainting",
      "Ongoing property upkeep",
    ] as const,
  },

  preparationAndFinishes: {
    label: "Preparation And Finishing",
    labelFarsi: "آماده‌سازی و فینیش نهایی",
    image: [],
    description: [
      "Proper preparation and finishing are essential for a long-lasting, professional paint result on residential and commercial projects.",
    ],
    items: [
      "Surface cleaning",
      "Sanding and patching",
      "Gap filling and sealing",
      "Priming and undercoating",
      "Smooth top coats",
      "Clean and even final presentation",
    ] as const,
  },
} as const satisfies ServiceSubCategory;