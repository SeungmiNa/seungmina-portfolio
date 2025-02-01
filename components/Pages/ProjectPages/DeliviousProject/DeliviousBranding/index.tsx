import React from "react";
import Title from "../../../../../components/Font/Title";

const DeliviousBranding = (/*{ item }: { item?: any }*/) => {
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
            name: 'COURGETTE',
            type: 'Primary font',
            preview: 'Aa',
            alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            lowercase: 'abcdefghijklmnopqrstuvwxyz',
            numbers: '0123456789!%&'
        },
        {
            name: 'OPEN SANS',
            type: 'Secondary font',
            preview: 'Aa',
            alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            lowercase: 'abcdefghijklmnopqrstuvwxyz',
            numbers: '0123456789!%&'
        }
    ];

    return (
        <div className="col-span-12 pb-28">
            <div className="text-center mb-24">
                <Title className="text-4xl md:text-5xl mb-4" variant="h1">
                    Branding Identity
                </Title>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    I developed Delivious&apos; brand identity by designing the logo, selecting the typography with Courgette and Open Sans, and choosing a color palette centered around blue to define the branding effectively.
                </p>
            </div>

            <div className="col-span-12 space-y-24 divide-y divide-stone-300">
                {/* Logo Section */}
                <section className="space-y-8">
                    <div className="flex md:flex-row flex-col gap-8">
                        <div className="w-full md:w-2/3 flex flex-col">
                            <div className='flex flex-col gap-2 items-center justify-center grow'>
                                <div className="text-7xl font-[Courgette]">Deliv<span className="text-[#4963AE]">ious</span></div>
                                <p className='text-lg font-semibold'>Deli<span className='text-[#4963AE]'>v</span>ery + Delic<span className='text-[#4963AE]'>ious</span></p>
                            </div>
                            <div>
                                <span className="font-bold text-stone-400 pr-4">Description.</span>
                                <span className="text-base text-stone-500">
                                    Delivious represents a blend of delicious dining and innovative delivery services. The logo, featuring an elegant script font in two colors, captures this combination of efficient delivery and delightful culinary experiences.
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 w-full md:w-1/3 divide-y divide-stone-300 gap-10">
                            {/* Logo Mark */}
                            <div>
                                <p className="text-sm text-stone-500">Logo Mark</p>
                                <div className="text-6xl font-[Courgette] text-center my-4">D</div>
                                <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
                                    <div className="w-12 h-12 bg-white rounded-lg p-4 flex items-center justify-center text-2xl font-[Courgette]">D</div>
                                    <div className="w-12 h-12 bg-[#4963AE] text-white rounded-lg p-4 flex items-center justify-center text-2xl font-[Courgette]">D</div>
                                    <div className="w-12 h-12 bg-[#D8DAE7] rounded-lg p-4 flex items-center justify-center text-2xl font-[Courgette]">D</div>
                                </div>
                            </div>

                            <div className="pt-6 space-y-4">
                                <p className="text-sm text-stone-500">Logo Variations</p>
                                <div className="text-center flex flex-col justify-center items-center">
                                    {/* Logo Variations */}
                                    <div className="space-y-3">
                                        <div className="bg-white px-10 py-3 rounded">
                                            <div className="text-2xl font-[Courgette]">
                                                <span>Deliv</span>
                                                <span className="text-[#4963AE]">ious</span>
                                            </div>
                                        </div>
                                        <div className="bg-[#4963AE] px-10 py-3 flex items-center justify-center rounded">
                                            <div className="text-2xl font-[Courgette] text-white">
                                                <span>Deliv</span>
                                                <span>ious</span>
                                            </div>
                                        </div>
                                        <div className="bg-[#D8DAE7] px-10 py-3 flex items-center justify-center rounded">
                                            <div className="text-2xl font-[Courgette]">
                                                <span>Deliv</span>
                                                <span className="text-[#4963AE]">ious</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Colors Section */}
                <section className="space-y-16">
                    <div className="flex mt-20">
                        <div className="pr-8">
                            <Title variant="h4" className="font-semibold mb-4">Colors</Title>
                        </div>
                        <p className="max-w-3xl text-stone-500">
                            The &apos;Delivious&apos; color palette uses modern, appealing shades of blue as the primary color, complemented by white for contrast and backgrounds, light gray for subtle accents and disabled states, and dark gray for text and high-contrast elements.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        {colors.map((color) => {
                            const isPrimary = color.type.toLowerCase().includes('primary');
                            return (
                                <div
                                    key={color.name}
                                    className={`
                                    w-full rounded-lg border border-stone-200
                                    ${isPrimary ? '-translate-y-4 shadow-lg' : ''}
                                    transition-all duration-300
                                `}
                                >
                                    <div
                                        style={{ backgroundColor: color.hex }}
                                        className="h-32 rounded-t-lg"
                                    />
                                    <div className="p-4 bg-white rounded-b-lg border-t border-stone-200">
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
                    <div className="w-full mt-20">
                        <div className="max-w-2xl mb-8">
                            <Title variant="h4" className="font-semibold mb-4">Typography</Title>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            {typography.map((type) => (
                                <div key={type.name}>
                                    <div className="mb-6">
                                        <h3 className={`text-xl font-bold ${type.name === 'COURGETTE' ? 'font-[Courgette]' : 'font-[Open_Sans]'}`}>{type.name}</h3>
                                        <p className="text-sm text-stone-500">{type.type}</p>
                                    </div>

                                    <div className="mb-8">
                                        <span className={`text-8xl ${type.name === 'COURGETTE' ? 'font-[Courgette]' : 'font-[Open_Sans]'}`}>
                                            {type.preview}
                                        </span>
                                    </div>

                                    <div className="space-y-4">
                                        <div className={`text-base ${type.name === 'COURGETTE' ? 'font-[Courgette]' : 'font-[Open_Sans]'}`}>
                                            {type.alphabet}
                                        </div>
                                        <div className={`text-base ${type.name === 'COURGETTE' ? 'font-[Courgette]' : 'font-[Open_Sans]'}`}>
                                            {type.lowercase}
                                        </div>
                                        <div className={`text-base ${type.name === 'COURGETTE' ? 'font-[Courgette]' : 'font-[Open_Sans]'}`}>
                                            {type.numbers}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DeliviousBranding;
