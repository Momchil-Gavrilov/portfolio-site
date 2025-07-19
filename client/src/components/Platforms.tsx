import { MessageSquare, Scale, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Platforms() {
  return (
    <section id="platforms" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Platforms</h2>
          <p className="text-xl text-neutral-600">AI-powered tools and innovative solutions</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="card-shadow transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-chatgpt-green/10 rounded-2xl flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-chatgpt-green" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">ChatGPT</h3>
                  <p className="text-chatgpt-green font-medium">AI-Powered Assistant</p>
                </div>
              </div>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Make a nutrition & exercise plan for free. Leveraging advanced AI to create personalized 
                health and wellness solutions tailored to individual needs.
              </p>
              <Button className="bg-chatgpt-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                Launch ChatGPT
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-shadow transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Scale className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">Advocate</h3>
                  <p className="text-purple-600 font-medium">Legal Technology</p>
                </div>
              </div>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Find out if you need a lawyer & find one. Connecting people with legal expertise through 
                intelligent matching and accessible legal technology.
              </p>
              <Button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                Launch Advocate
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
