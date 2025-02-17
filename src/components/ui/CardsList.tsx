import React from 'react'

interface CardsListProps {
    children: React.ReactNode,
    title: string
}

export const CardsList = ({children, title}: CardsListProps) => {
    return (
        <div className="w-fit">
            <h2 className="text-xl text-white/80 uppercase mb-4">{title}</h2>
            <div className="bg-white/60 border border-white rounded-2xl p-8">
                <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
                    {children}
                </div>
            </div>
        </div>
    )
}
