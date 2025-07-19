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
        
        <Card className="card-shadow transition-all duration-300 hover:shadow-2xl mb-8">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-apple-blue/10 rounded-full text-apple-blue font-medium">
                  <Vote className="w-4 h-4 mr-2" />
                  Featured Project
                </div>
                <h3 className="text-3xl font-bold text-neutral-900">MyVote</h3>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Get a say in policy - A comprehensive platform that democratizes political engagement 
                  by giving citizens a direct voice in policy decisions through intuitive digital interfaces.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">UX Design</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">Civic Tech</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">React</Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">Democracy</Badge>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-apple-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300">
                    View Platform
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-2 border-apple-blue text-apple-blue px-6 py-3 rounded-xl font-semibold hover:bg-apple-blue hover:text-white transition-all duration-300"
                  >
                    Case Study
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-2xl font-bold">MyVote</div>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/20 rounded-xl p-4">
                        <div className="text-sm opacity-80 mb-2">Current Policy</div>
                        <div className="font-medium">Climate Action Initiative</div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="flex-1 bg-white/20 rounded-full p-2 text-center text-sm">Support</div>
                        <div className="flex-1 bg-white/10 rounded-full p-2 text-center text-sm">Oppose</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
