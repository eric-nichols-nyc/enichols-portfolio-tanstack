import { ReactNode } from "react";

export function GradientText({ children }: { children: ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
      {children}
    </span>
  );
}