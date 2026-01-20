import { useAuth } from "@/context/Auth/AuthContext"
import { GoogleLogin } from "./GoogleLoginButton"
import { sendGoogleCredentials } from "@/api/sendGoogleCredentials"
import { UserAvatar } from "./UserAvatar"
import { Link } from "react-router"

export function Navbar() {
  const authContext = useAuth()

  return (
    <header className="top-0 z-40 w-full bg-background/10 backdrop-blur mb-8">
      <div className="h-18 grid grid-cols-[1fr_auto_1fr] items-center px-4 md:px-6">
        
        {/* Left: About */}
        <div className="text-sm md:text-base font-medium">
          <Link
            to="/about"
            className="text-inherit! no-underline hover:opacity-80 transition-opacity ml-4 sm:ml-0"
          >
            About
          </Link>
        </div>

        {/* Center: Title */}
        <div className="justify-self-center text-2xl md:text-6xl font-semibold tracking-tight font-science-gothic">
          <Link
            to="/"
            className="text-inherit! no-underline"
          >
            RPS vs The World
          </Link>
        </div>

        {/* Right: Auth */}
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
