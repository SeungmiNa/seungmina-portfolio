"use client";
import React, { useState } from "react";
import { HiCode, HiTemplate } from "react-icons/hi";
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
    logo: string;
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
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col gap-6 mb-16">
                <div className="space-y-2">
                    <div>
                        <div className="inline-flex px-4 py-2 rounded-full bg-[#5465FF]/10 border border-[#5465FF]/30">
                            <span className="text-sm font-medium text-[#5465FF]">Development</span>
                        </div>
                    </div>
                    <Title variant="h1" className="text-4xl md:text-5xl font-bold text-gray-900">
                        Tech Stack
                    </Title>
                </div>
                <p className="text-gray-500 max-w-2xl text-lg w-full">
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
            <section className="mb-16">
                {/* <Title className="mb-8" variant="h2">Technology Stack</Title> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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

            {/* 테마 컬러 섹션
            <section className="mb-16">
                <div className="flex items-center justify-between mb-8">
                    <Title>Theme Colors</Title>
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700"
                    >
                        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
                    </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(themeColors[isDarkMode ? 'dark' : 'light']).map(([name, color]) => (
                        <ColorCard key={name} name={name} color={color} />
                    ))}
                </div>
            </section> */}

            {/* 재사용 가능한 컴포넌트 섹션 */}
            <section className="mb-16">
                <Title className="mb-8">Reusable Components</Title>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ComponentShowcase
                        title="Buttons"
                        description="Customizable button components with various styles and states"
                    />
                    <ComponentShowcase
                        title="Modals"
                        description="Responsive modal dialogs with customizable content"
                    />
                    <ComponentShowcase
                        title="Input Fields"
                        description="Form input components with validation and states"
                    />
                    {/* 다른 컴포넌트들도 추가 */}
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