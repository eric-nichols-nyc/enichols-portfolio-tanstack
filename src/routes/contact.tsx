import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import { createFileRoute } from '@tanstack/react-router';
import ContentContainer from '@/components/content-container';
import { motion } from 'framer-motion';
import { z } from 'zod';
import AnimatedSubmitButton from '@/components/animated-submit-button';
import { ShineBorder } from '@/components/ui/shine-border';
import Header from '@/components/header';

const emailSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
});

export default function RouteComponent() {
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!form.current) {
      return;
    }
    e.preventDefault();
    setGeneralError(null);
    setErrors({});
    setSubmitting(true);
    setSubmitted(false);

    const formData = Object.fromEntries(new FormData(form.current));
    const isValid = emailSchema.safeParse({
      name: formData.user_name,
      email: formData.user_email,
      message: formData.message,
    });
    if (!isValid.success) {
      const fieldErrors: { name?: string; email?: string; message?: string } = {};
      isValid.error.errors.forEach((err) => {
        if (err.path[0] === 'name') fieldErrors.name = 'Name is required.';
        if (err.path[0] === 'email') fieldErrors.email = 'A valid email is required.';
        if (err.path[0] === 'message') fieldErrors.message = 'Message is required.';
      });
      setErrors(fieldErrors);
      setSubmitting(false);
      return;
    }

    emailjs
      .sendForm(
        'service_3l7j2ah',
        'template_7gs6s1w',
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setSubmitted(true);
          setSubmitting(false);
          setTimeout(() => setSubmitted(false), 3000);
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          setGeneralError('Failed to send message. Please try again later.');
          setSubmitting(false);
        },
      );
  };
  return (
    <ContentContainer>
      <div className="flex flex-col items-center pt-16 min-h-screen justify-center">
        <Header
          title="Contact Me"
          subtitle="Let's connect! Drop a message or just say hi 👋"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-md md:max-w-2xl lg:max-w-3xl bg-gradient-to-br from-[#19191b] via-[#232225] to-[#10131a] border-none shadow-2xl"
          // Card wrapper
        >
          <Card className="relative w-full">
            <ShineBorder
              borderWidth={2}
              duration={10}
              shineColor={['#a78bfa', '#f472b6', '#38bdf8']}
            />
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-3xl font-bold text-[#b983ff]">Let's Work Together</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                {generalError && <div className="text-red-500 text-sm mb-2">{generalError}</div>}
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 p-4 w-full">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="user_name">Name</Label>
                    <Input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      className="bg-[#232225] border border-[#a78bfa] focus:border-[#b983ff] focus:ring-2 focus:ring-[#b983ff] text-white rounded-md px-4 py-2 shadow-md placeholder:text-[#b3b0b7] font-medium transition"
                    />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="user_email">Email</Label>
                    <Input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      className="bg-[#232225] border border-[#a78bfa] focus:border-[#b983ff] focus:ring-2 focus:ring-[#b983ff] text-white rounded-md px-4 py-2 shadow-md placeholder:text-[#b3b0b7] font-medium transition"
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      className="bg-[#232225] border border-[#a78bfa] focus:border-[#b983ff] focus:ring-2 focus:ring-[#b983ff] text-white rounded-md px-4 py-2 shadow-md placeholder:text-[#b3b0b7] font-medium transition min-h-[100px]"
                    />
                    {errors.message && (
                      <span className="text-red-500 text-xs">{errors.message}</span>
                    )}
                  </div>
                  <AnimatedSubmitButton submitting={submitting} submitted={submitted} />
                </form>
              </div>
              <div className="bg-[#18181b] rounded-lg p-4 mt-4">
                <div className="font-semibold text-white mb-2 text-sm flex items-center gap-2">
                  <span className="border-l-4 border-[#a78bfa] pl-2">Connect With Me</span>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.linkedin.com/in/eric-nichols-ab509118/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-md px-3 py-2 bg-[#232225] hover:bg-[#2d2d31] transition text-white"
                  >
                    <FaLinkedin className="text-[#0e76a8]" />
                    <span className="flex-1">Let's Connect</span>
                    <span className="text-xs text-muted-foreground">on LinkedIn</span>
                  </a>
                  <a
                    href="https://instagram.com/ebn646"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-md px-3 py-2 bg-[#232225] hover:bg-[#2d2d31] transition text-white"
                  >
                    <FaInstagram className="text-[#e1306c]" />
                    <span className="flex-1">Instagram</span>
                    <span className="text-xs text-muted-foreground">@ebn646</span>
                  </a>
                  <a
                    href="https://github.com/eric-nichols-nyc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-md px-3 py-2 bg-[#232225] hover:bg-[#2d2d31] transition text-white"
                  >
                    <FaGithub className="text-[#b3b0b7]" />
                    <span className="flex-1">Github</span>
                    <span className="text-xs text-muted-foreground">@eric-nichols-nyc</span>
                  </a>
                  <a
                    href="mailto:ebn646@gmail.com"
                    className="flex items-center gap-3 rounded-md px-3 py-2 bg-[#232225] hover:bg-[#2d2d31] transition text-white"
                  >
                    <FaEnvelope className="text-[#b983ff]" />
                    <span className="flex-1">Email</span>
                    <span className="text-xs text-muted-foreground">ebn646@gmail.com</span>
                  </a>
                </div>
              </div>
            </CardContent>
            <CardFooter />
          </Card>
        </motion.div>
      </div>
    </ContentContainer>
  );
}
