import { ABOUT_TEAM, ORG_PROFILE, SOCIAL_MEDIA } from "@/app/_lib/org/profile";
import { publicAssets } from "@/app/_lib/org/publicAssets";
import {
  buildEmailSignature,
  SignatureCard,
} from "@katebtech/framework";

const website = `https://www.${ORG_PROFILE.domain}`;

export default function SignaturePage() {
  const { signature, socialLinks } = buildEmailSignature({
    personName: ABOUT_TEAM.members[0]?.name ?? ORG_PROFILE.orgName,
    role: ABOUT_TEAM.members[0]?.role ?? "",
    companyName: ORG_PROFILE.orgName,
    phone: ORG_PROFILE.phone,
    email: ORG_PROFILE.email,
    address: ORG_PROFILE.address,
    website,
    logoUrl: `${website}${publicAssets.icons.apple}`,
    primaryColor: ORG_PROFILE.primaryColor,
    secondaryColor: ORG_PROFILE.secondaryColor,
    socialMedia: {
      facebook: SOCIAL_MEDIA.facebook,
      instagram: SOCIAL_MEDIA.instagram,
      tiktok: SOCIAL_MEDIA.tiktok,
    },
  });

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <SignatureCard signature={signature} socialLinks={socialLinks} />
    </main>
  );
}