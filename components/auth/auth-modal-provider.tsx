"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { LoginModal } from "./login-modal";
import { RegisterModal } from "./register-modal";

type AuthModal = "register" | "login" | null;

type AuthModalContextValue = {
  openRegister: () => void;
  openLogin: () => void;
  closeAuth: () => void;
  switchToRegister: () => void;
  switchToLogin: () => void;
};

const AuthModalContext = createContext<AuthModalContextValue | null>(null);

export function useAuthModal() {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error("useAuthModal must be used within AuthModalProvider");
  }
  return context;
}

export type AuthModalProviderProps = {
  children: ReactNode;
};

export function AuthModalProvider({ children }: AuthModalProviderProps) {
  const [activeModal, setActiveModal] = useState<AuthModal>(null);

  const openRegister = useCallback(() => setActiveModal("register"), []);
  const openLogin = useCallback(() => setActiveModal("login"), []);
  const closeAuth = useCallback(() => setActiveModal(null), []);
  const switchToRegister = useCallback(() => setActiveModal("register"), []);
  const switchToLogin = useCallback(() => setActiveModal("login"), []);

  const value = useMemo(
    () => ({
      openRegister,
      openLogin,
      closeAuth,
      switchToRegister,
      switchToLogin,
    }),
    [openRegister, openLogin, closeAuth, switchToRegister, switchToLogin],
  );

  return (
    <AuthModalContext.Provider value={value}>
      {children}
      <RegisterModal
        open={activeModal === "register"}
        onClose={closeAuth}
      />
      <LoginModal open={activeModal === "login"} onClose={closeAuth} />
    </AuthModalContext.Provider>
  );
}
