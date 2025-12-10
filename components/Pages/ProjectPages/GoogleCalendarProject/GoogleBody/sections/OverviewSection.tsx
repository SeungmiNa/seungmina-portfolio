import React, { forwardRef } from 'react';
import SectionTitle from '../../components/SectionTitle';

const OverviewSection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div id="overview" ref={ref} className="">
            <SectionTitle>Overview</SectionTitle>
            <p className="text-lg text-[#747474] max-w-3xl">
                This self-initiated project reimagines how AI can support a smoother, more natural event creation experience on Google Calendar&apos;s mobile app, especially when users need something fast and effortless.
            </p>
        </div>
    );
});

OverviewSection.displayName = 'OverviewSection';

export default OverviewSection;

