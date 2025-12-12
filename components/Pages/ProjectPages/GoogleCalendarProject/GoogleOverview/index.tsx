'use client';

import ImageContainer from '@/components/ImageContainer';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const GoogleOverview: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 lg:my-24 bg-[#F2F3F4] rounded-[28px] py-10 px-4 max-w-4xl"
        >
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Side - Icon and Name */}
                <motion.div
                    className="flex flex-col items-start gap-4 w-full md:w-72  flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <ImageContainer
                        image="/images/google/google-calendar-logo.png"
                        alt="Google Calendar"
                        className="!w-24 lg:!w-32 !h-auto"
                    />
                    <ImageContainer
                        image="/images/google/google-calendar-name-logo.png"
                        alt="Google Calendar"
                        className="!w-40 lg:!w-52 !h-auto"
                    />
                </motion.div>


                {/* Right Side - Title, Role, Timeline */}
                <motion.div
                    className="flex-1 space-y-6 px-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Title */}
                    <div>
                        <h2 className="text-sm lg:text-base font-bold text-[#464646]">
                            Google Calendar - Voice-First Event Creation Redesign
                        </h2>
                    </div>

                    {/* My Role Section */}
                    <div>
                        <h3 className="text-sm lg:text-base font-bold text-[#464646]">My Role</h3>
                        <div className="text-[#6E6E6E] leading-relaxed">
                            <p>User Flow Redesign, Interaction Design,
                                <br /> Visual Design, Motion / Micro-interactions,
                                <br /> Prototyping
                            </p>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div>
                        <h3 className="text-sm lg:text-base font-bold text-[#464646]">Timeline</h3>
                        <p className="text-[#6E6E6E]">Oct 2025 (1 Month Project)</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default GoogleOverview;

