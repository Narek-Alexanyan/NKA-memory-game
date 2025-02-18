import { IconButton } from "../components/buttons/IconButton.tsx";
import { Link } from "react-router";
import { CardsList } from "../components/ui/CardsList.tsx";
import { SettingsCard } from "../components/ui/SettingsCard.tsx";
import { cardsSettings, difficultySettings } from "../constants/settingsData.ts";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook.ts";
import { setActiveCard, setActiveDifficult, toggleBackgroundMusic, toggleButtonsSound } from "../feautures/settings/settingsSlice.ts";
import { ToggleSwitch } from "../components/ui/ToggleSwitch.tsx";

export const Settings = () => {
    const dispatch = useAppDispatch();
    const settings = useAppSelector((state) => state.settings);

    return (
        <section className="px-6">
            <div className="flex items-center justify-center relative py-6">
                <Link to="/main-menu">
                    <IconButton
                        name="chevron-left"
                        size={28}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2"
                    />
                </Link>
                <h1 className="text-3xl uppercase">Settings</h1>
            </div>
            <div className="flex flex-col gap-6">
                <CardsList title="Cards">
                    {cardsSettings.map(item => (
                        <SettingsCard
                            key={item.id}
                            data={item}
                            active={settings.activeCard.id === item.id}
                            onClick={() => dispatch(setActiveCard(item))}
                        />
                    ))}
                </CardsList>
                <CardsList title="Difficulty">
                    {difficultySettings.map(item => (
                        <SettingsCard
                            key={item.id}
                            data={item}
                            active={settings.activeDifficult.id === item.id}
                            onClick={() => dispatch(setActiveDifficult(item))}
                        />
                    ))}
                </CardsList>
            </div>
            <div className="mt-6">
                <h2 className="text-xl text-white/80 uppercase mb-4">Sounds</h2>
                <div className="flex flex-col gap-6">
                    <ToggleSwitch
                        label="Background music volume"
                        checked={settings.backgroundMusicEnabled}
                        onChange={(checked) => dispatch(toggleBackgroundMusic(checked))}
                    />
                    <ToggleSwitch
                        label="Buttons sound"
                        checked={settings.buttonsSoundEnabled}
                        onChange={(checked) => dispatch(toggleButtonsSound(checked))}
                    />
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-xl text-white/80 uppercase mb-4">How to play?</h2>
                <div className="flex items-center justify-between">
                    <p>Read me</p>
                    <Link to="/main-menu">
                        <IconButton
                            name="chevron-right"
                            size={28}
                            color="#FFF"
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}
