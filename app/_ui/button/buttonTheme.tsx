import { uiFond } from "@/app/_lib/org/font";
import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
import type { ButtonTheme } from "@katebtech/framework";

export const buttonTheme: ButtonTheme = {
  fontClassName: uiFond.className,
  textOnSecondaryClassName: op.textOnSecondary || "text-org-p-main",
  primaryClassName:
    "bg-org-s-main hover:bg-org-s-light focus:ring-yellow-300",
  secondaryClassName:
    "bg-org-p-main text-white hover:bg-org-p-light focus:ring-blue-300",
  outlineClassName:
    "border border-org-p-main bg-white text-org-p-main hover:bg-gray-50 focus:ring-gray-200",
};