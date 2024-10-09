"use client";
import { FC } from "react";

interface SolidBadgeProps {
    title?: string;
    color?: string;
    textColor?: string;
}

const SolidBadge: FC<SolidBadgeProps> = ({
    title,
    color,
    textColor = "text-white"
}) => {
    return (
        <span className={`inline-flex items-center rounded-full px-4 py-1 text-sm font-medium ring-1 ring-inset ring-gray-500/10 ${color} ${textColor}`}>
            {title}
        </span>
    )
}

export default SolidBadge;