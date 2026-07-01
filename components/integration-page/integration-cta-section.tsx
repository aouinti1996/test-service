import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/motion";

export type IntegrationCtaSectionProps = {
  className?: string;
};

export function IntegrationCtaSection({ className }: IntegrationCtaSectionProps) {
  return (
    <AnimatedSection
      variant="default"
      className={cn("relative w-full overflow-hidden bg-[#0a1910]", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[150px] -top-[150px] size-[600px]"
      >
        <Image
          src="/integration-page/cta-glow-1.svg"
          alt=""
          fill
          unoptimized
          className="object-contain"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute left-[1000px] top-[100px] hidden size-[500px] xl:block"
      >
        <Image
          src="/integration-page/cta-glow-2.svg"
          alt=""
          fill
          unoptimized
          className="object-contain"
        />
      </div>

      <div className="relative flex flex-col items-center gap-4 px-4 py-8 xl:gap-8 xl:px-20 xl:py-20">
        <div className="flex w-full max-w-[800px] flex-col items-center gap-2 text-center xl:gap-4">
          <h2 className="w-full text-[24px] font-bold leading-8 text-text-inverse xl:text-heading-h1-bold">
            Start Building Today
          </h2>
          <p className="max-w-[600px] text-sm leading-5 text-primary-50 xl:text-body-large-regular">
            Join developers and businesses already using Active Services to power
            top-up in their apps.
          </p>
        </div>

        <div className="flex shrink-0 items-center justify-center gap-4">
          <Button className="shrink-0 whitespace-nowrap px-4 py-2 text-base font-medium leading-6 xl:font-bold xl:text-body-large-bold">
            Get API Access
          </Button>
          <Button
            variant="outline"
            className="shrink-0 whitespace-nowrap border-[#e4e4e7] bg-bg-elevated px-4 py-2 text-base font-medium leading-6 text-text-heading xl:text-body-large-medium"
          >
            Talk to Sales
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
