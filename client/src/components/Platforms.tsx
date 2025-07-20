import { MessageSquare, Scale, Vote, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Platforms() {
  return (
    <section id="platforms" className="bg-white">
      {/* ChatGPT Platform - Maroon */}
      <div className="w-full bg-maroon text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-white">ChatGPT</h3>
                  <p className="text-white/80 font-medium text-xl">AI-Powered Assistant</p>
                </div>
              </div>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Make a nutrition & exercise plan for free. Leveraging advanced AI to create personalized 
                health and wellness solutions tailored to individual needs.
              </p>
              <Button className="bg-white text-maroon px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 text-lg">
                <ExternalLink className="w-5 h-5 mr-3" />
                Launch ChatGPT
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="w-80 h-60 bg-white/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <MessageSquare className="w-16 h-16 text-white/60 mx-auto mb-4" />
                    <p className="text-white/80 text-lg">ChatGPT Interface</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advocate Platform - White */}
      <div className="w-full bg-white text-black py-20 border-t border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-maroon/10 rounded-3xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-10 h-10 text-maroon" />
                </div>
                <div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-black">Advocate</h3>
                  <p className="text-neutral-600 font-medium text-xl">Legal Technology</p>
                </div>
              </div>
              <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed">
                Find out if you need a lawyer & find one. Connecting people with legal expertise through 
                intelligent matching and accessible legal technology.
              </p>
              <Button className="bg-maroon text-white px-8 py-4 rounded-xl font-semibold hover:bg-maroon/90 transition-all duration-300 text-lg">
                <ExternalLink className="w-5 h-5 mr-3" />
                Launch Advocate
              </Button>
            </div>
            <div className="lg:order-1 flex justify-center lg:justify-start">
              <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200">
                <div className="w-80 h-60 bg-neutral-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Scale className="w-16 h-16 text-maroon/60 mx-auto mb-4" />
                    <p className="text-neutral-600 text-lg">Legal Platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MyVote Platform - Maroon */}
      <div className="w-full bg-maroon text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center flex-shrink-0">
                  <Vote className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-white">MyVote</h3>
                  <p className="text-white/80 font-medium text-xl">Civic Engagement Platform</p>
                </div>
              </div>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Get a say in policy. A comprehensive platform that democratizes political engagement 
                by giving citizens a direct voice in policy decisions through intuitive digital interfaces.
              </p>
              <Button className="bg-white text-maroon px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 text-lg">
                <ExternalLink className="w-5 h-5 mr-3" />
                Launch MyVote
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="w-80 h-60 bg-white/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Vote className="w-16 h-16 text-white/60 mx-auto mb-4" />
                    <p className="text-white/80 text-lg">Voting Interface</p>
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