import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#19191b] to-[#232225] px-4 py-12">
      {/* Hero Section */}
      <section className="w-full max-w-2xl mb-12 text-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-extrabold text-white">Eric Nichols</h1>
          <h2 className="text-xl font-medium text-[#b3b0b7]">Full Stack Developer</h2>
          <p className="text-base text-[#b3b0b7] max-w-md">
            Building creative solutions for the web. Passionate about modern JavaScript, UI/UX, and scalable systems.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-2xl mb-10">
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
            <CardDescription>Get to know Eric</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              I am a web developer with a passion for building beautiful, performant, and accessible web applications. With experience across the stack, I love working with React, TypeScript, Node.js, and modern CSS frameworks. I enjoy collaborating with teams and turning ideas into reality.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Featured Projects Section */}
      <section className="w-full max-w-2xl mb-10">
        <Card>
          <CardHeader>
            <CardTitle>Featured Projects</CardTitle>
            <CardDescription>A few things I've built</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold text-white">Project One</span> – A modern web app for task management.
              </li>
              <li>
                <span className="font-semibold text-white">Project Two</span> – An open-source UI component library.
              </li>
              <li>
                <span className="font-semibold text-white">Project Three</span> – Real-time chat platform for teams.
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="link">
              <a href="/projects">See all projects →</a>
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <CardDescription>Let's work together</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Interested in collaborating or want to reach out? Feel free to send me an email or connect on LinkedIn.
            </p>
          </CardContent>
          <CardFooter className="gap-4">
            <Button asChild>
              <a href="mailto:eric@example.com">Email Me</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-xs text-[#7c7b80] text-center">© {new Date().getFullYear()} Eric Nichols</footer>
    </div>
  );
}
