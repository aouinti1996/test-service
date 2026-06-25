import { SOCIAL_LINKS } from "@/lib/social-links";

export type FooterNavLink = {
  label: string;
  href: string;
};

export type FooterNavGroup = {
  title: string;
  links: FooterNavLink[];
};

export type FooterOperator = {
  name: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  logoClassName?: string;
};

export type FooterSocialIcon = "facebook" | "instagram" | "whatsapp";

export type FooterSocialLink = {
  name: string;
  href: string;
  icon: FooterSocialIcon;
};

export const FOOTER_FEATURES = [
  "Instant transactions",
  "Secure & reliable",
  "24/7 customer support",
  "Best margins & offers",
] as const;

export const FOOTER_NAV_GROUPS: FooterNavGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Our Services", href: "#" },
      { label: "Coverage", href: "#" },
      { label: "Distributors", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "For Retailers",
    links: [
      { label: "Become a Retailer", href: "#" },
      { label: "Retailer Benefits", href: "#" },
      { label: "Pricing & Margins", href: "#" },
      { label: "Training & Support", href: "#" },
      { label: "Resources", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "User Guides", href: "#" },
      { label: "API Documentation", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Contact Support", href: "#" },
    ],
  },
];

export const FOOTER_OPERATORS: FooterOperator[] = [
  {
    name: "etisalat and",
    logo: "/sponsors/etisalat.svg",
    logoWidth: 16,
    logoHeight: 16,
  },
  {
    name: "Roshan",
    logo: "/sponsors/roshan.svg",
    logoWidth: 32,
    logoHeight: 16,
  },
  {
    name: "ATOMA",
    logo: "/sponsors/atoma.svg",
    logoWidth: 40,
    logoHeight: 16,
  },
  {
    name: "AWCC",
    logo: "/sponsors/awcc-footer.png",
    logoWidth: 16,
    logoHeight: 16,
  },
  {
    name: "Afghan Telecom",
    logo: "/sponsors/afghan-telecom.svg",
    logoWidth: 26,
    logoHeight: 16,
  },
  {
    name: "Salaam Network",
    logo: "/sponsors/salaam.svg",
    logoWidth: 23,
    logoHeight: 16,
  },
];

export const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = SOCIAL_LINKS;
