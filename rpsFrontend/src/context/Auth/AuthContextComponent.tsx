import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "@/Types/User";

type AuthContextValue = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuthFromLogin: (token: string, user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken");

    if (!storedToken) {
      setIsLoading(false);
      return;
    }

    const testURL = import.meta.env.VITE_ME

    fetch(testURL, {
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((userData: User) => {
        setToken(storedToken);
        setUser(userData);
      })
      .catch(() => {
        sessionStorage.removeItem("authToken");
        setToken(null);
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const setAuthFromLogin = (newToken: string, user: User) => {
    sessionStorage.setItem("authToken", newToken);
    setToken(newToken);
    setUser(user);
  };

  const logout = () => {
    sessionStorage.removeItem("authToken");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token,
        isLoading,
        setAuthFromLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}