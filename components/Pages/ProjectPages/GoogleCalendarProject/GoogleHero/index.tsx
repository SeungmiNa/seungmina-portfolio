'use client';

import React from 'react';
import SectionTimeTracker from '@/components/Analytics/SectionTimeTracker';
import ImageContainer from '@/components/ImageContainer';

const GoogleHero: React.FC = () => {
    return (
        <SectionTimeTracker sectionName="google_calendar_hero">
            {/* Hero Section */}
            <div className="">
                <div className="">
                    <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center'>
                        <div className='max-w-[550px]'>
                            <h1 className="text-7xl leading-[88px] text-[#202124]">
                                Redesign Google Calendar Mobile App
                            </h1>
                            <p className="mt-4 text-lg md:text-xl text-[#6E6E6E] leading-relaxed font-normal">
                                I explore how conversational AI can simplify event creation, helping users set up events in seconds while still feeling confident and in control.
                            </p>
                        </div>
                        <div className="flex-1 flex justify-center items-center">
                            <ImageContainer
                                image="/images/google/google-hero-image.png"
                                alt="Google Calendar Mobile App Redesign"
                                className="object-contain w-full h-auto"
                            />
                        </div>
                    </div>
                    {/* <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6 max-w-xl">
                                <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight text-[#202124]">
                                    Redesign Google Calendar Mobile App
                                </h1>
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                    I explore how conversational AI can simplify event creation, helping users set up events in seconds while still feeling confident and in control.
                                </p>
                            </div>
                            <div className="relative">
                                
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </SectionTimeTracker>
    );
};

export default GoogleHero;

