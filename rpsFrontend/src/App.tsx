import "./App.css";
import { GameplayButtons } from "./components/GameplayButtons";

function App() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex w-full justify-between">
        <GameplayButtons buttonType="rock" />
        <GameplayButtons buttonType="paper" />
        <GameplayButtons buttonType="scissors" />
      </div>
    </div>
  );
}

export default App;
