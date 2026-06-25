"use client";

import { X } from "lucide-react";
import { useEffect, useId, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
  labelledBy?: string;
  describedBy?: string;
  /** When false, clicking the backdrop does not close the modal. Defaults to false. */
  closeOnOverlayClick?: boolean;
  /** Show the top-right close (X) button. Defaults to true. */
  showCloseButton?: boolean;
};

export function Modal({
  open,
  onClose,
  children,
  className,
  overlayClassName,
  labelledBy,
  describedBy,
  closeOnOverlayClick = false,
  showCloseButton = true,
}: ModalProps) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    panelRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        overlayClassName,
      )}
      onMouseDown={
        closeOnOverlayClick
          ? (event) => {
              if (event.target === event.currentTarget) onClose();
            }
          : undefined
      }
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy ?? titleId}
        aria-describedby={describedBy}
        tabIndex={-1}
        className={cn("relative outline-none", className)}
      >
        {showCloseButton ? (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full text-icon-default transition-colors hover:bg-bg-subtle hover:text-text-heading"
          >
            <X size={20} strokeWidth={2} aria-hidden />
          </button>
        ) : null}
        {children}
      </div>
    </div>,
    document.body,
  );
}
