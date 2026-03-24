import type { ServicesPage } from "../definitions";
import { cldImages } from "../publicAssets";

import { commercialAndResidentialPainting } from "./subCategories/commercialAndResidentialPainting";
import { rendering } from "./subCategories/rendering";
import { siliconeAndCaulking } from "./subCategories/siliconeAndCaulking";

export const SERVICES_PAGE = {
  commercialAndResidentialPainting: {
    slug: "commercial-and-residential-painting",
    label: "Commercial And Residential Painting",
    image: [cldImages.services.commercialAndResidentialPainting],
    labelFarsi: "رنگ‌آمیزی تجاری و مسکونی",
    description: [
      "Professional painting services for residential and commercial properties across Victoria, including new builds, apartments, houses, repaints, and maintenance work.",
    ] as const,
    subcategories: commercialAndResidentialPainting,
  },

  rendering: {
    slug: "rendering-services",
    label: "Rendering Services",
    image: [cldImages.services.rendering],
    labelFarsi: "خدمات رندرینگ",
    description: [
      "Quality rendering services for new homes, apartments, commercial projects, renovations, and repair works with clean finishes and reliable workmanship.",
    ] as const,
    subcategories: rendering,
  },

  siliconeAndCaulking: {
    slug: "silicone-and-caulking-services",
    label: "Silicone And Caulking Services",
    image: [cldImages.services.siliconeAndCaulking],
    labelFarsi: "خدمات سیلیکون و کالکینگ",
    description: [
      "Professional silicone and caulking services for bathrooms, kitchens, windows, facades, apartments, commercial sites, and maintenance projects.",
    ] as const,
    subcategories: siliconeAndCaulking,
  },
} as const satisfies Record<string, ServicesPage>;
