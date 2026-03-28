import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import ScrollProvider from "@/components/ScrollProvider";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <SmoothScroll>
      <ScrollProvider>
        <main className="min-h-screen">
          <CustomCursor />
          <Navigation />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Services />
          <Contact />
        </main>
      </ScrollProvider>
    </SmoothScroll>
  );
}
