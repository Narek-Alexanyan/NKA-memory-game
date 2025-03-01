import { useNavigate } from "react-router";
import { formatTime } from "../../utils/formatTime";
import { Button } from "../buttons/Button";
import { CardCrystals } from "../ui/CardCrystals";

type GameOverProps = {
  turns: number;
  timer: number;
  onRestart: () => void;
};

export const GameOver = ({ turns, timer, onRestart }: GameOverProps) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <div className="h-screen">
      <div className="flex justify-center mt-8">
        <CardCrystals />
      </div>
      <div className="flex flex-col items-center gap-6 text-3xl uppercase mt-8">
        <p>Moves: {turns}</p>
        <p>Time: {formatTime(timer)}</p>
      </div>
      <div className="flex items-center justify-center flex-col mt-8 gap-3 px-32">
        <Button onClick={() => handleNavigate("/main-menu")}>main menu</Button>
        <Button onClick={onRestart}>play again</Button>
        <Button onClick={() => handleNavigate("/")}>exit</Button>
      </div>
    </div>
  );
};
