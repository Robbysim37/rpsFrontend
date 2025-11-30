import "./App.css";
import { SessionPieChartComponent } from "./components/SessionPieChart";
import { Navbar } from "@/components/Navbar"
import { GlobalWinratePieChartComponent } from "./components/GlobalWInratePiechart";
import { GameContainer } from "./components/GameContainer";

function App() {
  return (
    <div className="min-h-screen w-full">

      <Navbar/>

      <GameContainer/>

      <div className="flex flex-col md:flex-row w-full md:justify-around items-center pb-16">
        <SessionPieChartComponent/>
        <GlobalWinratePieChartComponent/>
      </div>
    </div>
  );
}

export default App;
