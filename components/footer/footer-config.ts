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
  /** Figma 648:4519 — mobile footer pill logo box */
  mobileLogo?: string;
  mobileLogoWidth?: number;
  mobileLogoHeight?: number;
  mobileLogoObjectFit?: "contain" | "cover";
};

export type FooterSocialIcon =
  | "facebook"
  | "instagram"
  | "whatsapp"
  | "x"
  | "linkedin"
  | "youtube";

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
    mobileLogo: "/footer-section/etisalat.png",
    mobileLogoWidth: 16,
    mobileLogoHeight: 16,
    mobileLogoObjectFit: "cover",
  },
  {
    name: "Roshan",
    logo: "/sponsors/roshan.svg",
    logoWidth: 32,
    logoHeight: 16,
    mobileLogo: "/footer-section/roshan.png",
    mobileLogoWidth: 32,
    mobileLogoHeight: 16,
    mobileLogoObjectFit: "contain",
  },
  {
    name: "ATOMA",
    logo: "/sponsors/atoma.svg",
    logoWidth: 40,
    logoHeight: 16,
    mobileLogo: "/footer-section/atoma.png",
    mobileLogoWidth: 40,
    mobileLogoHeight: 16,
    mobileLogoObjectFit: "cover",
  },
  {
    name: "AWCC",
    logo: "/sponsors/awcc-footer.png",
    logoWidth: 16,
    logoHeight: 16,
    mobileLogo: "/footer-section/awcc.png",
    mobileLogoWidth: 16,
    mobileLogoHeight: 16,
    mobileLogoObjectFit: "cover",
  },
  {
    name: "Afghan Telecom",
    logo: "/sponsors/afghan-telecom.svg",
    logoWidth: 26,
    logoHeight: 16,
    mobileLogo: "/footer-section/afghan-telecom.png",
    mobileLogoWidth: 26,
    mobileLogoHeight: 16,
    mobileLogoObjectFit: "cover",
  },
  {
    name: "Salaam Network",
    logo: "/sponsors/salaam.svg",
    logoWidth: 23,
    logoHeight: 16,
    mobileLogo: "/footer-section/salaam.png",
    mobileLogoWidth: 23,
    mobileLogoHeight: 16,
    mobileLogoObjectFit: "cover",
  },
];

export const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = SOCIAL_LINKS;
