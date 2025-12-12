'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => {
    return (
        <motion.h2 
            className={`text-lg font-medium text-[#0075FA] mb-4 ${className}`}
            whileHover={{ x: 2, transition: { duration: 0.2 } }}
        >
            {children}
        </motion.h2>
    );
};

export default SectionTitle;

