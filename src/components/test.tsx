import React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Sidebar() {
  const router = useRouterState();
  const active = (path: string) =>
    router.location.pathname === path
      ? "bg-[#232225] text-[#a78bfa]"
      : "hover:bg-[#232225] hover:text-[#a78bfa]";

  return (
    <aside className="flex flex-col justify-between h-screen w-[285px] bg-[#19191b] text-white px-0 py-8">
      <div>
        {/* Avatar and Name */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="w-24 h-24 rounded-full bg-[#39383d] flex items-center justify-center text-4xl font-bold text-[#b3b0b7] mb-2">
            EN
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
          >
            <span className="text-lg font-semibold">Home</span>
          </Link>
          <Link
            to="/projects"
            className={`px-5 py-2 rounded ${active("/projects")}`}
          >
            <span className="text-lg font-semibold">Projects</span>
          </Link>
          <Link
            to="/contact"
            className={`px-5 py-2 rounded ${active("/contact")}`}
          >
            <span className="text-lg font-semibold">Contact</span>
          </Link>
        </nav>
      </div>
      {/* Footer */}
      <div className="flex flex-col items-center gap-4 mb-2">
        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#a78bfa]">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#a78bfa]">
            <FaLinkedin />
          </a>
          <a href="mailto:eric@example.com" className="hover:text-[#a78bfa]">
            <FaEnvelope />
          </a>
        </div>
        <div className="text-xs text-[#7c7b80] mt-2">© 2025 Eric Nichols</div>
      </div>
    </aside>
  );
}
