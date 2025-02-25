import { Button } from "../buttons/Button";

type GameHeaderProps = {
  highScore: number;
  matchedPairs: number;
  totalPairs: number;
  turns: number;
  timer: number;
  gameComplete: boolean;
  onRestart: () => void;
};

export const GameHeader = ({
  highScore,
  matchedPairs,
  totalPairs,
  turns,
  timer,
  gameComplete,
  onRestart,
}: GameHeaderProps) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

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

      {gameComplete && (
        <div className="mt-4">
          <Button onClick={onRestart} className="px-8 py-2">
            Play Again
          </Button>
        </div>
      )}
    </div>
  );
};
