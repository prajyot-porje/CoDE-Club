import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Members } from "@/components/members";
import { Motivation } from "@/components/motivation";
import { Events } from "@/components/events";
import { Contact } from "@/components/contact";
import { ParticleBackground } from "@/components/particle-background";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Motivation />
      <Members /> 
      <Events />  
      <Contact />
    </main>
  );
}
