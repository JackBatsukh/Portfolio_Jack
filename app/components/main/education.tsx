import React from "react";
import { en } from "./../../locales/en";
import { mn } from "./../../locales/mn";
import { useLanguage } from "@/app/context/language-context";

interface TimelineEntry {
  years: string;
  role: string;
  institution: string;
}

const Education: React.FC = () => {
  const { language } = useLanguage();
  const t = language === "EN" ? en : mn;

  const timelineData: TimelineEntry[] = [
    {
      years: "2010 - 2022",
      role: t.role1,
      institution: t.school,
    },
    {
      years: "2024 - 2025",
      role: t.role2,
      institution: t.college,
    },
    {
      years: "2022 - 2027",
      role: t.role3,
      institution: t.university,
    },
  ];

  return (
    <div className="py-38 px-5">
      <h2 className="text-5xl  text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 animate-fade-up">
        {language === "EN" ? "DEGREE" : "БОЛОВСРОЛ"}
      </h2>

      <div className="relative space-y-8">
        {timelineData.map((entry, index) => (
          <div
            key={index}
            className="relative h-[90px] flex items-center justify-between p-6 bg-gray-800/50 backdrop-blur-md rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-up"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {index < timelineData.length - 1 && (
              <div className="absolute left-1/4 top-16 h-[calc(100%-2rem)] w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>
            )}

            <div className="relative w-1/4 text-white text-xl flex items-center group-hover:text-blue-400 transition-colors duration-300">
              {entry.years}
            </div>
            <div className="w-1/2 text-gray-500 text-lg group-hover:text-white transition-colors duration-300 ">
              {entry.role}
            </div>

            <div className="w-1/4 text-white text-lg text-right group-hover:text-blue-400 transition-colors duration-300 ">
              {entry.institution}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
