import { formatTime } from "../../utils/formatTime";
import { Button } from "../buttons/Button";

type GameHeaderProps = {
  highScore: number;
  matchedPairs: number;
  totalPairs: number;
  turns: number;
  timer: number;
};

export const GameHeader = ({
  highScore,
  matchedPairs,
  totalPairs,
  turns,
  timer,
}: GameHeaderProps) => {
  return (
    <div className="flex items-center flex-col justify-center gap-6 mb-6">
      <Button className="w-fit">
        high score: {highScore.toString().padStart(2, "0")}
      </Button>

      <div className="flex flex-col items-center gap-6 text-3xl uppercase">
        <p>
          Matches: {matchedPairs}/{totalPairs}
        </p>
        <p>Moves: {turns}</p>
        <p>Time: {formatTime(timer)}</p>
      </div>
    </div>
  );
};
