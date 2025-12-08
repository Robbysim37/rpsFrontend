export const sendGoogleCredentials = async (idToken : string) => {

    const testURL = import.meta.env.VITE_SEND_GOOGLE_ID_TEST

    try {
      const res = await fetch(testURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      if (!res.ok) {
        console.error("Backend returned an error:", res.status);
        return;
      }

      const data = await res.json();
      console.log("Backend response:", data);

      // Later: store access token, update AuthContext, redirect, etc.

    } catch (err) {
      console.error("Failed to call backend:", err);
    }
}