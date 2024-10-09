import { FC } from "react";
import ProjectCard from "./ProjectCard";

// Replace empty interface with a more specific one or use 'type' instead
type Project = {
  id: string;
  title: string;
  description: string;
};

type ProjectListProps = {
  projects: Project[];
};

// Use the type in your component
const ProjectList: FC<ProjectListProps> = ({ projects }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                />
            ))}
        </div>
    )
}

export default ProjectList;