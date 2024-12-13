import React from "react";
import InizioDev from "./InizioDev";
// import Title from "@/components/Title";

const InizioProject = () => {
    return (
        <>
            <div className="relative -mt-16 mb-12 h-[600px]">
                <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-black">
                    images
                </div>
                <div className="absolute inset-0 w-full h-full flex items-center justify-center text-white flex flex-col">
                    <p>working at inizio as ux/ui designer</p>
                    {/* <Title variant="h1" className={"font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl"}>title goes here</Title> */}
                    <p> add motion here for text</p>

                </div> 
            </div>

            <div className="container mx-auto px-4 sm:px-0">
                <InizioDev/>
            </div>
        </>
    );
}

export default InizioProject;