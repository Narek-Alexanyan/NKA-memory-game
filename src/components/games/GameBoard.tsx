import { FlipCardType } from "../../types/games/indexType";
import { FlipCard } from "../ui/FlipCard";

type GameBoardProps = {
  cards: FlipCardType[];
  firstCard: FlipCardType | null;
  secondCard: FlipCardType | null;
  cardDisabled: boolean;
  onCardClick: (card: FlipCardType) => void;
};

export const GameBoard = ({
  cards,
  firstCard,
  secondCard,
  cardDisabled,
  onCardClick,
}: GameBoardProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-4 mx-auto max-w-2xl">
      {cards.map((item, index) => (
        <FlipCard
          key={index}
          data={item}
          disabled={cardDisabled}
          flipped={
            firstCard?.id === item.id ||
            secondCard?.id === item.id ||
            item.matched
          }
          handleChoice={onCardClick}
        />
      ))}
    </div>
  );
};
