import React from 'react';

interface PageLayoutProps {
    children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="container mx-auto">
            {children}
        </div>
    );
} 