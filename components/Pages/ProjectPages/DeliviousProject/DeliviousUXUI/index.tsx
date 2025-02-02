import Title from "@/components/Font/Title";
import Image from "next/image";
import React from "react";
import { BsBag, BsCalendar3, BsChevronRight, BsPerson, BsSearch, BsTrash } from 'react-icons/bs';
import { Project } from "@/app/types/project";

interface DeliviousUXUIProps {
    project: Project;
}

const DeliviousUXUI: React.FC<DeliviousUXUIProps> = ({

}) => {
    return (
        <div className="col-span-12 mx-auto px-4 py-2">
            <div className="space-y-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <Title className="text-4xl md:text-5xl mb-4" variant="h1">
                        UX/UI Design Process
                    </Title>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Designed and implemented a comprehensive component library that powers
                        Delivious&apos;s ordering system. Created an intuitive user journey from
                        authentication to order completion, with carefully crafted UI elements
                        that maintain visual consistency while enhancing the ordering experience.
                    </p>
                </div>


                <div className="divide-y divide-gray-300">
                    {/* Design User Flow */}
                    <div className="py-12">
                        <div className="space-y-4 flex flex-col md:flex-row gap-4">
                            <div>
                                <h4 className="text-2xl font-bold mb-2 text-[#4963AE] uppercase">
                                    USER FLOW & WIREFRAMES
                                </h4>
                                <p className="text-gray-600">
                                    Mapped out the complete user journey from login to order fulfillment,
                                    creating intuitive pathways for both customers and staff. Each interaction
                                    point was carefully considered to minimize friction and enhance the
                                    overall dining experience.
                                </p>
                            </div>

                            <div className="mt-8 bg-white rounded-lg p-4 max-w-3xl w-full">
                                <div className="flex flex-wrap gap-3 text-sm flex-wrap text-stone-600">
                                    <div className="flex items-center gap-2">
                                        <div className="w-14 h-6 border bg-[#425DA6] border-gray-300 shrink-0 rounded"></div>
                                        <span className="whitespace-nowrap">Navigation</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-14 h-6 bg-white shrink-0 border border-[#979797] rounded"></div>
                                        <span className="whitespace-nowrap">Page</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-14 h-6 border border-gray-300 shrink-0 rounded border border-dashed border-[#979797]"></div>
                                        <span className="whitespace-nowrap">Modal</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-14 h-6 bg-[#E6E7F3] border border-[#94A2CD] shrink-0 rounded"></div>
                                        <span className="whitespace-nowrap">Button</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="my-16">
                            <div className="space-y-4 relative w-full aspect-[16/9]">
                                <Image
                                    src={"/images/delivious/user-flow.png"}
                                    alt={"Delivious user flow diagram"}
                                    className="w-full h-auto object-contain"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                                    priority
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>

                    <div className="py-20">
                        {/* UI Components Section */}
                        <div className="text-center">
                            <h4 className="text-2xl font-bold mb-2 text-[#4963AE] uppercase">
                                Component Library
                            </h4>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Developed reusable UI components following consistent design patterns, including buttons, forms, and navigation elements.
                            </p>
                        </div>
                        <div className="grid gird-cols-1 md:grid-cols-6 gap-4 py-12">
                            {/* Buttons Section */}
                            <section className="col-span-2 space-y-6 bg-white/50 rounded-xl p-4 border border-white">
                                <h3 className="text-xl font-semibold">Buttons</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-2">Button Variants</p>
                                        <div className="flex flex-col space-y-2">
                                            <button className="bg-[#4963AE] text-white px-6 py-2.5 rounded-md hover:bg-[#3b4f8a] transition-colors duration-200 w-fit">
                                                Primary
                                            </button>
                                            <button className="bg-white text-[#4963AE] px-6 py-2.5 rounded-md border border-[#4963AE] hover:bg-[#E6E7F3] transition-colors duration-200 w-fit">
                                                Secondary
                                            </button>
                                            <button className="text-[#4963AE] px-6 py-2.5 hover:underline transition-all duration-200 w-fit">
                                                Tertiary
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-2">Slide Button</p>
                                        <div className="flex rounded-lg overflow-hidden w-fit border border-black">
                                            <button className="bg-black text-white px-8 py-2.5 whitespace-nowrap hover:bg-gray-800 transition-colors duration-200">
                                                Dine In
                                            </button>
                                            <button className="bg-gray-100 text-gray-700 px-8 py-2.5 whitespace-nowrap hover:bg-gray-200 transition-colors duration-200">
                                                To Go
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Tables Section */}
                            <section className="col-span-4 space-y-6 bg-white/50 rounded-xl p-4 border border-white">
                                <h3 className="text-xl font-semibold">Tables</h3>
                                <div className="flex gap-4">
                                    {/* Active Table */}
                                    <div className="bg-[#4963AE] hover:scale-105 p-6 rounded-xl w-48 h-48 text-white shadow-md hover:shadow-lg transition-all">
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold text-lg">Table 1</span>
                                            <button className="hover:text-gray-200 transition-colors">
                                                <BsTrash size={18} />
                                            </button>
                                        </div>
                                        <div className="mt-4 space-y-2 text-sm">
                                            <div className="flex justify-between items-center">
                                                <span>Ice Americano</span>
                                                <span>x1</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span>Chocolate Latte</span>
                                                <span>x3</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Occupied Table */}
                                    <div className="bg-[#D8DAE7] hover:scale-105 p-6 rounded-xl w-48 h-48 text-gray-700 shadow-md hover:shadow-lg transition-all">
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold text-lg">Table 2</span>
                                            <button className="hover:text-gray-600 transition-colors">
                                                <BsTrash size={18} />
                                            </button>
                                        </div>
                                        <div className="mt-4 space-y-2 text-sm">
                                            <div className="flex justify-between items-center">
                                                <span>Chai Latte</span>
                                                <span>x1</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span>iced Latte</span>
                                                <span>x3</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span>Iced Peach Tea</span>
                                                <span>x1</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span>More ...</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Empty Table */}
                                    <div className="bg-gray-200 hover:scale-105  p-6 rounded-xl w-48 h-48 text-gray-500 shadow-md hover:shadow-lg transition-all flex items-center justify-center">
                                        <span className="font-semibold text-lg">Table 3</span>
                                    </div>
                                </div>
                            </section>

                            {/* Order Items Section */}
                            <section className="col-span-4 space-y-6 bg-white/50 rounded-xl p-4 border border-white">
                                <h3 className="text-xl font-semibold">Order Item</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {/* Size Selection */}
                                    <div className="bg-gray-200 rounded-xl">
                                        <div className="relative aspect-square">
                                            <Image
                                                src="/public/images/delivious/latte.jpg"
                                                alt="Coffee cup"
                                                className="w-full h-full object-cover rounded-lg"
                                                fill
                                                priority
                                                unoptimized
                                            />
                                            {/* Size Options */}
                                            <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 rounded-lg bg-black/60">
                                                <button className="bg-[#4963AE] text-white px-8 py-2 rounded-md text-sm transition-colors duration-200 w-32">
                                                    Tall
                                                </button>
                                                <button className="bg-white text-[#4963AE] px-8 py-2 rounded-md text-sm hover:bg-[#E6E7F3] transition-colors duration-200 w-32">
                                                    Grande
                                                </button>
                                                <button className="bg-white text-[#4963AE] px-8 py-2 rounded-md text-sm hover:bg-[#E6E7F3] transition-colors duration-200 w-32">
                                                    Venti
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Temperature Selection */}
                                    <div className="bg-gray-200 rounded-xl">
                                        <div className="relative aspect-square">
                                            <Image
                                                src="/public/images/delivious/latte.jpg"
                                                alt="Coffee cup"
                                                className="w-full h-full object-cover rounded-lg"
                                                fill
                                                priority
                                                unoptimized
                                            />
                                            <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 rounded-lg bg-black/60">
                                                <button className="bg-white text-[#4963AE] px-8 py-2 rounded-md text-sm hover:bg-[#E6E7F3] transition-colors duration-200 w-32">
                                                    Ice
                                                </button>
                                                <button className="bg-[#4963AE] text-white px-8 py-2 rounded-md text-sm transition-colors duration-200 w-32">
                                                    Hot
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Selected State Example */}
                                    <div className="bg-gray-200 rounded-xl">
                                        <div className="relative aspect-square">
                                            <Image
                                                src="/public/images/delivious/latte.jpg"
                                                alt="Coffee cup"
                                                className="w-full h-full object-cover rounded-lg"
                                                fill
                                                priority
                                                unoptimized
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/60">
                                                <div className="bg-white rounded-full p-4">
                                                    <svg className="w-10 h-10 text-[#4963AE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Input Box Section */}
                            <section className="col-span-2 space-y-6 bg-white/50 rounded-xl p-4 border border-white">
                                <h3 className="text-xl font-semibold">Input Box</h3>
                                <div className="space-y-3">
                                    <div className="bg-black rounded-xl px-4 py-3.5 flex items-center gap-3">
                                        <svg
                                            className="w-5 h-5 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                        <input
                                            type="text"
                                            placeholder="ID"
                                            className="bg-transparent outline-none w-full text-gray-300 placeholder-gray-400"
                                        />
                                    </div>
                                    <div className="bg-black rounded-xl px-4 py-3.5 flex items-center gap-3">
                                        <svg
                                            className="w-5 h-5 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="bg-transparent outline-none w-full text-gray-300 placeholder-gray-400"
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* Search Bar Section */}
                            <section className="col-span-3 space-y-6 bg-white/50 rounded-xl p-4 border border-white">
                                <h3 className="text-xl font-semibold">Search Bar</h3>
                                <div className="max-w-md space-y-3">
                                    {/* Search Input */}
                                    <div className="bg-white rounded-full px-4 py-3 shadow-sm border border-gray-200 flex items-center gap-3">
                                        <BsSearch className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Search menu name or id"
                                            className="outline-none w-full text-gray-700 placeholder-gray-400"
                                        />
                                    </div>

                                    {/* Date Selector */}
                                    <div className="bg-white rounded-full px-4 py-3 shadow-sm border border-gray-200 flex items-center gap-3">
                                        <BsCalendar3 className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            value="2022/ 03/ 26"
                                            className="outline-none text-gray-700 w-full"
                                            readOnly
                                        />
                                        <BsChevronRight className="w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                            </section>

                            {/* Tab Section */}
                            <section className="col-span-3 space-y-6 bg-white/50 rounded-xl p-4 border border-white">
                                <h3 className="text-xl font-semibold">Tab Navigation</h3>
                                <div className="flex flex-col gap-4">
                                    {/* Example of tab in context */}
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="flex gap-4 justify-center">
                                            <button className="rounded-l-lg h-36 flex flex-col items-center gap-2 bg-[#4963AE] text-white px-0 py-6 hover:bg-[#3b4f8a] transition-colors">
                                                <BsPerson className="rotate-90 w-5 h-5" />
                                                <span className="writing-vertical-rl rotate-90 mt-4">ADMIN</span>
                                            </button>
                                            <button className="rounded-l-lg h-36 flex flex-col items-center gap-2 bg-black text-white px-0 py-6 hover:bg-gray-800 transition-colors">
                                                <BsBag className="rotate-90 w-5 h-5" />
                                                <span className="writing-vertical-rl rotate-90 mt-4">ORDER</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Design Flow and & Introduction */}
                    <div className="py-20">
                        <div className="text-center">
                            <h4 className="text-2xl font-bold mb-2 text-[#4963AE] uppercase">
                                DESIGN SYSTEM & IMPLEMENTATION
                            </h4>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Built a design system featuring custom components like interactive table management interfaces, and responsive
                                navigation elements. Each component was designed and implemented to
                                support the core ordering flow while ensuring a cohesive visual language
                                across the platform.
                            </p>
                        </div>
                        <div className="mt-8">
                            <Image
                                src="/images/delivious/delivious-mockup.svg"
                                alt="Delivious Mockup"
                                width={1200}
                                height={800}
                                className="w-full"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliviousUXUI;