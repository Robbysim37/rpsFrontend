/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react"

declare global {
  interface Window {
    google?: any
  }
}

type GoogleLoginButtonProps = {
  onSuccess: (idToken: string) => void
  onError?: () => void
}

export function GoogleLoginButton({ onSuccess, onError }: GoogleLoginButtonProps) {
  const buttonDivRef = useRef<HTMLDivElement | null>(null)
  const clientId = import.meta.env.VITE_GOOGLE_CREDENTIALS_ID as string | undefined

  useEffect(() => {
    console.log("GoogleLoginButton mounted. clientId =", clientId)

    if (!clientId) {
      console.error("Missing VITE_GOOGLE_CREDENTIALS_ID in env")
      return
    }

    if (!window.google) {
      console.error("window.google is undefined – is the <script> tag in index.html?")
      return
    }

    if (!buttonDivRef.current) {
      console.error("buttonDivRef is null")
      return
    }

    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: (response: any) => {
        const idToken = response.credential as string | undefined
        if (!idToken) {
          console.error("No ID token (response.credential) from Google")
          onError?.()
          return
        }
        onSuccess(idToken)
      },
    })

    window.google.accounts.id.renderButton(buttonDivRef.current, {
      type: "standard",
      theme: "outline",
      size: "medium",
      shape: "pill",
      text: "continue_with",
      width: 200,
    })
  }, [clientId, onSuccess, onError])

  return (
    <div className="flex items-center justify-center">
      <div ref={buttonDivRef} />
    </div>
  )
}
