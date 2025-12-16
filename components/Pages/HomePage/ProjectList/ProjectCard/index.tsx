import Title from "@/components/Font/Title";
import { ArrowRightIcon } from "lucide-react";
import { FC } from "react";
import { trackButtonClick } from "@/lib/analytics";

type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    period: string;
    category: string;
    categoryColor?: string;
    role: string;
    impact: string;
    hint?: string;
    imageClassName?: string;
    size?: "small" | "medium" | "large";
};

const ProjectCard: FC<ProjectCardProps> = ({ title, description, image, period, category, categoryColor, impact, imageClassName, size = "medium" }) => {
    const handleProjectClick = () => {
        trackButtonClick(`project_card_${title.toLowerCase().replace(/\s+/g, '_')}`, 'home_page');
    };

    const heightClass = size === "large"
        ? "h-[340px] lg:h-[520px]" 
        : size === "small"
        ? "h-[340px] lg:h-[280px]"
        : "h-[340px] lg:h-[380px]";

    return (
        <a 
            className={`relative ${heightClass} flex flex-col group rounded-2xl overflow-hidden border border-gray-200/30 bg-gray-50 cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-900/20`}
            onClick={handleProjectClick}
        >
            {/* Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
            />
            
            {/* Gradient Overlay - 호버 시 더 진하게 */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/70 group-hover:to-black/50 ${imageClassName}`} />
            
            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Content */}
            <div className="relative p-5 md:p-6 h-full flex flex-col justify-end items-start z-10 text-left">
                <div className="space-y-2.5 md:space-y-3 transform transition-all duration-500 group-hover:-translate-y-1 w-full">
                    {/* Category & Period Badges - 항상 표시 */}
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className={`px-2.5 py-1 backdrop-blur-sm rounded-full text-[10px] md:text-xs font-medium border ${categoryColor || "bg-gray-700/20 border-gray-400/40 text-gray-200"}`}>
                            {category}
                        </span>
                        <span className="px-2.5 py-1 bg-white/15 backdrop-blur-sm rounded-full text-[10px] md:text-xs font-medium text-white/90 border border-white/20">
                            {period}
                        </span>
                    </div>
                    
                    {/* on hover */}
                    <div className="hidden group-hover:block space-y-2">
                        <Title variant="h4" className="font-bold text-white text-lg md:text-xl lg:text-2xl leading-tight text-left w-full">
                            {title}
                        </Title>
                        
                        <p className="text-sm md:text-base text-white/95 leading-snug font-medium line-clamp-2">
                            {description}
                        </p>
                        
                        {/* Impact */}
                        <div className="text-xs md:text-sm">
                            <span className="font-medium text-white/80">
                                {impact}
                            </span>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-1">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold text-sm border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                View Project
                                <ArrowRightIcon className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;