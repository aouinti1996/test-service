"use client";

import { useId, useState } from "react";
import { Eye, EyeOff, Lock, Mail, User, UserPlus } from "lucide-react";
import { Icon } from "@/components/icon";
import { Modal } from "@/components/ui/modal";
import { cn } from "@/lib/utils";
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
      className="w-full max-w-[480px]"
    >
      <div className="flex w-full flex-col items-center gap-8 rounded-[40px] border border-white/25 bg-white/80 p-12 shadow-[0px_20px_40px_0px_rgba(0,0,0,0.13)] backdrop-blur-[16px]">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-[20px] bg-bg-elevated shadow-[0px_4px_4px_rgba(0,0,0,0.06)]">
          <Icon icon={UserPlus} variant="primary" size={28} strokeWidth={2} />
        </div>

        <div className="flex w-full flex-col items-center gap-2 text-center">
          <h2
            id={titleId}
            className="w-full text-heading-h2-bold text-text-heading"
          >
            Create Your Account
          </h2>
          <p className="w-full text-body-small-regular text-text-secondary">
            Join millions of users on Active Services
          </p>
        </div>

        <form
          className="flex w-full flex-col gap-4"
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
                  size={20}
                  strokeWidth={2}
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

          <label className="flex w-full cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(event) => setAgreedToTerms(event.target.checked)}
              className="sr-only"
            />
            <span
              aria-hidden
              className={cn(
                "flex size-5 shrink-0 items-center justify-center rounded-md border-2 border-primary-default",
                agreedToTerms && "bg-primary-default",
              )}
            >
              {agreedToTerms ? (
                <svg
                  viewBox="0 0 12 10"
                  className="size-3 text-text-inverse"
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
            <span className="text-body-small-regular text-text-secondary">
              I agree to{" "}
              <a
                href="/terms"
                className="cursor-pointer text-primary-subtle-text underline"
                onClick={(event) => event.stopPropagation()}
              >
                Terms
              </a>{" "}
              &amp;{" "}
              <a
                href="/privacy"
                className="cursor-pointer text-primary-subtle-text underline"
                onClick={(event) => event.stopPropagation()}
              >
                Privacy Policy
              </a>
            </span>
          </label>

          <button
            type="submit"
            disabled={!agreedToTerms}
            className="flex h-14 w-full cursor-pointer items-center justify-center rounded-2xl bg-primary-default text-body-large-bold text-text-inverse shadow-[0px_8px_8px_rgba(0,191,166,0.25)] transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-body-small-regular text-text-secondary">
          Already have an account?{" "}
          <button
            type="button"
            className="cursor-pointer font-bold text-primary-subtle-text"
            onClick={switchToLogin}
          >
            Sign In
          </button>
        </p>
      </div>
    </Modal>
  );
}
