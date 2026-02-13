import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import ScrollProvider from "@/components/ScrollProvider";

export default function Home() {
  return (
    <ScrollProvider>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Skills />
        <Experience />
        <Services />
        <Contact />
      </main>
    </ScrollProvider>
  );
}
