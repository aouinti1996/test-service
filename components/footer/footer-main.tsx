import { cn } from "@/lib/utils";
import { FOOTER_NAV_GROUPS } from "./footer-config";
import { FooterBrand } from "./footer-brand";
import { FooterNavColumn } from "./footer-nav-column";
import { FooterNewsletter } from "./footer-newsletter";

export function FooterMain() {
  return (
    <div className="flex w-full flex-col gap-4 p-4 xl:flex-row xl:items-start xl:justify-between xl:gap-0 xl:px-20 xl:py-20">
      <FooterBrand />

      <div className="flex w-full flex-wrap items-start gap-8 xl:w-auto xl:flex-nowrap xl:gap-12">
        {FOOTER_NAV_GROUPS.map((group) => (
          <FooterNavColumn key={group.title} {...group} />
        ))}
      </div>

      <FooterNewsletter />
    </div>
  );
}
