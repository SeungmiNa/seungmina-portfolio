import { notFound } from 'next/navigation';
import React from 'react';
// import BrandingProject from '../../../components/Pages/ProjectPages/BrandingProject';
import DeliviousProject from '../../../components/Pages/ProjectPages/DeliviousProject';
import { Project, ProjectData } from '../../types/project';
import ProjectFooter from '../../../components/ProjectFooter';
import InizioProject from '../../../components/Pages/ProjectPages/InizioProject';
import Clean71Project from '@/components/Pages/ProjectPages/Clean71Project';
import KoalaProject from '@/components/Pages/ProjectPages/KoalaProject';
import GoogleCalendarProject from '@/components/Pages/ProjectPages/GoogleCalendarProject';
import ProjectViewTracker from '@/components/Analytics/ProjectViewTracker';

// This would typically come from a database or API
const getProjectData = (slug: string): Project | undefined => {
    const projects: ProjectData = {
        'inizio-conceptcraft': {
            title: 'Inizio - ConceptCraft',
            description: 'We automatically save your files as you type.',
            fullDescription: 'A comprehensive project management tool that helps teams collaborate effectively.',
            type: 'inizio',
            slug: 'inizio-conceptcraft',
        },
        'koala': {
            title: 'koala',
            description: 'Animated branding video expressing design through playful storytelling.',
            fullDescription: 'A one-minute animated video created using AI tools to reflect my design values—simplicity, charm, and attention to detail. The baby koala captures my personality and design philosophy in a light, engaging way.',
            type: 'koala',
            slug: 'koala',
        },
        'delivious': {
            title: 'Delivious',
            description: 'A modern food delivery platform',
            fullDescription: 'Delivious revolutionizes the way people order and enjoy their favorite meals.',
            type: 'delivious',
            slug: 'delivious',
        },
        'clean71': {
            title: 'Clean71',
            description: 'A modern food delivery platform',
            fullDescription: 'Delivious revolutionizes the way people order and enjoy their favorite meals.',
            type: 'clean71',
            slug: 'clean71',
        },
        'google-calendar': {
            title: 'Google Calendar Mobile App',
            description: 'Redesigning event creation with conversational AI',
            fullDescription: 'I explore how conversational AI can simplify event creation, helping users set up events in seconds while still feeling confident and in control.',
            type: 'google-calendar',
            slug: 'google-calendar',
        }
    };

    return projects[slug as keyof typeof projects];
};

// Add this new function to get adjacent projects
const getAdjacentProjects = (currentSlug: string): { previous?: Project; next?: Project } => {
    const projectOrder = ['inizio-conceptcraft', 'google-calendar', 'koala', 'delivious', 'clean71'];
    const currentIndex = projectOrder.indexOf(currentSlug);
    
    if (currentIndex === -1) {
        return { previous: undefined, next: undefined };
    }
    
    // First project has no previous, last project links to first project
    const previous = currentIndex > 0 ? getProjectData(projectOrder[currentIndex - 1]) : undefined;
    const next = currentIndex < projectOrder.length - 1 
        ? getProjectData(projectOrder[currentIndex + 1]) 
        : getProjectData(projectOrder[0]); // Last project links to first project
    
    return {
        previous,
        next
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
            case 'clean71': return <Clean71Project />;
            case 'koala': return <KoalaProject />;
            case 'google-calendar': return <GoogleCalendarProject />;
            // case 'branding': return <BrandingProject project={project} />;
        }
    }

    return (
        <>
            <ProjectViewTracker project={project} />
            {renderProject()}
            <ProjectFooter
                previousProject={previous}
                nextProject={next}
            />
        </>
    );
}

export default ProjectPage;

export async function generateStaticParams() {
  // Use the same slugs defined in getAdjacentProjects
  const projectSlugs = ['inizio-conceptcraft', 'google-calendar', 'koala', 'delivious', 'clean71'];
  
  return projectSlugs.map((slug) => ({
    slug: slug,
  }))
}