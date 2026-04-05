// app/_lib/org/aboutUs.ts
import { ORG_PROFILE } from "../profile";

export type TextSection = {
  id: string;
  title: string;
  items: readonly string[];
};

export type ValuesSection = {
  id: string;
  title: string;
  items: readonly string[];
  icon?: "check";
};

export const ABOUT_INTRODUCTION: TextSection = {
  id: "introduction",
  title: `About ${ORG_PROFILE.orgName}`,
  items: [
    `${ORG_PROFILE.orgName} provides professional painting, rendering, and silicone and caulking services across Victoria for residential and commercial projects. We work across new builds, houses, apartments, renovation jobs, and maintenance works.`,
    "We understand that quality construction finishes depend on proper preparation, skilled workmanship, and attention to detail. Our goal is to deliver clean, durable, and professional results that improve presentation, performance, and long-term value.",
  ],
} as const;

export const ABOUT_SECTIONS: readonly TextSection[] = [
  {
    id: "purpose",
    title: "Our Purpose",
    items: [
      "Our purpose is to provide dependable construction finishing services that improve the quality, protection, and presentation of residential and commercial properties.",
    ],
  },
  {
    id: "vision",
    title: "Our Vision",
    items: [
      "We aim to be a trusted name in Victoria for painting, rendering, and silicone and caulking services, known for honest service, strong workmanship, and reliable project delivery.",
    ],
  },
  {
    id: "what-we-do",
    title: "What We Do",
    items: [
      "We provide commercial and residential painting, rendering, silicone and caulking, surface preparation, repair work, and maintenance services for new builds, apartments, homes, and commercial sites.",
    ],
  },
  {
    id: "business-details",
    title: "Business Details",
    items: [
      `${ORG_PROFILE.orgName} operates as an Australian business. ABN: ${ORG_PROFILE.abn}.`,
    ],
  },
] as const;

export const ABOUT_VALUES: ValuesSection = {
  id: "values",
  title: "Our Values",
  icon: "check",
  items: [
    "Delivering quality workmanship with attention to detail.",
    "Being reliable, professional, and respectful on every site.",
    "Using proper preparation and practical methods for durable results.",
    "Providing honest communication and dependable service from start to finish.",
  ],
} as const;
