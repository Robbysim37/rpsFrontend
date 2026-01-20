export const sendGoogleCredentials = async (accessToken : string) => {

    //const testURL = import.meta.env.VITE_SEND_GOOGLE_ID_TEST
    const liveURL = import.meta.env.VITE_SEND_GOOGLE_ID_LIVE

    try {
      const res = await fetch(liveURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken }),
      });

      if (!res.ok) {
        console.error("Backend returned an error:", res.status);
        return;
      }

      // THIS IS USED WHEN REQUESTING FROM PRIVATE ENDPOINTS

      // const token = sessionStorage.getItem("authToken");

      // await fetch(`${import.meta.env.VITE_API_URL}/api/me`, {
      //   headers: {
      //     Authorization: token ? `Bearer ${token}` : "",
      //   },
      // });


      const data = await res.json();
      sessionStorage.setItem("authToken", data.token);
      window.location.reload();

    } catch (err) {
      console.error("Failed to call backend:", err);
    }
}