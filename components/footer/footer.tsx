import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { FooterCopyright } from "./footer-copyright";
import { FooterMain } from "./footer-main";
import { FooterOperatorsRow } from "./footer-operators-row";

export type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "w-full bg-bg-surface shadow-[0px_-1px_1px_rgba(63,63,68,0.05),0px_-1px_1.5px_rgba(63,63,68,0.1)] xl:shadow-none",
        className,
      )}
    >
      <SiteContainer>
        <FooterMain />
        <FooterOperatorsRow />
        <FooterCopyright />
      </SiteContainer>
    </footer>
  );
}
