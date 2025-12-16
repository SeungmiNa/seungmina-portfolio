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

    // 카테고리별 색상 매핑
    const categoryColors: Record<string, string> = {
        "Product Design": "bg-blue-800/40 border-blue-400/40 text-blue-100",
        "Video Design": "bg-green-900/60 border-green-500/40 text-green-100",
        "Print Design": "bg-cyan-500/20 border-cyan-400/40 text-cyan-200",
    };

    const projectList = [
        {
            Icon: FileTextIcon,
            name: "Inizio - ConceptCraft",
            slug: "inizio-conceptcraft",
            description: "Turned vague ideas into structured projects in under 5 minutes",
            href: "/",
            cta: "Learn more",
            background: withBasePath("/images/inizio/inizio-cover-image.png"),
            className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
            period: "2023.02 ~ 2025.02",
            role: "Lead Product Designer",
            category: "Product Design",
            impact: "Startup / 0 → 1",
            hint: "Complex AI UX simplified",
        },
        {
            Icon: FileTextIcon,
            name: "Google - Mobile Calendar",
            slug: "google-calendar",
            description: "Redesigned event creation to reduce setup time by 40%",
            href: "/",
            cta: "Learn more",
            background: withBasePath("/images/google/google-cover-image.png"),
            className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
            period: "2025.10 ~ 2025.11",
            role: "UX/UI Designer",
            category: "Product Design",
            impact: "Concept / Case Study",
            hint: "Heavy interaction & system design",
        },
        {
            Icon: FileTextIcon,
            name: "Koala in Details",
            slug: "koala",
            description: "Expressed design philosophy through playful storytelling in 60 seconds",
            href: "/projects/koala",
            cta: "Watch the video",
            background: withBasePath("/images/koala/koala-in-detail-cover-without-text.jpg"),
            className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
            period: "2025.6",
            role: "Concept, Direction, Visual Design",
            category: "Video Design",
            impact: "Personal Project",
            hint: "AI-driven creative direction",
            imageClassName: "bg-black/20",
        },
        {
            Icon: FileTextIcon,
            name: "Delivious",
            slug: "delivious",
            description: "Streamlined restaurant ordering with intuitive kiosk interface",
            href: "/",
            cta: "Learn more",
            background: withBasePath("/images/delivious/delivious-cover.png"),
            className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
            period: "2022.04 ~ 2022.06",
            role: "UX/UI Designer, Frontend Developer",
            category: "Product Design",
            impact: "Shipped / In production",
            hint: "End-to-end design & development",
            imageClassName: "bg-black/20",
        },
        {
            Icon: FileTextIcon,
            name: "Clean71",
            slug: "clean71",
            description: "Designed visual identity for ocean conservation non-profit",
            href: "/",
            cta: "Learn more",
            background: withBasePath("/images/clean71/clean71-brochure-mockup1-1.png"),
            className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
            period: "2022.11",
            role: "Brand Designer",
            category: "Print Design",
            impact: "Shipped",
            hint: "Brand identity & print design",
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
            ...projectList.find(p => p.slug === "google-calendar")!,
            layout: "lg:col-span-2 lg:row-span-2", // 큰 카드 - 중앙
            size: "large" as const
        },
        {
            ...projectList.find(p => p.slug === "koala")!,
            layout: "lg:col-span-2 lg:row-span-1", // 작은 카드 - 오른쪽 상단
            size: "small" as const
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
                        categoryColor={categoryColors[pr.category]}
                        role={pr.role}
                        impact={pr.impact}
                        hint={pr.hint}
                        imageClassName={pr.imageClassName}
                        size={pr.size}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProjectList;