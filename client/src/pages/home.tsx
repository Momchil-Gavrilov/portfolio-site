import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Teaching from "@/components/Teaching";
import SocialMedia from "@/components/SocialMedia";
import Platforms from "@/components/Platforms";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Platforms />
      <Experience />
      <Education />
      <Teaching />
      <SocialMedia />
      <div className="section-divider"></div>
      <Contact />
      <Footer />
    </div>
  );
}
