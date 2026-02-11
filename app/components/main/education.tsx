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
    <div className="py-12 md:py-24 px-5 max-w-6xl mx-auto">
      {/* Responsive Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 animate-fade-up">
        {language === "EN" ? "DEGREE" : "БОЛОВСРОЛ"}
      </h2>

      <div className="relative space-y-6 md:space-y-8">
        {timelineData.map((entry, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-800/50 backdrop-blur-md rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-up md:min-h-[90px]"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Year Section */}
            <div className="w-full md:w-1/4 text-blue-400 md:text-white text-lg md:text-xl font-medium flex items-center group-hover:text-blue-400 transition-colors duration-300 mb-1 md:mb-0">
              {entry.years}
            </div>

            {/* Role Section */}
            <div className="w-full md:w-1/2 text-gray-300 md:text-gray-500 text-base md:text-lg group-hover:text-white transition-colors duration-300 mb-2 md:mb-0">
              {entry.role}
            </div>

            {/* Institution Section */}
            <div className="w-full md:w-1/4 text-white text-sm md:text-lg text-left md:text-right font-light md:font-normal group-hover:text-blue-400 transition-colors duration-300">
              {entry.institution}
            </div>

            {/* Vertical Line - Hidden on Mobile for cleaner look */}
            {index < timelineData.length - 1 && (
              <div className="hidden md:block absolute left-1/4 top-16 h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;