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

      <div className="flex w-full justify-around pb-16">
        <SessionPieChartComponent/>
        <GlobalWinratePieChartComponent/>
      </div>
    </div>
  );
}

export default App;
