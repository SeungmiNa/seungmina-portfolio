'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import type { FC } from "react";
import { trackEmailClick } from "@/lib/analytics";

const TypingAnimation: FC<{ text: string; speed?: number; delay?: number }> = ({ text, speed = 100, delay = 5000 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        let intervalId: NodeJS.Timeout;
        let timeoutId: NodeJS.Timeout;
        let isMounted = true;

        const typeText = () => {
            if (!isMounted) return;
            
            currentIndex = 0;
            setDisplayedText("");

            intervalId = setInterval(() => {
                if (!isMounted) {
                    clearInterval(intervalId);
                    return;
                }

                if (currentIndex < text.length) {
                    setDisplayedText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(intervalId);
                    // 타이핑 완료 후 delay 시간만큼 대기 후 다시 시작
                    timeoutId = setTimeout(() => {
                        if (isMounted) {
                            typeText();
                        }
                    }, delay);
                }
            }, speed);
        };

        typeText();

        return () => {
            isMounted = false;
            if (intervalId) clearInterval(intervalId);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [text, speed, delay]);

    // 커서 깜빡임 효과
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 530);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span>
            {displayedText}
            <span 
                className={`inline-block w-[2px] h-[0.9em] bg-[#2563EB] ml-1 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} 
                style={{ 
                    animation: 'blink 1s infinite',
                    transition: 'opacity 0.1s ease-in-out'
                }} 
            />
        </span>
    );
};

const HomeHero: FC = () => {
    const handleSayHiClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        trackEmailClick('naissme0@gmail.com', 'home_hero_say_hi_button');
        window.location.href = "mailto:naissme0@gmail.com";
    };

    return (
        <div className="relative min-h-[40vh] md:min-h-[45vh] w-full flex">
            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-8 pt-20 md:pt-24 lg:pt-28 z-10">
                <div className="max-w-4xl">
                    {/* Text Content - Readable Structure */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8 md:space-y-10"
                    >


                        {/* Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            {/* Hi there Greeting */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-normal">
                                    Hi there 👋
                                </p>
                            </motion.div>
                            <h1
                                className="text-4xl md:text-5xl lg:text-6xl !leading-[1.15]"
                                style={{
                                    fontFamily: 'var(--font-playfair), Georgia, serif',
                                    fontWeight: 400,
                                    fontStyle: 'italic',
                                    color: '#222222',
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                <TypingAnimation text="I'm Seungmi." speed={80} />
                            </h1>
                        </motion.div>
                        
                        <div className="space-y-4">
                            {/* Sub-heading */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <p className="text-xl md:text-2xl text-neutral-600 font-normal leading-relaxed">
                                    Creating intuitive and beautiful interfaces
                                </p>
                            </motion.div>

                            {/* Description Paragraph */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-base md:text-lg text-neutral-600 leading-[1.8] max-w-3xl"
                            >
                                I&apos;m a Product Designer who deeply understands user experience and creates intuitive and beautiful interfaces.
                                Through design system development and branding, I deliver consistent experiences
                                and pursue executable designs that consider development feasibility.
                            </motion.p>
                        </div>

                        {/* Say Hi Button & About Link */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-center gap-8"
                        >
                            <button
                                onClick={handleSayHiClick}
                                className="px-6 py-3 bg-[#222222] hover:bg-gray-800 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
                            >
                                <span>Say Hi</span>
                            </button>
                            <Link
                                href="/about"
                                className="text-gray-800 hover:text-gray-600 font-medium transition-colors"
                            >
                                About
                            </Link>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
