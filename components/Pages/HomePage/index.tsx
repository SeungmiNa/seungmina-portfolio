import { FC } from "react";
import Link from "next/link";
import SolidButton from "../../Buttons/SolidButton";
import TextButton from "../../Buttons/TextButton";
import ProjectList from "./ProjectList";
import Image from "next/image";

interface HomePageProps {
    className?: string;
}

const HomePage: FC<HomePageProps> = ({
    className = "",
}) => {
    // Sample projects data
    const projects = [
        { id: '1', title: 'Project 1', description: 'Description for Project 1' },
        { id: '2', title: 'Project 2', description: 'Description for Project 2' },
        { id: '3', title: 'Project 3', description: 'Description for Project 3' },
        { id: '4', title: 'Project 4', description: 'Description for Project 4' },
    ];

    return (
        <div className={`${className} flex flex-col text-gray-800 text-base container mx-auto px-4 md:px-8 lg:px-16 py-12`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="mb-6">
                        <p className="text-xl text-purple-600 font-medium">Hello, I'm</p>
                        <h1 className="mt-2 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-bold">Seungmi Nasss</h1>
                    </div>
                    <p className="text-lg leading-relaxed mb-8">
                        As a UX/UI designer, I'm passionate about creating beautiful and user-centric designs. I specialize in crafting visually appealing interfaces that enhance the overall user experience. My expertise in HTML and CSS allows me to design flexible layouts that adapt seamlessly to various screen sizes and devices. Every design decision I make is driven by the goal of improving usability and creating delightful digital experiences.
                    </p>
                    <div className="flex items-center gap-4">
                        <SolidButton title="Say Hi 👋" />
                        <Link href="/about">
                            <TextButton title="About Me" />
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block">
                    <Image
                        src="/path-to-your-image.jpg"
                        alt="Seungmi Na - UX/UI Designer"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <div className="mt-16">
                <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
                <ProjectList projects={projects} />
            </div>
        </div>
    );
}

export default HomePage;