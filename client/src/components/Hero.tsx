import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import professionalPhotoPath from "@assets/Professional_Photo_Tall_1752968544821.jpg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="pt-24 pb-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Name, Photo, Role, Description */}
          <div className="space-y-6">
            {/* Name */}
            <h1 className="text-4xl lg:text-5xl font-bold text-black text-center">
              Momchil Gavrilov
            </h1>
            
            {/* Photo in golden circular frame */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="relative">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-600 p-2 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-amber-200 via-yellow-300 to-amber-500 p-10">
                      <img 
                        src={professionalPhotoPath} 
                        alt="Momchil Gavrilov Professional Headshot" 
                        className="w-full h-full object-cover rounded-full shadow-inner border border-amber-200"
                        style={{
                          objectPosition: 'center 5%',
                          transform: 'scale(1.8)',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  </div>
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 opacity-30 blur-sm -z-10"></div>
                </div>
              </div>
            </div>
            
            {/* Role/Position */}
            <h2 className="text-xl lg:text-2xl font-semibold text-neutral-600 text-center">
              Designer • UX • Scientist
            </h2>
            
            {/* Description */}
            <p className="text-lg text-neutral-700 leading-relaxed max-w-lg text-center">Creator of MyVote, ChatGPT and Advocate. Momchil Gavrilov redefines how people experience the world through technology.</p>
          </div>

          {/* Right side - YouTube Video Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-2xl">
              <div className="bg-gray-100 rounded-2xl p-12 shadow-lg h-[600px] flex flex-col">
                <div className="flex-1 bg-gray-300 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-maroon rounded-full flex items-center justify-center mx-auto mb-6">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-gray-600 font-medium text-xl">YouTube Video</p>
                    <p className="text-gray-500 text-lg">Coming Soon</p>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-black text-center">
                  Featured Content
                </h3>
                <p className="text-gray-600 text-center mt-3 text-lg">
                  Video content will be added here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
