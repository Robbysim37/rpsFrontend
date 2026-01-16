import { useAuth } from "@/context/Auth/AuthContext"
import { GoogleLogin } from "./GoogleLoginButton"
import { sendGoogleCredentials } from "@/api/sendGoogleCredentials"
import { UserAvatar } from "./UserAvatar"

export function Navbar() {
  const authContext = useAuth()

  return (
    <header className="top-0 z-40 w-full bg-background/10 backdrop-blur mb-8">
      <div className="h-18 grid grid-cols-[1fr_auto_1fr] items-center px-4 md:px-6">
        <div />
        <div className="justify-self-center text-2xl md:text-6xl font-semibold tracking-tight font-science-gothic">
          RPS vs The World
        </div>
        <div className="justify-self-end">
          {authContext.user ? (
            <UserAvatar />
          ) : (
            <GoogleLogin onSuccess={sendGoogleCredentials} />
          )}
        </div>
      </div>
    </header>
  )
}