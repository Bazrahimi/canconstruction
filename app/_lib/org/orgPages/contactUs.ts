export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export type DayHours =
  | { closed: true }
  | { closed: false; open: string; close: string }; // "09:00", "17:30"

export type OpeningHours = Record<DayKey, DayHours>;

export const OPENING_HOURS: OpeningHours = {
  mon: { closed: false, open: "09:00", close: "17:00" },
  tue: { closed: false, open: "09:00", close: "17:00" },
  wed: { closed: false, open: "09:00", close: "17:00" },
  thu: { closed: false, open: "09:00", close: "17:00" },
  fri: { closed: false, open: "09:00", close: "17:00" },
  sat: { closed: true },
  sun: { closed: true },
};

export type FAQItem = {
  q: string;
  a: string;
};

export const CONTACT_FAQS: readonly FAQItem[] = [
  {
    q: "What painting services do you provide?",
    a: "We provide residential and commercial painting and decorating services, including interior painting, exterior painting, repainting, touch-ups, and general painting maintenance.",
  },
  {
    q: "Do you do both interior and exterior painting?",
    a: "Yes. We handle both interior and exterior painting for homes, units, shops, offices, and other commercial properties.",
  },
  {
    q: "Can I get a free quote?",
    a: "Yes. Send us your details through the contact form with a short description of the job, and we’ll get back to you about a free quote.",
  },
  {
    q: "Do you service my area?",
    a: "We service Melbourne’s south eastern suburbs and nearby areas. Send us your suburb in the message and we’ll confirm if we can help.",
  },
  {
    q: "Do you help with repainting and maintenance work?",
    a: "Yes. We can help with repainting, touch-ups, surface preparation, and general painting maintenance for both residential and commercial properties.",
  },
] as const;

export const SOCIAL_MEDIA = {
  facebook: "",
  instagram: "",
  tiktok: "", // leave empty or undefined if not used
} as const;
