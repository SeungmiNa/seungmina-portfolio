import { FC } from "react";
import HomeHero from "./HomeHero";
import ProjectList from "./ProjectList";
import HomeFooter from "./HomeFooter";
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
                <section id="projects" className="px-8 md:px-12 lg:px-20 py-20 md:py-24 lg:py-28 mx-auto">
                    <ProjectList />
                </section>
            </SectionTimeTracker>

            {/* Footer Links */}
            <HomeFooter />
        </div>
    );
}

export default HomePage;