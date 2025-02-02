'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import SolidButton from "../Buttons/SolidButton";

interface NavbarProps {
  className?: string;
}

export const goToProjects = () => {
  // Get the base URL without any path segments
  const baseUrl = window.location.origin;
  
  // Extract the base path from the current pathname
  const basePath = window.location.pathname.split('/')[1];
  
  // Check if we're not on the home page
  if (window.location.pathname !== `/${basePath}/`) {
    // Always redirect to the home page with #projects
    window.location.href = `${baseUrl}/#projects`;
    return;
  }

  // If we're already on the home page, just scroll
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const pathname = usePathname();

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "mailto:naissme0@gmail.com";
  };


  // const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   const projectsSection = document.getElementById('projects');

  //   if (projectsSection) {
  //     const offset = 80; // Adjust this value based on your navbar height
  //     const elementPosition = projectsSection.getBoundingClientRect().top;
  //     const offsetPosition = elementPosition + window.pageYOffset - offset;

  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  return (
    <nav className={`container mx-auto w-full shadow bg-white/50 backdrop-blur-md rounded-full flex justify-between items-center p-2 mt-2 sticky top-2 z-[100] ${className}`}>
      <Link href="/" className="tracking-tight ml-4 text-lg tracking-noraml font-semibold text-gray-950 hover:text-gray-700 transition-colors mb-2 sm:mb-0">
        SEUNGMI NA
      </Link>
      <div className="flex space-x-6">
        <NavLink onClick={goToProjects} active={pathname === "/"}>
          Projects
        </NavLink>
        <NavLink href="/about" active={pathname === "/about"}>
          About
        </NavLink>
        {/* Add more navigation links as needed */}
      </div>
      <SolidButton
        title="Contact"
        onClick={handleContactClick}
      />

    </nav>
  );
};

interface NavLinkProps {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, onClick, active, children }) => {
  return (
    <Link
      href={href ?? ""}
      onClick={onClick}
      className={`h-full flex flex-col items-center relative text-base font-medium ${active
        ? "text-blue-600 hover:text-gray-600 font-medium"
        : "text-gray-900 hover:text-gray-600 font-medium"
        } transition-colors`}
    >
      {children}
      {active && <div className="absolute -top-1 h-1 w-1 rounded-full bg-blue-600" />}
    </Link>
  );
};

export default Navbar;
