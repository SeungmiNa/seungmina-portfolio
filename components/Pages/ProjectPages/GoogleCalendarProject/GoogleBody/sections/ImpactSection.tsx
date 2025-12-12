'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';

const ImpactSection = forwardRef<HTMLDivElement>((props, ref) => {
    const isInView = useInView(ref as React.RefObject<HTMLDivElement>, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div 
            id="impact" 
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="pb-60">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <SectionTitle>Impact & Key Learnings</SectionTitle>
                </motion.div>
                <motion.div 
                    className="space-y-6 max-w-3xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.p 
                        className="text-base lg:text-lg text-[#747474] leading-[32px]"
                        variants={itemVariants}
                    >
                        This redesign demonstrates how conversational AI can bring everyday tools closer to how people naturally think and communicate—reducing friction and empowering users to work more efficiently.
                    </motion.p>
                    <motion.p 
                        className="text-base lg:text-lg text-[#747474] leading-[32px]"
                        variants={itemVariants}
                    >
                        Through this project, I gained deeper insight into designing AI-supported experiences that balance automation with user control.
                        It reinforced the importance of transparency, trust, and thoughtful interaction design in creating meaningful user experiences.
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    );
});

ImpactSection.displayName = 'ImpactSection';

export default ImpactSection;

