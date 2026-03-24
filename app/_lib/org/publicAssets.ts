import type { ImageMeta } from "../definitions";
export const publicAssets = {
  images: {
    hero: `/images/hero.png`,
    ogImage: "/images/og_image.png",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  team: {
    placeholder: "images/team/avatar.svg",
  },
};

export const cldImages = {
  hero: {
    url: "v1773967486/business-f/building/painting/painting_living_area_fogs5y.jpg",
    alt: "",
  } as ImageMeta,
  services: {
    residentialPainting: {
      url: "v1774317481/business-f/building/painting/residential_painting_im8yzm.png",
      alt: "painting plaster walls ",
    } as ImageMeta,
    commercialPainting: {
      url: "v1774318061/business-f/building/painting/commerical_painting_qwxtao.png",
      alt: "Commercial Painting work",
    } as ImageMeta,
    paintingMaintenance: {
      url: "v1774318245/business-f/building/painting/patching_wall_fuqe5k.png",
      alt: "Patching walls",
    } as ImageMeta,
  },
};
