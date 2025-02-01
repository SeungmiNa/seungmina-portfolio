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

interface Skill {
    name: string;
    category?: string;
}

interface Hobby {
    name: string;
    image: string;
    description: string;
}

const AboutPage: FC<AboutPageProps> = ({ className = "" }) => {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "JavaScript", icon: "📜" },
                { name: "TypeScript", icon: "🔷" },
                { name: "Markdown(HTML/CSS)", icon: "📝" },
            ]
        },
        {
            title: "Frameworks & Libraries",
            skills: [
                { name: "React", icon: "⚛️" },
                { name: "Next.js", icon: "▲" },
                { name: "Tailwind CSS", icon: "🎨" },
                { name: "Storybook", icon: "📚" },
                { name: "shadcn/ui", icon: "🎯" },
                { name: "Headless UI", icon: "🎭" },
                { name: "Framer Motion", icon: "✨" },
            ]
        },
        {
            title: "Design Tools",
            skills: [
                { name: "Figma", icon: "🎨" },
                { name: "Adobe Illustrator", icon: "✒️" },
                { name: "Adobe Photoshop", icon: "🖼️" },
                { name: "Zeplin", icon: "🎯" },
            ]
        },
        {
            title: "UX/UI Expertise",
            skills: [
                { name: "Design Systems", icon: "🏗️" },
                { name: "Responsive Design", icon: "📱" },
                { name: "Component Design", icon: "🧩" },
                { name: "User Experience", icon: "🎯" },
                { name: "User Interface", icon: "🖥️" },
                { name: "Wireframing", icon: "📐" },
                { name: "User Flows", icon: "🔄" },
                { name: "Branding", icon: "✨" },
            ]
        }
    ];

    const hobbies: Hobby[] = [
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
        <main className="min-h-screen">
            <div className="container max-w-5xl mx-auto px-4 py-16 lg:py-24 space-y-24">
                {/* Hero Section */}
                <section className="space-y-12">
                    {/* Profile Content */}
                    <div className="max-w-3xl space-y-6">
                        <h1 className="text-5xl font-bold tracking-tight text-foreground">
                            Hello, I'm Seungmi.
                        </h1>
                        <p className="text-xl text-foreground/80 font-medium">
                            A UX/UI Designer based in the Bay Area, passionate about creating 
                            intuitive and delightful digital experiences.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            With a keen eye for detail and a user-centered approach, I transform 
                            complex challenges into elegant solutions. I specialize in creating 
                            beautiful, usable experiences that bridge the gap between user needs 
                            and business goals.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-8">
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>Mountain View, CA</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    <a href="mailto:naissme0@gmail.com" 
                                       className="hover:text-foreground hover:underline transition-colors">
                                        naissme0@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Button variant="default" 
                                    className="rounded-full px-6 hover:scale-105 transition-transform">
                                Contact Me 👋
                            </Button>
                            <Button
                                variant="outline"
                                className="bg-white rounded-full px-6 hover:scale-105 transition-transform"
                                onClick={() => setIsResumeModalOpen(true)}
                            >
                                View Resume
                            </Button>
                            <div className="flex gap-2">
                                <Link href="https://linkedin.com/in/seungmi-na" target="_blank">
                                    <Button variant="ghost" size="icon" 
                                            className="rounded-full hover:scale-105 transition-transform">
                                        <Linkedin className="w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link href="https://github.com/SeungmiNa" target="_blank">
                                    <Button variant="ghost" size="icon" 
                                            className="rounded-full hover:scale-105 transition-transform">
                                        <Github className="w-5 h-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-semibold tracking-tight">
                            Skills & Expertise
                        </h2>
                        <div className="max-w-3xl space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                I bring a comprehensive skill set that combines technical proficiency with 
                                design expertise, allowing me to create end-to-end solutions from concept 
                                to implementation.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                My technical foundation combined with design expertise enables me to bridge 
                                the gap between design and development, creating seamless and engaging user 
                                experiences while maintaining clean, efficient code.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skillCategories.map((category, idx) => (
                            <div key={idx} className="space-y-4">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    {category.title}
                                    <div className="h-px flex-1 bg-border"></div>
                                </h3>
                                <div className="grid gap-3">
                                    {category.skills.map((skill, skillIdx) => (
                                        <div
                                            key={skillIdx}
                                            className="flex items-center gap-3 p-3 bg-card rounded-xl
                                                     shadow-sm hover:shadow transition-all duration-300
                                                     border border-border hover:border-border/80
                                                     hover:bg-accent/50 group"
                                        >
                                            <span className="text-xl w-8 h-8 flex items-center justify-center
                                                           bg-accent rounded-lg group-hover:bg-background
                                                           transition-colors" 
                                                  role="img" 
                                                  aria-label={skill.name}>
                                                {skill.icon}
                                            </span>
                                            <span className="text-sm font-medium">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Hobbies Section */}
                {/* <section className="space-y-8">
                    <Title variant="h6" className="font-semibold text-2xl">
                        Beyond Design
                    </Title>
                    <p className="text-gray-600 max-w-2xl leading-relaxed">
                        When I'm not designing, you can find me exploring various creative pursuits
                        that help maintain my creative energy and bring fresh perspectives to my work.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {hobbies.map((hobby, index) => (
                            <div key={index} 
                                 className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md 
                                          transition-all duration-300">
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
                </section> */}

                {/* Footer */}
                <footer className="flex flex-col sm:flex-row justify-between items-center gap-4 
                                 pt-8 text-sm text-muted-foreground border-t border-border">
                    <p>© 2024 Seungmi Na. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="https://www.linkedin.com/in/seungmi-na/" 
                              target="_blank" 
                              className="hover:text-foreground transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="https://github.com/SeungmiNa" 
                              target="_blank" 
                              className="hover:text-foreground transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>
                    </div>
                </footer>
            </div>
            
            <ResumeModal 
                isOpen={isResumeModalOpen} 
                onClose={() => setIsResumeModalOpen(false)} 
            />
        </main>
    );
};

export default AboutPage;
