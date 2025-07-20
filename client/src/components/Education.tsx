import { GraduationCap, Calendar, MapPin, Trophy, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Education</h2>
          <p className="text-xl text-neutral-600">Academic foundation in engineering and human sciences</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-maroon/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-maroon" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-2">M.S. Biomedical Engineering</h3>
                <p className="text-maroon font-semibold text-lg mb-4">U.C. Davis</p>
                <div className="space-y-2 text-neutral-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-3" />
                    <span>2022 - 2024</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-3" />
                    <span>Davis, California</span>
                  </div>
                  <div className="flex items-center">
                    <Trophy className="w-4 h-4 mr-3" />
                    <span>GPA: 3.8/4.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-maroon/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-maroon" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-2">B.S. Kinesiology</h3>
                <p className="text-maroon font-semibold text-lg mb-4">McMaster University</p>
                <div className="space-y-2 text-neutral-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-3" />
                    <span>2018 - 2022</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-3" />
                    <span>Hamilton, Ontario</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-3" />
                    <span>Summa Cum Laude</span>
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
