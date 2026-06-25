"use client";

import { useId, useState } from "react";
import { Eye, EyeOff, Lock, LogIn, Mail } from "lucide-react";
import { Icon } from "@/components/icon";
import { Modal } from "@/components/ui/modal";
import { AuthInput } from "./auth-input";
import { AUTH_LOGIN_PROVIDERS } from "./auth-login-providers";
import { useAuthModal } from "./auth-modal-provider";

export type LoginModalProps = {
  open: boolean;
  onClose: () => void;
};

export function LoginModal({ open, onClose }: LoginModalProps) {
  const titleId = useId();
  const [showPassword, setShowPassword] = useState(false);
  const { switchToRegister } = useAuthModal();

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
          <Icon icon={LogIn} variant="primary" size={28} strokeWidth={2} />
        </div>

        <div className="flex w-full flex-col items-center gap-2 text-center">
          <h2
            id={titleId}
            className="w-full text-heading-h2-bold text-text-heading"
          >
            Sign In to Active Services
          </h2>
          <p className="w-full text-body-small-regular text-text-secondary">
            Manage your recharge, bundles, and retailer tools
          </p>
        </div>

        <form
          className="flex w-full flex-col gap-5"
          onSubmit={(event) => event.preventDefault()}
        >
          <AuthInput
            icon={Mail}
            name="identifier"
            placeholder="Email or Phone Number"
            autoComplete="username"
          />

          <div className="flex w-full flex-col gap-3">
            <AuthInput
              icon={Lock}
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              autoComplete="current-password"
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
            <button
              type="button"
              className="w-full cursor-pointer text-right text-body-small-bold text-primary-subtle-text"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="flex h-14 w-full cursor-pointer items-center justify-center rounded-2xl bg-primary-default text-body-large-bold text-text-inverse shadow-[0px_8px_8px_rgba(0,191,166,0.25)] transition-colors hover:bg-primary-hover"
          >
            Sign In
          </button>
        </form>

        <div className="flex w-full items-center gap-4">
          <div className="h-px flex-1 bg-border-subtle" />
          <span className="whitespace-nowrap text-caption-large-regular text-text-secondary">
            Or sign in with
          </span>
          <div className="h-px flex-1 bg-border-subtle" />
        </div>

        <div className="flex w-full gap-3">
          {AUTH_LOGIN_PROVIDERS.map(({ name, connection, icon: ProviderIcon }) => (
            <button
              key={connection}
              type="button"
              aria-label={`Sign in with ${name}`}
              className="flex flex-1 cursor-pointer items-center justify-center rounded-2xl border border-border-subtle bg-bg-elevated p-4 transition-colors hover:bg-bg-subtle"
            >
              <ProviderIcon />
            </button>
          ))}
        </div>

        <p className="text-center text-body-small-regular text-text-secondary">
          Don&apos;t have an account?{" "}
          <button
            type="button"
            className="cursor-pointer font-bold text-primary-subtle-text"
            onClick={switchToRegister}
          >
            Register
          </button>
        </p>
      </div>
    </Modal>
  );
}
