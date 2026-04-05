//app/_lib/org/org-profile.ts

import { CtaKey } from "../content/cta";
import { OtherLanguageKey } from "../languages/multiculturalStatement";
import type { TeamSection } from "./definitions";
import { publicAssets } from "./publicAssets";
import { ORG_INDUSTRY_SECTORS } from "./serviceArea";

const ORG_DOMAIN = "canconstruction.com.au" as const;
const orgName = "Can Construction Pty Ltd";
// const appName = "canconstruction";

export const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  // if (process.env.VERCEL_URL) {
  //   return `https://${appName}.demo.katebtech.com.au`;
  // }
  return `https://${ORG_DOMAIN}`;
};

export const ORG_PROFILE = {
  orgName: orgName,
  orgNameFarsi: "",
  industry: ORG_INDUSTRY_SECTORS.BUILDING.industry,
  subSector: ORG_INDUSTRY_SECTORS.BUILDING.Sectors.painting,
  description:
    "Professional painting, Silicon | Caulking, and rendering services across Victoria for residential and commercial projects.",
  // languages: ["EN", "HZ", "FA"] as const satisfies readonly LanguageKey[],
  otherLangKeys: [] as OtherLanguageKey[],
  domain: ORG_DOMAIN,
  email: `info@${ORG_DOMAIN}`,
  phone: "0404 148 009",
  address: "2 Faldo Place, Cranbourne VIC 3977",
  abn: "37 649 729 395",
  cta: "freeQuote" as CtaKey,
  primaryColor: "#1f1f1f",
  secondaryColor: "#cfa428",
} as const;

export const ABOUT_TEAM: TeamSection = {
  id: "team",
  title: "Our Team",
  professionalTitles: [
    "Painting Contractors",
    "Rendering Contractors",
    "Silicone and Caulking Specialists",
    "Residential and Commercial Finishes",
  ],
  intro: `${ORG_PROFILE.orgName} is backed by practical construction experience and a strong commitment to quality workmanship across residential and commercial projects in Victoria.`,
  members: [
    {
      name: "Zia Noyan",
      role: "Director",
      image: publicAssets.team.placeholder,
      bio: "Zia Noyan is the Director of CAN Construction and brings extensive experience across construction, painting, rendering, and finishing works. He is committed to delivering reliable service, quality workmanship, and professional results across residential and commercial projects.",
    },
  ],
} as const;


export const SOCIAL_MEDIA = {
  facebook: "faceboo.com",
  instagram: "tiktok.com",
  tiktok: "", // leave empty or undefined if not used
} as const;
