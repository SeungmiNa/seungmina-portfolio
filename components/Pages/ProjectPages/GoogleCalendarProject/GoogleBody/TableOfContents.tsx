import React from 'react';

interface TableOfContentsProps {
    tocItems: Array<{ id: string; label: string }>;
    activeSection: string;
    onItemClick: (sectionId: string) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ tocItems, activeSection, onItemClick }) => {
    return (
        <div className="lg:col-span-2 hidden lg:block">
            <div className="sticky top-24">
                <ol className="space-y-3">
                    {tocItems.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => onItemClick(item.id)}
                            className={`cursor-pointer transition-colors text-left ${
                                activeSection === item.id
                                    ? 'text-blue-500 font-medium'
                                    : 'text-gray-600'
                            }`}
                        >
                            {item.label}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default TableOfContents;

