import "../App.css";
import { SessionPieChartComponent } from "@/components/SessionPieChart";
import { GlobalWinratePieChartComponent } from "@/components/GlobalWInratePiechart";
import { GameContainer } from "@/components/GameContainer";

export const Home = () => {
  return (<>
      <GameContainer/>

      <div className="flex flex-col md:flex-row w-full md:justify-around items-center pb-16">
        <SessionPieChartComponent/>
        <GlobalWinratePieChartComponent/>
      </div>
    </>
  );
}
