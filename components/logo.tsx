import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type LogoProps = {
  className?: string;
  href?: string;
};

export function Logo({ className, href = "/" }: LogoProps) {
  const image = (
    <Image
      src="/logo-main.svg"
      alt="Active Services"
      width={120}
      height={40}
      priority
      className={cn("h-10 w-[120px] object-contain object-left", className)}
    />
  );

  if (!href) {
    return image;
  }

  return (
    <Link href={href} className="inline-flex shrink-0" aria-label="Active Services home">
      {image}
    </Link>
  );
}
