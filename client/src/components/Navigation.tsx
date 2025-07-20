import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import personalLogoPath from '@assets/PersonalBrandLogo_1752968544820.png';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={personalLogoPath} 
              alt="Momchil G Personal Brand Logo" 
              className="w-10 h-10"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-neutral-600 hover:text-maroon transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="text-neutral-600 hover:text-maroon transition-colors duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('education')} 
              className="text-neutral-600 hover:text-maroon transition-colors duration-300"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-neutral-600 hover:text-maroon transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('platforms')} 
              className="text-neutral-600 hover:text-maroon transition-colors duration-300"
            >
              Platforms
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-maroon hover:bg-maroon-dark text-white px-6 py-2 rounded-full transition-all duration-300"
            >
              Contact
            </Button>
          </div>
          
          <button 
            className="md:hidden text-neutral-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left text-neutral-600 hover:text-maroon transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="block w-full text-left text-neutral-600 hover:text-maroon transition-colors duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('education')} 
              className="block w-full text-left text-neutral-600 hover:text-maroon transition-colors duration-300"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="block w-full text-left text-neutral-600 hover:text-maroon transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('platforms')} 
              className="block w-full text-left text-neutral-600 hover:text-maroon transition-colors duration-300"
            >
              Platforms
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="w-full bg-maroon hover:bg-maroon-dark text-white px-6 py-2 rounded-full transition-all duration-300"
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
