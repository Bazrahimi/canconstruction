import type { ServiceSubCategory } from "../../definitions";

export const rendering = {
  overview: {
    label: "Rendering Services Overview",
    labelFarsi: "معرفی خدمات رندرینگ",
    image: [],
    description: [
      "We provide rendering services for residential and commercial properties, including new builds, apartment projects, renovations, and repair works.",
    ],
    items: [
      "New homes",
      "Townhouses",
      "Apartments",
      "Commercial projects",
      "Renovations",
      "Repair and maintenance work",
    ] as const,
  },

  residentialRendering: {
    label: "Residential Rendering",
    labelFarsi: "رندرینگ مسکونی",
    image: [],
    description: [
      "Residential rendering helps improve the appearance, durability, and finish of homes, extensions, and outdoor walls.",
    ],
    items: [
      "New house rendering",
      "Boundary and feature walls",
      "Extensions and additions",
      "Front facades",
      "Garden and outdoor walls",
      "Repair and patch rendering",
    ] as const,
  },

  commercialRendering: {
    label: "Commercial Rendering",
    labelFarsi: "رندرینگ تجاری",
    image: [],
    description: [
      "Commercial rendering services for larger building projects requiring neat finishes, reliable site work, and consistent application.",
    ],
    items: [
      "Apartment rendering",
      "Commercial building facades",
      "Retail and mixed-use projects",
      "Strata and common areas",
      "Project-based rendering work",
      "Large-scale repair sections",
    ] as const,
  },

  finishesAndApplications: {
    label: "Render Finishes And Applications",
    labelFarsi: "فینیش‌ها و کاربردهای رندر",
    image: [],
    description: [
      "Different rendering finishes can be applied to suit the project style, substrate, and required presentation.",
    ],
    items: [
      "Smooth render finishes",
      "Textured render finishes",
      "Exterior render application",
      "Facade upgrades",
      "Protective surface coating base",
      "Modern visual finishes",
    ] as const,
  },

  newBuildAndRepairRender: {
    label: "New Build And Repair Rendering",
    labelFarsi: "رندرینگ نوساز و ترمیمی",
    image: [],
    description: [
      "We handle both full render applications for new projects and repair work for damaged or aged rendered surfaces.",
    ],
    items: [
      "New build render systems",
      "Patch repairs",
      "Damaged wall restoration",
      "Crack repair preparation",
      "Surface levelling",
      "Maintenance render works",
    ] as const,
  },
} as const satisfies ServiceSubCategory;