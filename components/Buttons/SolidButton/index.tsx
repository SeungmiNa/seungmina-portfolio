"use client";
import { FC, ReactNode } from "react";

interface SolidButtonProps {
    title?: string;
    icon?: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SolidButton: FC<SolidButtonProps> = ({
    title,
    icon,
    onClick,
}) => {
    return (
        <button
            className="bg-[#2563EB] text-white font-semibold py-2 px-5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={onClick}
        >
            {icon}{title}
        </button>
    )
}

export default SolidButton;