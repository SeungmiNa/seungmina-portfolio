"use client";
import React, { useState } from "react";
import Title from "../../../../Font/Title";

interface InizioDevProps {}

interface TechStackItem {
    name: string;
    logo: string;
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
            name: "React",
            logo: "/images/tech/react.svg"  // 실제 로고 경로로 수정 필요
        },
        {
            name: "TypeScript",
            logo: "/images/tech/typescript.svg"
        },
        {
            name: "Tailwind CSS",
            logo: "/images/tech/tailwind.svg"
        },
        {
            name: "Next.js",
            logo: "/images/tech/nextjs.svg"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* 개선된 개발 통계 섹션 */}
            <section className="mb-16">
                <Title className="mb-12">Development Statistics</Title>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
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
                                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                                    GitHub
                                </span>
                            </div>
                            <h3 className="text-4xl font-bold mb-2">50+</h3>
                            <p className="text-xl font-semibold mb-1">Pull Requests</p>
                            <p className="text-gray-600 dark:text-gray-400">Successfully merged PRs with code reviews</p>
                            <div className="mt-6 flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[...Array(3)].map((_, i) => (
                                        <div 
                                            key={i}
                                            className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white dark:border-gray-900"
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-600 dark:text-gray-400">Team Collaboration</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 p-1">
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
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
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                                    Contributions
                                </span>
                            </div>
                            <h3 className="text-4xl font-bold mb-2">200+</h3>
                            <p className="text-xl font-semibold mb-1">Commits</p>
                            <p className="text-gray-600 dark:text-gray-400">Total code contributions to the project</p>
                            <div className="mt-6">
                                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-gradient-to-r from-green-500 to-teal-500"
                                        style={{ width: '85%' }}
                                    />
                                </div>
                                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    85% of team contributions
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 수정된 기술 스택 섹션 */}
            <section className="mb-16">
                <Title className="mb-8">Tech Stack</Title>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {techStack.map((tech) => (
                        <TechBadge 
                            key={tech.name}
                            name={tech.name}
                            logo={tech.logo}
                        />
                    ))}
                </div>
            </section>

            {/* 테마 컬러 섹션 */}
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
            </section>

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