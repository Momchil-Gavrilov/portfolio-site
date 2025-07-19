import { Building, Bot, Dumbbell, Stethoscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  const experiences = [
    {
      icon: <Building className="w-8 h-8 text-blue-600" />,
      title: "Researcher",
      company: "The University of California, Davis",
      period: "Current",
      description: "Leading innovative research in biomedical engineering, focusing on cutting-edge solutions that bridge technology and healthcare applications.",
      bgColor: "bg-blue-100"
    },
    {
      icon: <Bot className="w-8 h-8 text-green-600" />,
      title: "Research & Design Engineer",
      company: "Bionic Engineering & Assistive Robotics Laboratory",
      period: "2023-2024",
      description: "Developed advanced assistive robotics solutions, combining engineering principles with human-centered design to improve quality of life.",
      bgColor: "bg-green-100"
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-orange-600" />,
      title: "Personal Trainer & Team Lead",
      company: "The Pulse Fitness Center",
      period: "2022-2023",
      description: "Led fitness programs and team initiatives, combining scientific knowledge of human physiology with practical wellness applications.",
      bgColor: "bg-orange-100"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-red-600" />,
      title: "Clinician",
      company: "Sports Medicine & Rehabilitation",
      period: "2021-2022",
      description: "Applied biomedical engineering principles in clinical settings, specializing in sports medicine and rehabilitation technologies.",
      bgColor: "bg-red-100"
    }
  ];

  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Experience</h2>
          <p className="text-xl text-neutral-600">A journey across research, design, fitness, and healthcare</p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-shadow transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 ${exp.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-900">{exp.title}</h3>
                        <p className="text-apple-blue font-medium">{exp.company}</p>
                      </div>
                      <span className="text-neutral-600 text-sm">{exp.period}</span>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
