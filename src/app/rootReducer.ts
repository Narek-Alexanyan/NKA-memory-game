import { combineReducers } from '@reduxjs/toolkit';
import settingsReducer from "../feautures/settings/settingsSlice"

const rootReducer = combineReducers({
    settings: settingsReducer,
});

export default rootReducer;