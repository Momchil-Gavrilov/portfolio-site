import { Instagram, Linkedin, Twitter, Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SocialMedia() {
  return (
    <section id="social" className="py-20 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Connect & Follow</h2>
          <p className="text-xl text-neutral-600">Stay updated with my latest work and insights</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* LinkedIn */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-blue-500 transition-colors duration-300">
                <Linkedin className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">LinkedIn</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Professional updates and career insights
                </p>
              </div>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-xl font-semibold transition-all duration-300">
                <ExternalLink className="w-4 h-4 mr-2" />
                Follow
              </Button>
            </div>
          </div>

          {/* Twitter */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-sky-500 transition-colors duration-300">
                <Twitter className="w-8 h-8 text-sky-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Twitter</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Quick thoughts and tech discussions
                </p>
              </div>
              <Button className="w-full bg-sky-600 text-white hover:bg-sky-700 rounded-xl font-semibold transition-all duration-300">
                <ExternalLink className="w-4 h-4 mr-2" />
                Follow
              </Button>
            </div>
          </div>

          {/* YouTube */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-red-600 transition-colors duration-300">
                <Youtube className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">YouTube</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  In-depth tutorials and project demos
                </p>
              </div>
              <Button className="w-full bg-red-600 text-white hover:bg-red-700 rounded-xl font-semibold transition-all duration-300">
                <ExternalLink className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>

          {/* Instagram */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Instagram</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Behind the scenes and visual stories
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold transition-all duration-300">
                <ExternalLink className="w-4 h-4 mr-2" />
                Follow
              </Button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">Stay Connected</h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Join thousands of followers who stay updated with my latest projects, insights, and innovations in tech and design.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-maroon text-white px-6 py-3 rounded-xl font-semibold hover:bg-maroon/90 transition-all duration-300">
                Newsletter Signup
              </Button>
              <Button variant="outline" className="border-2 border-maroon text-maroon px-6 py-3 rounded-xl font-semibold hover:bg-maroon hover:text-white transition-all duration-300">
                View All Posts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}