import type { LucideIcon } from "lucide-react";
import { Headphones, ShieldCheck, Zap } from "lucide-react";

export type CtaTrustItem = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
};

export const CTA_TRUST_ITEMS: CtaTrustItem[] = [
  {
    icon: Zap,
    title: "Fast & Reliable",
    subtitle: "Transactions",
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    subtitle: "& Trusted",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    subtitle: "Always here for you",
  },
];
