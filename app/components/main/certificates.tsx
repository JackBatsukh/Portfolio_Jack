"use client";
import gsap from "gsap";
// import { Observer } from "gsap/observer";
import Image from "next/image";
import { useLanguage } from "@/app/context/language-context";

// gsap.registerPlugin(Observer);

const certificates = [
  {
    title: "Meta Front-End Developer",
    description: "Certified by Meta",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/9B6YP69H15Z8",
    image: "/certificate1.png",
  },
  {
    title: "Foundations of User Experience (UX) Design",
    description: "Certified by Google",
    link: "https://www.coursera.org/account/accomplishments/certificate/IQB19GH4ADSO",
    image: "/certificate2.png",
  },
  {
    title: "IBM back-end developer",
    description: "Certified by Google",
    link: "https://www.coursera.org/account/accomplishments/certificate/IQB19GH4ADSO",
    image: "/certificate2.png",
  },
];

export default function Certificates() {
  const { language } = useLanguage();
  return (
    <section className="py-20 px-6 text-white">
      <h2 className="text-5xl md:text-6xl  my-10  ">
        {(language === "EN" ? "Certificates" : "Сертификат")}
      </h2>
      <div className="relative max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <a
              href={cert.link}
              key={index}
              className="certificate group relative bg-gray-800/20 backdrop-blur-lg rounded-xl p-6 border border-gold-500/20 shadow-xl hover:shadow-2xl hover:border-[#d4af37] hover:bg-[#b8860b]/20 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0  rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src={cert.image}
                width={300}
                height={200}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
              />
              <h3 className="text-2xl  mb-2">{cert.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
