import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardsSetting, DifficultSetting } from "../../types/settings/SettingsType.ts";
import { cardsSettings, difficultySettings } from "../../constants/settingsData.ts";

interface SettingsState {
    activeCard: CardsSetting,
    activeDifficult: DifficultSetting,
    backgroundMusicEnabled: boolean,
    buttonsSoundEnabled: boolean,
}

const initialState: SettingsState = {
    activeCard: cardsSettings[0],
    activeDifficult: difficultySettings[0],
    backgroundMusicEnabled: true,
    buttonsSoundEnabled: true
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setActiveCard: (state, action: PayloadAction<CardsSetting>) => {
            state.activeCard = action.payload;
        },
        setActiveDifficult: (state, action: PayloadAction<DifficultSetting>) => {
            state.activeDifficult = action.payload;
        },
        toggleBackgroundMusic: (state, action: PayloadAction<boolean>) => {
            state.backgroundMusicEnabled = action.payload
        },
        toggleButtonsSound: (state, action: PayloadAction<boolean>) => {
            state.buttonsSoundEnabled = action.payload
        }
    }
})

export const { setActiveCard, setActiveDifficult, toggleBackgroundMusic, toggleButtonsSound } = settingsSlice.actions;
export default settingsSlice.reducer;