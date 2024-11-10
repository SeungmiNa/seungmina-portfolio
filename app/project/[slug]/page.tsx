import { notFound } from 'next/navigation';
import React from 'react';
import BrandingProject from '../../../components/Pages/ProjectPages/BrandingProject';
import DeliviousProject from '../../../components/Pages/ProjectPages/DeliviousProject';
import { Project, ProjectData } from '../../types/project';
import ProjectFooter from '../../../components/ProjectFooter';

// This would typically come from a database or API
const getProjectData = (slug: string): Project | undefined => {
    const projects: ProjectData = {
        'inizio-conceptcraft': {
            title: 'Inizio - ConceptCraft',
            description: 'We automatically save your files as you type.',
            fullDescription: 'A comprehensive project management tool that helps teams collaborate effectively.',
            image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: 'default'
        },
        'delivious': {
            title: 'Delivious',
            description: 'A modern food delivery platform',
            fullDescription: 'Delivious revolutionizes the way people order and enjoy their favorite meals.',
            image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: 'delivious'
        },
        'branding-project': {
            title: 'Brand Identity Design',
            description: 'Creating memorable brand experiences',
            fullDescription: 'A comprehensive brand identity project that encompasses logo design, color palette, and brand guidelines.',
            image: "path/to/branding-image.jpg",
            type: 'branding'
        },
    };

    return projects[slug as keyof typeof projects];
};

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
    const project = getProjectData(params.slug);

    if (!project) {
        notFound();
    }

    const renderProject = () => {
        switch (project.type) {
            // case 'default': return <DefaultProject/>;
            case 'delivious': return <DeliviousProject project={project} />;
            case 'branding': return <BrandingProject project={project} />;
        }
    }

    return (
        <>
            {renderProject()}
            <ProjectFooter
                previousProject={""}
                nextProject={""}
            />
        </>
    );
}

export default ProjectPage;


// export default function ProjectPage({ params }: ProjectPageProps) {
//     const project = getProjectData(params.slug);

//     if (!project) {
//         notFound();
//     }

//     // Render different layouts based on project type
//     switch (project.type) {
//         case 'delivious':
//             return <DeliviousProject project={project} />;
//         case 'branding':
//             return <BrandingProject project={project} />;
//         default:
//             return (
//                 <div className="container mx-auto px-4 py-8">
//                     <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
//                     <div className="relative h-[400px] mb-8">
//                         <img
//                             src={project.image}
//                             alt={project.title}
//                             className="w-full h-full object-cover rounded-lg"
//                         />
//                     </div>
//                     <div className="prose max-w-none">
//                         <p className="text-xl mb-4">{project.description}</p>
//                         <div className="mt-8">
//                             <h2 className="text-2xl font-bold mb-4">About this project</h2>
//                             <p>{project.fullDescription}</p>
//                         </div>
//                     </div>

//                     <ProjectFooter 
//                         previousProject={previousProject}
//                         nextProject={nextProject}
//                     />
//                 </div>
//             );
//     }
// } 