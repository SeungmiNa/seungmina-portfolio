export interface Project {
    title: string;
    description: string;
    fullDescription: string;
    type: string;
    slug: string;
    // Add other properties as needed
}

export interface ProjectData {
    [key: string]: Project;
} 