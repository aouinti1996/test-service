"use client";

import Link from "next/link";
import { useId } from "react";
import { Smartphone } from "lucide-react";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import {
  APP_STORE_COPY,
  type AppStoreId,
} from "./app-store-config";

export type AppComingSoonModalProps = {
  open: boolean;
  store: AppStoreId | null;
  onClose: () => void;
};

export function AppComingSoonModal({
  open,
  store,
  onClose,
}: AppComingSoonModalProps) {
  const titleId = useId();
  const descriptionId = useId();

  if (!store) return null;

  const { label, platform } = APP_STORE_COPY[store];

  return (
    <Modal
      open={open}
      onClose={onClose}
      labelledBy={titleId}
      describedBy={descriptionId}
      overlayClassName="bg-[#0d3b22]/70 backdrop-blur-sm"
      className="w-full max-w-[420px]"
    >
      <div className="flex w-full flex-col items-center gap-6 rounded-[32px] border border-white/25 bg-white/80 p-8 shadow-[0px_20px_40px_0px_rgba(0,0,0,0.13)] backdrop-blur-[16px]">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-[18px] bg-bg-elevated shadow-[0px_4px_4px_rgba(0,0,0,0.06)]">
          <Icon icon={Smartphone} variant="primary" size={26} strokeWidth={2} />
        </div>

        <div className="flex w-full flex-col items-center gap-2 text-center">
          <p className="rounded-full bg-primary-subtle-bg px-3 py-1 text-caption-large-bold text-primary-subtle-text">
            Coming soon
          </p>
          <h2 id={titleId} className="text-heading-h2-bold text-text-heading">
            {label}
          </h2>
          <p
            id={descriptionId}
            className="text-body-small-regular text-text-secondary"
          >
            The Active Services {platform} app is almost ready. We&apos;re
            finishing the final release for {label} and will publish the link
            here as soon as it&apos;s live.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3">
          <Button type="button" className="w-full" onClick={onClose}>
            Got it
          </Button>
          <Link
            href="/get-the-app"
            className="text-center text-body-small-medium text-primary-subtle-text transition-colors hover:text-primary-default"
            onClick={onClose}
          >
            Learn more on Get the App
          </Link>
        </div>
      </div>
    </Modal>
  );
}
