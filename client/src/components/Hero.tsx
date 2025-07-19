import { Button } from "@/components/ui/button";
import professionalPhotoPath from "@assets/Professional_Photo_Tall_1752968544821.jpg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="pt-24 pb-16 px-6 hero-gradient text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Designer • UX • <span className="text-yellow-300">Scientist</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
                Creative, MyVote, ChatGPT and Advocate. Momchil Gaurilov redefines how people experience the world through technology.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('projects')} 
                className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                variant="outline"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition-all duration-300 bg-transparent"
              >
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-3xl transform rotate-6"></div>
              <img 
                src={professionalPhotoPath} 
                alt="Momchil Gaurilov Professional Headshot" 
                className="relative w-80 h-96 object-cover rounded-3xl shadow-2xl border-4 border-white/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
