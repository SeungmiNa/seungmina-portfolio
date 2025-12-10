import React, { forwardRef } from 'react';
import SectionTitle from '../../components/SectionTitle';

const FinalSolutionSection = forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <div id="final-solution" ref={ref} className="">
            <div className="py-24">
                <SectionTitle>Key Screens & Interaction Highlights</SectionTitle>
                <div className="space-y-6 mb-12">
                    <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                        A voice-first event creation flow that feels fast, clear, and reassuring - allowing users to create events without unnecessary steps.
                    </p>
                </div>
                
            </div>
        </div>
    );
});

FinalSolutionSection.displayName = 'FinalSolutionSection';

export default FinalSolutionSection;

