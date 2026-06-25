import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { ContactForm } from "./contact-form";
import { ContactSocialLinks } from "./contact-social-links";
import { AnimatedSection } from "@/components/motion";

export type ContactMessageSectionProps = {
  className?: string;
};

export function ContactMessageSection({ className }: ContactMessageSectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("relative z-0 w-full bg-bg-surface", className)}>
      <SiteContainer className="flex gap-[100px] px-20 pb-20 pt-20">
        <div className="flex min-w-0 flex-1 flex-col gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <p className="text-body-small-bold text-primary-subtle-text">
                WE&apos;D LOVE TO HEAR FROM YOU
              </p>
              <h2 className="text-heading-h1-bold text-text-heading">
                Send us a{" "}
                <span className="text-primary-subtle-text">Message</span>
              </h2>
            </div>

            <p className="text-body-large-regular text-text-body-small">
              Have a specific inquiry or feedback? Fill out the form and our
              specialized support team will get back to you as soon as possible.
            </p>
            <p className="text-body-large-regular text-text-body-small">
              For business inquiries and distributor registrations, please use
              our dedicated forms in the navigation.
            </p>
          </div>

          <ContactSocialLinks />
        </div>

        <div className="w-[640px] shrink-0 rounded-3xl border border-border-subtle bg-bg-elevated p-12 shadow-[0px_1px_1px_rgba(63,63,68,0.05),0px_1px_1.5px_rgba(63,63,68,0.1)]">
          <ContactForm />
        </div>
      </SiteContainer>
    </AnimatedSection>
  );
}
