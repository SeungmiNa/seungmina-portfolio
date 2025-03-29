import ImageContainer from '@/components/ImageContainer';
import InizioBranding from "./InizioBranding";
import InizioDev from "./InizioDev";
import InizioUXUI from "./InizioUXUI";
import InizioCaseStudy from './InizioCaseStudy';

const InizioProject = () => {
    return (
        <>
            <div className="bg-[#141414]">
                <div className="relative -mt-16 mb-12 h-[460px]">
                    <div className="max-w-4xl absolute right-0 w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent z-10" />
                        <ImageContainer
                            image="/images/inizio/inizio-bg.png"
                            alt="Inizio background"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    <div className="max-w-7xl mx-auto relative h-full z-20 px-4">
                        <div className="h-full flex flex-col justify-center max-w-2xl">
                            <div className="space-y-6 mt-12 ">
                                <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white">
                                    Concept<span className="bg-gradient-to-r from-[#0DB9B9] to-[#5465FF] text-transparent bg-clip-text">Craft</span>
                                    <span className="text-[#A3B3B3] text-base ml-4 font-medium">| at Inizio</span>
                                </h1>

                                <p className="text-[#A3B3B3] text-base max-w-3xl">
                                    Led the design and development of the AI platform, that guides users from initial idea to project realization, enhancing the product development journey.
                                </p>
                                <p className='text-sm text-[#A3B3B3]'>Below is the link to the ConceptCraft landing page, which I led the design for and implemented.</p>

                                <div className="flex flex-wrap items-center gap-6">
                                    <a
                                        href="https://conceptcraft.ai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group bg-[#2A3333] hover:bg-[#353d3d] transition-all 
                                                 py-2.5 px-6 rounded-full text-sm inline-flex items-center
                                                 hover:shadow-lg border border-[#3A4444]"
                                    >
                                        <span className="text-[#A3B3B3] group-hover:text-white transition-colors">Visit Website</span>
                                        <svg
                                            className="w-3.5 h-3.5 ml-2 text-[#A3B3B3] group-hover:text-white transition-colors"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7 17L17 7M17 7H8M17 7V16"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </a>
                                    <div className="flex items-center space-x-4 text-[#8C9696]">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" />
                                            </svg>
                                            <span>2023 - Present</span>
                                        </div>
                                        <div className="h-4 w-[1px] bg-[#8C9696]/30" />
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                            </svg>
                                            <span>Fremont, CA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="max-w-7xl mx-auto px-4 py-16">
                    {/* <h1 className="text-4xl font-bold mb-4">Inizio</h1> */}
                    <h2 className="text-3xl text-stone-800 mb-12 font-medium">AI-Powered Idea-to-Project Platform</h2>
                    <div className="space-y-4 text-stone-500 mb-20 max-w-4xl">
                        <p>
                            ConceptCraft is a flagship product that empowers users to transform their ideas into real projects
                            through AI-powered idea generation, market analysis, and additional capabilities. The platform
                            streamlines the journey from concept to implementation with intelligent features and intuitive design.
                        </p>
                        <p>
                            As the UI/UX Designer, I led the product&apos;s design process, transforming complex technical requirements
                            into elegant, user-friendly digital solutions. I collaborated closely with cross-functional teams to
                            deliver intuitive and accessible user interfaces while maintaining meticulous attention to detail and
                            creating intuitive interactions.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-[#0A9494] font-semibold mb-4">My Role</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>UI/UX Designer</li>
                                <li>UI Developer</li>
                                <li>Brand Designer</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#0A9494] font-semibold mb-4">Responsibility</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>UX Design Process</li>
                                <li>Design System</li>
                                <li>Responsive Design</li>
                                <li>Brand Identity</li>
                                <li>Component Development</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#0A9494] font-semibold mb-4">Skills</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>Figma</li>
                                <li>React + TypeScript</li>
                                <li>Tailwind CSS</li>
                                <li>shadcn/ui</li>
                                <li>Headless UI</li>
                                <li>Adobe Illustrator</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[#0A9494] font-semibold mb-4">Timeline</h3>
                            <p className="text-gray-600">Feb.2023 - Present</p>
                            <p className="text-gray-600">Fremont, CA</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-0 flex flex-col gap-24">
                <InizioBranding />
                <InizioUXUI />
                <InizioCaseStudy />
                <InizioDev />
            </div>
        </>
    );
}

export default InizioProject;