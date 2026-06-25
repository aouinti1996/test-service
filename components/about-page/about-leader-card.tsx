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
    <article className={cn("flex min-w-0 flex-1 flex-col items-center gap-5", className)}>
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl">
        <Image
          src={image}
          alt={name}
          fill
          unoptimized
          className="object-cover object-center"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-1 text-center">
        <p className="text-body-large-bold text-text-heading">{name}</p>
        <p className="text-body-small-medium text-primary-subtle-text">{role}</p>
      </div>
    </article>
  );
}
