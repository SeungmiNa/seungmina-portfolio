'use client';

import React from 'react';
import GoogleHero from './GoogleHero';
import GoogleOverview from './GoogleOverview';
import GoogleBody from './GoogleBody';

const GoogleCalendarProject: React.FC = () => {
    return (
        <>
            <style jsx global>{`
                @font-face {
                    font-family: 'Google Sans Flex';
                    src: url('https://fonts.gstatic.com/s/googlesans/v58/4UaOrEtFpBISc6GmX8aNt8j6KCAJOAiW3ZtYjJhQ.woff2') format('woff2');
                    font-weight: 400;
                    font-style: normal;
                    font-display: swap;
                }
                
                .google-calendar-project {
                    font-family: 'Google Sans Flex', 'Google Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
                
                .google-calendar-project * {
                    font-family: inherit;
                }
            `}</style>
            
            {/* <div className="google-calendar-project bg-[#FAFAFA] -mt-16"> */}
            <div className="google-calendar-project bg-[#FFFFFF] -mt-16">
            <GoogleHero />
                <div className="max-w-7xl mx-auto px-8">
                    
                    <GoogleOverview />
                    <GoogleBody />
                </div>
            </div>
        </>
    );
};

export default GoogleCalendarProject;

