import Link from "next/link";
import { FOOTER_SOCIAL_LINKS } from "./footer-config";
import { FooterSocialIconGlyph } from "./footer-social-icon";

export function FooterSocialLinks() {
  return (
    <div className="flex flex-col items-end gap-4">
      <p className="whitespace-nowrap text-body-small-medium text-text-heading">
        Follow Us
      </p>
      <div className="flex items-start gap-3">
        {FOOTER_SOCIAL_LINKS.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="flex size-8 cursor-pointer items-center justify-center rounded-2xl border border-border-subtle bg-bg-elevated transition-colors hover:bg-bg-subtle"
          >
            <FooterSocialIconGlyph icon={social.icon} />
          </Link>
        ))}
      </div>
    </div>
  );
}
