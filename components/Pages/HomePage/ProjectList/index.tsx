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
            name: "Google - Mobile Calendar",
            slug: "google-calendar",
            description: "AI-Powered Idea-to-Project Platform",
            href: "/",
            cta: "Learn more",
            background: withBasePath("/images/google/google-hero-image.png"),
            className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
            period: "2025.10 ~ 2025.11",
            role: "UX/UI Designer, UI Developer",
            category: "Mobile Design",
        },
        {
            Icon: FileTextIcon,
            name: "Koala in Details",
            slug: "koala",
            description: "A short animated video expressing my design style and detail-driven mindset through a playful AI-generated koala.",
            href: "/projects/koala",
            cta: "Watch the video",
            background: withBasePath("/images/koala/koala-in-detail-cover-without-text.jpg"),
            className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
            period: "2025.6",
            role: "Concept, Direction, Visual Design",
            category: "Video Design",
            imageClassName: "bg-black/20",
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
            category: "Print Design",
            imageClassName: "bg-black/20",
        },
    ];

    const handleProjectClick = (slug: string) => {
        router.push(`/project/${slug}`);
    };

    const projectsWithLayout = [
        {
            ...projectList.find(p => p.slug === "inizio-conceptcraft")!,
            layout: "lg:col-span-2 lg:row-span-2", // 큰 카드 - 왼쪽 상단
            size: "large" as const
        },
        {
            ...projectList.find(p => p.slug === "koala")!,
            layout: "lg:col-span-2 lg:row-span-1", // 작은 카드 - 오른쪽 상단
            size: "small" as const
        },
        {
            ...projectList.find(p => p.slug === "google-calendar")!,
            layout: "lg:col-span-2 lg:row-span-2", // 큰 카드 - 중앙
            size: "large" as const
        },
        {
            ...projectList.find(p => p.slug === "delivious")!,
            layout: "lg:col-span-1 lg:row-span-1", // 작은 카드
            size: "small" as const
        },
        {
            ...projectList.find(p => p.slug === "clean71")!,
            layout: "lg:col-span-1 lg:row-span-1", // 작은 카드
            size: "small" as const
        },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6" style={{ gridAutoRows: 'min-content' }}>
            {projectsWithLayout.map((pr) => (
                <div
                    key={pr.name}
                    onClick={() => handleProjectClick(pr.slug)}
                    className={`cursor-pointer col-span-1 ${pr.layout}`}
                >
                    <ProjectCard
                        title={pr.name}
                        description={pr.description}
                        image={pr.background}
                        period={pr.period}
                        category={pr.category}
                        imageClassName={pr.imageClassName}
                        size={pr.size}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProjectList;