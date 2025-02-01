"use client";
import React, { useState } from "react";
import { HiCode, HiTemplate, HiMoon, HiSun, HiPlus } from "react-icons/hi";
import {
    SiFigma,
    SiFramer,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";
import Title from "../../../../Font/Title";

interface InizioDevProps { }

interface TechStackItem {
    name: string;
    description: string;
    icon: React.ElementType;
    category: string;
}

const InizioDev: React.FC<InizioDevProps> = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const themeColors = {
        light: {
            primary: '#4F46E5',
            secondary: '#EC4899',
            background: '#FFFFFF',
            text: '#1F2937',
            // 실제 사용했던 다른 색상들도 추가
        },
        dark: {
            primary: '#818CF8',
            secondary: '#F472B6',
            background: '#111827',
            text: '#F9FAFB',
            // 실제 사용했던 다른 색상들도 추가
        }
    };

    const techStack: TechStackItem[] = [
        {
            name: "TypeScript",
            description: "Primary development language with type-safe implementation",
            icon: SiTypescript,
            category: "Core"
        },
        {
            name: "React.js",
            description: "Component-based architecture with hooks for state management",
            icon: SiReact,
            category: "Core"
        },
        {
            name: "Next.js",
            description: "Framework for server-side rendering and routing",
            icon: SiNextdotjs,
            category: "Core"
        },
        {
            name: "Tailwind CSS",
            description: "Utility-first CSS for responsive design",
            icon: SiTailwindcss,
            category: "Styling"
        },
        {
            name: "Headless UI",
            description: "Accessible UI components integration",
            icon: HiTemplate,
            category: "UI Components"
        },
        {
            name: "shadcn/ui",
            description: "Reusable component system",
            icon: HiCode,
            category: "UI Components"
        },
        {
            name: "Figma",
            description: "UI/UX design and prototyping",
            icon: SiFigma,
            category: "Design"
        },
        {
            name: "Framer Motion",
            description: "Animation library for interactive UI elements",
            icon: SiFramer,
            category: "Animation"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 mb-6">
            <div className="flex flex-col gap-6 mb-16">
                <div className="space-y-2">
                    <div>
                        <div className="inline-flex px-4 py-1 rounded-full bg-[#5465FF]/10 border border-[#5465FF]/30">
                            <span className="text-sm font-medium text-[#5465FF]">Development</span>
                        </div>
                    </div>
                    <Title variant="h1" className="text-4xl md:text-5xl font-bold text-gray-900">
                        Development
                    </Title>
                </div>
                <p className="text-gray-500 max-w-3xl text-lg w-full">
                    A comprehensive tech stack for building a modern and efficient web application.
                </p>
            </div>
            {/* <section className="mb-16">
                <Title className="mb-12">Development Impact</Title>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                    <svg 
                                        className="w-8 h-8 text-blue-600 dark:text-blue-400" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                                    Core Features
                                </span>
                            </div>
                            <h3 className="text-4xl font-bold mb-2">15+</h3>
                            <p className="text-xl font-semibold mb-1">Major Features</p>
                            <p className="text-gray-600 dark:text-gray-400">Implemented key functionalities including authentication, real-time updates, and responsive design</p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 p-1">
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                    <svg 
                                        className="w-8 h-8 text-green-600 dark:text-green-400" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                                    Code Quality
                                </span>
                            </div>
                            <h3 className="text-4xl font-bold mb-2">90%</h3>
                            <p className="text-xl font-semibold mb-1">Test Coverage</p>
                            <p className="text-gray-600 dark:text-gray-400">Maintained high code quality with comprehensive testing and documentation</p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-1">
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                                    <svg 
                                        className="w-8 h-8 text-purple-600 dark:text-purple-400" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                                    Team Impact
                                </span>
                            </div>
                            <h3 className="text-4xl font-bold mb-2">40+</h3>
                            <p className="text-xl font-semibold mb-1">Code Reviews</p>
                            <p className="text-gray-600 dark:text-gray-400">Led technical discussions and mentored team members</p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* 수정된 기술 스택 섹션 */}
            <section className="mb-16 space-y-4">
                <p className="text-gray-500 text-xl font-semibold">Skills Used:</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {techStack.map((tech) => (
                        <div
                            key={tech.name}
                            className="p-6 rounded-xl bg-white/40 backdrop-blur-sm
                                      border border-white"
                        >
                            <div className="flex flex-col items-start gap-4">
                                <div className="p-2 bg-white/80 rounded-lg shadow-sm">
                                    <tech.icon className="w-8 h-8 text-[#0DB9B9]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{tech.name}</h3>
                                    <p className="text-sm text-gray-600">{tech.description}</p>
                                </div>
                                <span className="inline-flex px-3 py-1 text-xs font-medium text-[#0DB9B9] bg-[#0DB9B9]/10 rounded-full">
                                    {tech.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 재사용 가능한 컴포넌트 섹션 */}
            <section className="py-16">
                <div className="space-y-4 mb-12">
                    <Title variant="h3">UI Component System</Title>
                    <div className="max-w-4xl">
                        <p className="text-base text-gray-500 mb-4">
                            I designed and implemented a modular UI component system focusing on consistency 
                            and reusability. Each component was built with Tailwind CSS and React, featuring 
                            seamless dark/light mode transitions and responsive designs. The system includes 
                            customizable buttons, modals, badges, and theme controls that maintain visual 
                            coherence across the application.
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0DB9B9]/10 text-[#0A9494]">
                                <HiTemplate className="w-4 h-4" />
                                Modular Components
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5465FF]/10 text-[#5465FF]">
                                <HiCode className="w-4 h-4" />
                                Type-Safe Implementation
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[#2C5530] bg-[#B6DBB5]/30">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                                Responsive Design
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Buttons Showcase */}
                    <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Buttons</h3>
                        <p className="text-sm text-gray-600 mb-6">Customizable button components with various styles, sizes, and states</p>
                        
                        {/* Button Groups */}
                        <div className="space-y-4">
                            {/* Primary Buttons */}
                            <div className="space-y-1">
                                <h4 className="text-sm font-medium text-gray-500">Primary Variants</h4>
                                <div className="flex flex-wrap gap-4">
                                    <button className="px-4 py-2.5 bg-gradient-to-r from-[#0DB9B9] to-[#5465FF] text-white font-medium 
                                                     text-sm rounded-md hover:from-[#0DA9A9]/90 hover:to-[#5465FF]/90 
                                                     transition-all duration-300 shadow-md hover:shadow-lg 
                                                     transform hover:-translate-y-0.5">
                                        Primary Button
                                    </button>
                                    <button className="px-4 py-2.5 bg-gradient-to-r from-[#0DB9B9] to-[#5465FF] text-white font-medium 
                                                     text-sm rounded-md opacity-70 cursor-not-allowed">
                                        Disabled
                                    </button>
                                    <button className="px-4 py-2.5 bg-gradient-to-r from-[#0DB9B9] to-[#5465FF] text-white font-medium 
                                                     text-sm rounded-md flex items-center gap-2 hover:from-[#0DA9A9]/90 hover:to-[#5465FF]/90 
                                                     transition-all duration-300 shadow-md hover:shadow-lg">
                                        <HiPlus className="w-4 h-4" />
                                        <span>With Icon</span>
                                    </button>
                                </div>
                            </div>

                            {/* Secondary Buttons */}
                            <div className="space-y-1">
                                <h4 className="text-sm font-medium text-gray-500">Secondary Variants</h4>
                                <div className="flex flex-wrap gap-4">
                                    <button className="px-4 py-2.5 bg-[#0DB9B9] text-white font-medium text-sm rounded-md 
                                                     hover:bg-[#0DA9A9] transition-all duration-300 shadow-md hover:shadow-lg 
                                                     transform hover:-translate-y-0.5">
                                        Solid Button
                                    </button>
                                    <button className="px-4 py-2.5 bg-[#0DB9B9] text-white font-medium text-sm rounded-md 
                                                     opacity-70 cursor-not-allowed">
                                        Disabled
                                    </button>
                                    <button className="px-4 py-2.5 bg-[#0DB9B9] text-white font-medium text-sm rounded-md 
                                                     flex items-center gap-2 hover:bg-[#0DA9A9] transition-all duration-300 
                                                     shadow-md hover:shadow-lg">
                                        <HiPlus className="w-4 h-4" />
                                        <span>With Icon</span>
                                    </button>
                                </div>
                            </div>

                            {/* Ghost Buttons */}
                            <div className="space-y-1">
                                <h4 className="text-sm font-medium text-gray-500">Ghost Variants</h4>
                                <div className="flex flex-wrap gap-4">
                                    <button className="px-4 py-2 text-[#0DB9B9] font-medium text-sm rounded-md 
                                                     hover:bg-[#0DB9B9]/10 transition-all duration-300">
                                        Ghost Button
                                    </button>
                                    <button className="px-4 py-2 text-[#0DB9B9] font-medium text-sm rounded-md 
                                                     opacity-70 cursor-not-allowed">
                                        Disabled
                                    </button>
                                    <button className="px-4 py-2 text-[#0DB9B9] font-medium text-sm rounded-md 
                                                     flex items-center gap-2 hover:bg-[#0DB9B9]/10 transition-all duration-300">
                                        <HiPlus className="w-4 h-4" />
                                        <span>With Icon</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal Showcase */}
                    <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60">
                        <h3 className="text-xl font-semibold text-gray-800">Modal Dialog</h3>
                        <p className="text-sm text-gray-600 mb-6">Responsive modal dialogs with customizable content and animations</p>
                        <div className="relative h-56 bg-gray-100 rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                                <div className="bg-white rounded-lg p-4 w-3/4 shadow-lg">
                                    <h4 className="text-lg font-medium mb-2">Modal Title</h4>
                                    <p className="text-gray-600 text-sm mb-4">Modal content with customizable header, body, and footer</p>
                                    <div className="flex justify-end gap-2">
                                        <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">Cancel</button>
                                        <button className="px-4 py-2.5 bg-gradient-to-r from-[#0DB9B9] to-[#5465FF] text-white font-medium text-sm rounded-lg hover:from-[#0DA9A9]/80 hover:to-[#5465FF]/80  transition-colors">
                                            Primary Button
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Theme System */}
                    <div className="md:col-span-2 p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Theme System</h3>
                                <p className="text-sm text-gray-600 mt-1">Comprehensive theme system with dark/light mode support</p>
                            </div>
                            <div className="relative">
                                <span className="absolute inset-0.5 rounded-full bg-[#0DB9B9]/30 animate-ping"></span>
                                <button 
                                    onClick={() => setIsDarkMode(!isDarkMode)}
                                    className="relative p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 
                                               transition-all duration-300 shadow-lg hover:shadow-xl
                                               border border-gray-200 dark:border-gray-700"
                                    aria-label="Toggle theme"
                                >
                                    {isDarkMode ? (
                                        <HiSun className="w-6 h-6 text-yellow-500 transform rotate-0 transition-transform duration-500" />
                                    ) : (
                                        <HiMoon className="w-6 h-6 text-gray-700 transform transition-transform duration-500" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {/* Light Mode Preview */}
                            <div className={`relative overflow-hidden rounded-xl transition-all duration-300
                                            ${isDarkMode ? 'opacity-50' : 'opacity-100 ring-[3px] ring-[#0DB9B9]'}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100"></div>
                                <div className="relative p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-gray-900 font-medium">Light Mode</h4>
                                        <div className="w-8 h-8 rounded-full bg-white border border-gray-200 
                                                      shadow-inner flex items-center justify-center">
                                            <HiSun className="w-5 h-5 text-yellow-500" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-2.5 w-full bg-gray-200 rounded-full"></div>
                                        <div className="h-2.5 w-4/5 bg-gray-200 rounded-full"></div>
                                        <div className="h-2.5 w-2/3 bg-gray-200 rounded-full"></div>
                                    </div>
                                    <div className="mt-4 flex gap-2">
                                        <div className="h-8 w-8 rounded-lg bg-gray-200"></div>
                                        <div className="h-8 w-8 rounded-lg bg-gray-200"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Dark Mode Preview */}
                            <div className={`relative overflow-hidden rounded-xl transition-all duration-300
                                            ${!isDarkMode ? 'opacity-50' : 'opacity-100 ring-[3px] ring-[#0DB9B9]'}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
                                <div className="relative p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-gray-100 font-medium">Dark Mode</h4>
                                        <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 
                                                      shadow-inner flex items-center justify-center">
                                            <HiMoon className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-2.5 w-full bg-gray-700 rounded-full"></div>
                                        <div className="h-2.5 w-4/5 bg-gray-700 rounded-full"></div>
                                        <div className="h-2.5 w-2/3 bg-gray-700 rounded-full"></div>
                                    </div>
                                    <div className="mt-4 flex gap-2">
                                        <div className="h-8 w-8 rounded-lg bg-gray-700"></div>
                                        <div className="h-8 w-8 rounded-lg bg-gray-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                    {/* Badges & Tags */}
                    <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60">
                        <h3 className="text-xl font-semibold text-gray-800">Badges</h3>
                        <p className="text-sm text-gray-600 mb-6">Customizable badges and tags for various states and categories</p>
                        
                        {/* Subtle Badges */}
                        <div className="mb-6">
                            <h4 className="text-sm font-medium text-gray-700 mb-3">Subtle Variants</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 text-sm font-medium text-[#0DB9B9] bg-[#0DB9B9]/10 rounded-full">
                                    Primary
                                </span>
                                <span className="px-3 py-1 text-sm font-medium text-[#5465FF] bg-[#5465FF]/10 rounded-full">
                                    Secondary
                                </span>
                                <span className="px-3 py-1 text-sm font-medium text-[#2C5530] bg-[#B6DBB5]/30 rounded-full">
                                    Success
                                </span>
                                <span className="px-3 py-1 text-sm font-medium text-red-600 bg-red-100 rounded-full">
                                    Error
                                </span>
                                <span className="px-3 py-1 text-sm font-medium text-[#FC7A12] bg-[#FC7A12]/10 rounded-full">
                                    Warning
                                </span>
                            </div>
                        </div>

                        {/* Solid Badges */}
                        <div className="mb-6">
                            <h4 className="text-sm font-medium text-gray-700 mb-3">Solid Variants</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 text-sm font-medium text-white bg-[#0DB9B9] rounded-full shadow-sm">
                                Primary
                                </span>
                                <span className="px-3 py-1 text-sm font-medium text-white bg-[#5465FF] rounded-full shadow-sm">
                                Secondary
                                </span>
                                <span className="px-3 py-1 text-sm font-medium text-white bg-[#2C5530] rounded-full shadow-sm">
                                    Success
                                </span>
                                <span className="px-3 py-1 text-sm font-medium text-white bg-[#FF4030] rounded-full shadow-sm">
                                    Error
                                </span>
                                <span className="px-3 py-1 text-sm font-medium text-white bg-[#FC7A12] rounded-full shadow-sm">
                                    Warning
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60">
                        <h3 className="text-xl font-semibold text-gray-800">Cards</h3>
                        <p className="text-sm text-gray-600 mb-6">Flexible card components for various content types</p>
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                            <div className="w-full h-24 bg-gradient-to-r from-[#0DB9B9]/20 to-[#5465FF]/20 rounded-lg mb-3"></div>
                            <h4 className="font-medium mb-1">Card Title</h4>
                            <p className="text-sm text-gray-600">Card description with customizable content</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// 통계 카드 컴포넌트
const StatCard = ({ title, value, description }: { title: string, value: string, description: string }) => (
    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-3xl font-bold text-primary mb-2">{value}</p>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
);

// 수정된 기술 뱃지 컴포넌트
const TechBadge = ({ name, logo }: { name: string; logo: string }) => (
    <div className="flex flex-col items-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="w-16 h-16 mb-4 flex items-center justify-center">
            <img
                src={logo}
                alt={`${name} logo`}
                className="w-full h-full object-contain"
            />
        </div>
        <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
            {name}
        </span>
    </div>
);

// 컬러 카드 컴포넌트
const ColorCard = ({ name, color }: { name: string, color: string }) => (
    <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
        <div
            className="w-full h-24 rounded-md mb-2"
            style={{ backgroundColor: color }}
        />
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{color}</p>
    </div>
);

// 컴포넌트 쇼케이스 카드
const ComponentShowcase = ({ title, description }: { title: string, description: string }) => (
    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
);

export default InizioDev;   