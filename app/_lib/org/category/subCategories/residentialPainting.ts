import type { ServiceSubCategory } from "../../definitions";

export const residentialPainting = {
  overview: {
    label: "Residential Painting Overview",
    labelFarsi: "معرفی رنگ‌آمیزی مسکونی",
    image: [],
    description: [
      "Residential painting services designed to refresh, protect, and improve the appearance of homes with quality preparation and clean finishes.",
    ],
    items: [
      "Houses",
      "Units",
      "Townhouses",
      "Apartments",
      "Renovation projects",
      "New homes",
    ] as const,
  },

  interiorPainting: {
    label: "Interior House Painting",
    labelFarsi: "رنگ‌آمیزی داخلی خانه",
    image: [],
    description: [
      "Careful interior painting for living spaces with attention to surface preparation, clean lines, and durable coatings.",
    ],
    items: [
      "Walls and ceilings",
      "Bedrooms and living areas",
      "Kitchens and laundries",
      "Doors, frames, and trims",
      "Stairwells and hallways",
      "Feature walls",
    ] as const,
  },

  exteriorPainting: {
    label: "Exterior House Painting",
    labelFarsi: "رنگ‌آمیزی خارجی خانه",
    image: [],
    description: [
      "Exterior painting that helps protect the property from weather while improving street appeal and long-term presentation.",
    ],
    items: [
      "Exterior walls",
      "Weatherboards",
      "Rendered surfaces",
      "Fences and gates",
      "Pergolas and outdoor timber",
      "Garage doors and facades",
    ] as const,
  },

  preparationFinishes: {
    label: "Preparation & Finishing",
    labelFarsi: "آماده‌سازی و فینیش نهایی",
    image: [],
    description: [
      "Proper preparation is the foundation of a long-lasting paint job and a more even, professional finish.",
    ],
    items: [
      "Surface cleaning",
      "Gap filling and caulking",
      "Sanding and patching",
      "Undercoating and priming",
      "Colour consultation support",
      "Smooth and even top coats",
    ] as const,
  },

  whyChooseResidential: {
    label: "Why Choose Our Residential Painting",
    labelFarsi: "چرا رنگ‌آمیزی مسکونی ما",
    image: [],
    description: [
      "We focus on reliable workmanship, neat presentation, and finishes that suit the home and the owner's preferences.",
    ],
    items: [
      "Clean and respectful on-site work",
      "Attention to detail",
      "Quality paints and materials",
      "Interior and exterior expertise",
      "Work suited to occupied homes",
      "Free quote and clear communication",
    ] as const,
  },
} as const satisfies ServiceSubCategory;