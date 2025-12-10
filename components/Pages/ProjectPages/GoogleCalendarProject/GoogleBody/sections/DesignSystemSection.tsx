import React, { forwardRef } from 'react';
import SectionTitle from '../../components/SectionTitle';

const DesignSystemSection = forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <div id="design-system" ref={ref} className="bg-gray-50">
            <div className="py-24">
                <div className="flex gap-12 mb-12">
                    <SectionTitle>Wire-framing / <br/> Design System</SectionTitle>
                    <p className="flex-1 text-lg text-gray-700 leading-relaxed max-w-4xl">
                        Reviews and user discussions echoed the same frustration &quot;It takes too many taps to create an event.&quot; This highlighted a clear opportunity to simplify the flow and make the experience faster and more intuitive.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                   image
                </div>
                <p className="flex-1 text-lg text-gray-700 leading-relaxed max-w-4xl">
                    I also created a small design system to keep the experience consistent. It included the new components I designed, such as the dynamic waveform and information indicators, ensuring that the visuals and interactions felt unified throughout the flow.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                   image
                </div>
            </div>
        </div>
    );
});

DesignSystemSection.displayName = 'DesignSystemSection';

export default DesignSystemSection;

