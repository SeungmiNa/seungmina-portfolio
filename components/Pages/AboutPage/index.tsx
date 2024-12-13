"use client";
import Title from "@/components/Font/Title";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import ResumeModal from "./ResumeModal";
interface AboutPageProps {
    className?: string;
}

const AboutPage: FC<AboutPageProps> = ({ className = "" }) => {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

    const skills = [
        { name: "Interaction Design" },
        { name: "Responsive Design" },
        { name: "Design Systems" },
        { name: "HTML / CSS" },
        { name: "React" },
        { name: "TailwindCSS" },
    ];

    const hobbies = [
        {
            name: "Piano",
            image: "/piano.jpg",
            description: "Playing piano helps me find harmony in design, just like in music."
        },
        {
            name: "Hiking",
            image: "/hiking.jpg",
            description: "Nature inspires my creativity and helps me maintain a fresh perspective."
        },
        {
            name: "Drawing",
            image: "/drawing.jpg",
            description: "Sketching allows me to quickly visualize ideas and explore creative solutions."
        },
    ];

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8 lg:py-24 space-y-32">
                {/* Header Section */}
                <div className="text-center space-y-8 max-w-3xl">
                    <div className="space-y-4 text-left">
                        <h1 className="text-4xl font-bold">Hello.</h1>
                        <p className="text-base text-stone-700 font-medium">
                            I work as a UX/UI Designer in the Bay Area. tell more about ...
                            I'm passionate about bringing designs to life and creating beautiful,
                            usable experiences that delight users. With a keen eye for detail.
                        </p>
                        <p className="text-stone-700 mx-auto leading-relaxed">
                            I'm passionate about bringing designs to life and creating beautiful,
                            usable experiences that delight users. With a keen eye for detail and
                            a user-centered approach, I transform complex challenges into elegant solutions.
                            I'm passionate about bringing designs to life and creating beautiful,
                            usable experiences that delight users. With a keen eye for detail and
                            a user-centered approach, I transform complex challenges into elegant solutions.
                        </p>
                    </div>
                    <div className="flex gap-6 text-sm">
                        <div className="flex gap-1 items-center">
                            <MapPin className="text-stone-500 w-4 h-4 shrink-0" />
                            <span className="text-stone-500">Mountain View</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <Mail className="text-stone-500 w-4 h-4 shrink-0" />
                            <a href="mailto:naissme0@gmail.com" className="text-stone-500 hover:underline">
                                naissme0@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="default" className="rounded-full px-6 hover:scale-105 transition-transform">
                            Say Hi 👋
                        </Button>
                        <Link href="https://linkedin.com/in/seungmi-na" target="_blank" className="ml-2">
                            <Button variant="ghost" size="icon" className="rounded-full hover:scale-105 transition-transform">
                                <Linkedin size={20} />
                            </Button>
                        </Link>
                        <Link href="https://github.com/SeungmiNa" target="_blank">
                            <Button variant="ghost" size="icon" className="rounded-full hover:scale-105 transition-transform">
                                <Github size={20} />
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="space-y-8">
                    <Title variant="h6" className="font-semibold text-2xl">Skills & Expertise</Title>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                            <div key={index} className="flex gap-2">
                                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
                                    {skill.name}
                                </span>
                                {skill.category && (
                                    <span className="bg-gray-50 px-4 py-2 rounded-full text-sm text-gray-600">
                                        {skill.category}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="space-y-6 max-w-3xl">
                        <p className="text-gray-600 leading-relaxed">
                            I lead the design process by transforming intricate technical requirements
                            into elegant, user-friendly digital solutions with meticulous attention to
                            detail and intuitive interactions.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            My expertise lies in designing visually appealing and effective user interfaces
                            for web and mobile applications. I seamlessly integrate motion with wireframes,
                            create interactive prototypes, and deliver high-fidelity UI designs using Figma.
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        className="rounded-full px-6 hover:scale-105 transition-transform"
                        onClick={() => {
                            setIsResumeModalOpen(true);
                        }}
                    >
                        View Resume
                    </Button>
                </div>

                {/* Hobbies Section */}
                <div className="space-y-8">
                    <Title variant="h6" className="font-semibold text-2xl">Beyond Design</Title>
                    <p className="text-gray-600 max-w-2xl leading-relaxed">
                        When I'm not designing, you can find me exploring various creative pursuits
                        that help maintain my creative energy and bring fresh perspectives to my work.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {hobbies.map((hobby, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                                    <Image
                                        src={hobby.image}
                                        alt={hobby.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-medium mb-2">{hobby.name}</h3>
                                <p className="text-gray-600 text-sm">{hobby.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <footer className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-sm text-gray-600 border-t">
                    <p>© 2024 Seungmi Na</p>
                    <div className="flex gap-6">
                        <Link href="https://www.linkedin.com/in/seungmi-na/" target="_blank" className="hover:text-gray-900 transition-colors">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="https://github.com/SeungmiNa" target="_blank" className="hover:text-gray-900 transition-colors">
                            <Github size={20} />
                        </Link>
                    </div>
                </footer>
            </div>
            
            <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
        </>
    );
};

export default AboutPage;
