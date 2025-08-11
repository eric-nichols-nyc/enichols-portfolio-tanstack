import React, { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { useMediaQuery } from "../hooks/use-media-query";

export default function Sidebar() {
  const router = useRouterState();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [open, setOpen] = useState(false);
  const active = (path: string) =>
    router.location.pathname === path
      ? "bg-[#232225] text-purple-accent"
      : "hover:bg-[#232225] hover:text-purple-accent";

  // Sidebar content as a variable for reuse
  const sidebarContent = (
    <>
      {/* Avatar and Name */}
      <div className="flex flex-col items-center gap-2 mb-8">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#39383d] via-[#232225] to-purple-accent flex items-center justify-center text-4xl font-bold text-[#b3b0b7] mb-2 shadow-lg transition-transform duration-300 hover:scale-105 relative overflow-hidden group">
          <span className="z-10">EN</span>
          {/* Glowing ring animation */}
          <span className="absolute inset-0 rounded-full border-4 border-purple-accent opacity-30 animate-pulse pointer-events-none"></span>
        </div>
        <div className="text-2xl font-bold">Eric Nichols</div>
        <div className="text-base font-medium text-[#b3b0b7]">Full Stack Developer</div>
        <div className="text-sm text-[#7c7b80]">Building creative solutions</div>
      </div>
      {/* Navigation */}
      <nav className="flex flex-col gap-6 mt-8">
        <Link
          to="/"
          className={`px-5 py-2 rounded ${active("/")}`}
          onClick={() => isMobile && setOpen(false)}
        >
          <span className="text-lg font-semibold">Home</span>
        </Link>
        <Link
          to="/tech"
          className={`px-5 py-2 rounded ${active("/tech")}`}
          onClick={() => isMobile && setOpen(false)}
        >
          <span className="text-lg font-semibold">Tech</span>
        </Link>
        <Link
          to="/experience"
          className={`px-5 py-2 rounded ${active("/experience")}`}
          onClick={() => isMobile && setOpen(false)}
        >
          <span className="text-lg font-semibold">Experience</span>
        </Link>
        <Link
          to="/projects"
          className={`px-5 py-2 rounded ${active("/projects")}`}
          onClick={() => isMobile && setOpen(false)}
        >
          <span className="text-lg font-semibold">Projects</span>
        </Link>
        <Link
          to="/contact"
          className={`px-5 py-2 rounded ${active("/contact")}`}
          onClick={() => isMobile && setOpen(false)}
        >
          <span className="text-lg font-semibold">Contact</span>
        </Link>
        <Link
          to="/feedback"
          className={`px-5 py-2 rounded ${active("/feedback")}`}
          onClick={() => isMobile && setOpen(false)}
        >
          <span className="text-lg font-semibold">Feedback</span>
        </Link>
      </nav>
    </>
  );

  // Footer content
  const footerContent = (
    <div className="flex flex-col items-center gap-4 mb-2">
      <div className="flex gap-6 text-2xl">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-accent">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-accent">
          <FaLinkedin />
        </a>
        <a href="mailto:eric@example.com" className="hover:text-purple-accent">
          <FaEnvelope />
        </a>
      </div>
      <div className="text-xs text-[#7c7b80] mt-2">© 2025 Eric Nichols</div>
    </div>
  );

  // Sidebar classes for mobile/desktop
  const sidebarBase =
    "fixed top-0 left-0 flex flex-col justify-between h-screen w-[285px] bg-[#19191b] text-white px-0 py-8 z-40 transition-transform duration-300";
  const sidebarMobile =
    open
      ? "translate-x-0 shadow-2xl"
      : "-translate-x-full";
  const sidebarDesktop = "translate-x-0";

  return (
    <>
      {/* Hamburger button for mobile */}
      {isMobile && !open && (
        <button
          className="fixed top-4 left-4 z-50 p-2 rounded bg-[#232225] text-white shadow-lg focus:outline-none"
          onClick={() => setOpen(true)}
          aria-label="Open sidebar"
        >
          <FaBars size={24} />
        </button>
      )}
      {/* Overlay for mobile when sidebar is open */}
      {isMobile && open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setOpen(false)}
        />
      )}
      {/* Sidebar */}
      <aside
        className={
          sidebarBase +
          " " +
          (isMobile ? sidebarMobile : sidebarDesktop)
        }
        style={{ pointerEvents: isMobile && !open ? 'none' : 'auto' }}
      >
        {/* Close button for mobile */}
        {isMobile && (
          <button
            className="absolute top-4 right-4 z-50 p-2 rounded bg-[#232225] text-white shadow-lg focus:outline-none"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          >
            <FaTimes size={24} />
          </button>
        )}
        <div>
          {sidebarContent}
        </div>
        {footerContent}
      </aside>
    </>
  );
}
