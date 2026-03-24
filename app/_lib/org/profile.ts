//app/_lib/org/org-profile.ts

import { CtaKey } from "../content/cta";
import { OtherLanguageKey } from "../languages/multiculturalStatement";
import { ORG_INDUSTRY_SECTORS } from "./serviceArea";

const ORG_DOMAIN = "goldenviewpainting.com.au" as const;
const orgName = "Golden View Painting";

export const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  return `https://${ORG_DOMAIN}`;
};

export const ORG_PROFILE = {
  orgName: orgName,
  orgNameFarsi: "",
  industry: ORG_INDUSTRY_SECTORS.BUILDING.industry,
  subSector: ORG_INDUSTRY_SECTORS.BUILDING.Sectors.painting,
  description:
    "Professional residential and commercial Painting and Decorating in the south eastern suburbs of Melbourne",
  // languages: ["EN", "HZ", "FA"] as const satisfies readonly LanguageKey[],
  otherLangKeys: [] as OtherLanguageKey[],
  domain: ORG_DOMAIN,
  email: "goldenviewpainting@gmail.com",
  phone: "0406 182 099",
  address: "2/2 Laurina court doveton Vic 3177 ",
  abn: "66 675 626 829",
  cta: "freeQuote" as CtaKey,
  primaryColor: "#0d3f75",
  secondaryColor: "#cfa428",
} as const;
