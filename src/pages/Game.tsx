import { IconButton } from "../components/buttons/IconButton.tsx";
import { Link } from "react-router";
import { Button } from "../components/buttons/Button.tsx";
import { FlipCard } from "../components/ui/FlipCard.tsx";
import { flipCards } from "../constants/gameData.ts";
import { shuffleArray } from "../utils/shuffleArray.ts";
import { FlipCardType } from "../types/games/indexType.ts";
import { useEffect, useState } from "react";

const cards = [...flipCards, ...flipCards]

export const Game = () => {
    const [shuffledCards, setShuffledCards] = useState<FlipCardType[]>([])
    const [turns, setTurns] = useState(0)
    const [firstCard, setFirstCard] = useState<FlipCardType | null>(null)
    const [secondCard, setSecondCard] = useState<FlipCardType | null>(null)
    const [cardDisabled, setCardDisabled] = useState(false)

    const [matchedPairs, setMatchedPairs] = useState(0);
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [highScore, setHighScore] = useState(() => {
        const saved = localStorage.getItem('memoryGameHighScore');
        return saved ? parseInt(saved) : 0;
    });
    const [gameComplete, setGameComplete] = useState(false);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    const handleCardClick = (data: FlipCardType) => {
        if (!isActive && !gameComplete) {
            setIsActive(true);
        }
        if (cardDisabled || data.matched) return;

        if (firstCard && firstCard.id !== data.id) {
            setSecondCard(data)
        } else if(!firstCard) {
            setFirstCard(data)
        }
    }

    const resetTurn = () => {
        setFirstCard(null)
        setSecondCard(null)
        setTurns(prevValue => prevValue + 1)
        setCardDisabled(false)
    }

    useEffect(() => {
        if(firstCard && secondCard) {
            setCardDisabled(true)

            if(firstCard.name === secondCard.name) {
                setShuffledCards(prevState => {
                    return prevState.map(card => {
                        if(card.name === firstCard.name) {
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })

                setMatchedPairs(prev => prev + 1);
                resetTurn()
            } else  {
                setTimeout(() => {
                    resetTurn()
                }, 1000)
            }
        }
    }, [firstCard, secondCard])

    useEffect(() => {
        let interval: number | null = null

        if (isActive && !gameComplete) {
            interval = setInterval(() => {
                setTimer(prevTime => prevTime + 1);
            }, 1000);
        } else if (!isActive && interval) {
            clearInterval(interval);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isActive, gameComplete]);

    useEffect(() => {
        if(matchedPairs === flipCards.length && matchedPairs > 0) {
            setIsActive(false);
            setGameComplete(true);

            if (highScore === 0 || turns < highScore) {
                setHighScore(turns);
                localStorage.setItem('memoryGameHighScore', turns.toString());
            }
        }
    }, [matchedPairs, turns, highScore]);

    const initializeGame = () => {
        const shuffledCards = shuffleArray(cards)
        setShuffledCards(shuffledCards);
        setTurns(0);
        setMatchedPairs(0);
        setTimer(0);
        setFirstCard(null);
        setSecondCard(null);
        setCardDisabled(false);
        setIsActive(false);
        setGameComplete(false);
    }

    useEffect(() => {
        initializeGame()
    }, [])

    return (<section className="px-6 mx-auto py-6 relative">
            <Link to="/main-menu">
                <IconButton name="x" className="absolute left-6 top-10" size={28}/>
            </Link>
            <div className="flex items-center flex-col justify-center gap-6">
                <Button className="w-fit">high score: { highScore.toString().padStart(2, '0') }</Button>
                <div className="flex flex-col items-center gap-6 text-3xl uppercase">
                    <p>Matches: { matchedPairs}/{flipCards.length }</p>
                    <p>Moves: { turns }</p>
                    <p>Time: { formatTime(timer) }</p>
                </div>

                {gameComplete && (
                    <div className="mt-4">
                        <Button onClick={initializeGame} className="px-8 py-2">
                            Play Again
                        </Button>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-3 grid-rows-4 gap-2 mt-4 h-full">
                {shuffledCards.map(item => (
                    <FlipCard key={item.id} data={item} disabled={cardDisabled || gameComplete} flipped={firstCard?.id === item.id || secondCard?.id === item.id || item.matched} handleChoice={handleCardClick}/>))}
            </div>
        </section>)
}
