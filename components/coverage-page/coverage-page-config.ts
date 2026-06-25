import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Headphones,
  Map,
  MapPin,
  Package,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Store,
  TrendingUp,
  Wifi,
  Zap,
} from "lucide-react";

export type CoverageStat = {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

export type CoverageServiceCard = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export type CoverageCommunityCard = {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  image: string;
  imageClassName?: string;
};

export type CoverageMatterCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const COVERAGE_STATS: CoverageStat[] = [
  {
    value: "34",
    label: "Provinces Covered",
    description: "Reliable service reach across all provinces of Afghanistan.",
    icon: MapPin,
  },
  {
    value: "190+",
    label: "Cities & Districts",
    description: "Expanding access across urban centers and local communities.",
    icon: Building2,
  },
  {
    value: "1.8M",
    label: "Transactions",
    description:
      "Processed securely across recharge, wallet, and retail services.",
    icon: RefreshCw,
  },
  {
    value: "24/7",
    label: "Support",
    description: "Responsive help whenever users, agents, or retailers need it.",
    icon: Headphones,
  },
];

export const COVERAGE_SERVICES: CoverageServiceCard[] = [
  {
    title: "Mobile Recharge",
    description:
      "Recharge prepaid and postpaid numbers across supported networks in seconds.",
    href: "/services/mobile-recharge",
    icon: Smartphone,
  },
  {
    title: "Bundles & Data",
    description:
      "Activate internet, voice, and SMS bundles from major operators with ease.",
    href: "/services/bundles-data",
    icon: Wifi,
  },
  {
    title: "Retailer Stock",
    description:
      "Help shopkeepers and agents manage stock, balances, and customer sales.",
    href: "/services/retailer-stock",
    icon: Package,
  },
];

export const COVERAGE_COMMUNITIES: CoverageCommunityCard[] = [
  {
    title: "Major Cities",
    description:
      "Built for high-volume transactions in busy cities and commercial centers, with fast and dependable service for everyday digital needs.",
    features: ["High-volume usage", "Commercial center support"],
    icon: Building2,
    image: "/coverage-page/major-cities.png",
    imageClassName:
      "absolute h-[153.25%] left-[-11.04%] top-[-22.18%] w-[122.09%] max-w-none",
  },
  {
    title: "Retail Shops & Agents",
    description:
      "Empowers retailers with access to recharge stock, customer transactions, and support tools that help them serve their communities better.",
    features: ["Retailer-ready tools", "Recharge & sales support"],
    icon: Store,
    image: "/coverage-page/retail-shops.png",
    imageClassName:
      "absolute h-[183.62%] left-[-17.38%] top-[-37.09%] w-[128.92%] max-w-none",
  },
  {
    title: "Local Districts",
    description:
      "Expanding reliable service availability to more districts and local communities, making essential telecom services easier to access.",
    features: ["Growing local reach", "Community access"],
    icon: Map,
    image: "/coverage-page/local-districts.png",
    imageClassName:
      "absolute h-[174.69%] left-[-14.68%] top-[-37.35%] w-[129.36%] max-w-none",
  },
];

export const COVERAGE_MATTERS: CoverageMatterCard[] = [
  {
    title: "Reliable Access",
    description:
      "Users can recharge, activate bundles, and manage payments through one trusted platform.",
    icon: ShieldCheck,
  },
  {
    title: "Faster Transactions",
    description:
      "Services are designed to process customer actions quickly and securely.",
    icon: Zap,
  },
  {
    title: "Retailer Support",
    description:
      "Shopkeepers and agents get tools to serve customers with better control.",
    icon: Store,
  },
  {
    title: "Nationwide Growth",
    description:
      "Active Services continues expanding access across Afghanistan's provinces.",
    icon: TrendingUp,
  },
];
