import { CardsSetting, CardType, DifficultSetting, DifficultType } from "../types/settings/SettingsType.ts";

export const cardsSettings: CardsSetting[] = [
    {
        id: 1,
        type: CardType.TypeA,
        title: "Crystals",
        icon: "gem",
    },
    {
        id: 2,
        type: CardType.TypeB,
        title: "Essentials",
        icon: "gem",
    },
    {
        id: 3,
        type: CardType.TypeC,
        title: "Both",
        icon: "gem",
    },
]

export const difficultySettings: DifficultSetting[] = [
    {
        id: 1,
        type: DifficultType.TypeA,
        title: "Easy",
        icon: "gem",
        tiles: 12,
        info: "12 tiles"
    },
    {
        id: 2,
        type: DifficultType.TypeB,
        title: "Card B",
        icon: "gem",
        tiles: 24,
        info: "24 tiles"
    },
    {
        id: 3,
        type: DifficultType.TypeC,
        title: "Card C",
        icon: "gem",
        tiles: 36,
        info: "36 tiles"
    },
    {
        id: 4,
        type: DifficultType.TypeD,
        title: "Card C",
        icon: "gem",
        tiles: 48,
        info: "48 tiles"
    },
]
