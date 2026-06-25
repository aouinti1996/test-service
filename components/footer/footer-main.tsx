import { FOOTER_NAV_GROUPS } from "./footer-config";
import { FooterBrand } from "./footer-brand";
import { FooterNavColumn } from "./footer-nav-column";
import { FooterNewsletter } from "./footer-newsletter";

export function FooterMain() {
  return (
    <div className="flex w-full items-start justify-between px-20 py-20">
      <FooterBrand />

      <div className="flex shrink-0 gap-12">
        {FOOTER_NAV_GROUPS.map((group) => (
          <FooterNavColumn key={group.title} {...group} />
        ))}
      </div>

      <FooterNewsletter />
    </div>
  );
}
