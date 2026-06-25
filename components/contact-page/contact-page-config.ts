import type { LucideIcon } from "lucide-react";
import { Mail, MapPinned, Smartphone } from "lucide-react";
import type { FooterSocialIcon } from "@/components/footer/footer-config";
import { SOCIAL_LINKS } from "@/lib/social-links";

export type ContactInfoItem = {
  label: string;
  value: string;
  hint: string;
  icon: LucideIcon;
};

export type ContactSocialLink = {
  name: string;
  href: string;
  icon: FooterSocialIcon;
};

export type ContactFormField = {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
  fullWidth?: boolean;
};

export const CONTACT_INFO: ContactInfoItem[] = [
  {
    label: "Call Us",
    value: "+93 78 123 4567",
    hint: "Available 24/7 for urgent assistance",
    icon: Smartphone,
  },
  {
    label: "Email Us",
    value: "support@activeservices.af",
    hint: "Response within 2 hours",
    icon: Mail,
  },
  {
    label: "Visit Us",
    value: "Kabul, Afghanistan",
    hint: "District 4, Main Square Office",
    icon: MapPinned,
  },
];

export const CONTACT_SOCIAL_LINKS: ContactSocialLink[] = SOCIAL_LINKS;

export const CONTACT_FORM_ROWS: ContactFormField[][] = [
  [
    { id: "fullName", label: "Full Name", placeholder: "Enter your name" },
    {
      id: "email",
      label: "Email Address",
      placeholder: "you@example.com",
      type: "email",
    },
  ],
  [
    {
      id: "phone",
      label: "Phone Number",
      placeholder: "+93 XX XXX XXXX",
      type: "tel",
    },
    { id: "subject", label: "Subject", placeholder: "General Inquiry" },
  ],
  [
    {
      id: "message",
      label: "Message",
      placeholder: "How can we help you?",
      fullWidth: true,
    },
  ],
];
