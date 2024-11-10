import Title from "@/components/Font/Title";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from 'lucide-react';
import Link from "next/link";
import { FC } from "react";

interface AboutPageProps {
    className?: string;
}

const AboutPage: FC<AboutPageProps> = ({ className = "" }) => {
    const skills = [
        { name: "Interaction Design", category: "User Interface" },
        { name: "Responsive Design", category: "Branding" },
        { name: "Design Systems", category: "" },
        { name: "HTML / CSS", category: "" },
        { name: "React", category: "" },
        { name: "TailwindCSS", category: "" },
    ];

    const hobbies = [
        { name: "Piano", image: "/piano.jpg" },
        { name: "Hiking", image: "/hiking.jpg" },
        { name: "Drawing", image: "/drawing.jpg" },
    ];

    return (
        <div className="max-w-5xl mx-auto px-4 py-8 lg:py-24 space-y-24">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full" />
                <h1 className="text-2xl font-bold">Seungmi Na</h1>
                <p className="text-sm text-gray-600">Working as UX/UI designer</p>
                <p className="text-sm max-w-md mx-auto">
                    I love bringing designs to life and creating beautiful,
                    usable experiences for users.
                </p>
                <div className="flex items-center justify-center gap-4 text-sm">
                    <span className="text-gray-600">Mountain View</span>
                    <span className="text-gray-600">naissme0@gmail.com</span>
                </div>
                <div className="flex justify-center gap-4">
                    <Button variant="default" className="rounded-full">
                        Say Hi 👋
                    </Button>
                    <Link href="https://linkedin.com" target="_blank">
                        <Button variant="ghost" size="icon"><Linkedin size={20} /></Button>
                    </Link>
                    <Link href="https://github.com" target="_blank">
                        <Button variant="ghost" size="icon"><Github size={20} /></Button>
                    </Link>
                </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
                <Title variant="h6" className='font-semibold'>I have a skill about...</Title>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex gap-2">
                            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                {skill.name}
                            </span>
                            {skill.category && (
                                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                    {skill.category}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
                <div className="space-y-4">
                    <p className="text-sm">
                        Lead the design process, transforming intricate technical requirements
                        into elegant, user-friendly digital solutions with meticulous attention to
                        detail and intuitive interactions.
                    </p>
                    <p className="text-sm">
                        Design visually appealing and effective user interfaces for web and
                        mobile applications, seamlessly integrating motion with wireframes,
                        interactive prototypes, and high-fidelity UI designs, while leveraging
                        advanced proficiency with the Figma tool.
                    </p>
                </div>
                <Button variant="outline" className="rounded-full">
                    Open the Resume
                </Button>
            </div>

            {/* Hobbies Section */}
            <div className="space-y-6">
                <Title variant="h6" className='font-semibold'>Still want to know a little more?</Title>
                <p className="text-sm text-gray-600">
                    Still want to know a little more? tell about hobby
                    playing piano, drawing, and organized the ...
                </p>
                <div className="grid grid-cols-2 gap-4">
                    {hobbies.map((hobby, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-medium">{hobby.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="flex justify-between items-center pt-8 text-sm text-gray-600">
                <p>© 2024 All Rights Reserved</p>
                <div className="flex gap-4">
                    <Link href="https://linkedin.com" target="_blank">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="https://github.com" target="_blank">
                        <Github size={20} />
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default AboutPage;
