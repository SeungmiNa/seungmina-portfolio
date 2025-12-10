import React, { forwardRef } from 'react';
import SectionTitle from '../../components/SectionTitle';

const ImpactSection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div id="impact" ref={ref} className="bg-gray-50">
            <div className="py-24">
                <SectionTitle>Impact & Key Learnings</SectionTitle>
                <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        This redesign demonstrates how conversational AI can bring everyday tools closer to how people naturally think and communicate—reducing friction and empowering users to work more efficiently.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Through this project, I gained deeper insight into designing AI-supported experiences that balance automation with user control.
                        It reinforced the importance of transparency, trust, and thoughtful interaction design in creating meaningful user experiences.
                    </p>
                </div>
                
            </div>
        </div>
    );
});

ImpactSection.displayName = 'ImpactSection';

export default ImpactSection;

