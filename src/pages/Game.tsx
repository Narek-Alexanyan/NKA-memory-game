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
    const [selectedCards, setSelectedCards] = useState<FlipCardType[]>([])
    const [shuffledCards, setShuffledCards] = useState<FlipCardType[]>([])
    const handleCardClick = (data: FlipCardType) => {
        if(selectedCards.length < 2) {
            setSelectedCards([...selectedCards, data])
        }
    }

    useEffect(() => {
        if(selectedCards.length === 2 && selectedCards[0].id === selectedCards[1].id) {
            const cleanedUpCards = shuffledCards.filter(item => item.id !== selectedCards[0].id || item.id !== selectedCards[1].id )

            setSelectedCards([])
            setShuffledCards(cleanedUpCards)
        }
    }, [selectedCards, shuffledCards])

    useEffect(() => {
        const shuffledCards = shuffleArray(cards)
        setShuffledCards(shuffledCards)
    }, [])

    return (
        <section className="px-6 mx-auto py-6 relative">
            <Link to="/main-menu">
                <IconButton name="x" className="absolute left-6 top-10" size={28} />
            </Link>
            <div className="flex items-center flex-col justify-center gap-6">
                <Button className="w-fit">high score: 00</Button>
                <div className="flex flex-col items-center gap-6 text-3xl uppercase">
                    <p>Matches: 6</p>
                    <p>Moves: 0</p>
                    <p>Time: 00:00</p>
                </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-4 gap-2 mt-4 h-full">
                {shuffledCards.map((item, index) => (
                    <FlipCard key={index} data={item} onClick={handleCardClick} />
                ))}
            </div>
        </section>
    )
}
