"use server";

import { serverEnv } from "@/app/_lib/env/server";
import { getBaseUrl, ORG_PROFILE as op } from "@/app/_lib/org/profile";
import { publicAssets } from "@/app/_lib/org/publicAssets";
import { toActionErrors } from "@katebtech/framework";
import type { OrgInfo } from "@katebtech/framework/contact-us";
import { sendEnquiryEmails } from "@katebtech/framework/emails";

import type {
  EnquiryForm,
  EnquiryState,
} from "@katebtech/framework/contact-us";
import { enquirySchema } from "@katebtech/framework/contact-us";

const resendApiKey = serverEnv.resendApiKey;
const orgInfo: OrgInfo = {
  email: op.email,
  name: op.orgName,
  orgNameFarsi: op.orgNameFarsi,
  phone: op.phone,
  address: op.address,
  website: `https://${op.domain}`,
  icon: `${getBaseUrl()}${publicAssets.icons.apple}`,
};

export const submitEnquiry = async (
  prevState: EnquiryState | undefined,
  formData: FormData,
): Promise<EnquiryState | undefined> => {
  const rawData = Object.fromEntries(
    [...formData.entries()].map(([key, value]) => [
      key,
      typeof value === "string" ? value : undefined,
    ]),
  ) as Partial<EnquiryForm>;

  const parsed = enquirySchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      ...toActionErrors<EnquiryState["errors"]>(parsed.error),
      data: rawData,
    };
  }

  const enquiryData = parsed.data;

  const { message } = await sendEnquiryEmails({
    enquiry: enquiryData,
    apiKey: resendApiKey,
    orgInfo: orgInfo,
  });

  return {
    ok: true,
    message: message,
  };
};
