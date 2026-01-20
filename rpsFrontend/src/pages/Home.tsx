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

      <div className="flex w-full flex-col items-center gap-8 pb-16 md:flex-row md:justify-around md:gap-0">
        <SessionPieChartComponent/>
        {authContext.token && <UserWinratePichart/>}
        <GlobalWinratePieChartComponent/>
      </div>
    </>
  );
}
