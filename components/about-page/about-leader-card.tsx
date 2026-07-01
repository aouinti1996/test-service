import Image from "next/image";
import { cn } from "@/lib/utils";

export type AboutLeaderCardProps = {
  name: string;
  role: string;
  image: string;
  className?: string;
};

export function AboutLeaderCard({
  name,
  role,
  image,
  className,
}: AboutLeaderCardProps) {
  return (
    <article
      className={cn(
        "flex w-full items-center gap-5",
        "xl:min-w-0 xl:flex-1 xl:flex-col xl:items-center xl:gap-5",
        className,
      )}
    >
      <div className="relative size-20 shrink-0 overflow-hidden rounded-3xl xl:aspect-square xl:h-auto xl:w-full">
        <Image
          src={image}
          alt={name}
          fill
          unoptimized
          className="object-cover object-center"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1 xl:w-full xl:flex-none xl:items-center xl:text-center">
        <p className="text-base font-bold leading-6 text-text-heading xl:text-body-large-bold">
          {name}
        </p>
        <p className="text-sm font-medium leading-5 text-primary-600 xl:text-body-small-medium xl:text-primary-subtle-text">
          {role}
        </p>
      </div>
    </article>
  );
}
