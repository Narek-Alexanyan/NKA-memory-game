import type { IconName } from "lucide-react/dynamic";

export enum CardType {
    TypeA = "crystals",
    TypeB = "essentials",
    TypeC = "both"
}

export enum DifficultType {
    TypeA = "easy",
    TypeB = "medium",
    TypeC = "hard",
    TypeD = "extreme",
}

export interface CardsSetting {
    id: number,
    type: CardType,
    title: string,
    icon: IconName,
}

export interface DifficultSetting {
    id: number,
    type: DifficultType,
    title: string,
    icon: IconName,
    info?: string,
    tiles: number
}