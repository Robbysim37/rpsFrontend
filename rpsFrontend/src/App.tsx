import "./App.css";
import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const RPS_EMOJIS = ["🪨", "📄", "✂️"];

function setEmojiFavicon(emoji: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;

  const ctx = canvas.getContext("2d")!;
  ctx.font = "56px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(emoji, 32, 36);

  let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;

  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }

  link.href = canvas.toDataURL();
}

function App() {
  useEffect(() => {
    const randomEmoji =
      RPS_EMOJIS[Math.floor(Math.random() * RPS_EMOJIS.length)];

    setEmojiFavicon(randomEmoji);
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
