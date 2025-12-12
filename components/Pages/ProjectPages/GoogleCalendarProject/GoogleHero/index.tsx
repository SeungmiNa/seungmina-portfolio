'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTimeTracker from '@/components/Analytics/SectionTimeTracker';
import ImageContainer from '@/components/ImageContainer';

const GoogleHero: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3,
            },
        },
    };

    return (
        <SectionTimeTracker sectionName="google_calendar_hero">
            {/* Hero Section */}
            <div className="relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className=""
                >
                    <div className='flex flex-col flex-col-reverse lg:flex-row items-center pt-16'>
                        <motion.div variants={textVariants} className='max-w-2xl w-full py-20 z-10'>
                            <motion.h1 
                                className="text-4xl lg:text-[64px] xl:text-[80px] leading-[1.2] text-[#202124]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            >
                                Redesign
                                < br /> Google Calendar 
                                < br /> Mobile App
                            </motion.h1>
                            <motion.p 
                                className="font-normal mt-10 text-base lg:text-lg text-[#6E6E6E] leading-[1.5]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            >
                                I explore how conversational AI can simplify event creation, helping users set up events in seconds while still feeling confident and in control.
                            </motion.p>
                        </motion.div>

                        <motion.div 
                            variants={imageVariants}
                            className="absolute -right-24 lg:right-0 -top-20 w-full flex-1 flex justify-end items-center"
                        >
                            <ImageContainer
                                image="/images/google/google-hero-image.png"
                                alt="Google Calendar Mobile App Redesign"
                                className="max-w-xs lg:max-w-xl object-contain w-full h-auto"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </SectionTimeTracker>
    );
};

export default GoogleHero;

