import React from "react";
import type { FC } from "react";
import { cn } from "@/lib/utils";

type TitleProps = {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
    children: React.ReactNode;
};

const variantStyles = {
    h1: "text-4xl md:text-5xl lg:text-6xl",
    h2: "text-3xl md:text-4xl lg:text-5xl",
    h3: "text-2xl md:text-3xl lg:text-4xl",
    h4: "text-xl md:text-2xl lg:text-3xl",
    h5: "text-lg md:text-xl lg:text-2xl",
    h6: "text-base md:text-lg lg:text-xl",
    h7: "text-sm md:text-base lg:text-lg",
};

const Title: FC<TitleProps> = ({ 
    variant = "h1", 
    className = "", 
    children 
}) => {
    const Tag = variant as keyof JSX.IntrinsicElements;
    return (
        <Tag className={cn(
            "font-bold tracking-tight",
            variantStyles[variant],
            className
        )}>
            {children}
        </Tag>
    );
};

export default Title;
