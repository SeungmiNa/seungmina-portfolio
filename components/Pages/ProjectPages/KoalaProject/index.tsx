"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import KoalaBehindScenes from './KoalaBehindScenes';
import KoalaDesignGoal from './KoalaDesignGoal';
import { trackVideoPlay, trackButtonClick } from '@/lib/analytics';
// import KoalaSceneBreakdown from './KoalaSceneBreakdown';

const KoalaProject: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        trackButtonClick('watch_full_video', 'koala_project_hero');
        trackVideoPlay('koala-youtube-demo', 'youtube', 'koala_project_hero');
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        trackButtonClick('close_video_modal', 'koala_project_modal');
        setIsModalOpen(false);
    };

    const failImages = [
        "/images/koala/koala-fail1.png",
        "/images/koala/koala-fail2.png",
        "/images/koala/koala-fail3.png",
        "/images/koala/koala-fail4.png",
        "/images/koala/koala-fail5.png",
        "/images/koala/koala-fail6.png",
        "/images/koala/koala-fail7.png",
    ];

    const failGifs = [
        "/images/koala/koala-fail-video1.gif",
        "/images/koala/koala-fail-video2.gif",
        "/images/koala/koala-fail-video3.gif",
        "/images/koala/koala-fail-video4.gif",
        "/images/koala/koala-fail-video5.gif",
        "/images/koala/koala-fail-video6.gif",
        "/images/koala/koala-fail-video7.gif"
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] lg:h-[80vh] bg-cover bg-center -mt-16">
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <iframe
                        className="w-full h-full object-cover scale-105 border border-red-500"
                        src="https://www.youtube.com/embed/BfwGZ-JexuI?start=1&end=30&autoplay=1&mute=1&controls=0&loop=1&playlist=BfwGZ-JexuI"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl lg:text-6xl font-bold mb-4 lg:mb-8 tracking-tight"
                    >
                        I believe details build emotion.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-base lg:text-2xl mb-6 lg:mb-12 max-w-2xl font-light"
                    >
                        A one-minute animated video capturing my design identity through a playful koala
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white text-black font-medium py-4 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 text-sm md:text-lg"
                        onClick={handleModalOpen}
                    >
                        ▶ Watch Full Video
                    </motion.button>
                </div>
                {/* 모달에서 iframe 열기 */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">
                        <div className="relative w-full max-w-5xl aspect-video mx-4">
                            <iframe
                                className="w-full h-full rounded-xl shadow-2xl"
                                src="https://www.youtube.com/embed/BfwGZ-JexuI?autoplay=1"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                            <button
                                className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors duration-300"
                                onClick={handleModalClose}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}
            </section>

            {/* Project Summary Section */}
            {/* <section className="container mx-auto flex flex-col">
                <div className="w-full mx-auto px-6 lg:px-4 py-24">
                    <h2 className="text-4xl lg:text-5xl text-stone-800 mb-8 font-semibold">Koala in Details</h2>
                    <div className="space-y-4 text-stone-500 mb-16 max-w-4xl">
                        <p className='text-lg font-noraml text-gray-600'>
                            A self-initiated animated branding video that reflects my design identity through a detail-loving koala. From visual concept to editing,
                            I crafted a playful yet polished piece using AI tools and motion design to express how small details can shape emotional experiences.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-gray-600 font-semibold mb-4">My Role</h3>
                            <ul className="text-gray-900 space-y-1">
                                <li>Concept Creator</li>
                                <li>Visual Director</li>
                                <li>Motion Editor</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-gray-600 font-semibold mb-4">Responsibility</h3>
                            <ul className="text-gray-900 space-y-1">
                                <li>Concept & Visual Direction</li>
                                <li>AI Image Generation</li>
                                <li>Motion Editing</li>
                                <li>Sound Design</li>
                                <li>Character Development</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-gray-600 font-semibold mb-4">Skills</h3>
                            <ul className="text-gray-900 space-y-1">
                                <li>Visual Storytelling</li>
                                <li>AI Image Generation</li>
                                <li>Motion Editing</li>
                                <li>Sound Design</li>
                                <li>Character Design</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-gray-600 font-semibold mb-4">Timeline</h3>
                            <p className="text-gray-900">Week 1: Ideation, visual generation</p>
                            <p className="text-gray-900">Week 2: Editing, sound design</p>
                        </div>
                    </div>
                </div>
            </section> */}

            <KoalaDesignGoal />
            <KoalaBehindScenes failImages={failImages} failGifs={failGifs} />
            {/* <KoalaSceneBreakdown /> */}

            <div className="mx-auto px-4 lg:px-16 py-16">
                {/* Final Results */}
                <section className="mb-24">
                    <h2 className="text-4xl lg:text-5xl text-stone-800 my-12 font-semibold text-center">The Final Cut</h2>
                    <div className="max-w-6xl mx-auto space-y-6">
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <iframe
                                width="100%"
                                height="700"
                                src="https://www.youtube.com/embed/BfwGZ-JexuI"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default KoalaProject;