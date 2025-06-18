"use client";
import React, { useState } from 'react';
import ImageContainer from '@/components/ImageContainer';
import { motion, useScroll, useTransform } from "framer-motion";
import KoalaBehindScenes from './KoalaBehindScenes';

const KoalaProject: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { scrollY } = useScroll();
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const slowZoom = {
        hover: { scale: 1.05, transition: { duration: 1.2, ease: "easeInOut" } },
    };

    const cardHover = {
        initial: { scale: 1 },
        hover: { 
            scale: 1.1,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
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

    const galleryItems = [
        { 
            type: 'image', 
            src: failImages[0], 
            alt: 'Failed attempt 1', 
            title: 'First Attempt', 
            description: 'Too much detail, lost the cute factor',
            aspect: 'tall'
        },
        { 
            type: 'gif', 
            src: failGifs[0], 
            alt: 'Failed attempt 1 GIF', 
            title: 'First Attempt Motion', 
            description: 'Initial animation test',
            aspect: 'wide'
        },
        { 
            type: 'image', 
            src: failImages[1], 
            alt: 'Failed attempt 2', 
            title: 'Second Attempt', 
            description: 'Lighting issues',
            aspect: 'wide'
        },
        { 
            type: 'gif', 
            src: failGifs[1], 
            alt: 'Failed attempt 2 GIF', 
            title: 'Second Attempt Motion', 
            description: 'Character movement test',
            aspect: 'tall'
        },
        { 
            type: 'image', 
            src: failImages[2], 
            alt: 'Failed attempt 3', 
            title: 'Third Attempt', 
            description: 'Style mismatch',
            aspect: 'tall'
        },
        { 
            type: 'gif', 
            src: failGifs[2], 
            alt: 'Failed attempt 3 GIF', 
            title: 'Third Attempt Motion', 
            description: 'Timing adjustment',
            aspect: 'wide'
        },
        { 
            type: 'image', 
            src: failImages[3], 
            alt: 'Failed attempt 4', 
            title: 'Fourth Attempt', 
            description: 'Composition issues',
            aspect: 'wide'
        },
        { 
            type: 'gif', 
            src: failGifs[3], 
            alt: 'Failed attempt 4 GIF', 
            title: 'Fourth Attempt Motion', 
            description: 'Camera angle test',
            aspect: 'tall'
        },
        { 
            type: 'image', 
            src: failImages[4], 
            alt: 'Failed attempt 5', 
            title: 'Fifth Attempt', 
            description: 'Character design iteration',
            aspect: 'tall'
        },
        { 
            type: 'gif', 
            src: failGifs[4], 
            alt: 'Failed attempt 5 GIF', 
            title: 'Fifth Attempt Motion', 
            description: 'Expression test',
            aspect: 'wide'
        },
        { 
            type: 'image', 
            src: failImages[5], 
            alt: 'Failed attempt 6', 
            title: 'Sixth Attempt', 
            description: 'Environment design',
            aspect: 'wide'
        },
        { 
            type: 'gif', 
            src: failGifs[5], 
            alt: 'Failed attempt 6 GIF', 
            title: 'Sixth Attempt Motion', 
            description: 'Scene transition test',
            aspect: 'tall'
        },
        { 
            type: 'image', 
            src: failImages[6], 
            alt: 'Failed attempt 7', 
            title: 'Final Attempt', 
            description: 'Final iteration',
            aspect: 'tall'
        },
        { 
            type: 'gif', 
            src: failGifs[6], 
            alt: 'Failed attempt 7 GIF', 
            title: 'Final Attempt Motion', 
            description: 'Complete sequence test',
            aspect: 'wide'
        },
    ];
      
    return (
        <div>
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] lg:h-[80vh] bg-cover bg-center -mt-16">
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <iframe
                        className="w-full h-full object-cover scale-105"
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
                        onClick={() => setIsModalOpen(true)}
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
                                onClick={() => setIsModalOpen(false)}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}
            </section>

            {/* Project Summary Section */}
            <section className="container mx-auto flex flex-col">
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
            </section>

            {/* Project Background */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-8">🧠 Moodboard & Prompting Process</h2>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        className="bg-black/40 text-white p-6 rounded-xl mb-8 shadow-lg backdrop-blur"
                    >
                        <p className="text-sm uppercase text-gray-300 mb-2">Initial Prompt</p>
                        <p className="text-lg italic">“a cute baby koala with Pixar style, baking a cake in a forest cottage...”</p>
                    </motion.div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            className="overflow-hidden rounded-lg shadow-xl"
                        >
                            <img src="/before.jpg" className="object-cover w-full h-full" />
                            <p className="text-sm text-red-400 mt-2">❌ Too messy — lighting everywhere!</p>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            className="overflow-hidden rounded-lg shadow-xl"
                        >
                            <img src="/after.jpg" className="object-cover w-full h-full" />
                            <p className="text-sm text-green-400 mt-2">✅ Final concept — sunlight, focus, emotion</p>
                        </motion.div>
                    </div>


                    <div className="bg-white p-4 rounded-xl shadow">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            className="bg-white/10 text-white p-6 rounded-xl shadow-inner border border-white/20"
                        >
                            <p className="text-sm uppercase text-gray-300 mb-1">🎯 Final Prompt</p>
                            <p className="text-md italic mb-3">“A cute 3D baby koala in Pixar style with big shiny eyes, subtle blush, standing in a cozy forest kitchen...”</p>
                            <ul className="list-disc list-inside text-sm text-gray-300">
                                <li>Soft natural lighting</li>
                                <li>Facial detail: blush & eye sparkles</li>
                                <li>Framed like a cinematic close-up</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            <KoalaBehindScenes failImages={failImages} failGifs={failGifs} />

            <div className="mx-auto px-4 lg:px-16 py-16">
                {/* Project Background */}
                <section className="mb-24">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-8 tracking-tight">기획 배경</h2>
                        <div className="prose max-w-none">
                            <p className="text-xl leading-relaxed text-gray-600">
                                I wanted to show my quiet but sharp design personality through an animated character.
                                Instead of a typical portfolio intro, I chose storytelling — something visual, warm, and fun.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Development Process */}
                <section className="mb-24">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 tracking-tight">작업 과정</h2>
                        <div className="space-y-16">
                            <div className="flex flex-col md:flex-row gap-12 items-start">
                                <div className="md:w-1/2">
                                    <img
                                        src="/path-to-image.jpg"
                                        alt="작업 과정 이미지"
                                        className="rounded-2xl shadow-xl w-full hover:shadow-2xl transition-shadow duration-300"
                                    />
                                </div>
                                <div className="md:w-1/2 space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-4 text-[#0A9494]">Step 1: Concept</h3>
                                        <p className="text-lg leading-relaxed text-gray-600">
                                            [단계별 설명 입력]
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-4 text-[#0A9494]">Step 2: Visual Development</h3>
                                        <p className="text-lg leading-relaxed text-gray-600">
                                            [단계별 설명 입력]
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-4 text-[#0A9494]">Step 3: Animation / Timing</h3>
                                        <p className="text-lg leading-relaxed text-gray-600">
                                            [단계별 설명 입력]
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-4 text-[#0A9494]">Step 4: Sound & Editing</h3>
                                        <p className="text-lg leading-relaxed text-gray-600">
                                            [단계별 설명 입력]
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Results */}
                <section className="mb-24">
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
                        <p className="text-center text-gray-500 text-lg">[이미지 설명]</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default KoalaProject;