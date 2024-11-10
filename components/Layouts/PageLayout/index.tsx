import React from 'react';

interface PageLayoutProps {
    children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="container mx-auto px-4 sm:px-0">
            {children}
        </div>
    );
} 