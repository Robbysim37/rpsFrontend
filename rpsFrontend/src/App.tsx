import "./App.css";
import { Navbar } from "@/components/Navbar"
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar/>
      <Outlet />
    </div>

  );
}

export default App;
