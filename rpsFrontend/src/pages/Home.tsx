import "../App.css";
import { SessionPieChartComponent } from "@/components/SessionPieChart";
import { GlobalWinratePieChartComponent } from "@/components/GlobalWInratePiechart";
import { GameContainer } from "@/components/GameContainer";
import { UserWinratePichart } from "@/components/UserWinratePiechart";
import { useAuth } from "@/context/Auth/AuthContext";

export const Home = () => {

  const authContext = useAuth()

  return (<>
      <GameContainer/>

      <div className="flex flex-col md:flex-row w-full md:justify-around items-center pb-16">
        <SessionPieChartComponent/>
        {authContext.token && <UserWinratePichart/>}
        <GlobalWinratePieChartComponent/>
      </div>
    </>
  );
}
