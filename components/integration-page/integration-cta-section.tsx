import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/motion";

export type IntegrationCtaSectionProps = {
  className?: string;
};

export function IntegrationCtaSection({ className }: IntegrationCtaSectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("relative w-full overflow-hidden bg-[#0a1910]", className)}>
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
        className="pointer-events-none absolute left-[1000px] top-[100px] size-[500px]"
      >
        <Image
          src="/integration-page/cta-glow-2.svg"
          alt=""
          fill
          unoptimized
          className="object-contain"
        />
      </div>

      <div className="relative flex flex-col items-center gap-8 px-20 py-20">
        <div className="flex max-w-[800px] flex-col items-center gap-4 text-center">
          <h2 className="text-heading-h1-bold text-text-inverse">
            Start Building Today
          </h2>
          <p className="max-w-[600px] text-body-large-regular text-primary-50">
            Join developers and businesses already using Active Services to power
            top-up in their apps.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button>Get API Access</Button>
          <Button variant="outline" className="bg-bg-elevated">
            Talk to Sales
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
