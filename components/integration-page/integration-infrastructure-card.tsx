import type { LucideIcon } from "lucide-react";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export type IntegrationInfrastructureCardProps = {
  title: string;
  description: string;
  chip: string;
  icon: LucideIcon;
  image: string;
  mobileImage?: string;
  mobileImageClassName?: string;
  mobileImageWrapperClassName?: string;
  imageWrapperClassName?: string;
  imageClassName?: string;
  className?: string;
};

export function IntegrationInfrastructureCard({
  title,
  description,
  chip,
  icon,
  image,
  mobileImage,
  mobileImageClassName,
  mobileImageWrapperClassName,
  imageWrapperClassName,
  imageClassName,
  className,
}: IntegrationInfrastructureCardProps) {
  const mobileSrc = mobileImage ?? image;

  return (
    <article
      className={cn(
        "flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-[#e8edf5] bg-bg-elevated shadow-[0px_4px_16px_0px_rgba(0,0,0,0.06)]",
        "xl:rounded-[20px] xl:border-border-subtle xl:shadow-[0px_10px_30px_0px_rgba(0,0,0,0.03)]",
        className,
      )}
    >
      {/* Figma 661:9613 — mobile image area */}
      <div className="relative flex h-[180px] w-full shrink-0 items-center justify-center overflow-hidden p-4 xl:h-[200px] xl:items-stretch xl:justify-stretch xl:p-0">
        <div className="relative h-[162px] w-full max-w-[341px] xl:hidden">
          {mobileImageWrapperClassName ? (
            <div
              className={cn(
                "pointer-events-none absolute overflow-hidden",
                mobileImageWrapperClassName,
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mobileSrc}
                alt=""
                aria-hidden
                className={cn(
                  mobileImageClassName ??
                    "absolute inset-0 size-full max-w-none object-cover",
                )}
              />
            </div>
          ) : (
            <Image
              src={mobileSrc}
              alt=""
              fill
              unoptimized
              aria-hidden
              className={cn("object-cover object-center", mobileImageClassName)}
            />
          )}
        </div>

        {imageWrapperClassName ? (
          <div
            className={cn(
              "pointer-events-none absolute hidden overflow-hidden xl:block",
              imageWrapperClassName,
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt=""
              aria-hidden
              className={cn(
                imageClassName ??
                  "absolute inset-0 size-full max-w-none object-cover",
              )}
            />
          </div>
        ) : imageClassName ? (
          <img
            src={image}
            alt=""
            aria-hidden
            className={cn("pointer-events-none hidden xl:block", imageClassName)}
          />
        ) : (
          <Image
            src={image}
            alt=""
            fill
            unoptimized
            aria-hidden
            className="pointer-events-none hidden object-cover object-center xl:block"
          />
        )}

        <div className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-[10px] bg-primary-subtle-bg shadow-[0px_2px_4px_rgba(0,0,0,0.08)] xl:left-5 xl:top-5 xl:size-11 xl:rounded-xl">
          <Icon icon={icon} variant="primary" size={24} strokeWidth={2} />
        </div>
      </div>

      <div className="flex flex-col gap-3 p-4 xl:gap-4 xl:p-7">
        <h3 className="text-xl font-bold leading-7 text-text-heading xl:text-heading-h3-bold">
          {title}
        </h3>
        <p className="text-sm leading-5 text-text-secondary xl:text-body-small-regular">
          {description}
        </p>

        <div className="inline-flex w-fit items-center gap-2 rounded-[32px] border border-white/20 bg-primary-subtle-bg px-4 py-2 xl:border-transparent xl:px-3.5 xl:py-2">
          <Icon icon={CircleCheck} variant="primary" size={20} strokeWidth={2} className="xl:size-4" />
          <span className="text-xs font-medium leading-4 text-primary-subtle-text xl:text-body-small-medium xl:font-semibold">
            {chip}
          </span>
        </div>
      </div>
    </article>
  );
}
