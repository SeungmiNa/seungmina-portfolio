'use client';

import ImageContainer from '@/components/ImageContainer';
import React from 'react';

const GoogleOverview: React.FC = () => {
    return (
        <div className="bg-[#F2F3F4] rounded-[28px] py-10 px-12 max-w-4xl my-28">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Side - Icon and Name */}
                <div className="flex flex-col items-start gap-4 w-72 flex items-center justify-center">
                    <ImageContainer 
                        image="/images/google/google-calendar-logo.png" 
                        alt="Google Calendar" 
                        className="!w-32 !h-32"
                    />
                    <h3 className="text-base font-medium text-gray-700">Google Calendar</h3>
                </div>

                {/* Right Side - Title, Role, Timeline */}
                <div className="flex-1 space-y-6 pr-16">
                    {/* Title */}
                    <div>
                        <h2 className="text-base font-bold text-[#464646]">
                            Google Calendar - Voice-First Event Creation Redesign
                        </h2>
                    </div>

                    {/* My Role Section */}
                    <div>
                        <h3 className="text-base font-bold text-[#464646]">My Role</h3>
                        <div className="text-[#6E6E6E] leading-relaxed">
                            <p>User Flow Redesign, Interaction Design,
                                <br /> Visual Design, Motion / Micro-interactions,
                                <br /> Prototyping
                            </p>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div>
                        <h3 className="text-base font-bold text-[#464646]">Timeline</h3>
                        <p className="text-[#6E6E6E]">Oct 2025 (1 Month Project)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleOverview;

