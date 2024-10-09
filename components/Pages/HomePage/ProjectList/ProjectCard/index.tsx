import { FC } from "react";

type ProjectCardProps = {
    title: string;
    description: string;
};

const ProjectCard: FC<ProjectCardProps> = ({ title, description }) => {
    return (
        <div className="rounded-md bg-red-200 p-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm">{description}</p>
        </div>
    )
}

export default ProjectCard;