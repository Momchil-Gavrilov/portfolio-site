import { Vote, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-neutral-600">Innovative solutions at the intersection of technology and humanity</p>
        </div>
        
        {/* MyVote Project - Full Width */}
        <div className="w-full bg-white border-t border-b border-neutral-200 py-16 mb-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-maroon/10 rounded-full text-maroon font-medium">
                  <Vote className="w-4 h-4 mr-2" />
                  Featured Project
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-black">MyVote</h3>
                <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed">
                  Get a say in policy - A comprehensive platform that democratizes political engagement 
                  by giving citizens a direct voice in policy decisions through intuitive digital interfaces.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200 text-base px-4 py-2">UX Design</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200 text-base px-4 py-2">Civic Tech</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200 text-base px-4 py-2">React</Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200 text-base px-4 py-2">Democracy</Badge>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-maroon text-white px-8 py-4 rounded-xl font-semibold hover:bg-maroon/90 transition-all duration-300 text-lg">
                    View Platform
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-2 border-maroon text-maroon px-8 py-4 rounded-xl font-semibold hover:bg-maroon hover:text-white transition-all duration-300 text-lg"
                  >
                    Case Study
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-maroon to-red-700 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className="text-3xl font-bold">MyVote</div>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-white/20 rounded-2xl p-6">
                        <div className="text-sm opacity-80 mb-3">Current Policy</div>
                        <div className="font-medium text-lg">Climate Action Initiative</div>
                      </div>
                      <div className="flex space-x-3">
                        <div className="flex-1 bg-white/20 rounded-full p-3 text-center font-medium">Support</div>
                        <div className="flex-1 bg-white/10 rounded-full p-3 text-center">Oppose</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
