export type OperatorItem = {
  name: string;
  logo: string;
  logoWidth?: number;
  logoHeight?: number;
  objectFit?: "contain" | "cover";
};

export const OPERATOR_ROWS: OperatorItem[][] = [
  [
    {
      name: "etisalat and",
      logo: "/sponsors/etisalat.svg",
      logoWidth: 80,
      logoHeight: 80,
      objectFit: "contain",
    },
    {
      name: "Roshan",
      logo: "/sponsors/roshan.svg",
      logoWidth: 80,
      logoHeight: 80,
      objectFit: "contain",
    },
    {
      name: "AWCC",
      logo: "/sponsors/afghan.svg",
      logoWidth: 80,
      logoHeight: 80,
      objectFit: "contain",
    },
  ],
  [
    {
      name: "Salaam Network",
      logo: "/sponsors/salaam.svg",
      logoWidth: 45,
      logoHeight: 32,
      objectFit: "contain",
    },
    {
      name: "Afghan Telecom",
      logo: "/sponsors/afghan-telecom.svg",
      logoWidth: 53,
      logoHeight: 32,
      objectFit: "contain",
    },
    {
      name: "ATOMA",
      logo: "/sponsors/atoma.svg",
      logoWidth: 80,
      logoHeight: 32,
      objectFit: "contain",
    },
  ],
];
