import Link from "next/link";
import { FooterSocialIconGlyph } from "@/components/footer/footer-social-icon";
import { CONTACT_SOCIAL_LINKS } from "./contact-page-config";

export function ContactSocialLinks() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-bold leading-5 text-text-heading xl:text-body-small-bold">
        FOLLOW US
      </p>
      <div className="flex items-start gap-3">
        {CONTACT_SOCIAL_LINKS.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="flex size-10 cursor-pointer items-center justify-center rounded-[20px] border border-border-subtle bg-bg-elevated transition-colors hover:bg-bg-subtle"
          >
            <FooterSocialIconGlyph icon={social.icon} />
          </Link>
        ))}
      </div>
    </div>
  );
}
