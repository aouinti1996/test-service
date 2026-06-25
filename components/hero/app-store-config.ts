export type AppStoreId = "google-play" | "app-store";

export type AppStoreBadgeConfig = {
  id: AppStoreId;
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  /** Set when the store listing is live; `#` or omit to show coming soon */
  href?: string;
};

export const APP_STORE_COPY: Record<
  AppStoreId,
  { label: string; platform: string }
> = {
  "google-play": {
    label: "Google Play",
    platform: "Android",
  },
  "app-store": {
    label: "App Store",
    platform: "iOS",
  },
};

export const APP_STORE_BADGES = {
  md: [
    {
      id: "google-play",
      href: "#",
      src: "/google-play-btn.svg",
      alt: "Get it on Google Play",
      width: 162,
      height: 48,
      className: "h-12 w-[162px]",
    },
    {
      id: "app-store",
      href: "#",
      src: "/app-store-btn.svg",
      alt: "Download on the App Store",
      width: 144,
      height: 48,
      className: "h-12 w-36",
    },
  ],
  sm: [
    {
      id: "google-play",
      href: "#",
      src: "/google-play-btn.svg",
      alt: "Get it on Google Play",
      width: 135,
      height: 40,
      className: "h-10 w-[135px]",
    },
    {
      id: "app-store",
      href: "#",
      src: "/app-store-btn.svg",
      alt: "Download on the App Store",
      width: 120,
      height: 40,
      className: "h-10 w-[120px]",
    },
  ],
} as const satisfies Record<"md" | "sm", readonly AppStoreBadgeConfig[]>;

export function isAppStoreLinkAvailable(href?: string) {
  return Boolean(href && href !== "#");
}
