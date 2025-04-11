"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
import Header from "./components/header";
import Image from "next/image";
import Education from "./components/main/education";
import { useEffect } from "react";
import Certificates from "./components/main/certificates";
import { useLanguage } from "./context/language-context";
import { en } from "./locales/en";
import { mn } from "./locales/mn";
import Skills from "./components/main/skills";
import { Footer } from "./components/footer";
import { motion } from "framer-motion";

export default function Home() {
  const { language } = useLanguage();
  const t = language === "EN" ? en : mn;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.2,
      },
    },
  };

  // useEffect(() => {
  //   gsap.to(".profile-image", {
  //     motionPath: {
  //       path: "#profile-path",
  //       alignOrigin: [0.55, -0.05],
  //       autoRotate: true,
  //     },
  //     scrollTrigger: {
  //       trigger: ".main",
  //       start: "top top",
  //       end: "+=55%",
  //       scrub: true,
  //     },
  //   });
  // }, []);

  return (
    <div className="w-full h-auto bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <Header />

      <main className="main mx-auto max-w-[1440px] px-6 lg:px-20 py-10">
        {/* <svg width="0" height="0">
          <path id="profile-path" d="M0 100 Q 200 0 400 100" />
        </svg> */}

        <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen">
          <motion.div
            className="relative z-10"
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="profile-image"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                alt="profile"
                src="/1080x1920_New_Deadpool_4k_Iphone_7_6s_6_Plus__Pixel_xl__One_Plus_3_3t_5__HD_4k_Wallpapers_Images_Backgrounds_Photos_and_Pictures-removebg-preview.png"
                width={400}
                height={400}
                className="rounded-full shadow-2xl border-4 border-blue-500/30"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col items-start justify-center absolute right-0 top-40 gap-32 lg:ml-10 lg:mt-0"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-[60px] lg:text-[88px] font-extrabold text-start bg-clip-text text-transparent bg-gradient-to-r from-gray-900 dark:from-white to-blue-400 dark:to-blue-400 leading-tight"
              variants={itemVariants}
            >
              {language === "EN" ? "Software Engineer," : "Программ хангамж,"}
              <br />
              {language === "EN"
                ? "Full-stack developer"
                : "Full-stack хөгжvvлэгч"}
            </motion.h1>

            <motion.p
              className="text-[16px] lg:text-[18px] text-start leading-8 text-gray-700 dark:text-gray-300 tracking-wide mt-6 max-w-lg"
              variants={itemVariants}
            >
              {t.greeting}
              <motion.span
                className="text-gray-900 dark:text-gray-100 ml-2 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {t.name}
              </motion.span>
              <span className="ml-2 tracking-wide whitespace-pre-line">
                {t.bio}
              </span>
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="education "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Education />
          <Certificates />
          <div className="my-20">
            <Skills />
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

{
  /* <motion.div
  className="relative z-10"
  animate={{
    scale: [1, 1.02, 1]
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut"
  }}
>
  <motion.div
    className="profile-image"
    whileHover={{ scale: 1.05, rotate: 2 }}
  >
    <Image
      alt="profile"
      src="/1080x1920_New_Deadpool_4k_Iphone_7_6s_6_Plus__Pixel_xl__One_Plus_3_3t_5__HD_4k_Wallpapers_Images_Backgrounds_Photos_and_Pictures-removebg-preview.png"
      width={400}
      height={400}
      className="rounded-full shadow-2xl border-4 border-blue-500/30"
    />
    <motion.div
      className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.1, 0.3, 0.1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  </motion.div>
</motion.div> */
}
