"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-navy-900/50 rounded-full p-1 border border-glass-border">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
          language === "en"
            ? "bg-accent-blue text-white shadow-lg shadow-accent-blue/30"
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        EN
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage("id")}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
          language === "id"
            ? "bg-accent-blue text-white shadow-lg shadow-accent-blue/30"
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        ID
      </motion.button>
    </div>
  );
}
