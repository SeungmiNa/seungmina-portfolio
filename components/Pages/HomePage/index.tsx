import { FC } from "react";
import HomeHero from "./HomeHero";
import ProjectList from "./ProjectList";
import SectionTimeTracker from "@/components/Analytics/SectionTimeTracker";

interface HomePageProps {
    className?: string;
}

const HomePage: FC<HomePageProps> = ({
    className = "",
}) => {

    return (
        <div className={`${className} flex flex-col text-gray-800 text-base mx-auto`}>
            <div className="flex flex-col items-center">
                <HomeHero />
            </div>

            {/* Featured Projects Preview - Hero 바로 아래 */}
            <SectionTimeTracker sectionName="home_projects">
                <section id="projects" className="px-4 md:px-8 lg:px-16 pb-12 md:pb-16 lg:pb-28 mx-auto">
                    <ProjectList />
                </section>
            </SectionTimeTracker>
        </div>
    );
}

export default HomePage;