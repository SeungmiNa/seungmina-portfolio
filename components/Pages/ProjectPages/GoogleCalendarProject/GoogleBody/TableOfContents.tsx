'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TableOfContentsProps {
    tocItems: Array<{ id: string; label: string }>;
    activeSection: string;
    onItemClick: (sectionId: string) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ tocItems, activeSection, onItemClick }) => {
    return (
        <div className="lg:col-span-2 hidden lg:block">
            <motion.div 
                className="sticky top-24"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                <ol className="space-y-3">
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
                            <AnimatePresence>
                                {activeSection === item.id && (
                                    <motion.span
                                        className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#0075FA] rounded-full"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                )}
                            </AnimatePresence>
                            {item.label}
                        </motion.li>
                    ))}
                </ol>
            </motion.div>
        </div>
    );
};

export default TableOfContents;

