import { Calendar, MapPin, Building } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Senior UX Designer",
      company: "TechCorp Innovation",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading user experience design for enterprise software solutions, managing a team of 5 designers, and driving design strategy across multiple product lines.",
      achievements: [
        "Increased user satisfaction by 40% through redesign initiatives",
        "Established design system used across 15+ products",
        "Led cross-functional teams of 20+ members"
      ]
    },
    {
      title: "Biomedical Engineer",
      company: "MedTech Solutions",
      location: "Boston, MA", 
      period: "2020 - 2022",
      description: "Developed innovative medical devices and conducted clinical research to improve patient outcomes in cardiovascular treatment.",
      achievements: [
        "Filed 3 patents for cardiovascular monitoring devices",
        "Published 8 peer-reviewed research papers",
        "Reduced device manufacturing costs by 25%"
      ]
    },
    {
      title: "Research Scientist",
      company: "University Medical Center",
      location: "Boston, MA",
      period: "2018 - 2020", 
      description: "Conducted cutting-edge research in biomedical engineering with focus on neural interfaces and brain-computer interaction systems.",
      achievements: [
        "Secured $2M in research funding",
        "Developed novel neural interface technology",
        "Mentored 12 graduate research students"
      ]
    },
    {
      title: "Junior Engineer",
      company: "BioInnovate Labs",
      location: "Cambridge, MA",
      period: "2016 - 2018",
      description: "Entry-level position focused on medical device prototyping and testing, working closely with senior engineers on breakthrough technologies.",
      achievements: [
        "Completed 15+ successful device prototypes",
        "Achieved FDA approval for 2 medical devices",
        "Improved testing protocols efficiency by 30%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Professional Experience</h2>
          <p className="text-xl text-neutral-600">A journey through innovation and impact</p>
        </div>
        
        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-maroon/20"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-maroon rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content card */}
                <div className="ml-20">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-bold text-black mb-2">{exp.title}</h3>
                        <div className="flex items-center space-x-4 mb-2">
                          <div className="flex items-center text-maroon font-semibold">
                            <Building className="w-4 h-4 mr-2" />
                            {exp.company}
                          </div>
                          <div className="flex items-center text-neutral-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                        <div className="flex items-center text-neutral-500 mb-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-neutral-700 leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-maroon rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-neutral-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}