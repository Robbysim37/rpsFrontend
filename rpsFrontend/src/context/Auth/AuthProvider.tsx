import React, { useEffect, useState } from "react";
import type { User } from "@/Types/User";
import { AuthContext, type AuthContextValue } from "./AuthContext";

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const initialToken = sessionStorage.getItem("authToken");

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(initialToken);
  const [meChecked, setMeChecked] = useState(false);

  const isLoading = !!token && !meChecked;

  useEffect(() => {
    if (!token) {
      setMeChecked(true); // we've "checked" (there's nothing to check)
      return;
    }

    const meURLLive = import.meta.env.VITE_ME_LIVE
    //const meUrl = import.meta.env.VITE_ME as string;
    const controller = new AbortController();

    (async () => {
      try {
        setMeChecked(false);

        const res = await fetch(meURLLive, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
          signal: controller.signal,
        });

        if (!res.ok) {
          const bodyText = await res.text().catch(() => "");
          console.error(`/me failed: ${res.status} ${res.statusText}`, bodyText);

          if (res.status === 401 || res.status === 403) {
            sessionStorage.removeItem("authToken");
            setToken(null);
            setUser(null);
          }

          return;
        }

        const userData: User = await res.json();
        setUser(userData);
        console.log("✅ /me verified — user loaded");
        console.log(userData)
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        console.error("Failed to call /me:", err);
      } finally {
        setMeChecked(true);
      }
    })();

    return () => controller.abort();
  }, [token]);


  const setAuthFromLogin: AuthContextValue["setAuthFromLogin"] = (
    newToken,
    user
  ) => {
    sessionStorage.setItem("authToken", newToken);
    setToken(newToken);
    setUser(user);
  };

  const logout: AuthContextValue["logout"] = () => {
    sessionStorage.removeItem("authToken");
    window.location.reload()
  };

  const value: AuthContextValue = {
    user,
    token,
    isAuthenticated: !!token,
    isLoading,
    setAuthFromLogin,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
