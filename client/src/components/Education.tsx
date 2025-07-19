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
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="card-shadow transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">M.S. Biomedical Engineering</h3>
                <p className="text-apple-blue font-semibold text-lg">U.C. Davis</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-neutral-600">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span>2022 - 2024</span>
                </div>
                <div className="flex items-center text-neutral-600">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Davis, California</span>
                </div>
                <div className="flex items-center text-neutral-600">
                  <Trophy className="w-5 h-5 mr-3" />
                  <span>GPA: 3.8/4.0</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-shadow transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">B.S. Kinesiology</h3>
                <p className="text-chatgpt-green font-semibold text-lg">McMaster University</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-neutral-600">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span>2018 - 2022</span>
                </div>
                <div className="flex items-center text-neutral-600">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Hamilton, Ontario</span>
                </div>
                <div className="flex items-center text-neutral-600">
                  <Award className="w-5 h-5 mr-3" />
                  <span>Summa Cum Laude</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
