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
    imageClassName?: string;
    size?: "small" | "medium" | "large";
};

const ProjectCard: FC<ProjectCardProps> = ({ title, description, image, period, category, imageClassName, size = "medium" }) => {
    const handleProjectClick = () => {
        trackButtonClick(`project_card_${title.toLowerCase().replace(/\s+/g, '_')}`, 'home_page');
    };

    // 모바일/태블릿에서는 모든 카드가 같은 높이, 데스크톱(lg)에서만 크기별로 다른 높이
    const heightClass = size === "large"
        ? "h-[380px] lg:h-[620px]" 
        : size === "small"
        ? "h-[380px] lg:h-[340px]"
        : "h-[380px] lg:h-[440px]";

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
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-black/50 group-hover:via-black/25 group-hover:to-transparent ${imageClassName}`} />
            
            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Content */}
            <div className="relative p-5 md:p-6 h-full flex flex-col justify-end z-10">
                <div className="space-y-3 md:space-y-4 transform transition-all duration-500 group-hover:-translate-y-1">
                    {/* Category Badge */}
                    <div className="inline-block">
                        <span className="px-2.5 py-1 bg-white/15 backdrop-blur-sm rounded-full text-[10px] md:text-xs font-medium text-white/90 border border-white/20">
                            {category}
                        </span>
                    </div>
                    
                    {/* Title */}
                    <Title variant="h4" className="font-bold text-white text-xl md:text-2xl lg:text-3xl leading-tight group-hover:text-white">
                        {title}
                    </Title>
                    
                    {/* Period - 더 명확하게 구분 */}
                    <p className="text-xs md:text-sm font-medium text-white/80">
                        {period}
                    </p>
                    
                    {/* Description - 큰 카드에서만 표시하거나 선택적으로 */}
                    {size === "large" && (
                        <p className="text-sm md:text-base text-gray-200/90 leading-relaxed line-clamp-2">
                            {description}
                        </p>
                    )}

                    {/* CTA Button - 항상 보이지만 호버시 강조 */}
                    <div className="pt-2 md:pt-3 transform transition-all duration-500 translate-y-2 opacity-70 group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white font-semibold text-sm border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-300">
                            View Project
                            <ArrowRightIcon className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;