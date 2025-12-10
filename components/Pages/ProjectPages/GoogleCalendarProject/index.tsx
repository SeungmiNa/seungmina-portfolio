'use client';

import React from 'react';
import { Roboto } from 'next/font/google';
import GoogleHero from './GoogleHero';
import GoogleOverview from './GoogleOverview';
import GoogleBody from './GoogleBody';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const GoogleCalendarProject: React.FC = () => {
    return (
        <div className="bg-[#FAFAFA] -mt-16">
            <style jsx global>{`
                .google-sans-flex {
                    font-family: 'Google Sans', ${roboto.style.fontFamily}, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                }
            `}</style>

            <div className={`google-sans-flex max-w-7xl mx-auto px-8 ${roboto.className}`}>
                <GoogleHero />
                <GoogleOverview />
                <GoogleBody />
            </div>
        </div>
    );
};

export default GoogleCalendarProject;

