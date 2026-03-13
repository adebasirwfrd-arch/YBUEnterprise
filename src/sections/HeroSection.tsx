"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
    const { t } = useLanguage();
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
            <div className="absolute inset-0 bg-gradient-radial" />

            {/* Animated grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Floating orbs */}
            <motion.div
                animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-blue/5 blur-[100px]"
            />
            <motion.div
                animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-accent-gold/5 blur-[80px]"
            />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 text-accent-blue text-sm font-medium"
                >
                    <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                    {t("common.readyToDeploy")}
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
                >
                    <span className="text-white">{t("hero.headlinePart1")}</span>
                    <br />
                    <span className="text-gradient-hero">{t("hero.headlinePart2")}</span>
                    <br />
                    <span className="text-white">{t("hero.headlinePart3")}</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed"
                >
                    {t("hero.subheadline")}
                    <br className="hidden sm:block" />
                    <span className="text-accent-gold font-medium">
                        {t("common.readyToDeploy")}.
                    </span>
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a
                        href="#problem"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-blue-deep text-white font-semibold rounded-full text-lg animate-pulse-glow hover:scale-105 transition-transform duration-300"
                    >
                        {t("common.exploreEcosystem")}
                        <svg
                            className="w-5 h-5 animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </a>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500"
                >
                    {(t("hero.industries") as string[]).map(
                        (industry) => (
                            <div key={industry} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent-blue/50" />
                                {industry}
                            </div>
                        )
                    )}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-gray-600 tracking-widest uppercase">
                    {t("common.scroll")}
                </span>
                <div className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-accent-blue"
                    />
                </div>
            </motion.div>
        </section>
    );
}
