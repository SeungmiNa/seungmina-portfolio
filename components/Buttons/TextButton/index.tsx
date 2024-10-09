"use client";
import { FC, ReactNode } from "react";

interface TextButtonProps {
    title?: string;
    icon?: ReactNode;
}

const TextButton: FC<TextButtonProps> = ({
    title,
    icon,
}) => {
    return (
        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold py-2 px-5 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            {icon}{title}
        </button>
    )
}

export default TextButton;