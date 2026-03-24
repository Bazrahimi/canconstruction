import type { ServiceSubCategory } from "../../definitions";

export const siliconeAndCaulking = {
  overview: {
    label: "Silicone And Caulking Overview",
    labelFarsi: "معرفی سیلیکون و کالکینگ",
    image: [],
    description: [
      "We provide silicone and caulking services for residential and commercial projects, helping seal joints, improve finishes, and support long-term protection against moisture and movement.",
    ],
    items: [
      "New homes",
      "Apartments and units",
      "Bathrooms and kitchens",
      "Windows and doors",
      "Commercial fit-outs",
      "Maintenance and repair works",
    ] as const,
  },

  internalSealing: {
    label: "Internal Silicone And Caulking",
    labelFarsi: "سیلیکون و کالکینگ داخلی",
    image: [],
    description: [
      "Internal sealing services for wet areas, trims, joints, and internal finishes requiring a neat and durable seal.",
    ],
    items: [
      "Bathrooms",
      "Kitchens",
      "Laundry areas",
      "Skirtings and trims",
      "Internal corners and joints",
      "Apartment fit-outs",
    ] as const,
  },

  externalSealing: {
    label: "External Silicone And Caulking",
    labelFarsi: "سیلیکون و کالکینگ خارجی",
    image: [],
    description: [
      "External caulking and silicone work helps protect buildings from weather penetration while improving finish quality around openings and facade joints.",
    ],
    items: [
      "Windows and door frames",
      "Facade joints",
      "Expansion joints",
      "External cladding edges",
      "Perimeter sealing",
      "Weather-exposed surfaces",
    ] as const,
  },

  newBuildAndApartments: {
    label: "New Builds, Apartments And Project Work",
    labelFarsi: "نوساز، آپارتمان و کارهای پروژه‌ای",
    image: [],
    description: [
      "We work across new construction sites, apartment developments, and project-based jobs requiring consistent sealing and finishing work.",
    ],
    items: [
      "New house sealing",
      "Apartment projects",
      "Unit developments",
      "Commercial site work",
      "Fit-off stage sealing",
      "Defect rectification works",
    ] as const,
  },

  maintenanceAndRepairs: {
    label: "Maintenance And Resealing",
    labelFarsi: "نگهداری و سیلیکون‌کاری مجدد",
    image: [],
    description: [
      "Old, cracked, or deteriorated sealant can be removed and replaced to improve waterproofing, presentation, and long-term durability.",
    ],
    items: [
      "Removal of old sealant",
      "Resealing bathrooms and kitchens",
      "Joint maintenance",
      "Cracked caulking replacement",
      "Moisture-prone area sealing",
      "Ongoing maintenance works",
    ] as const,
  },
} as const satisfies ServiceSubCategory;
