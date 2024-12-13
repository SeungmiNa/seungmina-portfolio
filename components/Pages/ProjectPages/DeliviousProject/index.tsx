'use client';
import { Project } from '@/app/types/project';
import React, { useEffect, useRef, useState } from 'react';
import DeliviousBranding from './DeliviousBranding';
import DeliviousDev from './DeliviousDev';
import DeliviousUXUI from './DeliviousUXUI';

interface DeliviousProjectProps {
    project: Project;
}

interface ContentItem {
    title: string;
    description: string;
    image: string;
    technologies: string[];
}

interface CategoryContent {
    name: string;
    content: ContentItem[];
}

export default function DeliviousProject({ project }: DeliviousProjectProps) {
    const [activeCategory, setActiveCategory] = useState<number>(0);
    const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

    const categories: CategoryContent[] = [
        {
            name: 'Branding',
            content: [{
                title: 'Brand Identity',
                description: project.description,
                image: project.image,
                technologies: ['Logo Design', 'Color System', 'Typography']
            }]
        },
        {
            name: 'UX/UI',
            content: [{
                title: 'User Experience',
                description: project.description,
                image: project.image,
                technologies: ['Wireframes', 'Prototypes', 'User Flow']
            }]
        },
        {
            name: 'Development',
            content: [{
                title: 'Web Development',
                description: project.description,
                image: project.image,
                technologies: ['React', 'TypeScript', 'Tailwind']
            }]
        }
    ];

    const renderContent = (item: ContentItem) => {
        switch (item.title) {
            case 'Brand Identity':
                return <DeliviousBranding />;
            case 'User Experience':
                return <DeliviousUXUI />;
            case 'Web Development':
                return <DeliviousDev />;
            default:
                return <div>{item.title}</div>;
        }
    };

    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: '-20% 0px',
            threshold: [0, 0.5, 1]
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach(entry => {
                const index = categoryRefs.current.findIndex(ref => ref === entry.target);

                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    setActiveCategory(index);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        categoryRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToCategory = (index: number) => {
        categoryRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div className="min-h-screen">
            <div>
                <div className='relative -mt-16 mb-12 h-[600px]'>
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${project.image})` }}
                        role="img"
                        aria-label={`${project.title} hero image`}
                    />
                </div>

                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-56'>
                    {/* Introduction Section */}
                    <div>
                        {/* Project Title & Description */}
                        <div className="mb-20">
                            <h1 className="text-[80px] font-bold text-[#4963AE] leading-tight">
                                Delivious
                            </h1>
                            <h2 className="text-3xl text-stone-800 mb-12 font-medium">
                                Ordering & Dining with seamless delivery robot service
                            </h2>
                            <div className="max-w-3xl space-y-4">
                                <p className="text-stone-500">
                                    Dining experience by integrating innovative kiosk and app services, enabling customers to effortlessly order and enjoy their favorite meals at their table.
                                </p>
                                <p className="text-gray-300">
                                    나는 이 프로젝트에 이런 역할을 해서 어떤 디자인을 했다 | 디자인할때 어디에 중점을 두고 어떤플로우를 만들었는지.
                                </p>
                            </div>
                        </div>

                        {/* Project Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-8">
                            {/* My Role */}
                            <div>
                                <h3 className="text-[#4963AE] text-base mb-4 font-semibold">My Role</h3>
                                <div className="ml-0.5 space-y-1 text-stone-600">
                                    <p>UX / UI Designer</p>
                                    <p>UI Developer</p>
                                    <p>Visual Designer</p>
                                </div>
                            </div>

                            {/* Responsibility */}
                            <div>
                                <h3 className="text-[#4963AE] text-base mb-4 font-semibold">Responsibility</h3>
                                <div className="ml-0.5 space-y-1 text-stone-600">
                                    <p>UX Flow</p>
                                    <p>Design System</p>
                                    <p>User interface</p>
                                    <p>Branding</p>
                                </div>
                            </div>

                            {/* Tools */}
                            <div>
                                <h3 className="text-[#4963AE] text-base mb-4 font-semibold">Skills</h3>
                                <div className="ml-0.5 space-y-1 text-stone-600">
                                    <p>Figma</p>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div>
                                <h3 className="text-[#4963AE] text-base mb-4 font-semibold">Timeline</h3>
                                <div className="ml-0.5 space-y-1 text-stone-600">
                                    <p>Apr.2022 - Jun.2022</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Approach & Goal Section */}
                    <div>
                        <div className="mb-2">
                            <h2 className="text-base font-medium text-stone-800">Approach & Goal</h2>
                        </div>

                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-3xl font-semibold text-stone-800">
                                    Struggling with multiple subscriptions and payments
                                </h3>
                                <span className="text-[#4963AE] font-semibold text-sm">Who</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <h3 className="text-3xl font-semibold text-stone-800">
                                    If there is app for easy tracking and notifications
                                </h3>
                                <span className="text-[#4963AE] font-semibold text-sm">How</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <h3 className="text-3xl font-semibold text-stone-800">
                                    Making timely payments and a more organized, convenient life.
                                </h3>
                                <span className="text-[#4963AE] font-semibold text-sm">What</span>
                            </div>

                            <p className="text-stone-500 text-base text-gray-300 pt-6">
                                어떤 리서치를 진행했고 어떤 기능 들이있으면 좋겠다고 생각했는지
                            </p>
                        </div>

                        {/* Key Features Section */}
                        <div className="mt-20">
                            <h3 className="text-base font-semibold text-stone-400 mb-2">KEY FEATURES</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Feature 1 */}
                                <div className="p-8 rounded-lg border border-stone-200 bg-white">
                                    <div className="text-rose-500 mb-6">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                            <rect width="24" height="24" fill="currentColor" fillOpacity="0.2" rx="4" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-medium text-stone-800 mb-4">
                                        Feature 1
                                    </h4>
                                    <p className="text-stone-500">
                                        Feature 1 description
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="p-8 rounded-lg border border-stone-200 bg-white">
                                    <div className="text-purple-500 mb-6">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                            <rect width="24" height="24" fill="currentColor" fillOpacity="0.2" rx="4" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-medium text-stone-800 mb-4">
                                        Feature 2
                                    </h4>
                                    <p className="text-stone-500">
                                        Feature 2 description
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="p-8 rounded-lg border border-stone-200 bg-white">
                                    <div className="text-blue-500 mb-6">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                            <rect width="24" height="24" fill="currentColor" fillOpacity="0.2" rx="4" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-medium text-stone-800 mb-4">
                                        Feature 3
                                    </h4>
                                    <p className="text-stone-500">
                                        Feature 3 description
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project feature SideBar Layout */}
                    <div className="grid grid-cols-12 gap-8">
                        {/* Left sidebar */}
                        <nav className="hidden md:block col-span-2 sticky top-28 h-fit">
                            <div className="flex flex-col gap-2">
                                {categories.map((category, index) => (
                                    <button
                                        key={category.name}
                                        onClick={() => scrollToCategory(index)}
                                        className={`
                                            text-left rounded-lg text-lg px-3 py-1
                                            transition-all duration-200 ease-in-out
                                            ${activeCategory === index
                                                ? 'text-blue-600 font-meidum bg-[#DAE0F2] rounded-full'
                                                : 'text-stone-500 hover:text-stone-900'
                                            }
                                        `}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </nav>

                        {/* Main content area */}
                        <main className="col-span-12 md:col-span-10">
                            {categories.map((category, categoryIndex) => (
                                <section
                                    key={category.name}
                                    ref={el => {
                                        if (el) categoryRefs.current[categoryIndex] = el;
                                    }}
                                    className="min-h-screen mb-20"
                                >
                                    {/* <header className="mb-8">
                                        <h2 className="text-2xl font-light mb-4">
                                            {category.name}
                                        </h2>
                                    </header> */}

                                    {category.content.map((item) => (
                                        <div key={item.title} className="grid grid-cols-12 gap-6">
                                            {renderContent(item)}
                                        </div>
                                    ))}
                                </section>
                            ))}
                        </main>
                    </div>
                </div>

                {/* Project Mockup */}
                <div className='relative mb-12 h-[600px]'>
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${project.image})` }}
                        role="img"
                        aria-label={`${project.title} hero image`}
                    />
                </div>

            </div>
        </div>
    );
} 