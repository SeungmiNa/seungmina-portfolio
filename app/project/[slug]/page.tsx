import { notFound } from 'next/navigation';
import React from 'react';
// import BrandingProject from '../../../components/Pages/ProjectPages/BrandingProject';
import DeliviousProject from '../../../components/Pages/ProjectPages/DeliviousProject';
import { Project, ProjectData } from '../../types/project';
import ProjectFooter from '../../../components/ProjectFooter';
import InizioProject from '../../../components/Pages/ProjectPages/InizioProject';

// This would typically come from a database or API
const getProjectData = (slug: string): Project | undefined => {
    const projects: ProjectData = {
        'inizio-conceptcraft': {
            title: 'Inizio - ConceptCraft',
            description: 'We automatically save your files as you type.',
            fullDescription: 'A comprehensive project management tool that helps teams collaborate effectively.',
            image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: 'inizio',
            slug: 'inizio-conceptcraft',
        },
        'delivious': {
            title: 'Delivious',
            description: 'A modern food delivery platform',
            fullDescription: 'Delivious revolutionizes the way people order and enjoy their favorite meals.',
            image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: 'delivious',
            slug: 'delivious',
        },
        // 'branding-project': {
        //     title: 'Brand Identity Design',
        //     description: 'Creating memorable brand experiences',
        //     fullDescription: 'A comprehensive brand identity project that encompasses logo design, color palette, and brand guidelines.',
        //     image: "path/to/branding-image.jpg",
        //     type: 'branding',
        //     slug: 'branding-project',
        // },
    };

    return projects[slug as keyof typeof projects];
};

// Add this new function to get adjacent projects
const getAdjacentProjects = (currentSlug: string): { previous?: Project; next?: Project } => {
    const projectOrder = ['delivious', 'inizio-conceptcraft'];
    const currentIndex = projectOrder.indexOf(currentSlug);
    
    return {
        previous: currentIndex > 0 ? getProjectData(projectOrder[currentIndex - 1]) : undefined,
        next: currentIndex < projectOrder.length - 1 ? getProjectData(projectOrder[currentIndex + 1]) : undefined
    };
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

    // Get adjacent projects
    const { previous, next } = getAdjacentProjects(params.slug);

    const renderProject = () => {
        switch (project.type) {
            // case 'default': return <DefaultProject/>;
            case 'inizio': return <InizioProject />;
            case 'delivious': return <DeliviousProject project={project} />;
            // case 'branding': return <BrandingProject project={project} />;
        }
    }

    return (
        <>
            {renderProject()}
            <ProjectFooter
                previousProject={previous}
                nextProject={next}
            />
        </>
    );
}

export default ProjectPage;