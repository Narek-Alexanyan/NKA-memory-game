import { CardsSetting, DifficultSetting } from "../../types/settings/SettingsType.ts";
import { DynamicIcon } from "lucide-react/dynamic";
import clsx from 'clsx';

interface SettingsCardProps {
    data: CardsSetting | DifficultSetting;
    onClick: () => void,
    active: boolean
}

export const SettingsCard = ({data, active, onClick}: SettingsCardProps) => {
    return (<div role="button" tabIndex={0} onClick={onClick} onKeyDown={(e) => e.key === 'Enter' && onClick()}
                 className={clsx(
                     "cursor-pointer group transition-all duration-200",
                 )}
    >
            <div className={clsx(
                "w-24 h-26 rounded-xl flex items-center justify-center transition-all duration-200",
                active ? "scale-90 bg-space-cadet" : "bg-white/70 hover:bg-white/90"
            )}>
                <DynamicIcon name={data.icon} color={active ? "#FFF" : "#191e4b"} size={48} className="transition-transform duration-200 group-hover:scale-110" />
            </div>
            <div className={clsx(
                "mt-2 text-center transition-colors duration-200",
                active ? "text-space-cadet" : "text-gray-700"
            )}>
                <p className="text-sm font-medium">{data.title}</p>
                {"info" in data && data.info && (
                    <span className="text-xs text-gray-500">({data.info})</span>
                )}
            </div>
        </div>)
}
