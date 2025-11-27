import "./App.css";
import { GameplayButtons } from "./components/GameplayButtons";
import { SessionPieChartComponent } from "./components/SessionPieChart";
import { Navbar } from "@/components/Navbar"
import { ResultsText } from "./components/ResultsText";

function App() {
  return (
    <div className="min-h-screen w-full">

      <Navbar/>

      <div className="flex w-full justify-center mb-8">
        <ResultsText/>
      </div>

      <div className="flex w-full justify-around mb-16">
        <GameplayButtons buttonType="rock" />
        <GameplayButtons buttonType="paper" />
        <GameplayButtons buttonType="scissors" />
      </div>
      <div className="flex w-full justify-around pb-16">
        <SessionPieChartComponent/>
        <SessionPieChartComponent/>
      </div>
    </div>
  );
}

export default App;
