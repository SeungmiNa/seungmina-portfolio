"use client";
import React, { useState } from 'react';
import ImageContainer from '@/components/ImageContainer';
import { motion, useScroll, useTransform } from "framer-motion";

const KoalaProject: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [0, 300], [1, 1]);
    const opacity = useTransform(scrollY, [0, 300], [1, 1.5]);

    return (
        <div>
            <div className="relative w-full h-[100vh] bg-cover bg-center -mt-16">
                <ImageContainer
                    image="/images/koala/koala-in-detail-cover-without-text.jpg"
                    alt="Koala Cover"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 flex flex-col items-center justify-center text-white text-center px-6">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-8xl md:text-6xl font-bold mb-8 tracking-tight"
                    >
                        Details build emotion
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl mb-12 max-w-2xl font-light"
                    >
                        A one-minute animated video capturing my design identity through a playful koala
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white text-black font-medium py-4 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 text-lg"
                        onClick={() => setIsModalOpen(true)}
                    >
                        ▶ Watch Full Video
                    </motion.button>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
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

                <motion.div 
                    className="mb-24"
                    style={{ scale, opacity }}
                >
                    <ImageContainer
                        image="/images/koala/koala-in-detail-cover-without-text.jpg"
                        alt="Koala Detail"
                        className="w-full h-full object-cover rounded-2xl shadow-xl"
                    />
                </motion.div>

                {/* Project Summary Table */}
                <section className="container mx-auto flex flex-col">
                    <div className="w-full mx-auto px-6 lg:px-4 py-24">
                        <h2 className="text-4xl text-stone-800 mb-16 font-medium tracking-tight">Koala in Details</h2>
                        <div className="space-y-6 text-stone-600 mb-24 max-w-4xl text-lg leading-relaxed">
                            <p>
                                A self-initiated animated branding video that reflects my design identity through a detail-loving koala. From visual concept to editing,
                                I crafted a playful yet polished piece using AI tools and motion design to express how small details can shape emotional experiences.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-[#0A9494] text-xl font-semibold mb-6">My Role</h3>
                                <ul className="text-gray-600 space-y-3">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-[#0A9494] rounded-full mr-3"></span>
                                        Concept Creator
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-[#0A9494] rounded-full mr-3"></span>
                                        Visual Director
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-[#0A9494] rounded-full mr-3"></span>
                                        Motion Editor
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-[#0A9494] text-xl font-semibold mb-6">Responsibility</h3>
                                <ul className="text-gray-600 space-y-3">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-[#0A9494] rounded-full mr-3"></span>
                                        Concept and visual direction
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-[#0A9494] rounded-full mr-3"></span>
                                        AI image generation
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-[#0A9494] rounded-full mr-3"></span>
                                        Motion editing and sound design
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-[#0A9494] rounded-full mr-3"></span>
                                        Character and story development
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-[#0A9494] rounded-full mr-3"></span>
                                        Personal branding through animation
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-[#0A9494] text-xl font-semibold mb-6">Skills</h3>
                                <ul className="text-gray-600 space-y-3">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-[#0A9494] rounded-full mr-3"></span>
                                        Visual storytelling
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-[#0A9494] rounded-full mr-3"></span>
                                        AI-based image generation
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-[#0A9494] rounded-full mr-3"></span>
                                        Motion editing
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-[#0A9494] rounded-full mr-3"></span>
                                        Branding through animation
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-[#0A9494] text-xl font-semibold mb-6">Timeline</h3>
                                <div className="text-gray-600 space-y-3">
                                    <p className="font-medium">2 Weeks (2025.06)</p>
                                    <div className="space-y-2">
                                        <p className="flex items-center">
                                            <span className="w-2 h-2 bg-[#0A9494] rounded-full mr-3"></span>
                                            Week 1: Ideation, visual generation, mood setup
                                        </p>
                                        <p className="flex items-center">
                                            <span className="w-2 h-2 bg-[#0A9494] rounded-full mr-3"></span>
                                            Week 2: Editing, sound design, refinement
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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