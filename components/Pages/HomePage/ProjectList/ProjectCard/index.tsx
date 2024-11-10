import Title from "@/components/Font/Title";
import { ArrowRightIcon } from "lucide-react";
import { FC } from "react";

type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    period: string;
    role: string;
    category: string;
};

const ProjectCard: FC<ProjectCardProps> = ({ title, description, image, period, role, category }) => {
    return (
        <a className="relative h-[300px] md:h-[500px] flex flex-col group rounded-xl overflow-hidden">
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 h-full transition-colors duration-300 group-hover:bg-black/60" />

            <div className="p-4 h-full max-w-md flex flex-col justify-end z-10">
                <div className="transition-colors duration-300 flex flex-col rounded-xl overflow-hidden">
                    <div className="flex flex-col grow justify-end p-4 space-y-2 transform transition-all duration-300 group-hover:-translate-y-2">
                        <Title variant="h4" className="font-semibold text-white">{title}</Title>
                        <p className="text-sm text-stone-300">{period} | {role} | {category}</p>
                        <p className="text-stone-300">{description}</p>

                        <div className="hidden group-hover:block transition-all duration-300">
                            <div className="pt-4 transform transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                <button className="inline-flex items-center text-white gap-2 text-sm">
                                    View Project
                                    <ArrowRightIcon className="w-4 h-4 shrink-0" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;