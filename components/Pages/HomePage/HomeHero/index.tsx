'use client';

import { motion } from "framer-motion";
import type { FC } from "react";

const HomeHero: FC = () => {

    return (
        <div className="relative min-h-[40vh] md:min-h-[45vh] w-full flex">
            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-8 py-20 md:py-28 lg:py-40 z-10">
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
                                className="text-5xl md:text-6xl lg:text-7xl !leading-[1.15]"
                                style={{
                                    fontFamily: 'var(--font-playfair), Georgia, serif',
                                    fontWeight: 400,
                                    fontStyle: 'italic',
                                    color: '#2563EB',
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                I&apos;m Seungmi.
                            </h1>
                        </motion.div>

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

                        {/* Contact Button
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="pt-4"
                        >
                            <SolidButton
                                title="Contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    trackEmailClick('naissme0@gmail.com', 'home_hero_contact_button');
                                    window.location.href = "mailto:naissme0@gmail.com";
                                }}
                            />
                        </motion.div> */}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
