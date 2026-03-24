// app/_lib/org/aboutUs.ts
import { ORG_PROFILE } from "../profile";
import { publicAssets } from "../publicAssets";

export type TeamMember = {
  name: string;
  role: string;
  image?: string; // "/images/team/....png"
  bio?: string;
};

export type TeamSection = {
  id: string;
  title: string;
  intro: string;
  professionalTitles?: readonly string[];
  members: readonly TeamMember[];
};

export const ABOUT_TEAM: TeamSection = {
  id: "team",
  title: "Our Team",
  professionalTitles: [
    "Residential Painters",
    "Commercial Painters",
    "Painters and Decorators",
    "Painting Maintenance Specialists",
  ],
  intro: `${ORG_PROFILE.orgName} is backed by skilled painters and decorators committed to quality workmanship, reliable service, and professional finishes across Melbourne’s south eastern suburbs.`,
  members: [
    {
      name: "Jalil",
      role: "Director",
         image: publicAssets.team.placeholder,
      bio: "Our team brings practical experience across residential and commercial painting projects, with a focus on preparation, neat workmanship, and long-lasting finishes.",
    },
  ],
} as const;

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
    `${ORG_PROFILE.orgName} provides professional residential and commercial painting and decorating services across Melbourne’s south eastern suburbs. We help property owners improve, refresh, and protect their spaces with quality interior and exterior painting work.`,
    "We understand that good painting is not just about colour — it is about proper preparation, attention to detail, durable finishes, and reliable service from start to finish. Our goal is to deliver clean, professional results that add value and presentation to every property.",
  ],
} as const;

export const ABOUT_SECTIONS: readonly TextSection[] = [
  {
    id: "purpose",
    title: "Our Purpose",
    items: [
      "Our purpose is to provide dependable painting and decorating services that improve the appearance, protection, and long-term value of residential and commercial properties.",
    ],
  },
  {
    id: "vision",
    title: "Our Vision",
    items: [
      "We aim to be a trusted name for painting and decorating in Melbourne’s south eastern suburbs, known for honest service, quality workmanship, and finishes our clients can rely on.",
    ],
  },
  {
    id: "what-we-do",
    title: "What We Do",
    items: [
      "We provide interior and exterior painting, residential repainting, commercial painting, surface preparation, touch-ups, and painting maintenance for homes, offices, shops, and other properties.",
    ],
  },
  {
    id: "governance",
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
    "Being reliable, respectful, and professional on every job.",
    "Using proper preparation and suitable materials for long-lasting results.",
    "Providing honest communication and clear quotes.",
  ],
} as const;