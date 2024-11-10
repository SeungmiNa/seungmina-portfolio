'use client';

import Title from "@/components/Font/Title";
import { goToProjects } from "@/components/Navbar";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import type { FC } from "react";

const HomeHero: FC = () => {

    return (
        <div className="relative min-h-[90vh] w-full flex items-center justify-center">
            {/* Abstract Background Elements - Enhanced */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-[100px] opacity-20 animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-300 to-teal-300 rounded-full blur-[100px] opacity-20 animate-pulse delay-700" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] dark:bg-grid-black/[0.02]" />

            {/* Main Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 rounded-full text-sm font-medium text-neutral-500 dark:text-neutral-400 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700">
                            Hello, I'm Seungmi 👋
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-8"
                    >
                        <Title variant="h1" className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-100">
                            Bridging Design & Development
                        </Title>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="mt-6"
                    >
                        <span className="text-xl md:text-3xl text-neutral-700 dark:text-neutral-300 font-light">
                            UI Engineer & Creative Designer
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-8 text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto"
                    >
                        {/* I blend technical expertise with design thinking to create exceptional digital experiences.
                        Specializing in <span className="font-medium text-neutral-900 dark:text-neutral-100">interactive interfaces</span>,
                        <span className="font-medium text-neutral-900 dark:text-neutral-100"> motion design</span>, and
                        <span className="font-medium text-neutral-900 dark:text-neutral-100"> user-centric solutions</span>. */}

                        As a UX/UI designer, I'm passionate about creating beautiful and user-centric designs. I specialize in crafting visually appealing interfaces that enhance the overall user experience. My expertise in HTML and CSS allows me to design flexible layouts that adapt seamlessly to various screen sizes and devices. Every design decision I make is driven by the goal of improving usability and creating delightful digital experiences.
                    </motion.p>
                    

                    {/* Skills Tags */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-8 flex flex-wrap justify-center gap-2"
                    >
                        {['React', 'TypeScript', 'UI/UX', 'Motion Design', 'Next.js', 'Tailwind CSS'].map((skill, index) => (
                            <span
                                key={skill}
                                className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm font-medium text-neutral-600 dark:text-neutral-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-12"
                    >
                        <motion.a
                            // href="#work"
                            onClick={goToProjects}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block transition-all duration-300 px-4 py-2 font-normal hover:font-medium text-sm hover:text-stone-900 dark:bg-white text-stone-600 dark:text-neutral-900 rounded-lg font-medium hover:scale-110 transition-all duration-200"
                        >
                            <div className="flex items-center gap-2 ">
                                Explore My Work
                                <ChevronDownIcon className="w-4 h-4 shrink-0" />
                            </div>
                        </motion.a>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] -z-10">
                        <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 rounded-full opacity-10 blur-3xl animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
