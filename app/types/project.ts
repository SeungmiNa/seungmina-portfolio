export interface Project {
    title: string;
    description: string;
    image: string;
    slug: string;
    // Add other properties as needed
}

export interface ProjectData {
    [key: string]: Project;
} 