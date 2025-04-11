"use client";
import React, { useState } from "react";
import { useLanguage } from "@/app/context/language-context";
import Image from "next/image";

const skills = [
  { name: "JavaScript", image: "/js.png", level: 75 },
  { name: "MongoDB", image: "/database_9479834.png", level: 55 },
  { name: "MySQL", image: "/mysql.png", level: 80 },
  { name: "Python", image: "/python.png", level: 75 },
  { name: "HTML", image: "/html.png", level: 90 },
  { name: "CSS", image: "/css-3.png", level: 90 },
  { name: "Next.js", image: "/next.svg", level: 75 },
  { name: "TypeScript", image: "/typescript.png", level: 60 },
  { name: "React", image: "/atom.png", level: 75 },
  { name: "React Native", image: "/atom.png", level: 70 },
  { name: "Tailwind CSS", image: "/tailwindcss.png", level: 90 },
  { name: "Express", image: "/nodejs.png", level: 70 },
];

const Skills = () => {
  const duplicatedSkills = [...skills, ...skills];
  const { language } = useLanguage();
  const [showChart, setShowChart] = useState(false);

  return (
    <section className="w-full py-12 px-6 overflow-hidden">
      <div className="flex items-center gap-8">
        <h2 className="text-5xl mb-8 dark:text-white">
          {language === "EN" ? "Skills" : "Чадвар"}
        </h2>
        <button
          onClick={() => setShowChart(!showChart)}
          className="mb-2 text-gray-600 text-[20px] hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
        >
          {language === "EN" ? "See all" : "Бүгдийг харах"}
        </button>
      </div>

      {!showChart && (
        <div className="relative h-32 overflow-hidden">
          <div className="absolute top-0 left-0 flex items-center space-x-8 animate-marquee whitespace-nowrap">
            {duplicatedSkills.map((skill, index) => (
              <div
                onClick={() => setShowChart(!showChart)}
                key={index}
                className="flex w-[180px] items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:text-blue-500"
              >
                <Image
                  src={skill.image}
                  alt={`${skill.name} logo`}
                  width={32}
                  height={32}
                  className="mr-3"
                />
                <span className="text-xl  ">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {showChart && (
        <div className="space-y-4 animate-fade-in">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-4 hover:text-blue-500"
            >
              <Image
                src={skill.image}
                alt={`${skill.name} logo`}
                width={24}
                height={24}
                className="flex-shrink-0"
              />
              <div className="w-full">
                <div className="flex justify-between mb-1 hover:text-blue-500">
                  <span className="text-lg ">{skill.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 ">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full transition-all duration-500  "
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Skills;

//  <button
//    onClick={() => setShowContact(!showContact)}
//    className="w-[130px] h-[40px] flex items-center text-black text-[16px] justify-center rounded-full bg-linear-[85deg,#EDE2E2_0%,#6BDDF9_34%,#EDE2E2_64%,#06B8E5_100%] hover:bg-linear-[#1FBCE6] shadow-lg shadow-gray-400/50 hover:text-white"
//  >
//    {language === "EN" ? "Contact" : "Холбоо барих"}
//  </button>;
