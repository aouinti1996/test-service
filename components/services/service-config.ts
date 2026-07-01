import type { LucideIcon } from "lucide-react";
import { Package, Smartphone, Wallet, Wifi } from "lucide-react";

export type ServiceItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  backgroundImage: string;
  backgroundImageClassName?: string;
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Mobile Recharge",
    description:
      "Top-up any prepaid or postpaid account across all Afghan networks in seconds.",
    href: "/services/mobile-recharge",
    icon: Smartphone,
    backgroundImage: "/services-section/mobile-recharge-bg.png",
  },
  {
    title: "Bundles & Data",
    description:
      "Browse and activate the latest internet, voice, and SMS bundles at official prices.",
    href: "/services/bundles-data",
    icon: Wifi,
    backgroundImage: "/services-section/bundles-data-bg.png",
    backgroundImageClassName:
      "absolute h-[79.5%] left-[-4.5%] top-[4.06%] w-[89.43%] max-w-none",
  },
  {
    title: "Digital Wallet",
    description:
      "Securely store funds and pay utility bills or local merchants with our integrated e-wallet.",
    href: "/services/digital-wallet",
    icon: Wallet,
    backgroundImage: "/services-section/digital-wallet-bg.png",
    backgroundImageClassName:
      "absolute h-[80.61%] left-0 top-[9.66%] w-[90.69%] max-w-none",
  },
  {
    title: "Retailer Stock",
    description:
      "Wholesale distribution and stock management tools designed for shopkeepers and agents.",
    href: "/services/retailer-stock",
    icon: Package,
    backgroundImage: "/services-section/retailer-stock-bg.png",
    backgroundImageClassName:
      "absolute h-[76.71%] left-[4.24%] top-[16.76%] w-[86.3%] max-w-none",
  },
];
