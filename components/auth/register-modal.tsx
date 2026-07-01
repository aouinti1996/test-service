"use client";

import { useId, useState } from "react";
import { Eye, EyeOff, Lock, Mail, User, UserPlus } from "lucide-react";
import { Icon } from "@/components/icon";
import { Modal } from "@/components/ui/modal";
import { cn } from "@/lib/utils";
import {
  AuthCard,
  AuthCardHeader,
  AuthCardIconBadge,
  authFooterLinkClassName,
  authFooterTextClassName,
  authPrimaryButtonClassName,
} from "./auth-card";
import { AuthInput, AuthPhonePrefix } from "./auth-input";
import { useAuthModal } from "./auth-modal-provider";

export type RegisterModalProps = {
  open: boolean;
  onClose: () => void;
};

export function RegisterModal({ open, onClose }: RegisterModalProps) {
  const titleId = useId();
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { switchToLogin } = useAuthModal();

  return (
    <Modal
      open={open}
      onClose={onClose}
      labelledBy={titleId}
      overlayClassName="bg-[#0d3b22]/70 backdrop-blur-sm"
      className="max-w-[480px]"
    >
      <AuthCard aria-labelledby={titleId}>
        <AuthCardIconBadge icon={UserPlus} />

        <AuthCardHeader
          titleId={titleId}
          title="Create Your Account"
          description="Join millions of users on Active Services"
        />

        <form
          className="flex w-full flex-col gap-3 xl:gap-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <AuthInput
            icon={User}
            name="fullName"
            placeholder="Full Name"
            autoComplete="name"
          />
          <AuthInput
            icon={Mail}
            name="email"
            type="email"
            placeholder="Email Address"
            autoComplete="email"
          />
          <AuthInput
            name="phone"
            type="tel"
            placeholder="Phone Number"
            autoComplete="tel"
            leading={<AuthPhonePrefix />}
          />
          <AuthInput
            icon={Lock}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            autoComplete="new-password"
            trailing={
              <button
                type="button"
                className="shrink-0 cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((value) => !value)}
              >
                <Icon
                  icon={showPassword ? Eye : EyeOff}
                  variant="default"
                  size={18}
                  strokeWidth={2}
                  className="xl:hidden"
                />
                <Icon
                  icon={showPassword ? Eye : EyeOff}
                  variant="default"
                  size={20}
                  strokeWidth={2}
                  className="hidden xl:block"
                />
              </button>
            }
          />
          <AuthInput
            icon={Lock}
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            autoComplete="new-password"
          />

          <label className="flex w-full cursor-pointer items-center gap-2.5 xl:gap-3">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(event) => setAgreedToTerms(event.target.checked)}
              className="sr-only"
            />
            <span
              aria-hidden
              className={cn(
                "flex size-4 shrink-0 items-center justify-center rounded-[5px] border-2 border-primary-default xl:size-5 xl:rounded-md",
                agreedToTerms && "bg-primary-default",
              )}
            >
              {agreedToTerms ? (
                <svg
                  viewBox="0 0 12 10"
                  className="size-2.5 text-text-inverse xl:size-3"
                  aria-hidden
                >
                  <path
                    d="M1 5.5L4.5 9L11 1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : null}
            </span>
            <span className="text-xs leading-4 text-text-secondary xl:text-body-small-regular xl:leading-5">
              I agree to{" "}
              <a
                href="/terms"
                className="cursor-pointer text-primary-600 underline xl:text-primary-subtle-text"
                onClick={(event) => event.stopPropagation()}
              >
                Terms
              </a>{" "}
              &amp;{" "}
              <a
                href="/privacy"
                className="cursor-pointer text-primary-600 underline xl:text-primary-subtle-text"
                onClick={(event) => event.stopPropagation()}
              >
                Privacy Policy
              </a>
            </span>
          </label>

          <button
            type="submit"
            disabled={!agreedToTerms}
            className={cn(
              authPrimaryButtonClassName,
              "disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50",
            )}
          >
            Create Account
          </button>
        </form>

        <p className={authFooterTextClassName}>
          Already have an account?{" "}
          <button
            type="button"
            className={authFooterLinkClassName}
            onClick={switchToLogin}
          >
            Sign In
          </button>
        </p>
      </AuthCard>
    </Modal>
  );
}
