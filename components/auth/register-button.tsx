"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuthModal } from "./auth-modal-provider";

export type RegisterButtonProps = {
  className?: string;
};

export function RegisterButton({ className }: RegisterButtonProps) {
  const { openRegister } = useAuthModal();

  return (
    <Button
      type="button"
      variant="subtle"
      className={cn(className)}
      onClick={openRegister}
    >
      Register
    </Button>
  );
}
