import { AppStoreBadges } from "@/components/hero/app-store-badges";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type FooterNewsletterProps = {
  className?: string;
};

export function FooterNewsletter({ className }: FooterNewsletterProps) {
  return (
    <div
      className={cn(
        "flex w-full shrink-0 flex-col gap-6 xl:w-[320px] xl:gap-10",
        className,
      )}
    >
      <div className="flex flex-col gap-2 xl:gap-4">
        <p className="whitespace-nowrap text-body-small-medium text-text-heading">
          Stay Updated
        </p>
        <p className="text-body-small-regular text-text-body-small">
          Subscribe to get the latest updates, offers and news.
        </p>

        <form className="flex w-full items-start gap-2 xl:items-center">
          <label htmlFor="footer-email" className="sr-only">
            Email address
          </label>
          <input
            id="footer-email"
            type="email"
            placeholder="Enter your email"
            className="h-11 min-w-0 flex-1 rounded-lg border border-border-subtle bg-bg-elevated px-4 text-body-small-medium text-text-heading placeholder:text-text-secondary outline-none focus:border-primary-default"
          />
          <Button type="submit" className="h-11 shrink-0 xl:h-auto">
            Subscribe
          </Button>
        </form>
      </div>

      <div className="flex flex-col gap-2 xl:gap-4">
        <p className="whitespace-nowrap text-body-small-medium text-text-heading">
          Download Our App
        </p>
        <AppStoreBadges size="sm" />
      </div>
    </div>
  );
}
