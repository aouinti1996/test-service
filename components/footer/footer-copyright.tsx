import { ChevronDown, Globe, Heart } from "lucide-react";
import { Icon } from "@/components/icon";

export function FooterCopyright() {
  return (
    <div className="flex w-full items-center justify-between px-20 py-6">
      <p className="whitespace-nowrap text-caption-large-regular text-text-secondary">
        © 2026 Active Services. All rights reserved.
      </p>

      <div className="flex items-center gap-6">
        <button
          type="button"
          className="flex items-center gap-1.5 text-caption-large-regular text-text-secondary transition-colors hover:text-text-heading"
          aria-label="Select language"
        >
          <Icon icon={Globe} variant="default" size={16} strokeWidth={2} />
          <span>English</span>
          <Icon icon={ChevronDown} variant="default" size={12} strokeWidth={2} />
        </button>

        <div className="flex items-center gap-1 text-caption-large-regular text-text-secondary">
          <span>Made with</span>
          <Heart
            className="size-3 fill-primary-subtle-text text-primary-subtle-text"
            aria-hidden
          />
          <span>in Afghanistan</span>
        </div>
      </div>
    </div>
  );
}
