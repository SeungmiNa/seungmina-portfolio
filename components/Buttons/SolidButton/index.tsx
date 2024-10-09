"use client";
import { FC, ReactNode } from "react";

interface SolidButtonProps {
    title?: string;
    icon?: ReactNode;
}

const SolidButton: FC<SolidButtonProps> = ({
    title,
    icon,
}) => {
    return (
        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            {icon}{title}
        </button>
    )
}

export default SolidButton;