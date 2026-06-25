import type { ComponentType } from "react";
import {
  FacebookIcon,
  GoogleIcon,
  XIcon,
} from "./auth-social-icons";

export type AuthLoginProvider = {
  name: string;
  /** Auth0 connection name — wire up when social login is enabled */
  connection: string;
  icon: ComponentType<{ className?: string }>;
};

export const AUTH_LOGIN_PROVIDERS: AuthLoginProvider[] = [
  { name: "Google", connection: "google-oauth2", icon: GoogleIcon },
  { name: "Facebook", connection: "facebook", icon: FacebookIcon },
  { name: "X", connection: "twitter", icon: XIcon },
];
