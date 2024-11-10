import React from 'react';
import { Project } from '../../../../app/types/project';

interface BrandingProjectProps {
    project: Project;
}

export default function BrandingProject({ project }: BrandingProjectProps) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-8 text-center">{project.title}</h1>
                
                <div className="relative h-[600px] mb-12">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                
                <div className="prose max-w-none">
                    <p className="text-2xl mb-8 text-center">{project.description}</p>
                    <div className="mt-12">
                        <h2 className="text-3xl font-bold mb-6">About this project</h2>
                        <p className="text-lg">{project.fullDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 