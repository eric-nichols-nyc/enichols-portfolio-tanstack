import React from "react";

export default function StickyHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="sticky top-0 z-10 bg-[#19191b] border-b border-[#232225] py-4 mb-6">
      {children}
    </div>
  );
} 