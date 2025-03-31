import PageLayout from "@/components/Layouts/PageLayout";
import { FC } from "react";
import HomeHero from "./HomeHero";
import ProjectList from "./ProjectList";

interface HomePageProps {
    className?: string;
}

const HomePage: FC<HomePageProps> = ({
    className = "",
}) => {

    return (
        <div className={`${className} flex flex-col text-gray-800 text-base mx-auto`}>
            <div className="flex flex-col gap-12 items-center">
                {/* <div className="w-full">
                    <p className="text-center mb-4 text-2xl">My name is</p>
                    <div className="flex justify-center items-end mb-8">
                        <div className="text-center">
                            <h1 className="text-[80px] leading-none text-[#4C6EF5] font-bold">na</h1>
                            <p className="text-sm text-gray-500">Korean Meaning: Me</p>
                            <p className="text-sm text-gray-400">Last Name</p>
                        </div>
                        
                        <div className="text-center mx-4">
                            <h1 className="text-[80px] leading-none text-black font-bold">seung</h1>
                            <p className="text-sm text-gray-500"> .</p>
                            <p className="text-sm text-gray-400">First name</p>
                        </div>
                        
                        <div className="text-center">
                            <h1 className="text-[80px] leading-none text-[#4C6EF5] font-bold">me</h1>
                            <p className="text-sm text-gray-500">English Meaning: Me</p>
                            <p className="text-sm text-gray-400">First name</p>
                        </div>
                    </div>
                    <p className="text-center text-gray-500">nasme@gmail.com</p>
                    
                    <p className="container font-normal mx-auto text-lg leading-normal mt-16 mb-8 max-w-3xl w-full text-neutral-700 dark:text-neutral-300">
                    As a UX/UI designer, I'm passionate about creating beautiful and user-centric designs. I specialize in crafting visually appealing interfaces that enhance the overall user experience. My expertise in HTML and CSS allows me to design flexible layouts that adapt seamlessly to various screen sizes and devices. Every design decision I make is driven by the goal of improving usability and creating delightful digital experiences.
                    </p>
                </div> */}
                <HomeHero />
            </div>

            <section id="projects" className="px-4 py-24 container mx-auto">
                <ProjectList />
            </section>
        </div>
    );
}

export default HomePage;