'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import ImageContainer from '@/components/ImageContainer';

const DesignSystemSection = forwardRef<HTMLDivElement>((props, ref) => {
    const isInView = useInView(ref as React.RefObject<HTMLDivElement>, { once: true, margin: "-100px" });

    return (
        <motion.div 
            id="design-system" 
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="pt-2 lg:pt-24">
                <motion.div 
                    className="flex gap-12 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <SectionTitle>Wire-framing / <br /> Design System</SectionTitle>
                    <p className="flex-1 text-base lg:text-lg text-[#747474] leading-[32px] max-w-4xl">
                        Reviews and user discussions echoed the same frustration &quot;It takes too many taps to create an event.&quot; This highlighted a clear opportunity to simplify the flow and make the experience faster and more intuitive.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 30 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <ImageContainer
                        image="/images/google/google-wireframing.png"
                        alt="Google Calendar Wireframing"
                        className="w-full h-auto"
                    />
                </motion.div>
                <motion.p 
                    className="flex-1 text-base lg:text-lg text-[#747474] leading-[32px] max-w-3xl my-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    I also created a small design system to keep the experience consistent. It included the new components I designed, such as the dynamic waveform and information indicators, ensuring that the visuals and interactions felt unified throughout the flow.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 30 }}
                    transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <ImageContainer
                        image="/images/google/google-design-system.png"
                        alt="Google Calendar Design System"
                        className="w-full h-auto"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
});

DesignSystemSection.displayName = 'DesignSystemSection';

export default DesignSystemSection;

