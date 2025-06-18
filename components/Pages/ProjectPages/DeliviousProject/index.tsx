'use client';
import { Project } from '@/app/types/project';
import ImageContainer from '@/components/ImageContainer';
import { useEffect, useRef, useState } from 'react';
import DeliviousBranding from './DeliviousBranding';
import DeliviousDev from './DeliviousDev';
import DeliviousUXUI from './DeliviousUXUI';
import Title from '@/components/Font/Title';

interface DeliviousProjectProps {
    project: Project;
}

interface ContentItem {
    title: string;
    description: string;
    technologies: string[];
}

interface CategoryContent {
    name: string;
    content: ContentItem[];
}

export default function DeliviousProject({ project }: DeliviousProjectProps) {
    const [activeCategory, setActiveCategory] = useState<number>(0);
    // const contentRefs = useRef<HTMLDivElement[]>([]);
    const categoryRefs = useRef<(HTMLElement | null)[]>([]);
    console.log("activeCategory", activeCategory);

    const categories: CategoryContent[] = [
        {
            name: 'Branding',
            content: [{
                title: 'Brand Identity',
                description: project.description,
                technologies: ['Logo Design', 'Color System', 'Typography']
            }]
        },
        {
            name: 'UX/UI',
            content: [{
                title: 'User Experience',
                description: project.description,
                technologies: ['Wireframes', 'Prototypes', 'User Flow']
            }]
        },
        {
            name: 'Development',
            content: [{
                title: 'Web Development',
                description: project.description,
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

    // const setContentRef = (el: HTMLElement | null, categoryIndex: number, contentIndex: number) => {
    //     if (el && contentRefs.current) {
    //         const index = categoryIndex * categories[0].content.length + contentIndex;
    //         contentRefs.current[index] = el as HTMLDivElement;
    //     }
    // };

    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            <div>
                <div className='relative -mt-16 mb-12 pt-16 md:pt-12 lg:pt-0 bg-[#EEF0F1]'>
                    {/* <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${project.image})` }}
                        role="img"
                        aria-label={`${project.title} hero image`}
                    /> */}
                    <ImageContainer
                        image="/images/delivious/delivious-cover.svg"
                        alt="Delivious cover"
                        className="absolute bottom-0 left-0 w-full h-auto"
                    />
                </div>

                <div className='container mx-auto px-6 lg:px-4 flex flex-col gap-4 md:gap-16 lg:gap-24'>
                    {/* Introduction Section */}
                    <div className='py-24'>
                        {/* Project Title & Description */}
                        <div className="mb-20">
                            <Title variant="h1" className="!text-5xl md:!text-6xl lg:!text-7xl font-medium leading-tight font-[Courgette]">
                                Deliv<span className="text-[#4963AE]">ious</span>
                            </Title>
                            <h2 className="text-3xl text-stone-800 pt-6 mb-12 font-medium">
                                Ordering & Dining with seamless delivery robot service
                            </h2>
                            <div className="max-w-4xl space-y-4">
                                <p className="text-stone-500">
                                    A robot-assisted dining service that enables customers to order food and track deliveries to their table. The system serves both customers placing orders and staff managing robot deliveries.
                                </p>
                                <p className="text-stone-500">
                                    As UX/UI Designer and UI Developer, I created an intuitive interface for the kiosk and app service. My work included visual design, user flows, design system development, and branding to ensure a seamless dining experience.
                                </p>
                            </div>
                        </div>

                        {/* Project Details Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                    <div className='pb-24'>
                        <div className="mb-2">
                            <h2 className="text-base font-medium text-[#4963AE]">Approach & Goal</h2>
                        </div>

                        <div className="space-y-1">
                            <div className="flex items-start gap-2">
                                <span className="text-[#4963AE] font-semibold text-sm bg-[#DAE0F2] rounded-full px-2 py-0.5 mt-0.5">Who</span>
                                <Title variant='h4' className="font-medium text-stone-800">
                                    Diners seeking convenience and restaurants wanting efficiency
                                </Title>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="text-[#4963AE] font-semibold text-sm bg-[#DAE0F2] rounded-full px-2 py-0.5 mt-0.5">How</span>
                           <Title variant='h4' className="font-medium text-stone-800">
                                    Through an app and kiosk with robot delivery
                                </Title>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="text-[#4963AE] font-semibold text-sm bg-[#DAE0F2] rounded-full px-2 py-0.5 mt-0.5">What</span>
                           <Title variant='h4' className="font-medium text-stone-800">
                                    A smoother, tech-driven dining experience.
                                </Title>
                            </div>

                            {/* <p className="text-stone-500 text-base text-gray-300 pt-6">
                                These features would be essential:
                            </p> */}
                        </div>

                        {/* Key Features Section */}
                        <div className="mt-12">
                            <h3 className="text-base font-semibold text-stone-400 mb-2">KEY FEATURES</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {/* Feature 1 */}
                                <div className="p-6 lg:p-8 rounded-lg border border-stone-200 bg-white">
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
                                <div className="p-6 lg:p-8 rounded-lg border border-stone-200 bg-white">
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
                                <div className="p-6 lg:p-8 rounded-lg border border-stone-200 bg-white">
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
                                                ? 'text-[#2563EB] font-medium bg-[#DAE0F2] rounded-full'
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
                                    ref={(el) => { categoryRefs.current[categoryIndex] = el }}
                                    className="min-h-screen mb-20"
                                    id={`category-${categoryIndex}`}
                                >
                                    {category.content.map((item /*,contentIndex*/) => (
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
                <div className='relative mb-12 h-[600px] bg-[#4963AE]'>
                    <ImageContainer
                        image="/images/delivious/delivious-mockup-nine-pages.svg"
                        alt="Delivious mockup showing nine different pages"
                        className="absolute inset-0 w-full h-full object-cover"
                        innerClassName="w-full !h-full"
                    />
                </div>

            </div>
        </div>
    );
} 