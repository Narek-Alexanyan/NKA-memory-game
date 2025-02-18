interface ToggleSwitchProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
    disabled?: boolean;
}

export const ToggleSwitch = ({
                                 label, checked, onChange, className = "", disabled = false
                             }: ToggleSwitchProps) => {
    return (<label
            className={`inline-flex items-center justify-between gap-3 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
            <span className="text-xl font-medium">
                {label}
            </span>

            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                disabled={disabled}
                className="sr-only peer"
            />

            <div className={`
                relative w-11 h-6 
                bg-grape/40 dark:bg-grape/40
                peer-focus:outline-none 
                rounded-full 
                peer-checked:bg-grape
                dark:peer-checked:bg-grape
                transition-colors
                after:content-['']
                after:absolute 
                after:top-[2px] 
                after:start-[2px]
                after:bg-white 
                after:border-gray-300 
                after:border 
                after:rounded-full 
                after:h-5 
                after:w-5 
                after:transition-all
                peer-checked:after:translate-x-full
                rtl:peer-checked:after:-translate-x-full
                dark:border-gray-600
            `}></div>
        </label>)
}
