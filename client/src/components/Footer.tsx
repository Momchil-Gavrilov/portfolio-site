import { Github, Linkedin, Mail } from "lucide-react";
import personalLogoPath from "@assets/PersonalBrandLogo_1752968544820.png";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img 
              src={personalLogoPath} 
              alt="Momchil G Personal Brand Logo" 
              className="w-8 h-8 brightness-0 invert"
            />
            <span className="text-xl font-semibold">Momchil Gavrilov</span>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/momchilg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/momchilg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:momchil@example.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Momchil Gavrilov. All rights reserved. Designed for GitHub Pages.</p>
        </div>
      </div>
    </footer>
  );
}
