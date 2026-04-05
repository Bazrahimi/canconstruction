// app/(pages)/dev/email-signature.
import { ABOUT_TEAM, ORG_PROFILE, SOCIAL_MEDIA } from "@/app/_lib/org/profile";
import { publicAssets } from "@/app/_lib/org/publicAssets";

import { notFound } from "next/navigation";
import SignatureCard from "./_ui/SignatureCard";

const website = `https://www.${ORG_PROFILE.domain}`;

export const EMAIL_SIGNATURE = {
  personName: ABOUT_TEAM.members[0]?.name ?? ORG_PROFILE.orgName,
  role: ABOUT_TEAM.members[0]?.role ?? "",
  companyName: ORG_PROFILE.orgName,
  phone: ORG_PROFILE.phone,
  email: ORG_PROFILE.email,
  address: ORG_PROFILE.address,
  website: website,
  logoUrl: `${website}${publicAssets.icons.apple}`,
  primaryColor: ORG_PROFILE.primaryColor,
  secondaryColor: ORG_PROFILE.secondaryColor,
  socialMedia: {
    facebook: SOCIAL_MEDIA.facebook,
    instagram: SOCIAL_MEDIA.instagram,
    tiktok: SOCIAL_MEDIA.tiktok,
  },
} as const;

export const getSocialLinks = () => {
  return Object.entries(EMAIL_SIGNATURE.socialMedia).filter(
    ([, value]) => typeof value === "string" && value.trim().length > 0,
  );
};

export default function SignaturePage() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <SignatureCard
        signature={EMAIL_SIGNATURE}
        socialLinks={getSocialLinks()}
      />
    </main>
  );
}
