'use client';
import { FileTextIcon } from "@radix-ui/react-icons";
// import { CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import ProjectCard from "./ProjectCard";
import { withBasePath } from "@/utils/paths";

// interface Project {
//     id: string;
//     title: string;
//     description: string;
// }

// interface ProjectListProps {
// }

const ProjectList: React.FC = () => {
    const router = useRouter();

    const projectList = [
        {
            Icon: FileTextIcon,
            name: "Inizio - ConceptCraft",
            slug: "inizio-conceptcraft",
            description: "AI-Powered Idea-to-Project Platform",
            href: "/",
            cta: "Learn more",
            background: withBasePath("/images/inizio/inizio-cover.png"),
            className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
            period: "2023.02 ~ Present",
            role: "UX/UI Designer, UI Developer",
            category: "Web Design",
        },
        {
            Icon: FileTextIcon,
            name: "Delivious",
            slug: "delivious",
            description: "Al Delivery and Order Services in Restaurant",
            href: "/",
            cta: "Learn more",
            background: withBasePath("/images/delivious/delivious-cover.png"),
            className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
            period: "2022.04 ~ 2022.06",
            role: "UX/UI Designer, Frontend Developer",
            category: "Kiosk Design",
            imageClassName: "bg-black/20",
        },
        {
            Icon: FileTextIcon,
            name: "Clean71",
            slug: "clean71",
            description: "The Earth's Water Heritage non-profit organization",
            href: "/",
            cta: "Learn more",
            background: withBasePath("/images/clean71/clean71-brochure-mockup1-1.png"),
            className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
            period: "2022.11",
            role: "Cover blooklet and logo and color",
            category: "Blooket Design",
            imageClassName: "bg-black/20",
        },
        // {
        //     Icon: FileTextIcon,
        //     name: "Landing Page",
        //     slug: "landing-page",
        //     description: "Supports 100+ languages and counting.",
        //     href: "/",
        //     cta: "Learn more",
        //     background: "https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
        //     period: "2024.01 ~ 2024.03",
        //     role: "UX/UI Designer",
        //     category: "Web Design",
        // },
        // {
        //     Icon: CalendarIcon,
        //     name: "Branding Design",
        //     slug: "branding-design",
        //     description: "Use the calendar to filter your files by date.",
        //     href: "/",
        //     cta: "Learn more",
        //     background: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
        //     period: "2024.01 ~ 2024.03",
        //     role: "Branding Designer",
        //     category: "Branding Design",
        // },
        // {
        //     Icon: BellIcon,
        //     name: "Notifications",
        //     description:
        //         "Get notified when someone shares a file or mentions you in a comment.",
        //     href: "/",
        //     cta: "Learn more",
        //     background: <img className="absolute -right-20 -top-20 opacity-60" />,
        //     className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
        // },
    ];

    const handleProjectClick = (slug: string) => {
        router.push(`/project/${slug}`);
    };

    return (
        <div className="flex flex-col gap-7">
            {projectList.map((pr) => (
                <div
                    key={pr.name}
                    onClick={() => handleProjectClick(pr.slug)}
                    className="cursor-pointer"
                >
                    <ProjectCard
                        title={pr.name}
                        description={pr.description}
                        image={pr.background}
                        period={pr.period}
                        role={pr.role}
                        category={pr.category}
                        imageClassName={pr.imageClassName}
                    />
                </div>
            ))}
            
        </div>
    );
};

export default ProjectList;