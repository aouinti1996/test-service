import type { FooterSocialIcon } from "@/components/footer/footer-config";

export type SocialLink = {
  name: string;
  href: string;
  icon: FooterSocialIcon;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/Activeservicees",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/seervicess/",
    icon: "instagram",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/93799683683",
    icon: "whatsapp",
  },
];

export function isExternalSocialLink(href: string) {
  return href.startsWith("http");
}
