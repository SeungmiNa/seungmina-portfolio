import Image from "next/image";
import Link from "next/link";
import React from "react";

const DeliviousDev = () => {
    const techStack = [
        { name: "React", icon: "/icons/react.svg" },
        { name: "TypeScript", icon: "/icons/typescript.svg" },
        { name: "TailwindCSS", icon: "/icons/tailwind.svg" },
        { name: "Figma", icon: "/icons/figma.svg" },
    ];

    const features = [
        {
            title: "Responsive Design Implementation",
            description: "Developed fully responsive layouts using TailwindCSS, ensuring optimal viewing experience across all devices.",
        },
        {
            title: "Interactive Components",
            description: "Created reusable components with smooth animations and transitions using Framer Motion.",
        },
        {
            title: "Accessibility Optimization",
            description: "Implemented ARIA labels and keyboard navigation to ensure accessibility compliance.",
        },
    ];

    return (
        <div className="col-span-12 mx-auto px-4 py-16">
            {/* Hero Section */}
            <section className="mb-16">
                <h1 className="text-4xl font-bold mb-6">Development & Technical Implementation</h1>
                <p className="text-lg text-gray-600 mb-8">
                    As the front-end developer for Delivious, I focused on creating a seamless,
                    accessible, and performant user experience while maintaining clean and maintainable code.
                </p>
            </section>

            {/* Tech Stack Section */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {techStack.map((tech) => (
                        <div key={tech.name} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                            <Image
                                src={tech.icon}
                                alt={`${tech.name} icon`}
                                width={24}
                                height={24}
                            />
                            <span className="font-medium">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Key Features Implemented</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div key={feature.title} className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Code Showcase Section */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Code Showcase</h2>
                <div className="bg-gray-900 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-white">Example Component</h3>
                        <Link
                            href="https://github.com/yourusername/delivious"
                            className="text-blue-400 hover:text-blue-300"
                            target="_blank"
                        >
                            View on GitHub →
                        </Link>
                    </div>
                    <pre className="text-gray-300 overflow-x-auto">
                        <code>{`
const AnimatedCard = ({ children }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="p-4 bg-white rounded-lg shadow-lg"
        >
            {children}
        </motion.div>
    );
};`}
                        </code>
                    </pre>
                </div>
            </section>

            {/* UI/UX Contributions */}
            <section>
                <h2 className="text-2xl font-bold mb-6">UI/UX Contributions</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Design System Implementation</h3>
                        <p className="text-gray-600">
                            Collaborated with designers to implement a consistent design system,
                            creating reusable components and maintaining visual consistency throughout the application.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Performance Optimization</h3>
                        <p className="text-gray-600">
                            Implemented lazy loading, code splitting, and optimized assets to achieve
                            excellent performance metrics and loading times.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DeliviousDev;
