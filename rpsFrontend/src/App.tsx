import "./App.css";
import { GameplayButtons } from "./components/GameplayButtons";
import { PieChartComponent } from "./components/PieChart";
import { Navbar } from "@/components/Navbar"

function App() {
  return (
    <div className="min-h-screen w-full">

      <Navbar/>

      <div className="flex w-full justify-center mb-8">
        <p className="font-science-gothic text-3xl">Choose your move</p>
      </div>

      <div className="flex w-full justify-around mb-16">
        <GameplayButtons buttonType="rock" />
        <GameplayButtons buttonType="paper" />
        <GameplayButtons buttonType="scissors" />
      </div>
      <div className="flex w-full justify-around pb-16">
        <PieChartComponent/>
        <PieChartComponent/>
      </div>
    </div>
  );
}

export default App;
