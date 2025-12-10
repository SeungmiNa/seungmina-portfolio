import React, { forwardRef } from 'react';
import SectionTitle from '../../components/SectionTitle';

const InsightSection = forwardRef<HTMLDivElement>((props, ref) => {
    const buttons = [
        { text: 'Client appointment', color: 'bg-blue-500 hover:bg-blue-600' },
        { text: 'Tomorrow', color: 'bg-red-500 hover:bg-red-600' },
        { text: '10 to 11am', color: 'bg-green-500 hover:bg-green-600' },
    ];

    return (
        <div id="insight" ref={ref} className="">
 
                <SectionTitle>Insight</SectionTitle>
                <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                        I considered multiple directions—from simplifying forms to using sentence-based input.
                        Through experimentation, voice input emerged as the most natural and efficient option for mobile users.
                    </p>
                    <div className="bg-[#F2F3F4] rounded-2xl p-8">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-gray-600 text-lg">Schedule a</span>
                            {buttons.map((button, idx) => (
                                <button
                                    key={idx}
                                    className={`${button.color} text-white px-6 py-3 rounded-full font-medium transition-colors`}
                                >
                                    {button.text}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
  
    );
});

InsightSection.displayName = 'InsightSection';

export default InsightSection;

