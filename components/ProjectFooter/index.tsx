import { Project } from "@/app/types/project";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import PageLayout from "../Layouts/PageLayout";
interface ProjectFooterProps {
    previousProject?: Project | any;
    nextProject?: Project | any;
}

const ProjectFooter: React.FC<ProjectFooterProps> = ({ previousProject, nextProject }) => {
    return (
        <PageLayout>
            <footer className="py-12">
                <div className="flex justify-between items-center">
                    {previousProject ? (
                    <Link href={`/project/${previousProject?.slug}`} className="group">
                        <div className="flex items-center gap-2">
                            <ChevronLeftIcon className="w-6 h-6 shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-stone-500 text-sm font-medium">Previous</span>
                                <p className="text-base font-semibold text-stone-600 group-hover:text-stone-900">{previousProject?.title}</p>
                            </div>
                        </div>
                    </Link>
                    ):(<div></div>)}

                    {nextProject ? (
                    <Link href={`/project/${nextProject?.slug}`} className="group">
                        <div className="flex items-center gap-2">
                            <div className="flex flex-col">
                                <span className="text-stone-400 text-sm font-medium">Next</span>
                                <p className="text-base font-semibold text-stone-600 group-hover:text-stone-900">{nextProject?.title}</p>
                            </div>
                            <ChevronRightIcon className="w-6 h-6 shrink-0" />
                        </div>
                    </Link>
                    ):(<div></div>)}
                </div>
            </footer>
        </PageLayout>
    );
};

export default ProjectFooter;
