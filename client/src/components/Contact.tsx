import { Mail, Github, Linkedin, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:momchil@example.com";
  };

  const handleResumeDownload = () => {
    // This would typically download a PDF resume
    console.log("Resume download initiated");
  };

  return (
    <section id="contact" className="py-12 px-6 bg-maroon text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-3">Let's Create Something Amazing</h2>
          <p className="text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
            Ready to collaborate on the next breakthrough? Let's connect and build something extraordinary together.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleEmailClick}
            className="bg-white text-maroon px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
          <Button 
            onClick={handleResumeDownload}
            variant="outline"
            className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-maroon transition-all duration-300 bg-transparent"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
