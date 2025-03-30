'use client';

import { getBasePath } from '@/utils/paths';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SolidButton from "../Buttons/SolidButton";

interface NavbarProps {
  className?: string;
}

export const goToProjects = () => {
  const baseUrl = window.location.origin;
  const basePath = getBasePath();

  // Check if we're not on the home page (need to handle basePath in the comparison)
  if (window.location.pathname !== `${basePath}/`) {
    window.location.href = `${baseUrl}${basePath}/#projects`;
    return;
  }

  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const pathname = usePathname();
  const basePath = getBasePath();

  // Update the active state check to account for basePath
  const isHome = pathname === `${basePath}/` || pathname === '/';
  const isAbout = pathname === `${basePath}/about` || pathname === '/about';

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "mailto:naissme0@gmail.com";
  };

  return (
    <nav className={`container mx-auto w-full shadow bg-white/50 backdrop-blur-md rounded-full flex justify-between items-center p-2 mt-2 sticky top-2 z-[100] ${className}`}>
      <Link href="/" className="tracking-tight ml-4 text-lg tracking-noraml font-semibold text-gray-950 hover:text-gray-700 transition-colors mb-2 sm:mb-0">
        SEUNGMI NA
      </Link>
      <div className="flex space-x-6">
        <NavLink onClick={goToProjects} active={isHome}>
          Projects
        </NavLink>
        <NavLink href="/about" active={isAbout}>
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
        ? "text-[#2563EB] hover:text-gray-600 font-medium"
        : "text-gray-900 hover:text-gray-600 font-medium"
        } transition-colors`}
    >
      {children}
      {active && <div className="absolute -top-1 h-1 w-1 rounded-full bg-[#2563EB]" />}
    </Link>
  );
};

export default Navbar;
