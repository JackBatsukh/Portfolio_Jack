"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/language-context";

export default function About() {
  const { language } = useLanguage();

  const stats = [
    { value: "2+", labelEn: "Years Learning", labelMn: "Жилийн суралцсан" },
    { value: "10+", labelEn: "Projects Built", labelMn: "Төсөл хийсэн/оролцсон" },
    { value: "9+", labelEn: "Programming language", labelMn: "Программын хэл" },
    { value: "100%", labelEn: "Motivation", labelMn: "Идэвх, хичээл зүтгэл" },
  ];

 const timeline = [
  {
    year: "2025",
    titleEn: "Full-Stack Student Developer",
    titleMn: "Full-stack хөгжүүлэгч оюутан",
    descriptionEn: "Building full-stack projects using Next.js, Prisma, and databases",
    descriptionMn: "Next.js, Prisma, өгөгдлийн сантай full-stack төслүүд хийж байна",
  },
  {
    year: "2024",
    titleEn: "Frontend & Backend Practice",
    titleMn: "Frontend ба Backend дадлага",
    descriptionEn: "Worked on React, API integration, and SPA projects",
    descriptionMn: "React, API холболт, SPA төслүүд дээр ажилласан",
  },
  {
    year: "2023",
    titleEn: "Started Web Development",
    titleMn: "Вэб хөгжүүлэлт сурч эхэлсэн",
    descriptionEn: "Learned HTML, CSS, JavaScript fundamentals",
    descriptionMn: "HTML, CSS, JavaScript, SQls, UI/UX үндсийг сурсан",
  },
  {
    year: "2022",
    titleEn: "University Student",
    titleMn: "Их сургуулийн оюутан",
    descriptionEn: "Studying Business Administration and IT fundamentals",
    descriptionMn: "Бизнесийн удирдлага болон IT суурь мэдлэг эзэмшиж эхэлсэн",
  },
];


  return (
    <section className="py-30">
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
            {language === "EN" ? "About Me" : "Миний тухай"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            {language === "EN"
              ? "Passionate developer who loves turning ideas into reality through code"
              : "Санаа бодлыг код болгон хувиргах дуртай хөгжүүлэгч"}
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.labelEn}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring" }}
            className="relative group"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {language === "EN" ? stat.labelEn : stat.labelMn}
              </div>
              
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div className="mb-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          {language === "EN" ? "My Journey" : "Миний замнал"}
        </motion.h3>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              {/* Year badge */}
              <motion.div
                className="absolute left-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {item.year}
              </motion.div>

              {/* Content */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {language === "EN" ? item.titleEn : item.titleMn}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {language === "EN" ? item.descriptionEn : item.descriptionMn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-3xl p-10 border border-blue-500/20 dark:border-cyan-500/20">
          <div className="text-6xl text-blue-500 dark:text-cyan-500 mb-4">"</div>
          <p className="text-2xl lg:text-3xl font-medium text-gray-900 dark:text-white italic mb-6">
            
              "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
              
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            — Martin Fowler
          </p>
        </div>
      </motion.div>
    </section>
  );
}