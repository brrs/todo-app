import { ReactElement } from "react";
import { IconProps } from "./icons";

interface MenuItemProps {
    isActive: boolean
    Icon: React.ComponentType<IconProps>,
    label: string,
    onClick: () => void,
    className?: string
}

export function MenuItem({ isActive, Icon, label, onClick, className }: MenuItemProps) {
    const bgColor = isActive ? "bg-onSecondary" : "bg-secondary";
    const textColor = isActive ? "text-secondary" : "text-onSecondary";
    const iconColor = isActive ? "fill-secondary" : "fill-onSecondary";
    return (
        <div
            className={`flex space-x-3 ${bgColor} h-12 items-center p-4 rounded-xl hover:cursor-pointer ${className}`}
            onClick={onClick}
        >
            {/* <img className={`w-6 h-6 filter-[${textColor}]`} src={icon} alt="" /> */}
            <Icon className={`h-5 w-5 ${iconColor}`} />
            <p className={` text-sm font-normal ${textColor}`}>{label}</p>
        </div>
    )
}
