import { MessageSquare, Scale, Vote, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Platforms() {
  return (
    <section id="platforms" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        
        
        {/* Three cards arranged consistently */}
        <div className="space-y-6">
          {/* ChatGPT Card */}
          <Card className="bg-maroon text-white card-shadow transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8 h-[280px] flex flex-col">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">ChatGPT</h3>
                  <p className="text-white/80 font-medium">AI-Powered Assistant</p>
                </div>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed flex-1">
                Make a nutrition & exercise plan for free. Leveraging advanced AI to create personalized 
                health and wellness solutions tailored to individual needs.
              </p>
              <Button className="bg-white text-maroon px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 w-full mt-auto">
                <ExternalLink className="w-4 h-4 mr-2" />
                Launch ChatGPT
              </Button>
            </CardContent>
          </Card>

          {/* Advocate Card */}
          <Card className="bg-maroon text-white card-shadow transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8 h-[280px] flex flex-col">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">Advocate</h3>
                  <p className="text-white/80 font-medium">Legal Technology</p>
                </div>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed flex-1">
                Find out if you need a lawyer & find one. Connecting people with legal expertise through 
                intelligent matching and accessible legal technology.
              </p>
              <Button className="bg-white text-maroon px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 w-full mt-auto">
                <ExternalLink className="w-4 h-4 mr-2" />
                Launch Advocate
              </Button>
            </CardContent>
          </Card>

          {/* MyVote Card */}
          <Card className="bg-maroon text-white card-shadow transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8 h-[280px] flex flex-col">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Vote className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">MyVote</h3>
                  <p className="text-white/80 font-medium">Civic Engagement Platform</p>
                </div>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed flex-1">
                Get a say in policy. A comprehensive platform that democratizes political engagement 
                by giving citizens a direct voice in policy decisions through intuitive digital interfaces.
              </p>
              <Button className="bg-white text-maroon px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 w-full mt-auto">
                <ExternalLink className="w-4 h-4 mr-2" />
                Launch MyVote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
