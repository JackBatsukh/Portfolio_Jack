"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import * as React from "react";
import { useLanguage } from "../context/language-context";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [showContact, setShowContact] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when contact panel is open
  useEffect(() => {
    if (showContact) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showContact]);

  const contactLinks = [
    {
      icon: "/github.png",
      label: "JackBatsukh",
      href: "https://github.com/JackBatsukh",
      color: "hover:text-purple-400",
    },
    {
      icon: "/gmail.jpg",
      label: "bayarjavkhlanbatsukh@gmail.com",
      href: "mailto:bayarjavkhlanbatsukh@gmail.com",
      color: "hover:text-red-400",
    },
    {
      icon: "/phone-call.png",
      label: "+976 95868758",
      href: "tel:+97695868758",
      color: "hover:text-green-400",
    },
    {
      icon: "/facebook.png",
      label: "Batsukh Bayarjavkhlan",
      href: "https://www.facebook.com/profile.php?id=100013788490360",
      color: "hover:text-blue-400",
    },
    {
      icon: "/instagram.png",
      label: "Javkhaal",
      href: "https://instagram.com/javkhaal",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-gray-200/20 dark:border-gray-700/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-24 flex justify-between items-center">
          <motion.div
            className="relative w-20 h-20 group cursor-pointer"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="logo"
          className="opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute"
        />
        <Image
          src="/logo_white.png"
          width={105}
          height={105}
          alt="logo"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
          </motion.div>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleLanguage}
              className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 border border-cyan-500/20 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-cyan-500 dark:text-cyan-400"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.15407 7.30116C7.52877 5.59304 9.63674 4.5 12 4.5C12.365 4.5 12.7238 4.52607 13.0748 4.57644L13.7126 5.85192L11.2716 8.2929L8.6466 8.6679L7.36009 9.95441L6.15407 7.30116ZM5.2011 8.82954C4.75126 9.79256 4.5 10.8669 4.5 12C4.5 15.6945 7.17133 18.7651 10.6878 19.3856L11.0989 18.7195L8.8147 15.547L10.3741 13.5256L9.63268 13.1549L6.94027 13.6036L6.41366 11.4972L5.2011 8.82954ZM7.95559 11.4802L8.05962 11.8964L9.86722 11.5951L11.3726 12.3478L14.0824 11.9714L18.9544 14.8135C19.3063 13.9447 19.5 12.995 19.5 12C19.5 8.93729 17.6642 6.30336 15.033 5.13856L15.5377 6.1481L11.9787 9.70711L9.35371 10.0821L7.95559 11.4802ZM18.2539 16.1414C16.9774 18.0652 14.8369 19.366 12.3859 19.4902L12.9011 18.6555L10.6853 15.578L12.0853 13.7632L13.7748 13.5286L18.2539 16.1414ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
                  fill="currentColor"
                />
              </motion.svg>
              <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                {language}
              </span>
            </motion.button>

            {/* Contact Button */}
            <motion.button
              onClick={() => setShowContact(true)}
              className="relative px-6 py-2.5 rounded-full font-medium overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-white font-semibold">
                {language === "EN" ? "Contact" : "Холбоо барих"}
              </span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Contact Side Panel */}
      <AnimatePresence>
        {showContact && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContact(false)}
            />

            {/* Side Panel */}
            <motion.div
              className="fixed right-0 top-0 h-screen w-full max-w-md bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 z-50 shadow-2xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-12">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Image
                      src="/logo_white.png"
                      width={80}
                      height={80}
                      alt="logo"
                    />
                  </motion.div>

                  <motion.button
                    onClick={() => setShowContact(false)}
                    className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Title */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-4xl font-bold text-white mb-2">
                    {language === "EN" ? "Let's Connect" : "Холбогдоё"}
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                </motion.div>

                {/* Contact Links */}
                <div className="space-y-4">
                  {contactLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${link.color}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                        <Image
                          src={link.icon}
                          alt="icon"
                          width={24}
                          height={24}
                        />
                      </div>
                      <span className="text-white/90 group-hover:text-white text-sm lg:text-base break-all transition-colors">
                        {link.label}
                      </span>
                    </motion.a>
                  ))}
                </div>

                {/* Footer Message */}
                <motion.div
                  className="mt-12 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <p className="text-cyan-400 font-medium text-sm tracking-wide">
                    {language === "EN"
                      ? "LOOKING FORWARD TO WORKING WITH YOU!"
                      : "ТАНТАЙ ХАМТРАН АЖИЛЛАХЫГ ТЭСЭН ЯДАН ХҮЛЭЭЖ БАЙНА! "}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
  