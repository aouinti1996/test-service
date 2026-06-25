import type { LucideIcon } from "lucide-react";
import { Package, Smartphone, Wifi } from "lucide-react";

export type ServicesPageItem = {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
  backgroundImage: string;
  backgroundImageClassName?: string;
};

export const SERVICES_PAGE_ITEMS: ServicesPageItem[] = [
  {
    id: "mobile-recharge",
    title: "Mobile Recharge",
    description:
      "Top up prepaid and postpaid mobile numbers across major Afghan networks in just a few taps. Active Services makes recharge faster, easier, and more reliable by giving users one simple place to add balance, confirm transactions, and stay connected anytime.",
    benefits: [
      "Recharge prepaid and postpaid numbers quickly",
      "Works across major Afghan mobile networks",
      "Secure transactions with instant confirmation",
    ],
    icon: Smartphone,
    backgroundImage: "/services-section/mobile-recharge-bg.png",
  },
  {
    id: "bundles-data",
    title: "Bundles & Data",
    description:
      "Browse and activate internet, voice, and SMS bundles from supported operators with clear package details and official pricing. Whether users need daily data, monthly internet, calling minutes, or SMS packages, Active Services helps them find the right bundle and activate it with confidence.",
    benefits: [
      "Internet, voice, and SMS bundle options",
      "Official pricing from supported operators",
      "Easy package selection and fast activation",
    ],
    icon: Wifi,
    backgroundImage: "/services-section/bundles-data-bg.png",
    backgroundImageClassName:
      "absolute h-[79.5%] left-[-4.5%] top-[4.06%] w-[89.43%] max-w-none",
  },
  {
    id: "retailer-stock",
    title: "Retailer Stock",
    description:
      "Give shopkeepers, agents, and retail distributors the tools they need to manage recharge stock, monitor balances, process customer requests, and track transactions in real time. Active Services helps retailers work faster, reduce manual errors, and grow their business with reliable stock and sales management.",
    benefits: [
      "Manage recharge stock and balances",
      "Track orders, sales, and transactions",
      "Built for shopkeepers, agents, and retailers",
    ],
    icon: Package,
    backgroundImage: "/services-section/retailer-stock-bg.png",
    backgroundImageClassName:
      "absolute h-[76.71%] left-[4.24%] top-[16.76%] w-[86.3%] max-w-none",
  },
];
