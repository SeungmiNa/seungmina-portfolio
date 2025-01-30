"use client";
import Image from "next/image";
import React from "react";
import Title from "../../../../Font/Title";

const InizioUXUI = () => {
    return (
        <div className="max-w-7xl mx-auto w-full px-4 py-12">
            {/* Hero Section */}
            {/* <div className="relative bg-gradient-to-br from-[#0DB9B9]/60 to-[#5465FF]/60 rounded-2xl px-8 py-24 mb-12 overflow-hidden"> */}
            <div className="relative rounded-2xl px-8 pt-24 mb-6 overflow-hidden text-center">
                <div className="flex flex-col gap-6 mb-16">
                    <div className="space-y-2">
                        <div>
                            <div className="inline-flex px-4 py-2 rounded-full bg-[#0DB9B9]/10 border border-[#0DB9B9]/30">
                                <span className="text-sm font-medium text-[#0DB9B9]">UX / UI Design & Development</span>
                            </div>
                        </div>
                        <Title variant="h1" className="text-4xl md:text-5xl font-bold text-gray-900">
                            Interactive UI Elements
                        </Title>
                    </div>
                    <p className="text-gray-500 max-w-2xl text-lg w-full mx-auto">
                    Enhancing user experience through modern UI implementations.
                    </p>
                </div>
                {/* Abstract shapes background */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-12 left-20 w-32 h-32 bg-[#5465FF]/40 rounded-full blur-2xl"></div>
                    <div className="absolute top-10 left-30 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-10 right-20 w-40 h-40 bg-[#0DB9B9]/40 rounded-full blur-2xl"></div>
                </div>
            </div>

            {/* Features Section */}
            <div className="space-y-24">
                {/* Navigation Feature */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 bg-gray-100 rounded-2xl overflow-hidden">
                        <div className="relative aspect-[4/3]">
                            <Image
                                src="/images/navigation-demo.png" // Add your actual image path
                                alt="Navigation demonstration"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                            NAVIGATION
                        </div>
                        <h3 className="text-2xl font-semibold">
                            Responsive Navigation System
                        </h3>
                        <p className="text-gray-600">
                            A modern navigation system with smooth transitions and mobile-first design. Features include:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Smooth hamburger menu transitions
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Responsive breakpoints
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Dark/Light Mode Feature */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 space-y-4">
                        <div className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                            CUSTOMIZATION
                        </div>
                        <h3 className="text-2xl font-semibold">
                            Dark & Light Mode
                        </h3>
                        <p className="text-gray-600">
                            Implemented a seamless theme switching system for better user experience:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                                Smooth theme transitions
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                                </svg>
                                System preference detection
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                                Persistent theme settings
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 bg-gray-100 rounded-2xl overflow-hidden">
                        <div className="relative aspect-[4/3]">
                            <div className="absolute inset-0 grid grid-cols-2">
                                <div className="bg-white">
                                    <Image
                                        src="/images/light-mode.png" // Add your light mode screenshot
                                        alt="Light mode demonstration"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="bg-gray-900">
                                    <Image
                                        src="/images/dark-mode.png" // Add your dark mode screenshot
                                        alt="Dark mode demonstration"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interactive Elements */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 bg-gray-100 rounded-2xl overflow-hidden">
                        <div className="relative aspect-[4/3]">
                            <Image
                                src="/images/interactive-elements.png" // Add your actual image path
                                alt="Interactive elements demonstration"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                            INTERACTIONS
                        </div>
                        <h3 className="text-2xl font-semibold">
                            Hover Interactions
                        </h3>
                        <p className="text-gray-600">
                            Created intuitive hover effects and micro-interactions for better user feedback:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                                Hover effects
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                                Micro-interactions
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Workflow Optimization */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 space-y-4">
                        <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                            WORKFLOW
                        </div>
                        <h3 className="text-2xl font-semibold">
                            Workflow Integration
                        </h3>
                        <p className="text-gray-600">
                            Streamlined user workflows with intuitive navigation patterns and clear visual hierarchy:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                Intuitive navigation patterns
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                Clear visual hierarchy
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 bg-gray-100 rounded-2xl overflow-hidden">
                        <div className="relative aspect-[4/3]">
                            <Image
                                src="/images/workflow-optimization.png" // Add your actual image path
                                alt="Workflow optimization demonstration"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InizioUXUI;   