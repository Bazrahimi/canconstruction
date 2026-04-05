"use server";

import { serverEnv } from "@/app/_lib/env/server";
import { getBaseUrl, ORG_PROFILE as op } from "@/app/_lib/org/profile";
import { publicAssets } from "@/app/_lib/org/publicAssets";
import { toActionErrors } from "@katebtech/framework/dist/_lib/utils/actionHelper";
import type { OrgInfo } from "@katebtech/framework/dist/emails/contact/handleEnquiryEmail";
import { handleEnquiryEmails } from "@katebtech/framework/dist/emails/contact/handleEnquiryEmail";
import { EnquiryForm, EnquirySchema, EnquiryState } from "@katebtech/framework/dist/emails/contact/schema";

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

  const parsed = EnquirySchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      ...toActionErrors<EnquiryState["errors"]>(parsed.error),
      data: rawData,
    };
  }

  const enquiryData = parsed.data;

  const { message } = await handleEnquiryEmails({
    enquiry: enquiryData,
    apiKey: resendApiKey,
    orgInfo: orgInfo,
  });

  return {
    ok: true,
    message: message,
  };
};
