import { DynamicIcon, type IconName } from "lucide-react/dynamic";

interface IconButtonProps {
  name: IconName;
  color?: string;
  size?: number;
  className?: string;
}

export const IconButton = ({
  name,
  color = "currentColor",
  size = 24,
  className,
  ...rest
}: IconButtonProps) => {
  return (
    <button
      className={`p-2 rounded-full hover:bg-gray-100/10 focus:outline-none focus:ring-2 focus:ring-gray-200/10 cursor-pointer ${className}`}
      {...rest}
    >
      <DynamicIcon name={name} color={color} size={size} />
    </button>
  );
};
