import React from "react";
import Image from "next/image";
import Title from "@/components/Font/Title";
import { Project } from "next/dist/build/swc";

interface DeliviousUXUIProps {
    project: Project;
}

const DeliviousUXUI: React.FC<DeliviousUXUIProps> = ({

}) => {
    const designWork = [
        {
            title: "User Flow Design",
            description: "Created comprehensive user flows for the ordering and authentication processes, ensuring a smooth and intuitive user experience.",
            image: "/images/delivious/user-flow.png" // Add your actual image path
        },
        {
            title: "Login System Design",
            description: "Designed and implemented a user-friendly login and registration system with clear visual hierarchy and feedback.",
            image: "/images/delivious/login-design.png" // Add your actual image path
        },
        {
            title: "Component Library",
            description: "Developed reusable UI components following consistent design patterns, including buttons, forms, and navigation elements.",
            image: "/images/delivious/components.png" // Add your actual image path
        }
    ];

    return (
        <div className="col-span-12 mx-auto px-4 py-16">
            <div className="space-y-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <Title className="text-4xl md:text-5xl mb-4">
                        UX/UI Design Process
                    </Title>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Leading the design process for Delivious, I focused on creating 
                        intuitive user experiences and consistent visual designs across 
                        the platform.
                    </p>
                </div>

                {/* Design Work Showcase */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {designWork.map((work, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-64 w-full">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {work.title}
                                </h3>
                                <p className="text-gray-600">
                                    {work.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Process Section */}
                <div className="mt-20">
                    <Title className="text-3xl mb-8 text-center">
                        Design Process & Methodology
                    </Title>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-xl mb-3">Research & Planning</h3>
                            <p className="text-gray-600">
                                Conducted user research and competitive analysis to inform 
                                design decisions and identify key user needs.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-xl mb-3">Wireframing & Prototyping</h3>
                            <p className="text-gray-600">
                                Created low and high-fidelity wireframes, followed by 
                                interactive prototypes for user testing.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold text-xl mb-3">Implementation</h3>
                            <p className="text-gray-600">
                                Worked closely with developers to ensure design fidelity 
                                and optimal user experience in the final product.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliviousUXUI;