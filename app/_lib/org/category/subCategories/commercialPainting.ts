import type { ServiceSubCategory } from "../../definitions";

export const commercialPainting = {
  overview: {
    label: "Commercial Painting Overview",
    labelFarsi: "معرفی رنگ‌آمیزی تجاری",
    image: [],
    description: [
      "Commercial painting services for business properties that require efficient delivery, professional finishes, and durable coatings.",
    ],
    items: [
      "Offices",
      "Retail shops",
      "Warehouses",
      "Factories",
      "Schools and centres",
      "Strata and common areas",
    ] as const,
  },

  interiorCommercial: {
    label: "Commercial Interior Painting",
    labelFarsi: "رنگ‌آمیزی داخلی تجاری",
    image: [],
    description: [
      "Interior painting solutions for commercial spaces that support a clean, professional environment for staff, customers, and tenants.",
    ],
    items: [
      "Office interiors",
      "Reception areas",
      "Retail fit-outs",
      "Meeting rooms",
      "Hallways and stairwells",
      "Tenancy refreshes",
    ] as const,
  },

  exteriorCommercial: {
    label: "Commercial Exterior Painting",
    labelFarsi: "رنگ‌آمیزی خارجی تجاری",
    image: [],
    description: [
      "Exterior commercial painting for buildings that need weather protection, a strong visual presentation, and reduced maintenance issues.",
    ],
    items: [
      "Shopfronts",
      "Building facades",
      "External cladding",
      "Rendered walls",
      "Metal surfaces",
      "Strata exteriors",
    ] as const,
  },

  scheduledWorks: {
    label: "Project Delivery & Flexible Scheduling",
    labelFarsi: "اجرای پروژه و زمان‌بندی منعطف",
    image: [],
    description: [
      "Commercial work often needs planning around business operations, access requirements, and project deadlines.",
    ],
    items: [
      "After-hours availability",
      "Weekend works where required",
      "Staged painting programs",
      "Minimal disruption approach",
      "Site-safe work practices",
      "Clear communication throughout the job",
    ] as const,
  },

  coatingsDurability: {
    label: "Durable Coatings & Long-Term Value",
    labelFarsi: "پوشش‌های بادوام و ارزش بلندمدت",
    image: [],
    description: [
      "We use suitable systems and preparation methods to deliver finishes that look professional and hold up in busy environments.",
    ],
    items: [
      "High-traffic area coatings",
      "Washable finishes",
      "Protective paint systems",
      "Consistent colour application",
      "Surface preparation for longevity",
      "Maintenance-friendly results",
    ] as const,
  },
} as const satisfies ServiceSubCategory;