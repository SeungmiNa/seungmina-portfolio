'use client';

import Title from "@/components/Font/Title";
import { goToProjects } from "@/components/Navbar";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import type { FC } from "react";

const HomeHero: FC = () => {
    return (
        <div className="relative min-h-[100vh] w-full flex items-center justify-center">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-[130px] animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-300/30 to-teal-300/30 rounded-full blur-[130px] animate-pulse delay-700" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] dark:bg-grid-black/[0.02]" />

            {/* Main Content */}
            <div className="container mx-auto px-8 pb-24 z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-5 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-600 border border-neutral-200/50 shadow-sm">
                            Hello, I&apos;m Seungmi 👋
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-8"
                    >
                        <Title variant="h1" className="text-5xl md:text-6xl lg:text-7xl font-bold text-black !leading-[1.2]">
                            Bridging Design & Development
                        </Title>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="mt-10"
                    >
                        <span className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 font-light tracking-wide">
                            UX/UI Designer & UI Developer
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="pt-8 text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto"
                    >
                        I specialize in crafting innovative <b>design systems</b> and <b>UX/UI</b> solutions that enhance <b>user interactions</b>. Building with <b>TypeScript</b>, <b>React</b>, <b>Next.js</b>, and <b>Tailwind CSS</b>, I create elegant <b>reusable UI components</b> powered by <b>shadcn/ui</b> and <b>Headless UI</b>. I bring designs to life from <b>Figma</b> to production, ensuring seamless user experiences.
                    </motion.p>

                    {/* Core Skills */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-8 flex flex-wrap justify-center gap-2.5"
                    >
                        {[
                            'React', 'TypeScript', 'Next.js', 
                            'Design Systems', 'UI/UX', 'Tailwind CSS'
                        ].map((skill) => (
                            <motion.span
                                key={skill}
                                whileHover={{ scale: 1.05 }}
                                className="px-4 py-2 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-200 border border-neutral-200/50 dark:border-neutral-700/50 shadow-sm hover:shadow transition-all duration-200"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div> */}

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-12"
                    >
                        <motion.button
                            onClick={goToProjects}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-4 py-2 font-normal hover:font-medium text-sm hover:text-stone-900 dark:bg-white text-stone-600 dark:text-neutral-900 rounded-lg font-medium hover:scale-110 transition-all duration-200"
                        >
                            <div className="flex items-center gap-2 text-base animate-bounce hover:animate-none text-[#2563EB] hover:text-stone-900 font-semibold">
                                Explore My Work
                                <ChevronDownIcon className="w-4 h-4 shrink-0" />
                            </div>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
