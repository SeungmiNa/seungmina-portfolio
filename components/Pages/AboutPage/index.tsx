"use client";

import { FC } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { withBasePath } from "@/utils/paths";
import { trackDownload, trackEmailClick, trackSocialMediaClick } from "@/lib/analytics";
import SectionTimeTracker from "@/components/Analytics/SectionTimeTracker";
import ImageContainer from "@/components/ImageContainer";
import VideoContainer from "@/components/VideoContainer";

interface SkillCategory {
    title: string;
    skills: Array<{
        name: string;
    }>;
}

const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "UX/UI Expertise",
        skills: [
            { name: "Design Systems" },
            { name: "Responsive Design" },
            { name: "Component Design" },
            { name: "User Experience" },
            { name: "User Interface" },
            { name: "Wireframing" },
            { name: "User Flows" },
            { name: "Branding" },
        ]
    },
    {
        title: "Design Tools",
        skills: [
            { name: "Figma" },
            { name: "Adobe Illustrator" },
            { name: "Adobe Photoshop" },
            { name: "Zeplin" },
        ]
    },
    {
        title: "Languages",
        skills: [
            { name: "JavaScript" },
            { name: "TypeScript" },
            { name: "Markdown(HTML/CSS)" },
        ]
    },
    {
        title: "Frameworks & Libraries",
        skills: [
            { name: "React" },
            { name: "Next.js" },
            { name: "Tailwind CSS" },
            { name: "Storybook" },
            { name: "shadcn/ui" },
            { name: "Headless UI" },
            { name: "Framer Motion" },
        ]
    }
];

const EMAIL = 'naissme0@gmail.com';
const RESUME_PATH = '/2025-seungmi-na.pdf';

const AboutPage: FC = () => {

    const handleEmailClick = () => {
        trackEmailClick(EMAIL, 'about_page_contact_button');
        window.location.href = `mailto:${EMAIL}`;
    };

    const handleResumeClick = () => {
        trackDownload('2025-seungmi-na.pdf');
        window.open(withBasePath(RESUME_PATH), '_blank');
    };

    return (
        <main className="min-h-screen">
            {/* Combined Hero & Skills Section */}
            <div className="container mx-auto px-4 md:px-8 py-16 md:py-20 lg:py-24">
                <div className="w-full flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-24">
                    {/* Left Side - Sticky Video */}
                    <div className="w-full lg:w-1/3 flex-shrink-0">
                        <div className="sticky top-24">
                            <div className="px-16 lg:px-0">
                            <VideoContainer
                                video="/videos/seungmi-na-profile.mov"
                                className="!h-auto overflow-clip"
                                innerClassName="scale-[1.015]"
                                autoplay={true}
                                controls={false}
                                loop={true}
                                muted={true}
                            />
                            </div>
                            <div className="w-full flex flex-col items-center z-10 mt-6 space-y-4">
                                <ImageContainer
                                    image="/images/seungmi-na-logo.png"
                                    alt="Seungmi Na Logo"
                                    className="w-64 md:w-72 h-auto opacity-90"
                                />
                                <a
                                    href={`mailto:${EMAIL}`}
                                    onClick={() => trackEmailClick(EMAIL, 'about_page_left_sidebar')}
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>{EMAIL}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Hero Content + Skills */}
                    <div className="w-full lg:w-2/3 flex-1">
                        {/* Hero Section */}
                        <SectionTimeTracker sectionName="about_hero" className="max-w-xl">
                            <section className="space-y-8 pb-8">
                                {/* Intro Text */}
                                <div className="text-muted-foreground leading-relaxed space-y-8 text-base md:text-lg">
                                    <p>
                                        Hi, I&apos;m Seungmi.
                                        I&apos;m a UX/UI designer who enjoys figuring out why something feels confusing — and then making it simple.
                                    </p>
                                    <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                                        A UX/UI Designer based in the Bay Area, passionate about creating
                                        intuitive and delightful digital experiences.
                                    </p>
                                    <p>
                                        I started in visual design, but over time I became more curious about how products actually work. That curiosity led me to design systems, user flows, and working closely with engineers to turn ideas into real, usable products.
                                    </p>
                                    <p>
                                        I enjoy polishing small details, thinking through edge cases, and building interfaces that feel thoughtful rather than complicated. When I&apos;m not designing, I&apos;m usually refining something just a little more than necessary — because those details matter to me.
                                    </p>
                                    <p>
                                        ☕ Open to casual coffee chats about design and products.
                                    </p>
                                </div>

                                {/* Contact Buttons */}
                                <div className="flex flex-wrap items-center gap-4">
                                    <Button
                                        variant="default"
                                        size="lg"
                                        className="rounded-full px-8 py-6 text-base hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                                        onClick={handleEmailClick}
                                    >
                                        Contact Me 👋
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="rounded-full px-8 py-6 text-base hover:scale-105 transition-all duration-300 border-2"
                                        onClick={handleResumeClick}
                                    >
                                        View Resume
                                    </Button>
                                    <div className="flex gap-2 ml-2">
                                        <Link href="https://linkedin.com/in/seungmi-na" target="_blank">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-12 w-12 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300"
                                                onClick={() => trackSocialMediaClick('linkedin', 'about_page_social_buttons')}
                                            >
                                                <Linkedin className="w-5 h-5" />
                                            </Button>
                                        </Link>
                                        <Link href="https://github.com/SeungmiNa" target="_blank">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-12 w-12 rounded-full hover:bg-accent hover:scale-110 transition-all duration-300"
                                                onClick={() => trackSocialMediaClick('github', 'about_page_social_buttons')}
                                            >
                                                <Github className="w-5 h-5" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        </SectionTimeTracker>

                        <SectionTimeTracker sectionName="about_skills">
                            <div className="space-y-6 py-12">
                                <h2 className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                                    I have skills...
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        I bring a comprehensive skill set that combines technical proficiency with
                                        design expertise, allowing me to create end-to-end solutions from concept
                                        to implementation.
                                    </p>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        My technical foundation combined with design expertise enables me to bridge
                                        the gap between design and development, creating seamless and engaging user
                                        experiences while maintaining clean, efficient code.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-10">
                                {SKILL_CATEGORIES.map((category, idx) => (
                                    <div
                                        key={idx}
                                        className="space-y-2"
                                    >
                                        {/* Category Header */}
                                        <div className="border-b border-border/30">
                                            <h3 className="text-xl font-semibold text-foreground tracking-wide uppercase text-xs">
                                                {category.title}
                                            </h3>
                                        </div>

                                        {/* Skills List */}
                                        <div className="flex flex-wrap gap-x-6 gap-y-1.5">
                                            {category.skills.map((skill, skillIdx) => (
                                                <span
                                                    key={skillIdx}
                                                    className="text-base text-muted-foreground hover:text-foreground transition-colors duration-200"
                                                >
                                                    {skill.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SectionTimeTracker>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutPage;
