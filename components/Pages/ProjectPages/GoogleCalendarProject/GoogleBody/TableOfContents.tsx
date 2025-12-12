'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TableOfContentsProps {
    tocItems: Array<{ id: string; label: string }>;
    activeSection: string;
    onItemClick: (sectionId: string) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ tocItems, activeSection, onItemClick }) => {
    return (
        <div className="lg:col-span-2 hidden lg:block lg:pt-24">
            <motion.div 
                className="sticky top-24"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                <ol className="space-y-3 font-normal">
                    {tocItems.map((item, index) => (
                        <motion.li
                            key={item.id}
                            onClick={() => onItemClick(item.id)}
                            className={`cursor-pointer transition-colors text-left relative ${
                                activeSection === item.id
                                    ? 'text-[#0075FA] font-medium'
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                                duration: 0.4, 
                                delay: 0.4 + index * 0.05,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={{ x: 4, transition: { duration: 0.2 } }}
                        >
                            {item.label}
                        </motion.li>
                    ))}
                </ol>
            </motion.div>
        </div>
    );
};

export default TableOfContents;

