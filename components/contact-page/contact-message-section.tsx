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
      <SiteContainer className="flex flex-col gap-4 px-4 py-4 xl:flex-row xl:gap-[100px] xl:px-20 xl:pb-20 xl:pt-20">
        <div className="flex min-w-0 flex-1 flex-col gap-4 xl:gap-12">
          <div className="flex flex-col gap-4 xl:gap-6">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-bold leading-5 text-primary-600 xl:text-body-small-bold xl:text-primary-subtle-text">
                WE&apos;D LOVE TO HEAR FROM YOU
              </p>
              <h2 className="text-2xl font-bold leading-8 text-text-heading xl:text-heading-h1-bold">
                Send us a{" "}
                <span className="text-primary-600 xl:text-primary-subtle-text">Message</span>
              </h2>
            </div>

            <p className="text-sm leading-5 text-text-body-small xl:text-body-large-regular">
              Have a specific inquiry or feedback? Fill out the form and our
              specialized support team will get back to you as soon as possible.
            </p>
            <p className="text-sm leading-5 text-text-body-small xl:text-body-large-regular">
              For business inquiries and distributor registrations, please use
              our dedicated forms in the navigation.
            </p>
          </div>

          <ContactSocialLinks />
        </div>

        <div className="w-full shrink-0 rounded-3xl border border-border-subtle bg-bg-elevated p-4 shadow-[0px_1px_1px_rgba(63,63,68,0.05),0px_1px_1.5px_rgba(63,63,68,0.1)] xl:w-[640px] xl:p-12">
          <ContactForm />
        </div>
      </SiteContainer>
    </AnimatedSection>
  );
}
