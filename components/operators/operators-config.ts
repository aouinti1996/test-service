export type OperatorItem = {
  name: string;
  logo: string;
  mobileLogo: string;
  logoWidth?: number;
  logoHeight?: number;
  /** Figma logo bounds inside the 40px mobile circle */
  mobileLogoWidth: number;
  mobileLogoHeight: number;
  mobileObjectFit?: "contain" | "cover";
  objectFit?: "contain" | "cover";
};

export const OPERATORS: OperatorItem[] = [
  {
    name: "etisalat and",
    logo: "/sponsors/etisalat.svg",
    mobileLogo: "/operators-section/etisalat.png",
    logoWidth: 80,
    logoHeight: 80,
    mobileLogoWidth: 24,
    mobileLogoHeight: 24,
    mobileObjectFit: "cover",
    objectFit: "contain",
  },
  {
    name: "Roshan",
    logo: "/sponsors/roshan.svg",
    mobileLogo: "/operators-section/roshan.png",
    logoWidth: 80,
    logoHeight: 80,
    mobileLogoWidth: 24,
    mobileLogoHeight: 24,
    mobileObjectFit: "contain",
    objectFit: "contain",
  },
  {
    name: "AWCC",
    logo: "/sponsors/afghan.svg",
    mobileLogo: "/operators-section/awcc.png",
    logoWidth: 80,
    logoHeight: 80,
    mobileLogoWidth: 24,
    mobileLogoHeight: 24,
    mobileObjectFit: "cover",
    objectFit: "contain",
  },
  {
    name: "Salaam Network",
    logo: "/sponsors/salaam.svg",
    mobileLogo: "/operators-section/salaam.png",
    logoWidth: 45,
    logoHeight: 32,
    mobileLogoWidth: 24,
    mobileLogoHeight: 17,
    mobileObjectFit: "cover",
    objectFit: "contain",
  },
  {
    name: "Afghan Telecom",
    logo: "/sponsors/afghan-telecom.svg",
    mobileLogo: "/operators-section/afghan-telecom.png",
    logoWidth: 53,
    logoHeight: 32,
    mobileLogoWidth: 24,
    mobileLogoHeight: 14.5,
    mobileObjectFit: "cover",
    objectFit: "contain",
  },
  {
    name: "ATOMA",
    logo: "/sponsors/atoma.svg",
    mobileLogo: "/operators-section/atoma.png",
    logoWidth: 80,
    logoHeight: 32,
    mobileLogoWidth: 24,
    mobileLogoHeight: 9.6,
    mobileObjectFit: "cover",
    objectFit: "contain",
  },
];

/** Figma 642:3450 — mobile: 2 columns × 3 rows */
export const OPERATOR_ROWS_MOBILE: OperatorItem[][] = [
  OPERATORS.slice(0, 2),
  OPERATORS.slice(2, 4),
  OPERATORS.slice(4, 6),
];

/** Desktop: 3 columns × 2 rows */
export const OPERATOR_ROWS: OperatorItem[][] = [
  OPERATORS.slice(0, 3),
  OPERATORS.slice(3, 6),
];
