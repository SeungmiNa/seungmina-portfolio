"use client";
import Image from "next/image";
import React from "react";
import Title from "../../../../Font/Title";

const InizioBranding = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Main Title Section */}
            <div className="flex flex-col gap-6 mb-16">
                <div className="space-y-2">
                    <div>
                        <div className="inline-flex px-4 py-2 rounded-full bg-[#0DB9B9]/10 border border-[#0DB9B9]/30">
                            <span className="text-sm font-medium text-[#0DB9B9]">Branding</span>
                        </div>
                    </div>
                    <Title variant="h1" className="text-4xl md:text-5xl font-bold text-gray-900">
                        Brand Guidelines
                    </Title>
                </div>
                <p className="text-gray-500 max-w-2xl text-lg">
                    A cohesive design system ensuring consistent branding across all platforms through carefully crafted components and guidelines.
                </p>
            </div>

            {/* Branding Section */}
            <div className="mb-32">                
                {/* Logo and Branding Grid */}
                <div className="w-full flex flex-col md:flex-row justify-center gap-6 md:gap-16">
                    {/* Logo Section */}
                    <div className="relative w-full md:w-1/3 flex justify-center items-center">
                        <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/images/inizio/inizio-branding-logo.svg"
                                    alt="inizio-branding-logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <p className="mt-12">description</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3">
                        {/* Colors and Logo Variants Section */}
                        <div className="space-y-6 flex flex-col justify-center">
                            {/* Colors Section */}
                            <div className="bg-gradient-to-br from-[#0DB9B9]/10 to-[#5465FF]/10 backdrop-blur-sm rounded-3xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-gray-800 font-medium">Brand Colors</span>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <div className="p-1.5 bg-white/60 rounded-xl shadow-sm">
                                        <div className="w-10 h-10 bg-gradient-to-r from-[#0DB9B9] to-[#5465FF] rounded-lg shadow-lg" />
                                    </div>
                                    <div className="p-1.5 bg-white/60 rounded-xl shadow-sm">
                                        <div className="w-10 h-10 bg-[#0DB9B9] rounded-lg shadow-lg" />
                                    </div>
                                    <div className="p-1.5 bg-white/60 rounded-xl shadow-sm">
                                        <div className="w-10 h-10 bg-[#5465FF] rounded-lg shadow-lg" />
                                    </div>
                                    <div className="p-1.5 bg-white/60 rounded-xl shadow-sm">
                                        <div className="w-10 h-10 bg-[#F5F5F5] rounded-lg shadow-sm border" />
                                    </div>
                                    <div className="p-1.5 bg-white/60 rounded-xl shadow-sm">
                                        <div className="w-10 h-10 bg-[#212121] rounded-lg shadow-lg" />
                                    </div>
                                </div>
                            </div>

                            {/* Logo Variants Section */}
                            <div className="bg-gradient-to-br from-[#0DB9B9]/10 to-[#5465FF]/10 backdrop-blur-sm rounded-3xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-gray-800 font-medium">Logo Variants</span>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center p-4">
                                        <Image
                                            src="/images/inizio/inizio-branding-logo.svg"
                                            alt="logo-light"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                    <div className="w-20 h-20 bg-[#0DB9B9] rounded-2xl shadow-lg flex items-center justify-center p-4">
                                        <Image
                                            src="/images/inizio/inizio-branding-logo.svg"
                                            alt="logo-colored"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                    <div className="w-20 h-20 bg-[#212121] rounded-2xl shadow-lg flex items-center justify-center p-4">
                                        <Image
                                            src="/images/inizio/inizio-branding-logo.svg"
                                            alt="logo-dark"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-[#0DB9B9]/10 to-[#5465FF]/10 backdrop-blur-sm rounded-3xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-gray-800 font-medium">Logo Variants</span>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center p-4">
                                        <Image
                                            src="/images/inizio/inizio-branding-logo.svg"
                                            alt="logo-light"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                    <div className="w-20 h-20 bg-[#0DB9B9] rounded-2xl shadow-lg flex items-center justify-center p-4">
                                        <Image
                                            src="/images/inizio/inizio-branding-logo.svg"
                                            alt="logo-colored"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                    <div className="w-20 h-20 bg-[#212121] rounded-2xl shadow-lg flex items-center justify-center p-4">
                                        <Image
                                            src="/images/inizio/inizio-branding-logo.svg"
                                            alt="logo-dark"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Typography Section */}
                        <div className="bg-gradient-to-r from-[#0DB9B9] to-[#5465FF] rounded-3xl p-8 shadow-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-white font-medium">Typography System</span>
                            </div>
                            <div className="flex flex-col gap-8">
                                {/* Primary Font */}
                                <div className="text-white space-y-6">
                                    <div>
                                        <div className="text-white/70 text-sm mb-2">Primary Font</div>
                                        <div className="text-4xl font-bold font-ubuntu">Ubuntu</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 font-ubuntu">
                                        <div>
                                            <div className="text-7xl">Aa</div>
                                            <div className="mt-2">Regular</div>
                                        </div>
                                        <div>
                                            <div className="text-7xl font-medium">Aa</div>
                                            <div className="mt-2">Medium</div>
                                        </div>
                                        <div>
                                            <div className="text-7xl font-bold">Aa</div>
                                            <div className="mt-2">Bold</div>
                                        </div>
                                    </div>
                                    <div className="text-sm text-white/80 leading-relaxed font-ubuntu">
                                        ABCDEFGHIJKLMNOPQRSTUVWXYZ
                                        <br />
                                        abcdefghijklmnopqrstuvwxyz
                                        <br />
                                        1234567890
                                    </div>
                                </div>

                                {/* Secondary Font */}
                                <div className="text-white space-y-6 pt-6 border-t border-white/20">
                                    <div>
                                        <div className="text-white/70 text-sm mb-2">Secondary Font</div>
                                        <div className="text-4xl font-bold">Open Sans</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <div className="text-7xl">Aa</div>
                                            <div className="mt-2">Regular</div>
                                        </div>
                                        <div>
                                            <div className="text-7xl font-medium">Aa</div>
                                            <div className="mt-2">Medium</div>
                                        </div>
                                        <div>
                                            <div className="text-7xl font-bold">Aa</div>
                                            <div className="mt-2">Bold</div>
                                        </div>
                                    </div>
                                    <div className="text-sm text-white/80 leading-relaxed">
                                        ABCDEFGHIJKLMNOPQRSTUVWXYZ
                                        <br />
                                        abcdefghijklmnopqrstuvwxyz
                                        <br />
                                        1234567890
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Design System Section */}
            <div className="bg-gradient-to-b from-[#EEEEEE] via-[#0DB9B9]/20 to-[#EEEEEE]">
                <div className="flex flex-col items-center text-center gap-6 mb-16">
                    <Title variant="h2">Design System</Title>
                    <p className="text-gray-500 max-w-2xl text-lg">
                        A comprehensive collection of reusable components and guidelines ensuring consistency across all platforms.
                    </p>
                </div>
                <div className="relative w-full h-[800px] md:h-[1000px] overflow-hidden">
                    <Image
                        src="/images/inizio/inizio-design-system.svg"
                        alt="inizio-design-system"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default InizioBranding;   