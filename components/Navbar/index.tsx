'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const pathname = usePathname();

  return (
    <nav className={`w-full bg-white/70 backdrop-blur-md rounded-full flex flex-col sm:flex-row justify-between items-center px-4 py-3 mt-2 sticky top-2 z-10 ${className}`}>
      <Link href="/" className="text-xl font-bold text-gray-950 hover:text-gray-700 transition-colors mb-2 sm:mb-0">
        Seungmi Na
      </Link>
      <div className="flex space-x-4">
        <NavLink href="/" active={pathname === "/"}>
          Home
        </NavLink>
        <NavLink href="/about" active={pathname === "/about"}>
          About
        </NavLink>
        {/* Add more navigation links as needed */}
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, active, children }) => {
  return (
    <Link
      href={href}
      className={`text-base font-medium ${
        active
          ? "text-blue-600 hover:text-blue-800"
          : "text-gray-600 hover:text-gray-800"
      } transition-colors`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
