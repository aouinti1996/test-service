"use client";

import { useId, useState } from "react";
import { Eye, EyeOff, Lock, LogIn, Mail } from "lucide-react";
import { Icon } from "@/components/icon";
import { Modal } from "@/components/ui/modal";
import {
  AuthCard,
  AuthCardHeader,
  AuthCardIconBadge,
  authFooterLinkClassName,
  authFooterTextClassName,
  authPrimaryButtonClassName,
} from "./auth-card";
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
      className="max-w-[480px]"
    >
      <AuthCard aria-labelledby={titleId}>
        <AuthCardIconBadge icon={LogIn} />

        <AuthCardHeader
          titleId={titleId}
          title="Sign In to Active Services"
          description="Manage your recharge, bundles, and retailer tools"
        />

        <form
          className="flex w-full flex-col gap-4 xl:gap-5"
          onSubmit={(event) => event.preventDefault()}
        >
          <AuthInput
            icon={Mail}
            name="identifier"
            placeholder="Email or Phone Number"
            autoComplete="username"
          />

          <div className="flex w-full flex-col gap-2 xl:gap-3">
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
            <button
              type="button"
              className="w-full cursor-pointer text-right text-xs font-bold leading-4 text-primary-600 xl:text-body-small-bold xl:leading-5 xl:text-primary-subtle-text"
            >
              Forgot Password?
            </button>
          </div>

          <button type="submit" className={authPrimaryButtonClassName}>
            Sign In
          </button>
        </form>

        <div className="flex w-full items-center gap-3 xl:gap-4">
          <div className="h-px flex-1 bg-border-subtle" />
          <span className="whitespace-nowrap text-[11px] leading-4 text-text-secondary xl:text-caption-large-regular">
            Or sign in with
          </span>
          <div className="h-px flex-1 bg-border-subtle" />
        </div>

        <div className="flex w-full gap-2 xl:gap-3">
          {AUTH_LOGIN_PROVIDERS.map(({ name, connection, icon: ProviderIcon }) => (
            <button
              key={connection}
              type="button"
              aria-label={`Sign in with ${name}`}
              className="flex h-12 flex-1 cursor-pointer items-center justify-center rounded-2xl border border-border-subtle bg-bg-elevated p-3 transition-colors hover:bg-bg-subtle xl:h-14 xl:p-4"
            >
              <ProviderIcon className="size-5 xl:size-6" />
            </button>
          ))}
        </div>

        <p className={authFooterTextClassName}>
          Don&apos;t have an account?{" "}
          <button
            type="button"
            className={authFooterLinkClassName}
            onClick={switchToRegister}
          >
            Register
          </button>
        </p>
      </AuthCard>
    </Modal>
  );
}
