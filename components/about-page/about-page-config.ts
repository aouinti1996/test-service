import type { LucideIcon } from "lucide-react";
import { Eye, Target } from "lucide-react";

export type AboutMissionItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type AboutLeader = {
  name: string;
  role: string;
  image: string;
};

export const ABOUT_MISSION: AboutMissionItem = {
  title: "Our Mission",
  description:
    "To participate in the growth of economy of Afghanistan by providing services for financial transparency, safety, quickness, increase in the use of EVD and payment wallets, increase in the proper use of the technology and to participate in developing non-cash based culture among the people of Afghanistan.",
  icon: Target,
};

export const ABOUT_VISION: AboutMissionItem = {
  title: "Our Vision",
  description:
    "To offer distinctive services and be the widest network of mobile payments in Afghanistan and to remain a role model for the economies.",
  icon: Eye,
};

export const ABOUT_HISTORY_PARAGRAPHS = [
  "Active Services was founded in 2012 as E Payments system. Active Services enables cross-border direct carrier billing for goods and services. The platform integrates with merchants, service providers and carriers using a proprietary and patented system and process. The platform is built using a reliable and secure protocol and supports multiple modes (airtime, wallets), multiple channels (online, POS), multiple modes (active, passive) all through a dynamic rules-based transaction modeling system. APIs for third party integration are available. Facilities at Active Services network can be tailored made and specifically designed as per the needs of the merchants, service providers and/or the telecom companies.",
  "Active Services culturally diverse team of more than 100 people reflects our commitment to delivering cutting-edge, potentially life-changing technology to developed and emerging markets alike",
];

export const ABOUT_LEADERS: AboutLeader[] = [
  {
    name: "Suleman Rahimi",
    role: "CEO & Founder",
    image: "/about-page/leader-suleman.png",
  },
  {
    name: "Mariam Noori",
    role: "Chief Technology Officer",
    image: "/about-page/leader-mariam.png",
  },
  {
    name: "Zabiullah Shah",
    role: "Head of Operations",
    image: "/about-page/leader-zabiullah.png",
  },
  {
    name: "Fawad Karimi",
    role: "Retailer Network Director",
    image: "/about-page/leader-fawad.png",
  },
];

export const ABOUT_REGULATORY = {
  title: "Regulated & Licensed by ATRA",
  description:
    "Active Services operates under full licensure from the Afghanistan Telecom Regulatory Authority (ATRA). We are committed to maintaining the highest standards of legal compliance and consumer protection in the Afghan market.",
  license: "License No. AS-4290-2024",
};
