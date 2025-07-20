import { Settings, Brain, Heart, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Teaching() {
  const teachingAreas = [
    {
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      title: "Engineering Design",
      description: "Product development and system design",
      bgColor: "bg-purple-100"
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Neuroscience",
      description: "Neural systems and cognitive functions",
      bgColor: "bg-blue-100"
    },
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: "Physiology",
      description: "Human body systems and biomechanics",
      bgColor: "bg-green-100"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-600" />,
      title: "Entrepreneurship",
      description: "Innovation and business development",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Teaching</h2>
          <p className="text-xl text-neutral-600">Areas of expertise and knowledge sharing</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachingAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-maroon/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-maroon/20 transition-colors duration-300">
                <div className="text-maroon">
                  {area.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{area.title}</h3>
              <p className="text-neutral-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
