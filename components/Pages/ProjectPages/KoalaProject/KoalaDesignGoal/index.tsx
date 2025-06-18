"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, MotionValue } from "framer-motion";

interface AnimatedSentenceProps {
    children: React.ReactNode;
    index: number;
    isLast?: boolean;
    scrollProgress: MotionValue<number>;
}

// Floating Particles Component
const FloatingParticles: React.FC = () => {
    const particles = Array.from({ length: 15 }, (_, i) => i);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((i) => (
                <motion.div
                    key={i}
                    className={`absolute w-1 h-1 rounded-full opacity-40 ${i % 3 === 0 ? 'bg-gradient-to-r from-rose-300 to-pink-400' :
                        i % 3 === 1 ? 'bg-gradient-to-r from-amber-300 to-orange-400' :
                            'bg-gradient-to-r from-violet-300 to-purple-400'
                        }`}
                    initial={{
                        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                        scale: 0,
                    }}
                    animate={{
                        y: [null, -80],
                        x: [null, Math.random() * 60 - 30],
                        scale: [0, 1, 0],
                        opacity: [0, 0.6, 0],
                    }}
                    transition={{
                        duration: 10 + Math.random() * 6,
                        repeat: Infinity,
                        delay: Math.random() * 8,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

// Dynamic Lighting Component
const DynamicLighting: React.FC<{ scrollProgress: MotionValue<number> }> = ({ scrollProgress }) => {
    const lightIntensity = useTransform(scrollProgress, [0, 0.3, 0.7, 1], [0.1, 0.25, 0.4, 0.15]);
    const lightPosition = useTransform(scrollProgress, [0, 1], [0, 100]);
    const lightColor = useTransform(
        scrollProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ['#fef3c7', '#fecaca', '#f3e8ff', '#fef3c7', '#fecaca']
    );

    return (
        <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: lightIntensity }}
        >
            <motion.div
                className="absolute w-[900px] h-[900px] rounded-full blur-3xl"
                style={{
                    background: `radial-gradient(circle, ${lightColor}30 0%, transparent 70%)`,
                    left: `${lightPosition}%`,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </motion.div>
    );
};

const AnimatedSentence: React.FC<AnimatedSentenceProps> = ({ children, index, isLast = false, scrollProgress }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-25% 0px -25% 0px",
        amount: 0.3
    });

    // Subtle parallax effect for each sentence
    const y = useTransform(scrollProgress, [0, 1], [index * 30, index * -30]);

    const highlightKeywords = (text: string) => {
        const keywords = ['details', 'emotion', 'crafted', 'intentional', 'rhythm', 'care', 'whimsical', 'gentle'];
        const parts = text.split(/(\b\w+\b)/);

        return parts.map((part, i) => {
            const isKeyword = keywords.some(keyword =>
                part.toLowerCase().includes(keyword.toLowerCase())
            );

            if (isKeyword) {
                const colorVariants = [
                    'from-rose-400 via-pink-400 to-fuchsia-400',
                    'from-amber-400 via-orange-400 to-red-400',
                    'from-violet-400 via-purple-400 to-indigo-400',
                    'from-rose-400 via-pink-400 to-fuchsia-400'
                ];
                const selectedColor = colorVariants[i % colorVariants.length];

                return (
                    <motion.span
                        key={i}
                        className={`relative inline-block font-semibold text-gray-800`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{
                            delay: 0.4 + index * 0.2,
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <span className="relative z-10">{part}</span>
                        <motion.span
                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${selectedColor} rounded-full opacity-70`}
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{
                                delay: 0.8 + index * 0.2,
                                duration: 1.0,
                                ease: "easeOut"
                            }}
                            style={{ originX: 0 }}
                        />
                    </motion.span>
                );
            }
            return part;
        });
    };

    return (
        <motion.div
            ref={ref}
            className={`mb-16 leading-loose ${isLast
                ? 'text-center text-4xl md:text-5xl font-bold text-gray-900'
                : 'text-xl md:text-2xl font-light text-gray-700'
                }`}
            style={{ y }}
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            animate={isInView ? {
                opacity: 1,
                y: 0,
                rotateX: 0
            } : {
                opacity: 0,
                y: 40,
                rotateX: 10
            }}
            transition={{
                duration: 1.4,
                delay: index * 0.25,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
        >
            {highlightKeywords(children as string)}
        </motion.div>
    );
};

const KoalaDesignGoal: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.7, 0.9]);
    const backgroundHue = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 3, 6, 9, 12]);
    const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);

    const sentences = [
        "This project began with a simple idea — that in design, emotion lives in the details.",
        "While experimenting with AI video tools, I wondered: What if I could turn my design philosophy into a short, animated story?",
        "The result is a whimsical yet intentional sequence featuring a baby koala, where every small action is crafted to reflect care, rhythm, and emotion.",
        "I believe good design isn't just about functionality, but about how each tiny decision can move people.",
        "This piece is my attempt to capture that."
    ];

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-24 overflow-hidden"
            style={{ backgroundColor: '#FAF8F5' }}
        >
            {/* Warm Cinematic Background */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(135deg, #FAF8F5 0%, #FFFCFA 50%, #FEF7F0 100%)',
                    opacity: backgroundOpacity,
                    filter: `hue-rotate(${backgroundHue}deg)`,
                    scale: backgroundScale,
                }}
            />

            {/* Floating Particles */}
            <FloatingParticles />

            {/* Dynamic Lighting */}
            <DynamicLighting scrollProgress={scrollYProgress} />

            {/* Main Content */}
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="space-y-16">
                    {sentences.map((sentence, index) => (
                        <AnimatedSentence
                            key={index}
                            index={index}
                            isLast={index === sentences.length - 1}
                            scrollProgress={scrollYProgress}
                        >
                            {sentence}
                        </AnimatedSentence>
                    ))}

                    {/* Enhanced Signature */}
                    <motion.div
                        className="text-center mt-20"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="inline-block relative"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4 }}
                        >
                            <motion.div
                                className="text-gray-600 font-light italic text-xl md:text-2xl"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1.5, duration: 1.2 }}
                                viewport={{ once: true }}
                            >
                                — Seungmi
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ delay: 1.8, duration: 1.0 }}
                                viewport={{ once: true }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced Spotlight Effect for Final Sentence */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 2.0 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl"
                    animate={{
                        background: [
                            "radial-gradient(circle, rgba(254, 243, 199, 0.3) 0%, transparent 70%)",
                            "radial-gradient(circle, rgba(254, 202, 202, 0.3) 0%, transparent 70%)",
                            "radial-gradient(circle, rgba(243, 232, 255, 0.3) 0%, transparent 70%)",
                            "radial-gradient(circle, rgba(254, 243, 199, 0.3) 0%, transparent 70%)",
                        ]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>
        </section>
    );
};

export default KoalaDesignGoal;
