"use client";

import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { useLanguage } from "@/context/LanguageContext";

const problemIcons = [
    (
        <svg key="icon1" className="w-10 h-10" viewBox="0 0 40 40" fill="none">
            <rect x="4" y="6" width="22" height="28" rx="2" stroke="#ff4444" strokeWidth="2" />
            <path d="M10 14h10M10 19h10M10 24h6" stroke="#ff4444" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M20 20l12 12M32 20L20 32" stroke="#ff4444" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    ),
    (
        <svg key="icon2" className="w-10 h-10" viewBox="0 0 40 40" fill="none">
            <path d="M20 4L4 36h32L20 4z" stroke="#ff8c00" strokeWidth="2" fill="none" />
            <path d="M20 16v8" stroke="#ff8c00" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="20" cy="29" r="1.5" fill="#ff8c00" />
        </svg>
    ),
    (
        <svg key="icon3" className="w-10 h-10" viewBox="0 0 40 40" fill="none">
            <rect x="6" y="8" width="28" height="24" rx="2" stroke="#ff4444" strokeWidth="2" />
            <path d="M6 16h28" stroke="#ff4444" strokeWidth="1.5" />
            <circle cx="20" cy="24" r="4" stroke="#ff4444" strokeWidth="1.5" />
            <path d="M18 24l4-2v4l-4-2z" fill="#ff4444" />
            <path d="M12 36l4-4M28 36l-4-4" stroke="#ff4444" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
];

export default function ProblemSection() {
    const { t } = useLanguage();
    const problemsData = t("problem.problems") as any[];
    return (
        <section id="problem" className="relative py-24 sm:py-32">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <AnimatedSection className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
                        {t("problem.badge")}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        {t("nav.problem")} <span className="text-red-400">{t("problem.titleRed")}</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        {t("problem.subtitle")}
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {problemsData.map((problem, i) => (
                        <GlassCard
                            key={problem.title}
                            delay={i * 0.15}
                            className="flex flex-col items-start text-left group relative overflow-hidden"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                                {problemIcons[i]}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {problem.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                {problem.desc}
                            </p>
                            <div className="pt-4 border-t border-glass-border w-full">
                                <span className="text-2xl font-bold text-red-400">
                                    {problem.stat}
                                </span>
                                <p className="text-xs text-gray-500 mt-1">{problem.statLabel}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
