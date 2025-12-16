'use client';

import Link from "next/link";
import { FC } from "react";
import { trackDownload, trackEmailClick, trackSocialMediaClick } from "@/lib/analytics";
import { withBasePath } from "@/utils/paths";

const HomeFooter: FC = () => {
    const handleEmailClick = () => {
        trackEmailClick('naissme0@gmail.com', 'home_footer_email');
        window.location.href = "mailto:naissme0@gmail.com";
    };

    const handleResumeClick = () => {
        trackDownload('2025-seungmi-na.pdf');
        window.open(withBasePath('/2025-seungmi-na.pdf'), '_blank');
    };

    const handleLinkedInClick = () => {
        trackSocialMediaClick('linkedin', 'home_footer');
    };

    const handleWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="px-8 md:px-12 lg:px-20 py-8 md:py-12 border-t border-gray-200">
            <div className="container mx-auto">
                <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
                    <Link
                        href="#projects"
                        onClick={handleWorkClick}
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                    >
                        Work
                    </Link>
                    <Link
                        href="/about"
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                    >
                        About
                    </Link>
                    <button
                        onClick={handleResumeClick}
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                    >
                        Resume
                    </button>
                    <button
                        onClick={handleEmailClick}
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                    >
                        Email
                    </button>
                    <Link
                        href="https://www.linkedin.com/in/seungmi-na/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLinkedInClick}
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                    >
                        LinkedIn
                    </Link>
                </nav>
            </div>
        </footer>
    );
};

export default HomeFooter;

