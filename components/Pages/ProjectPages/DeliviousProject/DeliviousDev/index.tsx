import Title from "@/components/Font/Title";
import Link from "next/link";
import React from "react";
import { FaReact } from "react-icons/fa";
import { SiEslint, SiFigma, SiPrettier, SiTailwindcss, SiTypescript } from "react-icons/si";

interface TechStack {
    name: string;
    icon: React.ElementType;
    description: string;
}

interface Feature {
    title: string;
    description: string;
}

const DeliviousDev: React.FC = () => {
    const techStack: TechStack[] = [
        {
            name: "TypeScript",
            icon: SiTypescript,
            description: "Strong typing system for better code quality and error prevention"
        },
        {
            name: "React",
            icon: FaReact,
            description: "Component-based architecture for building scalable user interfaces"
        },
        {
            name: "TailwindCSS",
            icon: SiTailwindcss,
            description: "Utility-first CSS for rapid and responsive design implementation"
        },
        {
            name: "Figma",
            icon: SiFigma,
            description: "Design collaboration and prototyping tool"
        },
        {
            name: "ESLint",
            icon: SiEslint,
            description: "Code quality and style enforcement tool"
        },
        {
            name: "Prettier",
            icon: SiPrettier,
            description: "Automatic code formatting for consistency"
        },
    ];

    const features: Feature[] = [
        {
            title: "TypeScript & React Implementation",
            description: "Developed a robust front-end architecture using TypeScript and React, implementing type-safe components and custom hooks for state management."
        },
        {
            title: "Responsive Design Development",
            description: "Built a responsive tablet-based ordering system with TailwindCSS, ensuring consistent performance across different screen sizes and orientations."
        },
        {
            title: "Design System Implementation",
            description: "Implement reusable components and maintaining visual consistency."
        },
    ];

    return (
        <div className="col-span-12 max-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-20">
                <Title className="text-4xl md:text-5xl mb-4" variant="h1">
                    Development
                </Title>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    As a Developer for this project, I focused on building 16 pages of a scalable 
                    and maintainable codebase using TypeScript and React.
                </p>
            </div>

            {/* Tech Stack Section */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Technology Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {techStack.map((tech) => (
                        <div
                            key={tech.name}
                            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <tech.icon className="w-8 h-8 text-blue-600" />
                                <h3 className="text-xl font-semibold">{tech.name}</h3>
                            </div>
                            <p className="text-gray-600">{tech.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Implementation Details Section */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Key Implementations</h2>
                <div className="grid md:grid-cols-3 gap-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-md"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Code Example Section */}
            {/* <section className="mb-20">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Code Example</h2>
                <div className="bg-gray-900 rounded-xl overflow-hidden">
                    <div className="flex justify-between items-center px-6 py-4 bg-gray-800">
                        <h3 className="text-white font-medium">TypeScript Component</h3>
                        <Link
                            href="https://github.com/yourusername/delivious"
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub →
                        </Link>
                    </div>
                    <pre className="p-6 text-gray-300 overflow-x-auto">
                        <code>{`
interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div 
            className={\`
                p-6 rounded-xl shadow-lg
                transition-all duration-300
                hover:shadow-xl
                \${className || ''}
            \`}
        >
            {children}
        </div>
    );
};`}
                        </code>
                    </pre>
                </div>
            </section> */}
        </div>
    );
};

export default DeliviousDev;
