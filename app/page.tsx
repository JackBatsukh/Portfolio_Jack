"use client";
import React, { useRef } from "react";
import Header from "./components/header";
import Image from "next/image";
import Education from "./components/main/education";
import Certificates from "./components/main/certificates";
import { useLanguage } from "./context/language-context";
import { en } from "./locales/en";
import { mn } from "./locales/mn";
import Skills from "./components/main/skills";
import { Footer } from "./components/footer";
import { motion, useScroll, useSpring } from "framer-motion";
import About from "./components/main/about";
import Projects from "./components/main/projects";
import Hobbies from "./components/main/hobby";

export default function Home() {
  const { language } = useLanguage();
  const t = language === "EN" ? en : mn;
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 15 },
    },
  };

  return (
    <div className="relative w-full h-auto bg-[#fafafa] dark:bg-[#0a0a0a] text-gray-900 dark:text-white selection:bg-blue-500/30 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Floating code-like elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-500/10 dark:text-cyan-500/10 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {["</>", "{}", "[]", "fn()", "=>", "||", "&&", "==="][i % 8]}
            </motion.div>
          ))}
        </div>

        {/* Animated scanning line */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-32 pointer-events-none"
          animate={{
            y: ["-100%", "200%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 origin-left z-[100]" 
        style={{ scaleX }} 
      />

      <Header />

      <main className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-20">
        {/* Hero Section */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[90vh] gap-16 py-20 mb-20">
          
          {/* Profile Image */}
          <motion.div
            className="relative lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group">
              {/* Animated rings */}
              <motion.div
                className="absolute -inset-8 rounded-full border-2 border-blue-500/20"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-cyan-500/20"
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Profile picture */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="relative">
                  <Image
                    alt="profile"
                    src="/profile.jpg"
                    width={420}
                    height={420}
                    priority
                    className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border-2 border-white/10"
                  />
                  
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500" />
                </div>
              </motion.div>

              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-500 rounded-full"
                  style={{
                    left: `${50 + Math.cos(i * Math.PI / 4) * 200}px`,
                    top: `${50 + Math.sin(i * Math.PI / 4) * 200}px`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex flex-col items-start lg:w-1/2 gap-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Status badge */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                {language === "EN" ? "Available for work" : "Ажилд бэлэн"}
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-5xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
              variants={itemVariants}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-white dark:to-gray-400">
                {language === "EN" ? "Software" : "Программ"}
              </span>
              <br />
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500">
                  {language === "EN" ? "Engineer" : "Хөгжүүлэгч"}
                </span>
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed"
              variants={itemVariants}
            >
              <span className="font-semibold text-gray-900 dark:text-white">{t.greeting} {t.name}</span>
              <br />
              {t.bio}
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 mt-4">
              <motion.button
                onClick={() => contentRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-semibold shadow-xl shadow-blue-500/20 transition-all overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                
                <span className="relative flex items-center gap-2">
                  {language === "EN" ? "View More" : "Дэлгэрэнгүй"}
                  <motion.span 
                    animate={{ y: [0, 4, 0] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    ↓
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>

            {/* Tech stack icons */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-3 mt-4 flex-wrap"
            >
              {["React", "TypeScript", "Node.js", "Next.js"].map((tech, i) => (
                <motion.div
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-xs font-mono text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Content Sections */}
        <div ref={contentRef} className="space-y-32 pb-32">
          {/* About Section */}
          <About />

     

          {/* Skills, Education, Certificates */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Skills />
            <div className="mt-20">
              <Education />
            </div>
            <div className="mt-20">
              <Certificates />
            </div>
          </motion.div>

          {/* Hobbies Section */}
          <Hobbies />
        </div>
      </main>

      <Footer />
    </div>
  );
}