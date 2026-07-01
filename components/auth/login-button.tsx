"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuthModal } from "./auth-modal-provider";

export type LoginButtonProps = {
  className?: string;
  onClick?: () => void;
};

export function LoginButton({ className, onClick }: LoginButtonProps) {
  const { openLogin } = useAuthModal();

  return (
    <Button
      type="button"
      variant="primary"
      className={cn(className)}
      onClick={() => {
        openLogin();
        onClick?.();
      }}
    >
      Login
    </Button>
  );
}
