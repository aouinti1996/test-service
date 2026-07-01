import type { LucideIcon } from "lucide-react";
import { Package, Smartphone, Wallet, Wifi } from "lucide-react";

export type ServicesPageItem = {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
  backgroundImage: string;
  backgroundImageClassName?: string;
  /** Figma 648:5082 — mobile card watermark position */
  mobileBackgroundClassName?: string;
  mobileBackgroundWrapperClassName?: string;
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
    mobileBackgroundWrapperClassName:
      "right-[-1px] top-[-39.8px] h-[150px] w-[200px]",
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
    mobileBackgroundWrapperClassName:
      "bottom-[-40.2px] right-[-1px] h-[150px] w-[200px]",
    mobileBackgroundClassName:
      "absolute h-[79.5%] left-[-4.5%] top-[4.06%] w-[89.43%] max-w-none",
  },
  {
    id: "digital-wallet",
    title: "Digital Wallet",
    description:
      "Use a secure digital wallet to store funds, manage payments, and handle everyday transactions from one convenient app. Customers can pay utility bills, make local payments, track activity, and manage their balance with a simple wallet experience designed for speed, safety, and local needs.",
    benefits: [
      "Store and manage funds securely",
      "Pay bills and local merchants with ease",
      "Track wallet balance and transaction history",
    ],
    icon: Wallet,
    backgroundImage: "/services-section/digital-wallet-bg.png",
    backgroundImageClassName:
      "absolute h-[80.61%] left-0 top-[9.66%] w-[90.69%] max-w-none",
    mobileBackgroundWrapperClassName:
      "right-[-1px] top-1/2 h-[150px] w-[200px] -translate-y-1/2",
    mobileBackgroundClassName:
      "absolute h-[80.61%] left-0 top-[9.66%] w-[90.69%] max-w-none",
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
    mobileBackgroundWrapperClassName:
      "right-[-1px] top-1/2 h-[150px] w-[200px] -translate-y-1/2",
    mobileBackgroundClassName:
      "absolute h-[76.71%] left-[4.24%] top-[16.76%] w-[86.3%] max-w-none",
  },
];
