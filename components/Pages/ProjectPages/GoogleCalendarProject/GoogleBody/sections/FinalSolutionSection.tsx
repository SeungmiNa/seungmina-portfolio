'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle';
import ImageContainer from '@/components/ImageContainer';
import VideoContainer from '@/components/VideoContainer';

const FinalSolutionSection = forwardRef<HTMLDivElement>((props, ref) => {
    const isInView = useInView(ref as React.RefObject<HTMLDivElement>, { once: true, margin: "-100px" });

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div
            id="final-solution"
            ref={ref}
            className="pt-2 lg:pt-24"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <SectionTitle>Key Screens & Interaction Highlights</SectionTitle>
                </motion.div>
                <div className='flex flex-col gap-12'>
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="text-base lg:text-lg text-[#747474] leading-[32px] max-w-3xl">
                            A voice-first event creation flow that feels fast, clear, and reassuring - allowing users to create events without unnecessary steps.
                        </p>
                    </motion.div>
                    <div className='lg:pr-8'>
                        <VideoContainer
                            video="/videos/google/google-interaction-overview.mov"
                            className="!h-auto overflow-clip"
                            innerClassName="scale-[1.03]"
                            autoplay={true}
                            controls={false}
                            loop={true}
                            muted={true}
                        />
                    </div>
                    <div className='w-full flex items-center justify-center pt-6 lg:pt-12'>
                        <div className="flex flex-col gap-4 mb-4 max-w-xl items-center justify-center text-center">
                            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-[1.25] font-semibold">Designing the <br /> Detail-Level Interaction</h3>
                            <p className="text-base lg:text-lg text-[#747474] leading-[1.5] lg:leading-[1.5] max-w-4xl">I designed how spoken intent turns into tangible UI — extracting key details, visualizing feedback, and guiding users through the process.</p>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <ImageContainer
                            image="/images/google/google-interaction1.png"
                            alt="Google Calendar Final Solution"
                            className="w-full max-w-3xl h-auto"
                        />
                    </div>

                    <motion.p
                        className="text-lg text-[#747474] leading-[32px] max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        The interface provides continuous visual feedback as users speak,
                        helping them understand what the system has captured and what’s coming next.
                    </motion.p>

                    {/* Interactive Glassmorphism Layout */}
                    <motion.div
                        className="relative w-full max-w-6xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {/* 첫 번째 줄: 작은 화면 1개, 큰 화면 2개 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-2 mb-2 lg:mb-6">
                            {/* 1번: Voice Input Card with Google Colors */}
                            <div className="lg:col-span-1">
                                <VideoContainer
                                    video="/videos/google/google-waveform-motion.mov"
                                    className="w-full max-w-3xl h-auto overflow-clip rounded-[28px]"
                                    innerClassName="scale-[1.02]"
                                    autoplay={true}
                                    controls={false}
                                    loop={true}
                                    muted={true}
                                />
                            </div>
                            {/* 2번: Prompt Card - 작은 화면에서는 두 번째 줄로 */}
                            <div className='w-full lg:col-span-1 hidden lg:block'>
                                <VideoContainer
                                    video="/videos/google/google-liveform-motion.mov"
                                    className="w-full max-w-3xl h-auto overflow-clip rounded-[28px] border-2 border-[#F1F1F1]"
                                    innerClassName="scale-[1.02]"
                                    autoplay={true}
                                    controls={false}
                                    loop={true}
                                    muted={true}
                                />
                            </div>
                        </div>

                        {/* 두 번째 줄: 작은 화면 2개, 큰 화면 3개 */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-2 mb-2 lg:mb-6">
                            {/* 2번: Prompt Card - 작은 화면에서만 보임 */}
                            <div className='w-full lg:hidden'>
                                <VideoContainer
                                    video="/videos/google/google-liveform-motion.mov"
                                    className="w-full max-w-3xl h-auto overflow-clip rounded-[28px] border-2 border-[#F1F1F1]"
                                    innerClassName="scale-[1.02]"
                                    autoplay={true}
                                    controls={false}
                                    loop={true}
                                    muted={true}
                                />
                            </div>
                            {/* 3번: Event Details Card */}
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                transition={{ delay: 0.2 }}
                                className="relative rounded-3xl overflow-hidden"
                            >
                                <div>
                                    <VideoContainer
                                        video="/videos/google/google-info-indicator-motion.mov"
                                        className="w-full max-w-3xl h-auto overflow-clip rounded-[28px]"
                                        innerClassName="scale-[1.02]"
                                        autoplay={true}
                                        controls={false}
                                        loop={true}
                                        muted={true}
                                    />
                                </div>
                            </motion.div>

                            {/* 4번: 추가 카드 - 큰 화면에서만 보임 */}
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                transition={{ delay: 0.25 }}
                                className="relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-md border border-white/50 hidden lg:block"
                            >
                                <ImageContainer
                                    image="/images/google/google-info-indicator1.png"
                                    alt="Google Calendar Final Solution"
                                    className="w-full max-w-3xl h-auto"
                                />
                            </motion.div>

                            {/* 5번: Selection Tabs - 큰 화면에서만 보임 */}
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                transition={{ delay: 0.3 }}
                                className="relative rounded-3xl overflow-hidden hidden lg:block"
                            >
                                <ImageContainer
                                    image="/images/google/google-info-indicator2.png"
                                    alt="Google Calendar Final Solution"
                                    className="w-full max-w-3xl h-auto"
                                />
                            </motion.div>
                        </div>

                        {/* 세 번째 줄: 작은 화면 2개, 큰 화면에서는 두 번째 줄에 포함 */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-2 lg:hidden">
                            {/* 4번: 작은 화면에서만 보임 */}
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                transition={{ delay: 0.25 }}
                                className="relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-md border border-white/50"
                            >
                                <ImageContainer
                                    image="/images/google/google-info-indicator1.png"
                                    alt="Google Calendar Final Solution"
                                    className="w-full max-w-3xl h-auto"
                                />
                            </motion.div>

                            {/* 5번: Selection Tabs */}
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                transition={{ delay: 0.3 }}
                                className="relative rounded-3xl overflow-hidden"
                            >
                                <ImageContainer
                                    image="/images/google/google-info-indicator2.png"
                                    alt="Google Calendar Final Solution"
                                    className="w-full max-w-3xl h-auto"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
});

FinalSolutionSection.displayName = 'FinalSolutionSection';

export default FinalSolutionSection;

