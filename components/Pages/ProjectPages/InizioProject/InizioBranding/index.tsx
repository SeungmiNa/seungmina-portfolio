"use client";
import ImageContainer from "@/components/ImageContainer";
import Title from "../../../../Font/Title";
import InizioHoriLogo from "../../../../Logo/InizioHoriLogo";
import InizioSymbolLogo from "../../../../Logo/InizioSymbolLogo";
import InizioVerLogo from "../../../../Logo/InizioVerLogo";

const InizioBranding = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex px-4 py-1 rounded-full bg-[#0DB9B9]/10 border border-[#0DB9B9]/30 mb-3">
                            <span className="text-sm font-medium text-[#0DB9B9]">Branding</span>
                        </div>
                        <Title variant="h2" className="font-bold text-gray-900 mb-6">
                            Brand Guidelines
                        </Title>
                        <p className="text-base lg:text-xl text-gray-600 leading-relaxed">
                            A cohesive design system ensuring consistent branding across all platforms through carefully crafted components and guidelines.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto pb-12">
                {/* Typography & Logo Types */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col justify-center gap-5">
                        {/* varient */}
                        <div className="p-8 bg-white/60 rounded-xl">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">App Logo</h3>
                            <div className="flex flex-wrap gap-4 items-center">
                                <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center p-3 hover:shadow-lg transition-shadow">
                                    <div className="w-full h-full">
                                        <InizioSymbolLogo />
                                    </div>
                                </div>
                                <div className="w-16 h-16 bg-[#0DB9B9] rounded-xl shadow-md flex items-center justify-center p-3 hover:shadow-lg transition-shadow">
                                    <div className="w-full h-full">
                                        <InizioSymbolLogo variant="white" />
                                    </div>
                                </div>
                                <div className="w-16 h-16 bg-[#212121] rounded-xl shadow-md flex items-center justify-center p-3 hover:shadow-lg transition-shadow">
                                    <div className="w-full h-full">
                                        <InizioSymbolLogo />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Logo types */}
                        <div className="p-8 bg-white/60 rounded-xl border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Logo Types</h3>
                            <div className="w-full flex flex-row lg:flex-col gap-4 flex-wrap">
                                <div className="w-full">
                                    <p className="text-gray-500 text-sm">Symbol Logo</p>
                                    <div className="h-full flex items-center justify-center">
                                        <div className="w-20 h-20"><InizioSymbolLogo /></div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-gray-500 text-sm">Vertical Logo</p>
                                    <div className="h-full flex items-center justify-center">
                                        <InizioVerLogo width={140} height={140} />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-gray-500 text-sm">Horizontal Logo</p>
                                    <div className="h-full flex items-center justify-center">
                                        <InizioHoriLogo width={240} height={80} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center gap-5">
                        {/* color */}
                        <div className="p-8 bg-white/60 rounded-xl">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Brand Colors</h3>
                            <div className="grid grid-cols-5 gap-4 lg:gap-2 xl:gap-4">
                                <div className="space-y-3">
                                    <div className="w-full aspect-square bg-gradient-to-r from-[#0DB9B9] to-[#5465FF] rounded-xl shadow-lg border" />
                                    <p className="text-xs text-gray-500 text-center">Gradient</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-full aspect-square bg-[#0DB9B9] rounded-xl shadow-lg border" />
                                    <p className="text-xs text-gray-500 text-center">Primary</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-full aspect-square bg-[#5465FF] rounded-xl shadow-lg border" />
                                    <p className="text-xs text-gray-500 text-center">Secondary</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-full aspect-square bg-[#F5F5F5] rounded-xl shadow-lg border" />
                                    <p className="text-xs text-gray-500 text-center">Light</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-full aspect-square bg-[#212121] rounded-xl shadow-lg border" />
                                    <p className="text-xs text-gray-500 text-center">Dark</p>
                                </div>
                            </div>
                        </div>

                        {/* logo */}
                        <div className="relative w-full aspect-square bg-white/60 rounded-xl overflow-hidden">
                            <ImageContainer
                                image="/images/inizio/inizio-branding-logo.svg"
                                alt="inizio-branding-logo"
                                className="w-full h-auto object-contain p-8"
                            />
                        </div>
                    </div>

                    <div>
                        {/* typography */}
                        <div className="bg-gradient-to-br from-[#0DB9B9]/80 to-[#5465FF]/80 rounded-xl p-8 text-white">
                            <h3 className="text-2xl font-semibold mb-8">Typography System</h3>
                            <div className="space-y-8  flex flex-col">
                                {/* Primary Font */}
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-white/70 text-sm mb-2">Primary Font</p>
                                        <p className="text-2xl xl:text-4xl font-bold font-ubuntu">Ubuntu</p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 xl:gap-8 font-ubuntu">
                                        <div>
                                            <p className="text-4xl xl:text-6xl mb-1">Aa</p>
                                            <p>Regular</p>
                                        </div>
                                        <div>
                                            <p className="text-4xl xl:text-6xl font-medium mb-1">Aa</p>
                                            <p>Medium</p>
                                        </div>
                                        <div>
                                            <p className="text-4xl xl:text-6xl font-bold mb-1">Aa</p>
                                            <p>Bold</p>
                                        </div>
                                    </div>
                                    <div className="text-sm leading-relaxed font-ubuntu break-words">
                                        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                                        abcdefghijklmnopqrstuvwxyz<br />
                                        1234567890
                                    </div>
                                </div>

                                {/* Secondary Font */}
                                <div className="space-y-8 pt-8 border-t border-white/20">
                                    <div>
                                        <p className="text-white/70 text-sm mb-2">Secondary Font</p>
                                        <p className="text-2xl xl:text-4xl font-bold">Open Sans</p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 xl:gap-8">
                                        <div>
                                            <p className="text-4xl xl:text-6xl mb-1">Aa</p>
                                            <p>Regular</p>
                                        </div>
                                        <div>
                                            <p className="text-4xl xl:text-6xl font-medium mb-1">Aa</p>
                                            <p>Medium</p>
                                        </div>
                                        <div>
                                            <p className="text-4xl xl:text-6xl font-bold mb-1">Aa</p>
                                            <p>Bold</p>
                                        </div>
                                    </div>
                                    <div className="text-sm leading-relaxed break-words">
                                        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                                        abcdefghijklmnopqrstuvwxyz<br />
                                        1234567890
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Design System */}
                <div className="overflow-hidden bg-gradient-to-b from-[#EEEEEE] via-[#0DB9B9]/20 to-white/0">
                    <div className="pt-16 lg:pt-32 pb-8 text-center">
                        <Title variant="h3" className="font-bold mb-6">Design System</Title>
                        <p className="text-gray-600 max-w-2xl px-4 mx-auto text-base lg:text-lg">
                            A comprehensive collection of reusable components and guidelines ensuring consistency across all platforms.
                        </p>
                    </div>
                    <div className="relative overflow-hidden">
                        <ImageContainer
                            image="/images/inizio/inizio-design-system.svg"
                            alt="inizio-design-system"
                            className="absolute inset-0 w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InizioBranding;   