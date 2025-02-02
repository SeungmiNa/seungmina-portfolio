"use client";
import { BiMoon, BiMouse, BiPalette, BiSun } from 'react-icons/bi';
import { BsCheckLg } from 'react-icons/bs';
import Title from "../../../../Font/Title";
// import { HiOutlineClipboardList } from 'react-icons/hi';
import ImageContainer from '@/components/ImageContainer';
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
            <div className="space-y-16">
                {/* Navigation Feature */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 bg-gray-100 rounded-2xl overflow-hidden">
                        <div className="relative aspect-[4/3]">
                            <ImageContainer
                                image="/images/inizio/inizio-navigation.svg"
                                alt="Navigation demonstration"
                                className="object-cover w-full h-full absolute top-0 left-0"
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
                            Implemented a dynamic navigation system that expands and collapses smoothly on hover, enhancing user interaction across devices.
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start gap-2">
                                <BsCheckLg className="w-5 h-5 text-[#5465FF] shrink-0" />
                                Smooth hamburger menu transitions to open and close navigation
                            </li>
                            <li className="flex items-start gap-2">
                                <BsCheckLg className="w-5 h-5 text-[#5465FF] shrink-0" />
                                Engineered/Designed hover effects to intuitively expand and collapse menus
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
                            Developed a theme button for manually switching between dark and light modes, enhancing user control and accessibility
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start gap-2">
                                <BiMoon className="w-5 h-5 text-[#0DB9B9] shrink-0" />
                                Implemented a theme button to manually toggle between dark and light modes.
                            </li>
                            <li className="flex items-start gap-2">
                                <BiSun className="w-5 h-5 text-[#0DB9B9] shrink-0" />
                                Enabled smooth transitions to ensure a visually appealing changeover.
                            </li>
                            <li className="flex items-start gap-2">
                                <BiPalette className="w-5 h-5 text-[#0DB9B9] shrink-0" />
                                Ensured persistent theme settings that maintain user choices across sessions.
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 bg-gray-100 rounded-2xl overflow-hidden">
                        <div className="relative aspect-[4/3]">
                            <div className="absolute inset-0">
                                <ImageContainer
                                    image="/images/inizio/inizio-theme.svg"
                                    alt="Theme mode demonstration"
                                    className="object-cover w-full h-full absolute top-0 left-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interactive Elements */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 bg-gray-100 rounded-2xl overflow-hidden">
                        <div className="relative aspect-[4/3]">
                            <ImageContainer
                                image="/images/inizio/inizio-hover.svg"
                                alt="Interactive elements demonstration"
                                className="object-cover w-full h-full absolute top-0 left-0"
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
                            Refined user engagement with rich content tooltips and dynamic animations upon hovering
                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start gap-2">
                                <BiMouse className="w-5 h-5 text-[#5465FF] shrink-0" />
                                Implemented rich content tooltips that display detailed information when users hover over interface elements, enhancing understanding without cluttering the UI.
                            </li>
                            <li className="flex items-start gap-2">
                                <MdOutlineAnimation className="w-5 h-5 text-[#5465FF] shrink-0" />
                                Developed a universal &apos;ping&apos; animation for all buttons on hover, capturing user attention and providing lively feedback.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InizioUXUI;   