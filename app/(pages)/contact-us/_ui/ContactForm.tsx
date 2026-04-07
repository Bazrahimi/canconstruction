"use client";

import { bodyFont, headingFont } from "@/app/_lib/org/font";
import { ORG_PROFILE as op } from "@/app/_lib/org/profile";
import { buttonTheme } from "@/app/_ui/button/buttonTheme";
import { Form } from "@katebtech/framework/contact-us";
import { motion } from "motion/react";
import { submitEnquiry } from "../_lib/action";

type Props = {
  showMotion?: boolean;
  header?: string;
  subHeader?: string;
  message?: string;
};

const ContactForm = ({
  showMotion = false,
  header,
  subHeader,

  message,
}: Props) => {
  const content = (
    <Form
      submitAction={submitEnquiry}
      formTexts={{ header, subHeader, message }}
      orgDetails={{
        orgName: op.orgName,
        orgNameFarsi: op.orgNameFarsi,
        email: op.email,
        phone: op.phone,
        address: op.address,
      }}
      fonts={{
        bodyFont: bodyFont.className,
        headingFont: headingFont.className,
      }}
      buttonTheme={buttonTheme}
    />
  );

  if (!showMotion) return content;
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }} // start lower
      whileInView={{ opacity: 1, y: 0 }} // move to natural position
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // smooth professional easing
      }}
      viewport={{ once: true, amount: 0.25 }} // trigger when 25% visible
    >
      {content}
    </motion.div>
  );
};

export default ContactForm;
