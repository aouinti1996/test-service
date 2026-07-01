import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Code,
  Globe,
  Headphones,
  LayoutGrid,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Zap,
} from "lucide-react";

export type IntegrationInfrastructureItem = {
  title: string;
  description: string;
  chip: string;
  icon: LucideIcon;
  image: string;
  mobileImage?: string;
  mobileImageClassName?: string;
  mobileImageWrapperClassName?: string;
  imageWrapperClassName?: string;
  imageClassName?: string;
};

export type IntegrationStep = {
  step: number;
  title: string;
  description: string;
  image: string;
};

export type IntegrationOption = {
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
};

export type IntegrationOptionFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type IntegrationUseCase = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const INTEGRATION_INFRASTRUCTURE: IntegrationInfrastructureItem[] = [
  {
    title: "Afghanistan-Wide Coverage",
    description:
      "Access all major Afghan operators - Roshan, MTN, AWCC, Salaam and more - through a single, reliable API.",
    chip: "One Integration. Nationwide Access.",
    icon: Globe,
    image: "/integration-page/infrastructure-coverage.png",
    mobileImage: "/integration-page/infrastructure-coverage-mobile.png",
  },
  {
    title: "Instant Transactions",
    description:
      "Real-time top-up processing with 99.01% uptime and sub-second response times.",
    chip: "Fast. Reliable. Always On.",
    icon: Zap,
    image: "/integration-page/infrastructure-transactions.png",
    mobileImage: "/integration-page/infrastructure-transactions-mobile.png",
    mobileImageWrapperClassName:
      "left-1/2 top-[calc(50%+12.75px)] h-[174px] w-[262px] -translate-x-1/2 -translate-y-1/2",
    imageClassName: "absolute left-[73.33px] top-[20px] h-[200px] w-[302px] object-cover",
  },
  {
    title: "Secure & Compliant",
    description:
      "ATRA-licensed, PCI-compliant infrastructure you can build on with confidence.",
    chip: "Secure Standards. Trusted by Distributors.",
    icon: ShieldCheck,
    image: "/integration-page/infrastructure-security.png",
    mobileImage: "/integration-page/infrastructure-security-mobile.png",
    mobileImageWrapperClassName:
      "left-1/2 top-[calc(50%+0.25px)] h-[181px] w-[296px] -translate-x-1/2 -translate-y-1/2",
    mobileImageClassName:
      "absolute h-[164.16%] left-[-0.18%] top-[-24.28%] w-[100.35%]",
    imageWrapperClassName: "left-[104.67px] top-[13px] h-[187px] w-[306px]",
    imageClassName:
      "absolute h-[164.16%] left-[-0.18%] top-[-24.28%] w-[100.35%]",
  },
];

export const INTEGRATION_STEPS: IntegrationStep[] = [
  {
    step: 1,
    title: "Sign Up & Get API Keys",
    description:
      "Create a developer account and receive your sandbox API credentials instantly.",
    image: "/integration-page/step-signup.png",
  },
  {
    step: 2,
    title: "Integrate the SDK or API",
    description:
      "Use our REST API or mobile SDK to seamlessly integrate top-up into your application.",
    image: "/integration-page/step-integrate.png",
  },
  {
    step: 3,
    title: "Go Live & Earn",
    description:
      "Launch to real users and earn on every transaction through our profitable revenue model.",
    image: "/integration-page/step-go-live.png",
  },
];

export const INTEGRATION_HOW_IT_WORKS_FEATURES = [
  { icon: ShieldCheck, label: "Developer Friendly" },
  { label: "Well documented" },
  { icon: Headphones, label: "24/7 Support" },
] as const;

export const INTEGRATION_OPTIONS: IntegrationOption[] = [
  {
    badge: "REST API",
    title: "Full Control",
    description:
      "Direct HTTP calls to our endpoints. Supports top-up, bundles, balance checks, and history.",
    ctaLabel: "View API Docs",
    ctaHref: "#",
    image: "/integration-page/option-rest-api.png",
  },
  {
    badge: "MOBILE SDK",
    title: "Rapid Launch",
    description:
      "iOS & Android SDK. Drop the top-up UI directly into your app with minimal code.",
    ctaLabel: "View SDK Docs",
    ctaHref: "#",
    image: "/integration-page/option-mobile-sdk.png",
  },
  {
    badge: "WIDGET",
    title: "Mini App Widget",
    description:
      "Embeddable iFrame or WebView widget. Zero backend work - just paste a snippet.",
    ctaLabel: "Get Widget Snippet",
    ctaHref: "#",
    image: "/integration-page/option-widget.png",
  },
];

export const INTEGRATION_OPTION_FEATURES: IntegrationOptionFeature[] = [
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security",
    icon: Shield,
  },
  {
    title: "Developer Friendly",
    description: "Easy to integrate & test",
    icon: Code,
  },
  {
    title: "24/7 Support",
    description: "We're here to help anytime",
    icon: Headphones,
  },
];

export const INTEGRATION_USE_CASES: IntegrationUseCase[] = [
  {
    title: "Super Apps",
    description: "Add value to your ecosystem with seamless utility payments.",
    icon: LayoutGrid,
    image: "/integration-page/use-case-super-apps.png",
  },
  {
    title: "E-commerce Platforms",
    description: "Offer phone credit as a reward or digital product.",
    icon: ShoppingBag,
    image: "/integration-page/use-case-ecommerce.png",
  },
  {
    title: "Banking & Wallet Apps",
    description: "Enable direct recharge from customer bank accounts.",
    icon: Briefcase,
    image: "/integration-page/use-case-banking.png",
  },
  {
    title: "POS & Retailer Systems",
    description: "Build custom terminals for high-volume agents.",
    icon: Smartphone,
    image: "/integration-page/use-case-pos.png",
  },
];
