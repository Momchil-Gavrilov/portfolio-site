import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Teaching from "@/components/Teaching";
import Projects from "@/components/Projects";
import Platforms from "@/components/Platforms";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Platforms />
      <div className="section-divider"></div>
      <Experience />
      <div className="section-divider"></div>
      <Education />
      <Teaching />
      <div className="section-divider"></div>
      <Projects />
      <div className="section-divider"></div>
      <Contact />
      <Footer />
    </div>
  );
}
