import { IconButton } from "../components/buttons/IconButton.tsx";
import { Link } from "react-router";
import { flipCards } from "../constants/gameData.ts";
import { useMemoryGame } from "../hooks/useMemoryGame.ts";
import { useTimer } from "../hooks/useTimer.ts";
import { GameHeader } from "../components/games/GameHeader.tsx";
import { GameBoard } from "../components/games/GameBoard.tsx";
import { GameOver } from "../components/games/GameOver.tsx";

const cards = [...flipCards, ...flipCards];

export const Game = () => {
  const {
    shuffledCards,
    turns,
    firstCard,
    secondCard,
    cardDisabled,
    matchedPairs,
    isActive,
    gameComplete,
    highScore,
    handleCardClick,
    initializeGame,
    totalPairs,
  } = useMemoryGame(cards);

  const timer = useTimer(isActive, gameComplete);

  return (
    <section className="px-6 mx-auto py-6 relative">
      {gameComplete ? (
        <GameOver turns={turns} timer={timer} onRestart={initializeGame} />
      ) : (
        <>
          <Link to="/main-menu">
            <IconButton name="x" className="absolute left-6 top-10" size={28} />
          </Link>
          <GameHeader
            highScore={highScore}
            matchedPairs={matchedPairs}
            totalPairs={totalPairs}
            turns={turns}
            timer={timer}
          />
          <GameBoard
            cards={shuffledCards}
            firstCard={firstCard}
            secondCard={secondCard}
            cardDisabled={cardDisabled}
            onCardClick={handleCardClick}
          />
        </>
      )}
    </section>
  );
};
