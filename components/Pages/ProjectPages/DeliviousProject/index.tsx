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
    const contentRefs = useRef<HTMLDivElement[]>([]);
    const categoryRefs = useRef<(HTMLElement | null)[]>([]);
    console.log("activeCategory", activeCategory);

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
                return <DeliviousUXUI project={project} />;
            case 'Web Development':
                return <DeliviousDev />;
            default:
                return <div>{item.title}</div>;
        }
    };

    const scrollToCategory = (index: number) => {
        const targetRef = categoryRefs.current[index];
        if (targetRef) {
            const offset = 100;
            const elementPosition = targetRef.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveCategory(index);
        }
    };

    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = categoryRefs.current.findIndex(ref => ref === entry.target);
                    if (index !== -1) {
                        setActiveCategory(index);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        categoryRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const setContentRef = (el: HTMLElement | null, categoryIndex: number, contentIndex: number) => {
        if (el && contentRefs.current) {
            const index = categoryIndex * categories[0].content.length + contentIndex;
            contentRefs.current[index] = el as HTMLDivElement;
        }
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
                            <h1 className="text-[100px] leading-tight font-[Courgette]">
                                Deliv<span className="text-[#4963AE]">ious</span>
                            </h1>
                            <h2 className="text-3xl text-stone-800 mb-12 font-medium">
                                Ordering & Dining with seamless delivery robot service
                            </h2>
                            <div className="max-w-4xl space-y-4">
                                <p className="text-stone-500">
                                    It is a service for ordering and delivering an order using the Robot to dine at a table. User can order and check the order history. Admin user can deliver the food using the Robot.
                                </p>
                                {/* <p className="text-stone-500">
                                    It is a service for ordering and delivering an order using the Robot to dine at a table. User can order and check the order history. Admin user can deliver the food using the Robot.
                                </p> */}
                                <p className="text-stone-500">
                                    As a UX/UI Designer and UI Developer on the project, I designed and implemented an intuitive interface for a seamless dining experience, enabling customers to order and track their meals directly from their tables through an innovative kiosk and app service. My responsibilities spanned across visual design, making user flows, defining design system, and branding, ensuring a user-friendly experience from screen to table.
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
                                    <p>React</p>
                                    <p>TypeScript</p>
                                    <p>Tailwind</p>
                                    <p>Adobe Illustrator</p>
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
                            <h2 className="text-base font-medium text-[#4963AE]">Approach & Goal</h2>
                        </div>

                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-3xl font-semibold text-stone-800">
                                    Diners seeking convenience and restaurants wanting efficiency
                                </h3>
                                <span className="text-[#4963AE] font-semibold text-sm">Who</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <h3 className="text-3xl font-semibold text-stone-800">
                                    Through an app and kiosk with robot delivery
                                </h3>
                                <span className="text-[#4963AE] font-semibold text-sm">How</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <h3 className="text-3xl font-semibold text-stone-800">
                                    A smoother, tech-driven dining experience.
                                </h3>
                                <span className="text-[#4963AE] font-semibold text-sm">What</span>
                            </div>

                            {/* <p className="text-stone-500 text-base text-gray-300 pt-6">
                                These features would be essential:
                            </p> */}
                        </div>

                        {/* Key Features Section */}
                        <div className="mt-20">
                            <h3 className="text-base font-semibold text-stone-400 mb-2">KEY FEATURES</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {/* Feature 1 */}
                                <div className="p-8 rounded-lg border border-stone-200 bg-white">
                                    <div className="text-blue-400 mb-6 flex items-center gap-2 text-sm">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                            <rect width="24" height="24" fill="currentColor" fillOpacity="0.2" rx="4" />
                                        </svg>
                                        Feature 1
                                    </div>
                                    <h4 className="text-xl font-medium text-stone-800 mb-4">
                                        Menu browsing and ordering via app and kiosk:
                                    </h4>
                                    <p className="text-stone-500">
                                        Offering a simple and user-friendly UI/UX.
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="p-8 rounded-lg border border-stone-200 bg-white">
                                <div className="text-blue-400 mb-6 flex items-center gap-2 text-sm">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                            <rect width="24" height="24" fill="currentColor" fillOpacity="0.2" rx="4" />
                                        </svg>
                                        Feature 2
                                    </div>
                                    <h4 className="text-xl font-medium text-stone-800 mb-4">
                                        Real-time order status tracking
                                    </h4>
                                    <p className="text-stone-500">
                                        Allowing customers to monitor their order progress.
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="p-8 rounded-lg border border-stone-200 bg-white">
                                <div className="text-blue-400 mb-6 flex items-center gap-2 text-sm">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                            <rect width="24" height="24" fill="currentColor" fillOpacity="0.2" rx="4" />
                                        </svg>
                                        Feature 3
                                    </div>
                                    <h4 className="text-xl font-medium text-stone-800 mb-4">
                                        Kitchen integration system
                                    </h4>
                                    <p className="text-stone-500">
                                        Delivering orders from the kiosk and app directly to the kitchen in real-time.
                                    </p>
                                </div>

                                <div className="p-8 rounded-lg border border-stone-200 bg-white">
                                <div className="text-blue-400 mb-6 flex items-center gap-2 text-sm">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                            <rect width="24" height="24" fill="currentColor" fillOpacity="0.2" rx="4" />
                                        </svg>
                                        Feature 4
                                    </div>
                                    <h4 className="text-xl font-medium text-stone-800 mb-4">
                                        Delevery Robot management
                                    </h4>
                                    <p className="text-stone-500">
                                        Monitoring robot paths, and order delivery status.
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
                                                ? 'text-blue-600 font-medium bg-[#DAE0F2] rounded-full'
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
                                    ref={(el) => categoryRefs.current[categoryIndex] = el}
                                    className="min-h-screen mb-20"
                                    id={`category-${categoryIndex}`}
                                >
                                    {category.content.map((item, contentIndex) => (
                                        <div
                                            key={item.title}
                                            className="grid grid-cols-12 gap-6"
                                        >
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