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
      <SiteContainer className="px-4 pb-10 pt-0 xl:px-20 xl:py-20">
        <div className="relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-border-subtle bg-bg-surface p-4 xl:flex-row xl:items-center xl:gap-16 xl:p-12">
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

          <div className="relative z-10 flex min-w-0 flex-1 flex-col gap-4 xl:gap-6">
            <h2 className="text-xl font-bold leading-7 text-text-heading xl:text-heading-h2-bold">
              {ABOUT_REGULATORY.title}
            </h2>
            <p className="text-sm leading-5 text-text-body xl:text-body-large-regular">
              {ABOUT_REGULATORY.description}
            </p>
            <div className="flex items-center gap-3">
              <Icon icon={ShieldCheck} variant="primary" size={24} strokeWidth={2} />
              <p className="text-xs font-bold leading-normal text-text-heading xl:text-caption-large-bold">
                {ABOUT_REGULATORY.license}
              </p>
            </div>
          </div>
        </div>
      </SiteContainer>
    </AnimatedSection>
  );
}
