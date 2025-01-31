"use client";
import Image from "next/image";
import React from "react";
import Title from "../../../../Font/Title";
import { BsCheckLg } from 'react-icons/bs';
import { BsMoonFill, BsSunFill, BsPaletteFill } from 'react-icons/bs';
import { BiMouse } from 'react-icons/bi';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { MdOutlineAnimation } from 'react-icons/md';

const InizioUXUI = () => {
    return (
        <div className="max-w-7xl mx-auto w-full px-4 py-12">
            {/* Hero Section */}
            {/* <div className="relative bg-gradient-to-br from-[#0DB9B9]/60 to-[#5465FF]/60 rounded-2xl px-8 py-24 mb-12 overflow-hidden"> */}
            <div className="relative rounded-2xl px-8 pt-24 mb-6 overflow-hidden text-center">
                <div className="flex flex-col gap-6 mb-16">
                    <div className="space-y-2">
                        <div>
                            <div className="inline-flex px-4 py-1 rounded-full bg-[#0DB9B9]/10 border border-[#0DB9B9]/30">
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
                        <div className="uppercase inline-block border border-[#5465FF]/10 bg-[#5465FF]/20 text-[#5465FF] px-3 py-1 rounded-full text-sm font-medium">
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
                                <BsCheckLg className="w-5 h-5 text-[#5465FF]" />
                                Smooth hamburger menu transitions
                            </li>
                            <li className="flex items-center gap-2">
                                <BsCheckLg className="w-5 h-5 text-[#5465FF]" />
                                Responsive breakpoints
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Dark/Light Mode Feature */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 space-y-4">
                        <div className="uppercase inline-block border border-[#0DB9B9]/20 bg-[#0DB9B9]/10 text-[#0DB9B9] px-3 py-1 rounded-full text-sm font-medium">
                            Theme button
                        </div>
                        <h3 className="text-2xl font-semibold">
                            Dark & Light Mode
                        </h3>
                        <p className="text-gray-600">
                            Implemented a seamless theme switching system for better user experience:
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <BsMoonFill className="w-5 h-5 text-[#0DB9B9]" />
                                Smooth theme transitions
                            </li>
                            <li className="flex items-center gap-2">
                                <BsSunFill className="w-5 h-5 text-[#0DB9B9]" />
                                System preference detection
                            </li>
                            <li className="flex items-center gap-2">
                                <BsPaletteFill className="w-5 h-5 text-[#0DB9B9]" />
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
                        <div className="inline-block border border-[#5465FF]/10 bg-[#5465FF]/20 text-[#5465FF] px-3 py-1 rounded-full text-sm font-medium">
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
                                <BiMouse className="w-5 h-5 text-[#5465FF]" />
                                Hover effects
                            </li>
                            <li className="flex items-center gap-2">
                                <MdOutlineAnimation className="w-5 h-5 text-[#5465FF]" />
                                Micro-interactions
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Workflow Optimization */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 space-y-4">
                        <div className="inline-block border border-[#0DB9B9]/20 bg-[#0DB9B9]/10 text-[#0DB9B9] px-3 py-1 rounded-full text-sm font-medium">
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
                                <HiOutlineClipboardList className="w-5 h-5 text-[#0DB9B9]" />
                                Intuitive navigation patterns
                            </li>
                            <li className="flex items-center gap-2">
                                <HiOutlineClipboardList className="w-5 h-5 text-[#0DB9B9]" />
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