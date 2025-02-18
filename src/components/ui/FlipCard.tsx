import { motion } from "motion/react"
import { useState } from "react";
import { Gem } from "lucide-react";
import { FlipCardType } from "../../types/games/indexType.ts";

interface FlipCardProps {
    data: FlipCardType;
    onClick: (data: FlipCardType) => void;
}
export const FlipCard = ({ data, onClick }: FlipCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const handleFlip = () => {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
            onClick(data)
        }
    };

    return (
        <div className="w-full h-38 cursor-pointer perspective-distant"
             onClick={handleFlip}>
            <motion.div className="relative w-full h-full transform-3d"
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.6 }}
                        onAnimationComplete={() => setIsAnimating(false)}>
                <div className="absolute w-full h-full flex items-center justify-center bg-slate-800 rounded-lg border backface-hidden">
                    <Gem size={64} color="#d4d4d4" />
                </div>
                <div className="absolute w-full h-full flex items-center justify-center bg-white rounded-lg backface-hidden transform rotate-y-180">
                    <img src={`/images/gems/${data.img}.png`} alt={data.img} className="w-full h-full object-contain"/>
                </div>
            </motion.div>
        </div>
    )
}
