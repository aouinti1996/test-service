"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AppComingSoonModal } from "./app-coming-soon-modal";
import {
  APP_STORE_BADGES,
  type AppStoreId,
  isAppStoreLinkAvailable,
} from "./app-store-config";

export type AppStoreBadgesProps = {
  size?: keyof typeof APP_STORE_BADGES;
  className?: string;
};

export function AppStoreBadges({ size = "md", className }: AppStoreBadgesProps) {
  const [comingSoonStore, setComingSoonStore] = useState<AppStoreId | null>(
    null,
  );

  const handleBadgeClick = (store: AppStoreId, href?: string) => {
    if (isAppStoreLinkAvailable(href)) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    setComingSoonStore(store);
  };

  return (
    <>
      <div className={cn("flex items-center gap-4", className)}>
        {APP_STORE_BADGES[size].map((badge) => {
          const linkReady = isAppStoreLinkAvailable(badge.href);

          return (
            <button
              key={badge.id}
              type="button"
              className="shrink-0 cursor-pointer rounded-lg transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-default focus-visible:ring-offset-2"
              aria-label={
                linkReady
                  ? badge.alt
                  : `${badge.alt} — coming soon`
              }
              onClick={() => handleBadgeClick(badge.id, badge.href)}
            >
              <Image
                src={badge.src}
                alt=""
                width={badge.width}
                height={badge.height}
                className={badge.className}
              />
            </button>
          );
        })}
      </div>

      <AppComingSoonModal
        open={comingSoonStore !== null}
        store={comingSoonStore}
        onClose={() => setComingSoonStore(null)}
      />
    </>
  );
}
