import type { ServicesPage } from "../definitions";
import { cldImages } from "../publicAssets";

import { commercialPainting } from "./subCategories/commercialPainting";
import { paintingMaintenance } from "./subCategories/paintingMaintenance";
import { residentialPainting } from "./subCategories/residentialPainting";

export const SERVICES_PAGE = {
  residentialPainting: {
    slug: "residential-painting-and-decorating",
    label: "Residential Painting And Decorating",
    image: [cldImages.services.residentialPainting],
    labelFarsi: "رنگ‌آمیزی و دکوراسیون مسکونی",
    description: [
      "Interior and exterior residential painting services for homes, units, townhouses, and renovations across Melbourne’s south eastern suburbs.",
    ] as const,
    subcategories: residentialPainting,
  },

  commercialPainting: {
    slug: "commercial-painting-and-decorating",
    label: "Commercial Painting And Decorating",
    image: [cldImages.services.commercialPainting],
    labelFarsi: "رنگ‌آمیزی و دکوراسیون تجاری",
    description: [
      "Professional commercial painting for offices, shops, warehouses, strata properties, and business premises with durable finishes and reliable project delivery.",
    ] as const,
    subcategories: commercialPainting,
  },

  paintingMaintenance: {
    slug: "painting-maintenance-and-repairs",
    label: "Painting Maintenance And Repairs",
    image: [cldImages.services.paintingMaintenance],
    labelFarsi: "نگهداری و ترمیم رنگ",
    description: [
      "Painting maintenance, touch-ups, surface repairs, and protective recoating to keep residential and commercial properties looking clean and well maintained.",
    ] as const,
    subcategories: paintingMaintenance,
  },
} as const satisfies Record<string, ServicesPage>;
