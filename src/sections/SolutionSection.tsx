"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

const pillarIcons = [
    (
        <svg key="p1" className="w-12 h-12" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="16" r="6" stroke="#00d4ff" strokeWidth="2" />
            <path d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" />
            <path d="M32 10l4-4M36 14h4M32 18l4 4" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    (
        <svg key="p2" className="w-12 h-12" viewBox="0 0 48 48" fill="none">
            <rect x="8" y="12" width="32" height="24" rx="3" stroke="#e8a838" strokeWidth="2" />
            <path d="M8 20h32" stroke="#e8a838" strokeWidth="1.5" />
            <path d="M16 28h6M16 32h10" stroke="#e8a838" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="36" cy="30" r="3" stroke="#e8a838" strokeWidth="1.5" />
            <path d="M36 27v3l2 1" stroke="#e8a838" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    (
        <svg key="p3" className="w-12 h-12" viewBox="0 0 48 48" fill="none">
            <path d="M24 8v6M24 34v6M8 24h6M34 24h6" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
            <circle cx="24" cy="24" r="8" stroke="#a78bfa" strokeWidth="2" />
            <circle cx="24" cy="24" r="3" fill="#a78bfa" opacity="0.5" />
            <path d="M17 11l2 3M29 34l2 3M11 31l3-2M34 15l3-2" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
];

export default function SolutionSection() {
    const { t, language } = useLanguage();
    const pillarsData = t("solution.pillars") as any[];
    
    // Original colors and gradients preserved
    const pillarStyles = [
        { color: "accent-blue", gradient: "from-accent-blue/20 to-transparent", hex: "#00d4ff" },
        { color: "accent-gold", gradient: "from-accent-gold/20 to-transparent", hex: "#e8a838" },
        { color: "purple-400", gradient: "from-purple-400/20 to-transparent", hex: "#a78bfa" },
    ];
    return (
        <section id="solution" className="relative py-24 sm:py-32">
            <div className="section-divider mb-24" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <AnimatedSection className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-4">
                        {t("solution.badge")}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        {language === 'id' ? t("solution.titleBlue") : 'The '} <span className="text-gradient-blue">{language === 'id' ? t("solution.titleEnd") : t("solution.titleBlue")}</span> {language === 'en' ? t("solution.titleEnd") : ''}
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        {t("solution.subtitle")}
                    </p>
                </AnimatedSection>

                {/* Central gear animation */}
                <div className="relative">
                    {/* Center connector */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full"
                        >
                            <svg viewBox="0 0 96 96" className="w-full h-full opacity-30">
                                <circle cx="48" cy="48" r="20" stroke="#00d4ff" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                                <circle cx="48" cy="48" r="35" stroke="#e8a838" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                                <circle cx="48" cy="48" r="6" fill="#00d4ff" opacity="0.3" />
                            </svg>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {pillarsData.map((pillar, i) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                                className="relative group"
                            >
                                <div className={`glass rounded-2xl p-8 h-full border border-glass-border hover:border-${pillarStyles[i].color}/30 transition-all duration-300`}>
                                    {/* Gradient glow */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${pillarStyles[i].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    <div className="relative z-10">
                                        <div className="mb-6">{pillarIcons[i]}</div>
                                        <h3 className="text-2xl font-bold text-white mb-1">
                                            {pillar.title}
                                        </h3>
                                        <p className={`text-sm font-medium mb-4`} style={{ color: pillarStyles[i].hex }}>
                                            {pillar.subtitle}
                                        </p>
                                        <p className="text-gray-400 leading-relaxed">
                                            {pillar.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Competitive moat callout */}
                <AnimatedSection delay={0.4} className="mt-16">
                    <div className="glass rounded-2xl p-8 text-center border border-accent-gold/20">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <svg className="w-6 h-6 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <h4 className="text-xl font-bold text-accent-gold">
                                {t("solution.moat.title")}
                            </h4>
                        </div>
                        <p className="text-gray-400 max-w-3xl mx-auto">
                            {t("solution.moat.desc")}
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
