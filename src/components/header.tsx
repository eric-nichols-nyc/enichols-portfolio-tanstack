import { ReactNode } from "react";
import { motion } from "framer-motion";
import { GradientText } from "./ui/gradient-text";

interface HeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="w-full flex flex-col items-center mb-8">
      <GradientText>
        <motion.h1
          className="relative text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
      </GradientText>
      {subtitle && (
        <motion.p
          className="text-slate-400 text-lg mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
