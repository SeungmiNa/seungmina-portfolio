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
            <div className='relative -mt-16 mb-16 pt-16 md:pt-12 lg:pt-0 bg-[#EEF0F1] h-[700px] lg:h-[800px] overflow-hidden'>
                <ImageContainer
                    image="/images/clean71/clean71-brochure-mockup1-1.png"
                    alt="Delivious cover"
                    className="absolute bottom-0 left-0 w-full h-full object-cover object-center"
                />
            </div>

            <div className="container mx-auto flex flex-col">
                <div className="w-full mx-auto px-6 lg:px-8 py-20 lg:py-24">
                    <h2 className="text-3xl lg:text-4xl text-stone-800 mb-16 font-medium max-w-4xl">
                        Leveraging your calling into organizational intentions
                    </h2>
                    <div className="space-y-6 text-stone-500 mb-24 max-w-4xl">
                        <p>
                            Design the intention and the brand for a fictitious non-profit organization that engages in the filed of water
                        </p>
                        <p>
                            Entrepreneurship and branding purpose, identity, web appearance& artifact
                        </p>

                        <div className="mt-16 space-y-8">
                            <div>
                                <h3 className="text-xl text-stone-800 mb-3">Clean71 - The Earth's Water Heritage</h3>
                                <p className="text-stone-500">
                                    The name "Clean71" derives from the fact that 71% of Earth's surface is covered by water.
                                    Our mission focuses on a critical question: How can Clean71 foster personal connections
                                    with the ocean to create stewardship for all life?
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl text-stone-800 mb-3">The Challenge</h3>
                                <p className="text-stone-500">
                                    Cruise ships, often described as floating cities, pose a significant environmental threat.
                                    Unlike land-based cities, they operate with minimal pollution control laws, resulting in
                                    pollution levels that exceed those of regular cities. This contamination manifests visibly
                                    as a gray haze over our oceans.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl text-stone-800 mb-3">Our Purpose</h3>
                                <p className="text-stone-500">
                                    Clean71's branding and campaign aims to:
                                </p>
                                <ul className="list-disc ml-6 mt-2 text-stone-500 space-y-2">
                                    <li>Advocate for boycotting the cruise ship industry</li>
                                    <li>Raise awareness about maritime pollution</li>
                                    <li>Foster collaboration to promote more responsible ocean stewardship</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 bg-gray-50 p-8 lg:p-12 rounded-2xl">
                        <div>
                            <h3 className="text-[#0A9494] font-semibold mb-6 text-lg">My Role</h3>
                            <ul className="text-gray-600 space-y-3">
                                <li>Lead Designer for Pages 1, 3, and 8</li>
                                <li>Logo Design</li>
                                <li>Branding Color System</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#0A9494] font-semibold mb-6 text-lg">Responsibility</h3>
                            <ul className="text-gray-600 space-y-3">
                                <li>Blooklet Cover and End Page</li>
                                <li>Logo Design</li>
                                <li>Branding Color</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#0A9494] font-semibold mb-6 text-lg">Skills</h3>
                            <ul className="text-gray-600 space-y-3">
                                <li>Adobe Illustrator</li>
                                <li>Adobe InDesign</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#0A9494] font-semibold mb-6 text-lg">Timeline</h3>
                            <p className="text-gray-600">Nov.2022</p>
                            <p className="text-gray-600">San Jose State University</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-20 lg:py-28 mt-12">
                <div className="container mx-auto px-6 lg:px-8">
                    <h2 className="text-2xl lg:text-3xl text-stone-800 mb-12 font-medium">Mockup Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
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

            <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-28">
                <div className="flex items-center gap-6 mb-12">
                    <h2 className="text-2xl lg:text-3xl text-stone-800 font-medium">Booklet Design</h2>
                </div>

                <div className="mb-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
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

                <div className="space-y-12">
                    {bookletPages.map((page) => (
                        <PageSpread key={page.id} {...page} />
                    ))}
                </div>
            </div>

            <div className="h-24 lg:h-32"></div>
        </>
    );
}

export default InizioProject;