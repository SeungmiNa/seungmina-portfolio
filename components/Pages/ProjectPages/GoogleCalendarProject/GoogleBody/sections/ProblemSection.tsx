import React, { forwardRef } from 'react';
import SectionTitle from '../../components/SectionTitle';
import ImageContainer from '@/components/ImageContainer';

const ProblemSection = forwardRef<HTMLDivElement>((props, ref) => {
    const userQuotes = [
        'I wish adding events didn\'t require so many steps.',
        'Anyone who uses Google Calendar app... how do you add events efficiently?',
        'Mobile calendar apps make it hard to create events and require too many taps to set event details',
    ];

    return (
        <div id="problem" ref={ref} className="">
            <SectionTitle>The Problem</SectionTitle>
            <div className="">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                    Through hands-on testing and user research, I found that Google Calendar’s mobile event creation flow feels slow and fragmented.
                    < br /> Users must scroll through multiple sections and complete many input steps, making even simple events time-consuming.
                </p>
                
                <div className="flex gap-16 py-14">
                    <ImageContainer
                        image="/images/google/google-problem-image.png"
                        alt="Google Calendar Problem"
                        className="!w-2/5"
                    />
                    
                    <div className="space-y-14 px-10 flex flex-col justify-center">
                        <h3 className="text-gray-700 font-semibold text-xl">
                            What is the <span className="text-red-500">user pain point</span>
                        </h3>
                        <div className="space-y-3">
                            {userQuotes.map((quote, idx) => (
                                <div key={idx} className="bg-[#F2F3F4] rounded-full px-8 py-4">
                                    <p className="text-gray-700">&quot;{quote}&quot;</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                    Reviews and user discussions echoed the same frustration - &quot;It takes too many taps to create an event.&quot; This highlighted a clear opportunity to simplify the flow and make the experience faster and more intuitive.
                </p>
            </div>
        </div>
    );
});

ProblemSection.displayName = 'ProblemSection';

export default ProblemSection;

