import { Microscope, Palette, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">About Me</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            A multidisciplinary creator bridging biomedical engineering, UX design, and scientific research. 
            I believe technology should enhance human potential and make complex systems more accessible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="card-shadow transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-apple-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Microscope className="w-8 h-8 text-apple-blue" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Research & Innovation</h3>
              <p className="text-neutral-600 leading-relaxed">
                Combining scientific rigor with creative problem-solving to develop solutions that matter.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-shadow transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-chatgpt-green/10 rounded-2xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-chatgpt-green" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Design & UX</h3>
              <p className="text-neutral-600 leading-relaxed">
                Crafting intuitive experiences that bridge the gap between complex technology and human needs.
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-shadow transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Education & Teaching</h3>
              <p className="text-neutral-600 leading-relaxed">
                Passionate about sharing knowledge and mentoring the next generation of innovators.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
