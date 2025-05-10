import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { GradientText } from "./ui/gradient-text";
import { ShineBorder } from "./ui/shine-border";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative overflow-hidden">
      {/* Hero Section with ShineBorder */}
      <section className="w-full max-w-2xl mb-12 text-center relative">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <ShineBorder borderWidth={3} duration={8} shineColor={["#6366f1","#a21caf","#f472b6"]} className="z-10" />
          <div className="relative z-20 p-10 bg-black/70 rounded-3xl flex flex-col items-center gap-4">
            <GradientText>
              <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">Eric Nichols</h1>
            </GradientText>
            <h2 className="text-2xl font-medium text-[#b3b0b7]">Full Stack Developer</h2>
            <p className="text-lg text-[#b3b0b7] max-w-md">
              Building creative solutions for the web. Passionate about modern JavaScript, UI/UX, and scalable systems.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-2xl mb-10">
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I am a web developer with a passion for building beautiful, performant, and accessible web applications. With experience across the stack, I love working with React, TypeScript, Node.js, and modern CSS frameworks. I enjoy collaborating with teams and turning ideas into reality.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
