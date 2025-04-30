import ImageContainer from '@/components/ImageContainer';

const PageNumber = ({ number, className = "" }: { number: number, className?: string }) => (
    <div className={`absolute bottom-6 ${className}`}>
        <div className={`bottom-6 left-6 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm`}>
            Page {number}
        </div>
    </div>
);

const PageDivider = () => (
    <div className="hidden md:flex flex-col items-center gap-4 mx-2">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
        <div className="w-4 h-4 rounded-full border-2 border-gray-200"></div>
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
    </div>
);

type PageSpreadProps = {
    id: string;
    leftPage: {
        number: number;
        image: string;
        isMyDesign?: boolean;
    };
    rightPage: {
        number: number;
        image: string;
        isMyDesign?: boolean;
    };
};

const PageSpread = ({ id, leftPage, rightPage }: PageSpreadProps) => (
    <div id={id} className="relative scroll-mt-32">
        <div className="flex flex-col md:flex-row items-stretch justify-center bg-white rounded-xl shadow-2xl overflow-hidden">
            <PageSide
                number={leftPage.number}
                image={leftPage.image}
                isMyDesign={leftPage.isMyDesign}
                position="left"
            />
            <PageDivider />
            <PageSide
                number={rightPage.number}
                image={rightPage.image}
                isMyDesign={rightPage.isMyDesign}
                position="right"
            />
        </div>
    </div>
);

type PageSideProps = {
    number: number;
    image: string;
    isMyDesign?: boolean;
    position: 'left' | 'right';
};

const PageSide = ({ number, image, isMyDesign, position }: PageSideProps) => (
    <div className="relative w-full md:w-1/2 p-8 bg-gradient-to-br from-white to-gray-50">
        {isMyDesign && (
            <div className="absolute top-6 right-6 z-10">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                    My Work
                </span>
            </div>
        )}
        <ImageContainer
            image={image}
            alt={`Clean71 page ${number}`}
            className="w-full h-auto rounded-lg shadow-md"
        />
        <PageNumber number={number} className={position === 'left' ? 'left-8' : 'right-8'} />
    </div>
);

const InizioProject = () => {
    const bookletPages: PageSpreadProps[] = [
        {
            id: "page1",
            leftPage: {
                number: 1,
                image: "/images/clean71/clean71-page1.png",
                isMyDesign: true
            },
            rightPage: {
                number: 2,
                image: "/images/clean71/clean71-page2.png"
            }
        },
        {
            id: "page3",
            leftPage: {
                number: 3,
                image: "/images/clean71/clean71-page3.png",
                isMyDesign: true
            },
            rightPage: {
                number: 4,
                image: "/images/clean71/clean71-page4.png",
                isMyDesign: true
            }
        },
        {
            id: "page5",
            leftPage: {
                number: 5,
                image: "/images/clean71/clean71-page5.png"
            },
            rightPage: {
                number: 6,
                image: "/images/clean71/clean71-page6.png"
            }
        },
        {
            id: "page8",
            leftPage: {
                number: 7,
                image: "/images/clean71/clean71-page7.png"
            },
            rightPage: {
                number: 8,
                image: "/images/clean71/clean71-page8.png",
                isMyDesign: true
            }
        }
    ];

    const navigationLinks = [
        { num: "1", title: "Cover Design", id: "page1" },
        { num: "3-4", title: "Logo and Color", id: "page3" },
        { num: "8", title: "Back Cover Design", id: "page8" }
    ];

    return (
        <>
            {/* Hero Section */}
            <div className='relative -mt-16 pt-20 md:pt-16 lg:pt-0 bg-[#EEF0F1] h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden'>
                <ImageContainer
                    image="/images/clean71/clean71-brochure-mockup1-1.png"
                    alt="Delivious cover"
                    className="absolute bottom-0 left-0 w-full h-full object-cover object-center"
                />
            </div>

            {/* Main Content */}
            <div className="container mx-auto flex flex-col">
                <div className="container mx-auto px-6 lg:px-4 flex flex-col gap-4 md:gap-16 lg:gap-24">
                    {/* Project Title Section */}
                    <div className='py-16  lg:py-24'>
                    <div className="mb-16 pt-8">
                        <h2 className="text-3xl text-stone-800 font-medium mb-4">
                            Clean71 – The Earth&apos;s Water Heritage
                        </h2>
                        <div className="inline-block py-2 bg-stone-100 rounded-full">
                            <span className="text-stone-600">Senior BA Design Class Group Project | San José State University</span>
                        </div>
                    </div>

                    {/* Project Overview */}
                    <div className="space-y-24">
                        <div>
                            <h3 className="text-sm uppercase tracking-wider text-[#357B87] font-medium mb-4">Project Overview</h3>
                            <p className="text-stone-500 mb-24 max-w-4xl leading-relaxed">
                                For this group project, we were tasked with designing the brand and organizational purpose for a fictional non-profit focused on water-related issues. Our goal was to translate a meaningful cause into a strong brand identity, including its mission, visual branding, web appearance, and promotional materials. Through this project, we combined entrepreneurship, storytelling, and design to create a compelling non-profit concept that encourages mindful engagement with water resources.
                            </p>
                        </div>
                    </div>

                    {/* Project Details Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
                        {[
                            {
                                title: "My Role",
                                items: ["Lead Designer for Pages 1, 3, and 8", "Logo Design", "Branding Color System"]
                            },
                            {
                                title: "Responsibility",
                                items: ["Booklet Cover and End Page", "Logo Design", "Branding Color"]
                            },
                            {
                                title: "Skills",
                                items: ["Adobe Illustrator", "Adobe InDesign"]
                            },
                            {
                                title: "Timeline",
                                items: ["Nov.2022", "San Jose State University"]
                            }
                        ].map((section, index) => (
                            <div key={index}>
                                <h3 className="text-sm uppercase tracking-wider text-[#357B87] font-bold mb-6">
                                    {section.title}
                                </h3>
                                <ul className="space-y-3">
                                    {section.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="text-stone-600">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>

            {/* Gray Background Section */}
            <div className="bg-gray-50 py-24 lg:py-32 mt-16">
                <div className="container mx-auto px-8 lg:px-12">
                    {/* Project Story Section */}
                    <div className="mb-32">
                        <div className="space-y-32">
                            {/* Question Section */}
                            <div className="space-y-4">
                                <h2 className="text-base uppercase font-medium text-[#357B87] mb-4">
                                    Our project started with a big question:
                                </h2>
                                <p className="text-3xl lg:text-5xl text-gray-900 font-bold leading-tight max-w-4xl">
                                    How can we inspire a deeper, more mindful connection with the ocean?
                                </p>
                            </div>

                            {/* Research Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                <div>
                                    <h3 className="text-base font-medium uppercase tracking-wider text-blue-600 mb-2 text-[#357B87]">Research</h3>
                                    <p className="pt-2 text-base text-stone-600 leading-relaxed mb-6">
                                        Through research, we learned that cruise ships are major polluters — often worse than cities —
                                        because ocean pollution regulations are weak. This helped us shape Clean71&#39;s purpose:
                                    </p>
                                    <ul className="space-y-2 pt-4">
                                        {[
                                            "Advocate for boycotting the cruise ship industry",
                                            "Raise public awareness about ocean pollution",
                                            "Encourage collaboration and ocean stewardship"
                                        ].map((point, index) => (
                                            <li key={index} className="flex text-base items-start gap-3">
                                                <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-[#357B87]" />
                                                <span className="text-stone-700">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="w-full h-[300px] overflow-hidden">
                                    <ImageContainer
                                        image="/images/clean71/clean71-cruise-ship.jpg"
                                        alt="Clean71 cruise ship"
                                        innerClassName="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>

                            {/* Design Approach Section */}
                            <div>
                                <h3 className="text-base font-medium uppercase tracking-wider text-blue-600 mb-4 text-[#357B87]">Approach</h3>
                                <div className='space-y-16'>
                                    {/* Brand Name */}
                                    <div>
                                        <div className='flex gap-2 mb-6 items-center justify-center'>
                                            <h4 className="text-lg font-medium whitespace-nowrap">Brand Name</h4>
                                            <div className='border-t border-gray-400 w-full' />
                                        </div>
                                        <div>
                                            <span className="text-6xl font-bold bg-gradient-to-r from-[#00758D] to-[#92B7BC]
                                                    bg-clip-text text-transparent">Clean71</span>
                                            <p className="text-stone-600 leading-relaxed flex-1 pt-4">
                                                The name Clean71 reflects the fact that 71% of the Earth&#39;s surface is covered by water.
                                                It&#39;s a reminder of the ocean&#39;s vast presence and the urgent need to protect it.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Color System */}
                                    <div>
                                        <div className='flex gap-2 mb-6 items-center justify-center'>
                                            <h4 className="text-lg font-medium whitespace-nowrap">Color System</h4>
                                            <div className='border-t border-gray-400 w-full' />
                                        </div>
                                        <div className="space-y-8">
                                            <div>
                                                <p className="text-stone-600 mb-4">
                                                    Our primary palette uses deep ocean blues to express depth, clarity, and seriousness.
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-stone-600 mb-4">
                                                    We paired this with light yellow and red accents to bring a sense of warmth,
                                                    hope, and positive energy—reinforcing our mission to inspire action and
                                                    collective stewardship.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Logo & Cover Design */}
                                    <div>
                                        <div className='flex gap-2 mb-6 items-center justify-center'>
                                            <h4 className="text-lg font-medium whitespace-nowrap">Design Logo & Cover Pages</h4>
                                            <div className='border-t border-gray-400 w-full' />
                                        </div>
                                            <p className="text-stone-600">
                                                The logo was inspired by the natural shape of a wave, with soft, flowing lines to convey movement and connection. For the cover page, we added a water droplet texture to emphasize the tactile presence of water and evoke an emotional connection.
                                                We also introduced a color shift from dull gray to vibrant red to symbolize the transformation from ocean pollution to positive change and impact.
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mockup Section */}
                    <h2 className="text-3xl text-stone-800 mb-16 font-medium">Mockup Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        <ImageContainer
                            image="/images/clean71/clean71-brochure-mockup2.png"
                            alt="Clean71 brochure mockup 2"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <ImageContainer
                            image="/images/clean71/clean71-brochure-mockup3.png"
                            alt="Clean71 brochure mockup 3"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <ImageContainer
                            image="/images/clean71/clean71-brochure-mockup4.png"
                            alt="Clean71 brochure mockup 4"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <ImageContainer
                            image="/images/clean71/clean71-brochure-mockup5.png"
                            alt="Clean71 brochure mockup 5"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Booklet Design Section */}
            <div className="container mx-auto px-8 lg:px-12 py-24 lg:py-32">
                <div className="flex items-center gap-8 mb-16">
                    <h2 className="text-3xl text-stone-800 font-medium">Booklet Design</h2>
                </div>

                <div className="mb-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
                    <div className="flex items-center gap-4">
                        <h3 className="text-xl lg:text-2xl font-medium">4 pages my contributed</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {navigationLinks.map((page) => (
                            <a
                                key={page.num}
                                href={`#${page.id}`}
                                className="relative group transform transition-transform duration-200 hover:scale-[1.02]"
                            >
                                <div className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 
                                    group-hover:opacity-100 group-hover:blur-[0.5px] transition-all duration-200" />
                                <div className="relative flex items-center gap-2.5 px-4 py-2 bg-white group-hover:bg-gray-50/95 
                                    rounded-[5px] transition-all duration-200"
                                >
                                    <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text 
                                        text-transparent whitespace-nowrap text-sm group-hover:opacity-90">
                                        Page {page.num}
                                    </span>
                                    <span className="text-gray-600 text-sm group-hover:text-gray-800">{page.title}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="space-y-16">
                    {bookletPages.map((page) => (
                        <PageSpread key={page.id} {...page} />
                    ))}
                </div>
            </div>

            <div className="h-32 lg:h-40"></div>
        </>
    );
}

export default InizioProject;