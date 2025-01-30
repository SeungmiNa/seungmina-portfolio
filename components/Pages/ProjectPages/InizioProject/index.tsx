import React from "react";
import Title from "../../../Font/Title";
import InizioBranding from "./InizioBranding";
import InizioDev from "./InizioDev";
import InizioUXUI from "./InizioUXUI";
import Image from 'next/image';

const InizioProject = () => {
    return (
        <>
            <div className="bg-[#141414]">
                <div className="relative -mt-16 mb-12 h-[600px]">
                    <div className="max-w-4xl absolute right-0 w-full h-full">
                        <Image 
                            src="/images/inizio/inizio-bg.png" 
                            alt="Inizio background" 
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className=" max-w-7xl mx-auto absolute inset-0 w-full h-full flex flex-col items-center justify-center px-4">
                        <div className="bg-[#2A3333] text-center py-1 px-4 rounded-full text-sm mb-4">
                            <span className="text-[#8C9696]">Worked at Inizio</span>
                            <span className="text-white ml-2 inline-flex items-center">
                                See open the website 
                                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </div>
                        
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Working as <span className="bg-gradient-to-r from-[#0DB9B9] to-[#5465FF] text-transparent bg-clip-text">UX / UI Designer</span>
                            </h1>
                            <p className="text-[#A3B3B3] max-w-3xl mx-auto">
                                Crafting a website design to empower users in shaping their ideas into concrete projects. 
                                Fueled by AI, this service accelerates the journey, effortlessly translating concepts into 
                                deployable solutions, streamlining the path from idea to delivery.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container mx-auto px-4 sm:px-0 flex flex-col gap-20">
                <InizioBranding />
                <InizioUXUI />
                <InizioDev />
            </div>
        </>
    );
}

export default InizioProject;