import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type LogoProps = {
  className?: string;
  href?: string;
  /** Navbar: mobile asset below xl, desktop logo at xl+. */
  variant?: "default" | "responsive";
  onClick?: () => void;
};

export function Logo({
  className,
  href = "/",
  variant = "default",
  onClick,
}: LogoProps) {
  const image =
    variant === "responsive" ? (
      <>
        <Image
          src="/mobile-logo.svg"
          alt="Active Services"
          width={120}
          height={40}
          priority
          unoptimized
          className={cn(
            "h-10 w-[120px] object-contain object-left xl:hidden",
            className,
          )}
        />
        <Image
          src="/logo-main.svg"
          alt="Active Services"
          width={120}
          height={40}
          priority
          unoptimized
          className={cn(
            "hidden h-10 w-[120px] object-contain object-left xl:block",
            className,
          )}
        />
      </>
    ) : (
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
    <Link
      href={href}
      onClick={onClick}
      className="inline-flex shrink-0"
      aria-label="Active Services home"
    >
      {image}
    </Link>
  );
}
