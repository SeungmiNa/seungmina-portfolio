'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import ImageContainer from '@/components/ImageContainer';

const ProblemSection = forwardRef<HTMLDivElement>((props, ref) => {
    const isInView = useInView(ref as React.RefObject<HTMLDivElement>, { once: true, margin: "-100px" });
    
    const userQuotes = [
        'I wish adding events didn\'t require so many steps.',
        'Anyone who uses Google Calendar app... how do you add events efficiently?',
        'Mobile calendar apps make it hard to create events and require too many taps to set event details',
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const quoteVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div 
            id="problem" 
            ref={ref} 
            className=""
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
                <SectionTitle>The Problem</SectionTitle>
            </motion.div>
            <div>
                <motion.p 
                    className="max-w-3xl text-base lg:text-lg text-[#747474] leading-[32px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    Through hands-on testing and user research, I found that Google Calendar&apos;s mobile event creation flow feels slow and fragmented.
                    < br /> Users must scroll through multiple sections and complete many input steps, making even simple events time-consuming.
                </motion.p>
                
                <motion.div 
                    className="flex lg:flex-row flex-col gap-8 py-14"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:w-2/5 w-2/5"
                    >
                        <ImageContainer
                            image="/images/google/google-problem-image.png"
                            alt="Google Calendar Problem"
                            className="w-full"
                        />
                    </motion.div>
                    
                    <motion.div 
                        className="space-y-8 lg:space-y-10 flex flex-col justify-center lg:px-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.h3 
                            className="text-gray-700 font-semibold text-lg lg:text-xl"
                            variants={quoteVariants}
                        >
                            What is the <span className="text-red-500">user pain point</span>
                        </motion.h3>
                        <div className="space-y-4">
                            {userQuotes.map((quote, idx) => (
                                    <motion.div 
                                    key={idx} 
                                    className="bg-[#F2F3F4] rounded-full inline-flex px-8 py-4"
                                    variants={quoteVariants}
                                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                                >
                                    <p className="text-gray-700 text-sm lg:text-base">&quot;{quote}&quot;</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
                
                <motion.p 
                    className="text-base lg:text-lg text-[#747474] leading-[32px] max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    Reviews and user discussions echoed the same frustration - &quot;It takes too many taps to create an event.&quot; This highlighted a clear opportunity to simplify the flow and make the experience faster and more intuitive.
                </motion.p>
            </div>
        </motion.div>
    );
});

ProblemSection.displayName = 'ProblemSection';

export default ProblemSection;

