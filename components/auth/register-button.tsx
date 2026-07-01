"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuthModal } from "./auth-modal-provider";

export type RegisterButtonProps = {
  className?: string;
  onClick?: () => void;
};

export function RegisterButton({ className, onClick }: RegisterButtonProps) {
  const { openRegister } = useAuthModal();

  return (
    <Button
      type="button"
      variant="subtle"
      className={cn(className)}
      onClick={() => {
        openRegister();
        onClick?.();
      }}
    >
      Register
    </Button>
  );
}
