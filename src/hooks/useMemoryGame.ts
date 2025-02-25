import { useEffect, useState } from "react";
import { FlipCardType } from "../types/games/indexType";
import { shuffleArray } from "../utils/shuffleArray";

export const useMemoryGame = (initialCards: FlipCardType[]) => {
  const [shuffledCards, setShuffledCards] = useState<FlipCardType[]>([]);
  const [turns, setTurns] = useState(0);
  const [firstCard, setFirstCard] = useState<FlipCardType | null>(null);
  const [secondCard, setSecondCard] = useState<FlipCardType | null>(null);
  const [cardDisabled, setCardDisabled] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('memoryGameHighScore');
    return saved ? parseInt(saved) : 0;
  });

  const handleCardClick = (data: FlipCardType) => {
    if (!isActive && !gameComplete) {
      setIsActive(true);
    }

    if (cardDisabled || data.matched) return;
    
    if (firstCard && firstCard.id !== data.id) {
      setSecondCard(data);
    } else if (!firstCard) {
      setFirstCard(data);
    }
  };

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setTurns(prevValue => prevValue + 1);
    setCardDisabled(false);
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      setCardDisabled(true);

      if (firstCard.name === secondCard.name) {
        setShuffledCards(prevState => {
          return prevState.map(card => {
            if (card.name === firstCard.name) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        
        setMatchedPairs(prev => prev + 1);
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    const totalPairs = initialCards.length / 2;
    if (matchedPairs === totalPairs && matchedPairs > 0) {
      setIsActive(false);
      setGameComplete(true);
      
      if (highScore === 0 || turns < highScore) {
        setHighScore(turns);
        localStorage.setItem('memoryGameHighScore', turns.toString());
      }
    }
  }, [matchedPairs, turns, highScore, initialCards.length]);

  const initializeGame = () => {
    const shuffledCards = shuffleArray([...initialCards]).map(card => ({
      ...card,
      matched: false
    }));
    setShuffledCards(shuffledCards);
    setTurns(0);
    setMatchedPairs(0);
    setFirstCard(null);
    setSecondCard(null);
    setCardDisabled(false);
    setIsActive(false);
    setGameComplete(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  return {
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
    totalPairs: initialCards.length / 2
  };
}