import Image from "next/image";
import { SiteContainer } from "@/components/layout/site-container";
import { SectionHeader } from "@/components/section/section-header";
import { cn } from "@/lib/utils";
import { CoverageMatterCard } from "./coverage-matter-card";
import { CoverageMattersBackgroundMobile } from "./coverage-matters-background-mobile";
import { COVERAGE_MATTERS } from "./coverage-page-config";
import { AnimatedSection } from "@/components/motion";

export type CoverageMattersSectionProps = {
  className?: string;
};

const DESKTOP_DECORATIVE_DOTS = [
  { className: "left-12 top-12 size-1.5" },
  { className: "left-[120px] top-40 size-[5px]" },
  { className: "right-[290px] top-10 size-1.5" },
  { className: "right-[240px] top-44 size-[5px]" },
  { className: "left-[60px] bottom-40 size-[5px]" },
  { className: "right-[250px] bottom-36 size-1.5" },
] as const;

const MOBILE_DECORATIVE_DOTS = [
  { className: "left-12 top-12 size-1.5" },
  { className: "left-[120px] top-40 size-[5px]" },
  { className: "left-[60px] top-[380px] size-[5px]" },
] as const;

const DESKTOP_DECORATIVE_PLUS = [
  { className: "left-[30px] top-[100px] text-lg opacity-30" },
  { className: "right-[30px] top-[100px] text-lg opacity-30" },
  { className: "left-20 bottom-32 text-sm opacity-25" },
  { className: "right-20 bottom-32 text-sm opacity-25" },
] as const;

const MOBILE_DECORATIVE_PLUS = [
  { className: "left-[30px] top-[100px] text-lg opacity-30" },
  { className: "left-20 top-[320px] text-sm opacity-25" },
] as const;

export function CoverageMattersSection({ className }: CoverageMattersSectionProps) {
  const [firstRow, secondRow] = [
    COVERAGE_MATTERS.slice(0, 2),
    COVERAGE_MATTERS.slice(2, 4),
  ];

  return (
    <AnimatedSection
      variant="default"
      className={cn("relative w-full overflow-hidden p-4 xl:py-20", className)}
    >
      <CoverageMattersBackgroundMobile />
      <Image
        src="/coverage-page/matters-bg.png"
        alt=""
        fill
        unoptimized
        aria-hidden
        className="pointer-events-none hidden object-cover object-center xl:block"
      />

      {MOBILE_DECORATIVE_DOTS.map((dot, index) => (
        <span
          key={`mobile-dot-${index}`}
          aria-hidden
          className={cn(
            "pointer-events-none absolute z-[1] rounded-full bg-primary-default/40 xl:hidden",
            dot.className,
          )}
        />
      ))}
      {DESKTOP_DECORATIVE_DOTS.map((dot, index) => (
        <span
          key={`desktop-dot-${index}`}
          aria-hidden
          className={cn(
            "pointer-events-none absolute z-[1] hidden rounded-full bg-primary-default/40 xl:block",
            dot.className,
          )}
        />
      ))}

      {MOBILE_DECORATIVE_PLUS.map((plus, index) => (
        <span
          key={`mobile-plus-${index}`}
          aria-hidden
          className={cn(
            "pointer-events-none absolute z-[1] font-light text-primary-default xl:hidden",
            plus.className,
          )}
        >
          +
        </span>
      ))}
      {DESKTOP_DECORATIVE_PLUS.map((plus, index) => (
        <span
          key={`desktop-plus-${index}`}
          aria-hidden
          className={cn(
            "pointer-events-none absolute z-[1] hidden font-light text-primary-default xl:block",
            plus.className,
          )}
        >
          +
        </span>
      ))}

      <SiteContainer className="relative z-10 px-0 xl:px-20">
        <div className="flex flex-col gap-12 p-0 xl:gap-12 xl:p-16">
          <SectionHeader
            className="items-start gap-4 text-left xl:items-center xl:text-center"
            title="Why Our Coverage Matters"
            description="Built to deliver dependable access, speed, and support across Afghanistan."
          />

          <div className="flex flex-col gap-3 xl:gap-5">
            <div className="flex flex-col gap-3 xl:flex-row xl:gap-5">
              {firstRow.map((item) => (
                <CoverageMatterCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>
            <div className="flex flex-col gap-3 xl:flex-row xl:gap-5">
              {secondRow.map((item) => (
                <CoverageMatterCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </SiteContainer>
    </AnimatedSection>
  );
}
