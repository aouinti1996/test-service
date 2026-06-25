import type { LucideIcon } from "lucide-react";
import { Clock, Handshake, Server, TrendingUp } from "lucide-react";

export type DistributorBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
  decorationImage: string;
};

export type DistributorFormField = {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "tel" | "textarea";
  fullWidth?: boolean;
};

export const DISTRIBUTOR_BENEFITS: DistributorBenefit[] = [
  {
    title: "Competitive Distributor Comission",
    description:
      "Earn attractive margins on every recharge, bundle, and service transaction, with a clear commission structure designed to help distributors grow consistently.",
    icon: Handshake,
    decorationImage: "/distributor-page/benefit-commission.png",
  },
  {
    title: "Reliable Technology",
    description:
      "Use a stable, secure platform built for fast transactions, real-time service access, and dependable performance across daily business operations.",
    icon: Server,
    decorationImage: "/distributor-page/benefit-technology.png",
  },
  {
    title: "99.01% Uptime & Successful Transaction",
    description:
      "Serve customers with confidence through reliable system availability, smooth processing, and strong transaction success across supported services.",
    icon: Clock,
    decorationImage: "/distributor-page/benefit-uptime.png",
  },
  {
    title: "Business Growth",
    description:
      "Expand your customer base, increase repeat sales, and offer high-demand telecom and wallet services from one trusted distributor platform.",
    icon: TrendingUp,
    decorationImage: "/distributor-page/benefit-growth.png",
  },
];

export const DISTRIBUTOR_FORM_ROWS: DistributorFormField[][] = [
  [
    {
      id: "fullName",
      label: "Full Name",
      placeholder: "Enter your full legal name",
    },
    {
      id: "businessName",
      label: "Business Name",
      placeholder: "Your registered shop or company name",
    },
  ],
  [
    {
      id: "phoneNumber",
      label: "Phone Number",
      placeholder: "+93 7XX XXX XXX",
      type: "tel",
    },
    {
      id: "email",
      label: "Email Address",
      placeholder: "email@example.com",
      type: "email",
    },
  ],
  [
    {
      id: "province",
      label: "Province/Region",
      placeholder: "Select your province",
    },
    {
      id: "businessType",
      label: "Business Type",
      placeholder: "Retail Shop, Agent, Distributor, etc.",
    },
  ],
  [
    {
      id: "yearsInBusiness",
      label: "Years in Business",
      placeholder: "e.g. 5 years",
    },
    {
      id: "businessLicense",
      label: "Business License No.",
      placeholder: "Optional - if applicable",
    },
  ],
  [
    {
      id: "description",
      label: "Brief Description of Business",
      placeholder:
        "Tell us more about your current operations and location...",
      fullWidth: true,
    },
  ],
];
