import React, { forwardRef } from 'react';
import SectionTitle from '../../components/SectionTitle';

const OpportunitySection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div id="opportunity" ref={ref} className="bg-gray-50">
            
                <SectionTitle>The Opportunity</SectionTitle>
                    <p className="text-4xl leading-[1.5] font-bold text-gray-900">
                        Struggle with too many steps when creating events? <br />
                        If event creation felt simpler and more seamless, <br />
                        Users could plan their schedules quickly and confidently. <br />
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mt-12">
                        To address this problem, I designed an AI voice feature that lets users create events simply by speaking. It turns a complex, multi-step process into a natural, one-sentence interaction. When users talk, the AI listens in real time, extracts the details, and builds the event automatically.
                    </p>
        </div>
    );
});

OpportunitySection.displayName = 'OpportunitySection';

export default OpportunitySection;

