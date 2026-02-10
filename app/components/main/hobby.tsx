"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/language-context";

interface Hobby {
  icon: string;
  titleEn: string;
  titleMn: string;
  descriptionEn: string;
  descriptionMn: string;
  color: string;
}

const hobbies: Hobby[] = [
  {
    icon: "💻",
    titleEn: "Coding",
    titleMn: "Програмчлал",
    descriptionEn: "Building web apps, experimenting with features, and improving my skills through practice",
    descriptionMn: "Вэб апп хийж, туршиж, дадлагаар ур чадвараа сайжруулах",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🏀",
    titleEn: "Basketball",
    titleMn: "Сагсан бөмбөг",
    descriptionEn: "Playing basketball regularly to stay active and focused",
    descriptionMn: "Тогтмол заал авч сагс тоглож, биеээ хөгжүүлэх дуртай",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "🎮",
    titleEn: "CSGO",
    titleMn: "CSGO",
    descriptionEn: "In freetime i like to play CSGO and LAN with my friends.",
    descriptionMn: "Чөлөөт цагаарааCSGO тоглож найзуудтайгаа LAN-дах дуртай",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "📚",
    titleEn: "Chess",
    titleMn: "Шатар",
    descriptionEn: "Playing chess to improve strategic thinking and concentration. You can play blitz with me",
    descriptionMn: "Шатар тоглох дуртай ба зав л гарвал тоглодог. Таньтай blitz тоглохыг урьж байна.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "🎧",
    titleEn: "Music",
    titleMn: "Хөгжим",
    descriptionEn: "Listening to music while coding to stay focused and creative, dancing on techno, hiphop musics.",
    descriptionMn: "Код бичих үедээ хөгжим сонсож төвлөрдөг мөн techno & hiphop ая дээр савах дуртай",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: "🎨",
    titleEn: "Sketch drawing",
    titleMn: "Зураг зурах",
    descriptionEn: "I like to sketch or draw on paper.",
    descriptionMn: "Sketch зураг зурах эсвэл бал цаас бариад зурах дуртай",
    color: "from-pink-500 to-rose-500",
  },
];

export default function Hobbies() {
  const { language } = useLanguage();

  return (
    <section className="py-20">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-100 to-blue-800">
            {language === "EN" ? "Hobbies & Interests" : "Сонирхол"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === "EN"
              ? "What I love to do in my free time"
              : "Чөлөөт цагаараа юу хийх дуртай вэ"}
          </p>
        </motion.div>
      </div>

      {/* Hobbies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.titleEn}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative"
          >
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-300 overflow-hidden">
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon */}
              <motion.div
                className="text-6xl mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                {hobby.icon}
              </motion.div>

              {/* Content */}
              <h3 className={`text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${hobby.color}`}>
                {language === "EN" ? hobby.titleEn : hobby.titleMn}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {language === "EN" ? hobby.descriptionEn : hobby.descriptionMn}
              </p>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${hobby.color} opacity-10 rounded-bl-full`} />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white max-w-2xl">
          <p className="text-2xl font-bold mb-2">
            {language === "EN" ? "💡 Fun Fact" : "💡 Сонирхолтой баримт"}
          </p>
          <p className="text-lg opacity-90">
            {language === "EN"
              ? "Loved wrestling since childhood; it’s my pure hobby and passion!"
              : "Багаасаа бөхөөр хичээллэх дуртай байсан. Миний хамгийн хайртай хобби!"}
          </p>
        </div>
      </motion.div>
    </section>
  );
}