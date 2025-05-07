import React from "react";
import { Link } from "@tanstack/react-router";

export default function Sidebar() {
  return (
    <div className="w-[240px] border border-red-500 p-4 flex flex-col gap-4">
      <Link to="/" className="text-blue-700 hover:underline">Home</Link>
      <Link to="/contact" className="text-blue-700 hover:underline">Contact</Link>
      <Link to="/projects" className="text-blue-700 hover:underline">Projects</Link>
    </div>
  );
} 