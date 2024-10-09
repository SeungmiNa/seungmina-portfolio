import SolidBadge from "@/components/Badge/SolidBadge";
import SolidButton from "@/components/Buttons/SolidButton";
import TextButton from "@/components/Buttons/TextButton";
import { FC } from "react";

interface AboutPageProps {
    className?: string;
}

const AboutPage: FC<AboutPageProps> = ({ className = "" }) => {
    return (
        <>
            <section className={`${className} py-6 flex flex-col md:flex-row text-gray-800 text-base container mx-auto`}>
                <div className="w-full"><div className="bg-white rounded-full h-full"></div></div>
                <div className="w-full">
                    <div className="max-w-lg">
                        <h1 className="text-2xl font-bold mb-1">Seungmi Na (Sophia)</h1>
                        <div className="mb-4">
                            <SolidBadge title="Working as UX/UI designer" color={"bg-gray-200"} textColor="text-blue-600" />
                        </div>
                        <p className="text-slate-600 text-base">I love bringing designs to life and creating beautiful, usable experiences for users. I love bringing designs to life and creating beautiful, usable experiences for users. usable experiences for users.</p>
                        <div className="flex gap-2 text-gray-400 mt-1 mb-4 text-sm">
                            <p>Mountain View</p>
                            <p>naissme0@gmail.com</p>
                        </div>
                        <SolidButton title="Say Hi👋" />
                        <TextButton title="github" />
                        <TextButton title="linkedIn" />
                    </div>
                </div>
            </section>
            <section>
                <h1 className="text-2xl font-semibold mb-1">I have a skill about...</h1>
                <div className="flex flex-row divide-x-4">
                    <div className="max-w-lg space-x-2">
                        <SolidBadge title="Interaction Design" color="bg-gray-200" textColor="text-gray-900"/>
                        <SolidBadge title="Interaction Design" color="bg-gray-200" textColor="text-gray-900"/>
                    </div>
                    <p className="w-full">
                        Lead the design process, transforming intricate technical requirements into elegant, user-friendly digital solutions with meticulous attention to detail and intuitive interactions.
                    </p>
                </div>
                <div className="flex flex-row divide-x-4">
                    <div className="max-w-lg space-x-2">
                        <SolidBadge title="Interaction Design" color="bg-gray-200" textColor="text-gray-900"/>
                        <SolidBadge title="Interaction Design" color="bg-gray-200" textColor="text-gray-900"/>
                    </div>
                    <p className="w-full">
                        Lead the design process, transforming intricate technical requirements into elegant, user-friendly digital solutions with meticulous attention to detail and intuitive interactions.
                    </p>
                </div>
                <div className="flex flex-row divide-x-4">
                    <div className="max-w-lg space-x-2">
                        <SolidBadge title="Interaction Design" color="bg-gray-200" textColor="text-gray-900"/>
                        <SolidBadge title="Interaction Design" color="bg-gray-200" textColor="text-gray-900"/>
                    </div>
                    <p className="w-full">
                        Lead the design process, transforming intricate technical requirements into elegant, user-friendly digital solutions with meticulous attention to detail and intuitive interactions.
                    </p>
                </div>
                <div className="flex flex-row divide-x-4">
                    <div className="max-w-lg space-x-2">
                        <SolidBadge title="Interaction Design" color="bg-gray-200" textColor="text-gray-900"/>
                        <SolidBadge title="Interaction Design" color="bg-gray-200" textColor="text-gray-900"/>
                    </div>
                    <p className="w-full">
                        Lead the design process, transforming intricate technical requirements into elegant, user-friendly digital solutions with meticulous attention to detail and intuitive interactions.
                    </p>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
