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
    <footer className={cn("w-full bg-bg-surface", className)}>
      <SiteContainer>
        <FooterMain />
        <FooterOperatorsRow />
        <FooterCopyright />
      </SiteContainer>
    </footer>
  );
}
