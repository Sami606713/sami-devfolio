import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Startup } from "@/components/Startup";
import { Research } from "@/components/Research";
import { Learning } from "@/components/Learning";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Startup />
      <Research />
      <Learning />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
