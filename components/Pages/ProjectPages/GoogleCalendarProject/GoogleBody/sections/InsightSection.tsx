'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import VideoContainer from '@/components/VideoContainer';

const InsightSection = forwardRef<HTMLDivElement>((props, ref) => {
    const isInView = useInView(ref as React.RefObject<HTMLDivElement>, { once: true, margin: "-100px" });

    return (
        <motion.div 
            id="insight" 
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
                <SectionTitle>Insight</SectionTitle>
            </motion.div>
            <div className="space-y-6">
                <motion.p 
                    className="text-base lg:text-lg text-[#747474] leading-[32px] max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    I considered multiple directions—from simplifying forms to using sentence-based input.
                    Through experimentation, voice input emerged as the most natural and efficient option for mobile users.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 30 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    <VideoContainer
                        video="/videos/google/google-text-extract.mov"
                        className="w-full h-auto overflow-clip rounded-[28px] "
                        innerClassName="scale-[1.02]"
                        autoplay={true}
                        controls={false}
                        loop={true}
                        muted={true}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
});

InsightSection.displayName = 'InsightSection';

export default InsightSection;

