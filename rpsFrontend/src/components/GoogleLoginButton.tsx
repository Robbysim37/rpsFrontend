import { useRef } from "react";
import {motion} from "framer-motion"
import { FcGoogle } from "react-icons/fc";

declare global {
  interface Window {
    google?: {
      accounts: {
        oauth2: {
          initTokenClient: (cfg: TokenClientConfig) => TokenClient;
        };
      };
    };
  }
}

type TokenClientConfig = {
  client_id: string;
  scope: string;
  callback: (resp: TokenResponse) => void;
  error_callback?: (err: unknown) => void;
};

type TokenClient = {
  requestAccessToken: (opts?: { prompt?: "" | "consent" | "select_account" }) => void;
};

type TokenResponse =
  | { access_token: string; expires_in: number; token_type: string; scope: string }
  | { error: string; error_description?: string; error_uri?: string };

type Props = {
  onSuccess: (accessToken: string) => void;
  onError?: (msg: string) => void;
};

export function GoogleLogin({ onSuccess, onError }: Props) {
  const clientRef = useRef<TokenClient | null>(null);
  const clientId = import.meta.env.VITE_GOOGLE_CREDENTIALS_ID as string | undefined;

  const handleClick = () => {
    if (!clientId) {
      onError?.("Missing VITE_GOOGLE_CREDENTIALS_ID");
      return;
    }

    const oauth2 = window.google?.accounts?.oauth2;
    if (!oauth2) {
      onError?.("Google OAuth2 library not loaded (check script tag)");
      return;
    }

    if (!clientRef.current) {
      clientRef.current = oauth2.initTokenClient({
        client_id: clientId,
        // Pick scopes you need. If you just need profile info, use openid email profile.
        // NOTE: tokenClient returns an *access token*, not an ID token.
        scope: "openid email profile",
        callback: (resp) => {
          if ("error" in resp) {
            onError?.(`${resp.error}${resp.error_description ? `: ${resp.error_description}` : ""}`);
            return;
          }
          onSuccess(resp.access_token);
        },
        error_callback: () => onError?.("Popup blocked or OAuth failed"),
      });
    }

    // Forces a popup prompt on every click
    clientRef.current.requestAccessToken({ prompt: "select_account" });
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      className="px-4 py-2 rounded-md md:border hover:cursor-pointer"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 24px rgba(255,255,255,0.6)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <span className="hidden md:inline">Continue with Google</span>
      <FcGoogle className="inline md:hidden bg-transparent" size={30}/>
    </motion.button>
  );
}
