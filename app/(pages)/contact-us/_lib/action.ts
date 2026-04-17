"use server";
import { toActionErrors } from "@katebtech/core";
import { sendEnquiryEmails } from "@katebtech/emails/contact-us/1";
import { EnquiryForm, EnquirySchema, EnquiryState } from "./schema";
import { getBaseUrl, ORG_PROFILE as op } from "@/app/_lib/org/profile";
import { publicAssets } from "@/app/_lib/org/publicAssets";
import { serverEnv } from "@/app/_lib/env/server";

const resendApiKey = serverEnv.resendApiKey;
const orgInfo = {
  email: op.email,
  name: op.orgName,
  orgNameFarsi: op.orgNameHz,
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
