import Link from "next/link";
import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { ContactHeroBackground } from "./contact-hero-background";
import { ContactInfoCards } from "./contact-info-cards";
import { AnimatedSection } from "@/components/motion";

export type ContactHeroSectionProps = {
  className?: string;
};

export function ContactHeroSection({ className }: ContactHeroSectionProps) {
  return (
    <AnimatedSection variant="hero" className={cn("w-full bg-bg-surface", className)}>
      <SiteContainer className="relative min-h-[600px] overflow-visible">
        <div className="absolute inset-x-0 top-0 overflow-hidden rounded-b-[40px] bg-[#0d3b22] px-20 pb-[120px] pt-20">
          <ContactHeroBackground />

          <div className="relative z-10 flex flex-col gap-6">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-body-small-medium text-primary-50"
            >
              <Link href="/" className="opacity-60 transition-opacity hover:opacity-100">
                Home
              </Link>
              <span className="opacity-60">/</span>
              <span>Contact Us</span>
            </nav>

            <h1 className="text-heading-h1-bold text-text-inverse">
              Contact <span className="text-primary-100">Us</span>
            </h1>

            <p className="max-w-[600px] text-body-large-regular text-primary-50">
              We&apos;re here to help you stay connected. Reach out to our team
              for any questions about recharges, wallet services, or becoming a
              distributor.
            </p>
          </div>
        </div>

        <ContactInfoCards />
      </SiteContainer>
    </AnimatedSection>
  );
}
