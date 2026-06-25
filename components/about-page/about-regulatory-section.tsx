import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { Icon } from "@/components/icon";
import { SiteContainer } from "@/components/layout/site-container";
import { cn } from "@/lib/utils";
import { ABOUT_REGULATORY } from "./about-page-config";
import { AnimatedSection } from "@/components/motion";

export type AboutRegulatorySectionProps = {
  className?: string;
};

export function AboutRegulatorySection({ className }: AboutRegulatorySectionProps) {
  return (
    <AnimatedSection variant="default" className={cn("w-full bg-bg-elevated", className)}>
      <SiteContainer className="px-20 py-20">
        <div className="relative flex items-center gap-16 overflow-hidden rounded-3xl border border-border-subtle bg-bg-surface p-12">
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              src="/about-page/regulatory-gradient.svg"
              alt=""
              className="size-full object-cover object-center"
            />
          </div>

          <div className="relative z-10 h-[200px] w-[202px] shrink-0">
            <Image
              src="/about-page/atra-seal.png"
              alt="ATRA certified seal"
              fill
              unoptimized
              className="object-contain object-center"
            />
          </div>

          <div className="relative z-10 flex min-w-0 flex-1 flex-col gap-6">
            <h2 className="text-heading-h2-bold text-text-heading">
              {ABOUT_REGULATORY.title}
            </h2>
            <p className="text-body-large-regular text-text-body">
              {ABOUT_REGULATORY.description}
            </p>
            <div className="flex items-center gap-3">
              <Icon icon={ShieldCheck} variant="primary" size={24} strokeWidth={2} />
              <p className="text-caption-large-bold text-text-heading">
                {ABOUT_REGULATORY.license}
              </p>
            </div>
          </div>
        </div>
      </SiteContainer>
    </AnimatedSection>
  );
}
