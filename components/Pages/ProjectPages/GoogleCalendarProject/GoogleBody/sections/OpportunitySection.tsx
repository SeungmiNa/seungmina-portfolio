'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';

const OpportunitySection = forwardRef<HTMLDivElement>((props, ref) => {
    const isInView = useInView(ref as React.RefObject<HTMLDivElement>, { once: true, margin: "-100px" });

    return (
        <motion.div 
            id="opportunity" 
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
                <SectionTitle>The Opportunity</SectionTitle>
            </motion.div>
            <motion.p 
                className="text-xl lg:text-2xl xl:text-[34px] leading-[1.5] lg:leading-[1.5] font-bold text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
                Struggle with too many steps when creating events? <br />
                <span className='text-[#0075FA]'>If event creation felt simpler and more seamless, <br /></span>
                Users could plan their schedules quickly and confidently. <br />
            </motion.p>
            <motion.p 
                className="lg:text-lg text-base text-[#747474] leading-[32px] max-w-3xl mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
                To address this problem, I designed an AI voice feature that lets users create events simply by speaking. It turns a complex, multi-step process into a natural, one-sentence interaction. When users talk, the AI listens in real time, extracts the details, and builds the event automatically.
            </motion.p>
        </motion.div>
    );
});

OpportunitySection.displayName = 'OpportunitySection';

export default OpportunitySection;

