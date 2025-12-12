'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';

const OverviewSection = forwardRef<HTMLDivElement>((props, ref) => {
    const isInView = useInView(ref as React.RefObject<HTMLDivElement>, { once: true, margin: "-100px" });

    return (
        <motion.div 
            id="overview" 
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
                <SectionTitle>Overview</SectionTitle>
            </motion.div>
            <motion.p 
                className="text-lg text-[#747474] max-w-3xl leading-[32px]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
                This self-initiated project reimagines how AI can support a smoother, more natural event creation experience on Google Calendar&apos;s mobile app, especially when users need something fast and effortless.
            </motion.p>
        </motion.div>
    );
});

OverviewSection.displayName = 'OverviewSection';

export default OverviewSection;

