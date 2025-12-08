import { GoogleLoginButton } from "./GoogleLoginButton";
import { sendGoogleCredentials } from "@/api/sendGoogleCredentials";

export function Navbar() {
  return (
    <header className="top-0 z-40 w-full bg-background/10 backdrop-blur mb-8">
      <div className="h-14 flex items-center justify-between py-10">
        <div></div>
        <div className="text-2xl md:text-6xl font-semibold tracking-tight font-science-gothic">
          RPS vs The World
        </div>
        <div><GoogleLoginButton onSuccess={sendGoogleCredentials}></GoogleLoginButton></div>
      </div>
    </header>
  )
}