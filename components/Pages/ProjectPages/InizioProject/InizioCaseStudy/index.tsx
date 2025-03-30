"use client";
import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import Title from "@/components/Font/Title";
import ImageContainer from "@/components/ImageContainer";

const InizioCaseStudy = () => {
    const steps = [
        {
            id: 'intro',
            content: (
                <div className="w-full h-full flex flex-col justify-center px-8 py-12 rounded-xl border border-gray-100">
                    {/* Content Grid */}
                    <div className="overflow-auto py-3 grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto w-full">
                        {/* Left side - Original Design */}
                        <div className="relative w-full h-full aspect-square rounded-3xl overflow-hidden border border-gray-300">
                            {/* <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-3/4 h-3/4 bg-white rounded-2xl shadow-xl">
                                    
                                </div>
                            </div> */}
                            <ImageContainer
                                image="/images/inizio/inizio-case-study-original.svg"
                                alt="Case Study Original Design"
                                className="object-cover w-full h-full absolute top-0 left-0"
                            />
                            <div className="absolute bottom-6 left-6 right-6 bg-gray-800/50 backdrop-blur-sm rounded-xl py-3 px-4">
                                <p className="text-sm font-semibold text-white pb-1">Original Design</p>
                                <p className="text-xs text-gray-100">Before user feedback implementation</p>
                            </div>
                        </div>

                        {/* Right side - Feedback Cards */}
                        <div className="space-y-4 p-4">
                            {/* Title Section */}
                            <div className="mb-8">
                                <div className="text-[#5465FF] text-base">Problem</div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    What Our Users Say
                                </h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Real feedback from our users that helped shape our design decisions
                                </p>
                            </div>
                            {/* First Feedback Card */}
                            <div className="bg-white rounded-xl p-6 border border-gray-300">
                                <blockquote className="text-gray-900 text-base font-medium mb-6 leading-relaxed">
                                    &quot;Sometimes I just want to <span className="text-[#5465FF] font-semibold">tweak a few words</span> or a sentence in my mission statement, but it feels like I have to go through <span className="text-[#5465FF] font-semibold">hoops</span> to do it.&quot;
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div>
                                        <span className="text-sm text-gray-500"> Feedback from Business Owner</span>
                                    </div>
                                </div>
                            </div>

                            {/* Second Feedback Card */}
                            <div className="bg-white rounded-xl p-6 border border-gray-300">
                                <blockquote className="text-gray-900 text-base font-medium mb-6 leading-relaxed">
                                    &quot;I wish there was a way to <span className="text-[#5465FF] font-semibold">experiment with different phrasings</span> without losing my original idea.&quot;
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div>
                                        <span className="text-sm text-gray-500"> Feedback from Marketing Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'design-challenge',
            content: (
                <div className="w-full h-full flex flex-col justify-center px-8 py-12 bg-white/60 rounded-xl border border-gray-100">
                    <div className="max-w-6xl mx-auto w-full">
                        {/* Header Section */}


                        <div className="mb-8">
                            <div className="text-[#5465FF] text-base">Design Challenge</div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                Flexible Text Editing Experience
                            </h2>
                            <p className="text-gray-600 max-w-2xl">
                                Creating an intuitive interface for diverse editing needs
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Left Column */}

                            <div className="w-full md:w-1/3 bg-gray-100 rounded-xl p-8 border border-gray-300">
                                <h3 className="text-xl font-semibold mb-6 text-gray-900">Current Limitations</h3>
                                <ul className="space-y-2">
                                    {[
                                        'Click/hover menus limit interaction options',
                                        'No support for contextual editing',
                                        'Only able to edit text manually',
                                        'Cannot get assistance from AI',
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg className="mt-0.5 w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Right Column */}
                            <div className="h-full w-full md:w-2/3 bg-white rounded-xl p-8 border border-gray-300">
                                <h3 className="text-xl font-semibold mb-5 text-gray-900"> Challenge</h3>
                                <p className="text-gray-800 text-base">
                                    Users may want to adjust the generated project ideas, including the Problem Statement, Mission, Vision, or Goals.
                                </p>

                                <div className="mt-4 space-y-6">
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-[#5465FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            <h3 className="font-semibold text-gray-900">Varied Edit Types</h3>
                                        </div>
                                        <p className="text-gray-600 pl-8">
                                            <ul className="space-y-2 py-2">
                                                {[
                                                    'Replacing specific keywords',
                                                    'Rephrasing text segments',
                                                    'Modifying key attributes',
                                                    'Adjusting tone and style'
                                                ].map((item, index) => (
                                                    <li key={index} className="flex items-center gap-3">
                                                        <span className="w-2 h-2 rounded-full bg-[#5465FF]"></span>
                                                        <span className="text-gray-700">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'solution',
            content: (
                <div className="w-full h-full flex flex-col justify-center px-8 py-12 bg-white/60 rounded-xl border border-gray-100">
                    {/* Header */}
                    {/* <div className="max-w-6xl mx-auto w-full mb-8">
                        <div className="text-[#5465FF] text-base mb-2">Solution & Collaboration</div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Bringing AI-Powered Editing to Life</h2>
                        <p className="text-gray-600 text-lg">See how we transformed user feedback into an intuitive editing experience</p>
                    </div> */}

                    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto w-full">
                        {/* Left Column - Video (Fixed) */}
                        <div className="w-full md:w-3/5 flex-shrink-0">
                            <div className="mb-8">
                                <div className="text-[#5465FF] text-base">Solution</div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    AI-Powered Content Workspace
                                </h2>
                                <p className="text-gray-600 max-w-2xl">
                                    Transforming editing challenges into seamless interactions
                                </p>
                            </div>
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-100">
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    controls
                                >
                                    <source src="/images/inizio/inizio-case-study-result.mp4" type="video/mp4" />
                                    <p className="text-gray-600 text-center p-4">
                                        Your browser does not support the video tag.
                                    </p>
                                </video>
                            </div>
                        </div>

                        {/* Right Column - Solution & Collaboration (Scrollable) */}
                        <div className="w-full md:w-2/5 overflow-y-auto space-y-3 max-h-[600px] no-scrollbar pb-4">


                            {/* Solution Features */}
                            <div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2.5 bg-[#5465FF]/10 rounded-lg">
                                        <svg className="w-5 h-5 text-[#5465FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
                                </div>
                                <div className="space-y-1.5">
                                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                                        <h4 className="font-medium text-gray-900 mb-1 text-sm">Side-Panel Chat Interface</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Intuitive chat interface powered by LLM for natural conversation-based content revision.
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                                        <h4 className="font-medium text-gray-900 mb-1 text-sm">Real-Time Iteration</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Instant updates and version comparison for seamless content refinement.
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 border border-gray-100">
                                        <h4 className="font-medium text-gray-900 mb-1 text-sm">Flexible Workspace</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Collapsible side chat provides optimal space management while maintaining AI assistance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Engineering Collaboration Card */}
                            <div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2.5 bg-[#5465FF]/10 rounded-lg">
                                        <svg className="w-5 h-5 text-[#5465FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">Engineering Collaboration</h3>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Partnered with engineers to integrate LLM and API support for dynamic text editing, ensuring seamless communication between the UI and AI backend.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="space-y-8 py-12">
            <div className="text-center max-w-4xl mx-auto px-4 pt-20 pb-8">
                <div>
                    <div className="inline-flex px-4 py-1 rounded-full bg-[#5465FF]/10 border border-[#5465FF]/30">
                        <span className="text-sm font-medium text-[#5465FF]">Case Study</span>
                    </div>
                </div>
                <Title variant="h1" className="text-4xl md:text-5xl font-bold to-gray-700 mt-2 mb-6">
                    Behind the Design
                </Title>
                <p className="text-gray-600 text-lg">
                    Transforming user insights into intuitive design solutions
                </p>
            </div>

            <section className="relative w-full h-[700px] bg-white/60 rounded-3xl shadow-xl overflow-hidden mx-auto max-w-7xl">
                <Carousel
                    className="rounded-xl h-full"
                    prevArrow={({ handlePrev, activeIndex }) => (
                        activeIndex === 0 ? (
                            <></>
                        ) : (
                            <IconButton
                                variant="text"
                                color="white"
                                size="lg"
                                onClick={handlePrev}
                                className="!absolute top-1/2 left-4 -translate-y-1/2 bg-white/95 hover:bg-[#5465FF] shadow-lg hover:shadow-xl transition-all duration-300 rounded-full border border-gray-200 hover:border-[#5465FF] group"
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5 text-[#5465FF] group-hover:text-white transition-colors duration-300"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 19.5L8.25 12l7.5-7.5"
                                    />
                                </svg>
                            </IconButton>
                        )
                    )}
                    nextArrow={({ handleNext, activeIndex }) => (
                        activeIndex === steps.length - 1 ? (
                            <></>
                        ) : (
                            <IconButton
                                variant="text"
                                color="white"
                                size="lg"
                                onClick={handleNext}
                                className="!absolute top-1/2 right-4 -translate-y-1/2 bg-white/95 hover:bg-[#5465FF] shadow-lg hover:shadow-xl transition-all duration-300 rounded-full border border-gray-200 hover:border-[#5465FF] group"
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5 text-[#5465FF] group-hover:text-white transition-colors duration-300"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </IconButton>
                        )
                    )}
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-3">
                            {new Array(length).fill("").map((_, i) => (
                                <button
                                    key={i}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                                        ${activeIndex === i
                                            ? "bg-[#5465FF] scale-100 opacity-100"
                                            : "bg-gray-400/30 scale-90 hover:scale-95 hover:bg-gray-400/50"
                                        }`}
                                    onClick={() => setActiveIndex(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    )}
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                >
                    {steps.map((step) => (
                        <div key={step.id} className="relative h-full w-full">
                            {step.content}
                        </div>
                    ))}
                </Carousel>
            </section>
        </div>
    );
};

export default InizioCaseStudy;
