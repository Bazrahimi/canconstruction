import type { FAQItem, OpeningHours } from "../definitions";

export const OPENING_HOURS: OpeningHours = {
  mon: { closed: false, open: "07:00", close: "17:00" },
  tue: { closed: false, open: "07:00", close: "17:00" },
  wed: { closed: false, open: "07:00", close: "17:00" },
  thu: { closed: false, open: "07:00", close: "17:00" },
  fri: { closed: false, open: "07:00", close: "17:00" },
  sat: { closed: false, open: "09:00", close: "14:00" },
  sun: { closed: true },
};

export const CONTACT_FAQS: readonly FAQItem[] = [
  {
    q: "What services do you provide?",
    a: "We provide commercial and residential painting, rendering, and silicone and caulking services for homes, apartments, new builds, renovation projects, and commercial properties across Victoria.",
  },
  {
    q: "Do you work on both residential and commercial projects?",
    a: "Yes. We work across residential and commercial projects, including new houses, apartments, unit developments, renovation works, and maintenance jobs.",
  },
  {
    q: "Can I get a free quote?",
    a: "Yes. Send us your details through the contact form with a short description of the job, and we’ll get back to you about a free quote.",
  },
  {
    q: "Do you do rendering and caulking as well as painting?",
    a: "Yes. In addition to painting, we also provide rendering, silicone, and caulking services for a range of residential and commercial applications.",
  },
  {
    q: "Do you take on new builds and maintenance work?",
    a: "Yes. We work on new build projects as well as repair, resealing, repainting, touch-up, and general maintenance works.",
  },
] as const;


