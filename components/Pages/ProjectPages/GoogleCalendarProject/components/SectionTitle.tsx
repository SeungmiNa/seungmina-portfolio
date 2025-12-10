import React from 'react';

interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => {
    return (
        <h2 className={`text-lg font-medium text-[#0075FA] mb-4 ${className}`}>
            {children}
        </h2>
    );
};

export default SectionTitle;

