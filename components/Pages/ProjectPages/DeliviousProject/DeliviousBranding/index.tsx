import Title from "@/components/Font/Title";
import React from "react";
import Image from "next/image";

const DeliviousBranding = ({ item }: { item?: any }) => {
    const colors = [
        {
            type: 'primary',
            name: 'Primary',
            hex: '#4963AE',
            description: 'Main brand color, used for primary actions and key visual elements'
        }, {
            type: 'secondary',
            name: 'Secondary',
            hex: '#ffffff',
            description: 'Used for backgrounds and contrast with primary color'
        }, {
            type: 'default',
            name: 'Default',
            hex: '#F2F2F3',
            description: 'Used for subtle backgrounds and disabled states'
        }, {
            type: 'accent',
            name: 'Accent',
            hex: '#050707',
            description: 'Used for text and high-contrast elements'
        }
    ];

    const typography = [
        {
            name: 'Heading 1',
            font: 'Inter',
            weight: '700',
            size: '48px/56px',
            usage: 'Main headlines, hero sections'
        },
        {
            name: 'Heading 2',
            font: 'Inter',
            weight: '600',
            size: '32px/40px',
            usage: 'Section headers, important titles'
        },
        {
            name: 'Body',
            font: 'Inter',
            weight: '400',
            size: '16px/24px',
            usage: 'Main content, paragraphs'
        },
        {
            name: 'Caption',
            font: 'Inter',
            weight: '400',
            size: '14px/20px',
            usage: 'Supporting text, labels'
        }
    ];

    return (
        <div className="col-span-12 space-y-32">
            {/* Logo Section */}
            <section className="space-y-8">
                <div className="max-w-2xl">
                    <Title variant="h4" className="font-semibold mb-4">Logo</Title>
                    <p className="text-base text-stone-500">
                        The Delivious logo represents the fusion of delicious dining and innovative 
                        delivery service. The design emphasizes simplicity and memorability while 
                        maintaining professional appeal.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                    {/* Primary Logo */}
                    <div className="bg-white rounded-lg p-12 flex items-center justify-center">
                        <div className="text-center">
                            <div className="mb-8 h-32 relative">
                                {/* Replace with actual logo */}
                                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-[#4963AE]">
                                    Delivious
                                </div>
                            </div>
                            <p className="text-sm text-stone-500">Primary Logo</p>
                        </div>
                    </div>

                    {/* Logo Mark */}
                    <div className="bg-white rounded-lg p-12 flex items-center justify-center">
                        <div className="text-center">
                            <div className="mb-8 h-32 relative">
                                {/* Replace with actual logo mark */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-[#4963AE]"></div>
                                </div>
                            </div>
                            <p className="text-sm text-stone-500">Logo Mark</p>
                        </div>
                    </div>
                </div>

                {/* Logo Usage Guidelines */}
                <div className="bg-stone-50 rounded-lg p-8 mt-8">
                    <h4 className="text-lg font-medium mb-4">Usage Guidelines</h4>
                    <ul className="grid grid-cols-2 gap-4 text-sm text-stone-600">
                        <li className="flex items-start gap-2">
                            <span className="text-[#4963AE]">•</span>
                            Maintain clear space around the logo equal to the height of the logo mark
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#4963AE]">•</span>
                            Don't modify the logo colors or proportions
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#4963AE]">•</span>
                            Use the monochrome version on dark backgrounds
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#4963AE]">•</span>
                            Minimum size: 24px height for digital, 0.5 inch for print
                        </li>
                    </ul>
                </div>
            </section>

            {/* Colors Section */}
            <section className="space-y-8">
                <div className="max-w-2xl">
                    <Title variant="h4" className="font-semibold mb-4">Colors</Title>
                    <p className="text-base text-stone-500">
                        Our color palette is designed to create a welcoming and professional atmosphere 
                        while ensuring excellent readability and visual hierarchy across all platforms.
                    </p>
                </div>

                <div className="flex gap-4">
                    {colors.map((color) => {
                        const isPrimary = color.type.toLowerCase().includes('primary');
                        return (
                            <div
                                key={color.name}
                                className={`
                                    w-full rounded-lg
                                    ${isPrimary ? '-translate-y-4 shadow-lg' : ''}
                                    transition-all duration-300
                                `}
                            >
                                <div
                                    style={{ backgroundColor: color.hex }}
                                    className="h-32 rounded-t-lg"
                                />
                                <div className="p-4 bg-white rounded-b-lg border border-t-0 border-stone-200">
                                    <div className="font-medium mb-1">{color.name}</div>
                                    <div className="text-sm text-stone-500 mb-2">{color.hex}</div>
                                    <p className="text-sm text-stone-600">{color.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Typography Section */}
            <section className="space-y-8">
                <div className="max-w-2xl">
                    <Title variant="h4" className="font-semibold mb-4">Typography</Title>
                    <p className="text-base text-stone-500">
                        Our typography system uses Inter, a versatile and modern typeface that 
                        ensures excellent readability across all devices and platforms.
                    </p>
                </div>

                <div className="bg-white rounded-lg border border-stone-200">
                    {typography.map((type, index) => (
                        <div 
                            key={type.name}
                            className={`
                                p-8 flex items-center gap-8
                                ${index !== typography.length - 1 ? 'border-b border-stone-200' : ''}
                            `}
                        >
                            <div className="w-48">
                                <h4 className="font-medium mb-1">{type.name}</h4>
                                <p className="text-sm text-stone-500">{type.font}</p>
                            </div>
                            <div className="flex-1">
                                <div 
                                    className="mb-2"
                                    style={{
                                        fontWeight: type.weight,
                                        fontSize: type.size.split('/')[0],
                                        lineHeight: type.size.split('/')[1]
                                    }}
                                >
                                    The quick brown fox jumps over the lazy dog
                                </div>
                                <div className="text-sm text-stone-500">
                                    {type.weight} • {type.size}
                                </div>
                            </div>
                            <div className="w-48 text-sm text-stone-600">
                                {type.usage}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default DeliviousBranding;
