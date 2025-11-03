"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShineBorder } from "./ui/shine-border"
import techData from "../data/tech.json"
import { motion } from "framer-motion"
import { GradientText } from "./ui/gradient-text"
import Header from "@/components/header"

// Define the type for a technology
interface Technology {
  name: string;
  icon: string;
  level: string;
  years: string;
}

// Define the type for the technologies object
interface Technologies {
  [category: string]: Technology[];
}

const technologies = techData as Technologies;

export default function Component() {
  const [activeFilter, setActiveFilter] = useState("All")

  const categories = Object.keys(technologies)
  const filters = ["All", ...categories]

  const getFilteredTechnologies = () => {
    if (activeFilter === "All") {
      return technologies
    }
    return { [activeFilter]: technologies[activeFilter as keyof typeof technologies] }
  }

  return (
    <div className="w-full min-h-screen text-white p-6">
      <div className="flex flex-col w-full justify-center items-center">
        {/* Header */}
        <Header
          title="Technology Stack"
          subtitle="Technologies I use to bring ideas to life"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm ${
                activeFilter === filter
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Technology Sections */}
        <div className="space-y-12">
          {Object.entries(getFilteredTechnologies()).map(([category, techs]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-white">{category}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {(techs as Technology[]).map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                  >
                    <Card className="relative bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
                      <ShineBorder borderWidth={2} duration={10} shineColor={["#a78bfa", "#f472b6", "#38bdf8"]} />
                      <CardContent className="p-4 text-center">
                        <div className="text-3xl mb-3">{tech.icon}</div>
                        <h3 className="font-medium text-white mb-2">{tech.name}</h3>
                        <Badge
                          variant={tech.level === "Expert" ? "default" : "secondary"}
                          className={`mb-2 text-xs ${
                            tech.level === "Expert"
                              ? "bg-green-600 hover:bg-green-700 text-white"
                              : "bg-blue-600 hover:bg-blue-700 text-white"
                          }`}
                        >
                          {tech.level}
                        </Badge>
                        <p className="text-xs text-slate-400">{tech.years}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
