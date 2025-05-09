import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { createFileRoute } from '@tanstack/react-router';
import ContentContainer from '@/components/content-container';

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
});

export default function RouteComponent() {
  return (
    <ContentContainer>
    <div className="flex flex-col items-center pt-16 min-h-screen justify-center">
      <Card className="w-full max-w-md bg-gradient-to-br from-[#19191b] via-[#232225] to-[#10131a] border-none shadow-2xl">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-3xl font-bold text-[#b983ff]">Contact Me</CardTitle>
          <div className="text-sm text-muted-foreground mt-1">Got a question? Send me a message, and I'll get back to you soon.</div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="text-lg font-semibold mb-2 text-white">Get in Touch</div>
            <div className="text-xs text-muted-foreground mb-4">Have something to discuss? Send me a message and let's talk.</div>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="Your Name" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Your Email</Label>
                <Input id="email" type="email" placeholder="Your Email" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="message">Your Message</Label>
                <Textarea id="message" placeholder="Your Message" className="mt-1" />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-[#a78bfa] to-[#b983ff] text-white mt-2">Send Message</Button>
            </form>
          </div>
          <div className="bg-[#18181b] rounded-lg p-4 mt-4">
            <div className="font-semibold text-white mb-2 text-sm flex items-center gap-2">
              <span className="border-l-4 border-[#a78bfa] pl-2">Connect With Me</span>
            </div>
            <div className="flex flex-col gap-2">
              <a href="https://www.linkedin.com/in/eric-nichols-ab509118/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-md px-3 py-2 bg-[#232225] hover:bg-[#2d2d31] transition text-white">
                <FaLinkedin className="text-[#0e76a8]" />
                <span className="flex-1">Let's Connect</span>
                <span className="text-xs text-muted-foreground">on LinkedIn</span>
              </a>
              <a href="https://instagram.com/ebn646" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-md px-3 py-2 bg-[#232225] hover:bg-[#2d2d31] transition text-white">
                <FaInstagram className="text-[#e1306c]" />
                <span className="flex-1">Instagram</span>
                <span className="text-xs text-muted-foreground">@ebn646</span>
              </a>
              <a href="https://github.com/eric-nichols-nyc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-md px-3 py-2 bg-[#232225] hover:bg-[#2d2d31] transition text-white">
                <FaGithub className="text-[#b3b0b7]" />
                <span className="flex-1">Github</span>
                <span className="text-xs text-muted-foreground">@eric-nichols-nyc</span>
              </a>
            </div>
          </div>
        </CardContent>
        <CardFooter />
      </Card>
    </div>
    </ContentContainer>
  );
}
