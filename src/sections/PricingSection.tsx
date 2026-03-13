"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

export default function PricingSection() {
    const { t } = useLanguage();
    const tiersData = t("pricing.tiers") as any[];

    // Original static styles for tiers
    const tierStyles = [
        {
            highlight: true,
            decoy: false,
            gradient: "from-accent-blue to-accent-blue-deep",
        },
        {
            highlight: false,
            decoy: false,
            gradient: "from-accent-gold to-accent-gold-light",
        },
        {
            highlight: false,
            decoy: true,
            gradient: "from-gray-500 to-gray-600",
        },
    ];
    return (
        <section id="pricing" className="relative py-24 sm:py-32">
            <div className="section-divider mb-24" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <AnimatedSection className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-4">
                        {t("pricing.badge")}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        {t("pricing.title").split(' ')[0]} <span className="text-gradient-blue">{t("pricing.title").split(' ')[1]}</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        {t("pricing.subtitle")}
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {tiersData.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={!tierStyles[i].decoy ? { y: -8, transition: { duration: 0.3 } } : undefined}
                            className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${tierStyles[i].highlight
                                    ? "border-2 border-accent-blue/50 shadow-lg shadow-accent-blue/10"
                                    : tierStyles[i].decoy
                                        ? "border border-glass-border opacity-60"
                                        : "border border-glass-border"
                                }`}
                        >
                            {/* Highlight glow */}
                            {tierStyles[i].highlight && (
                                <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent pointer-events-none" />
                            )}

                            <div className={`relative flex flex-col h-full p-8 ${tierStyles[i].decoy ? "bg-navy-900/30" : "glass"}`}>
                                {/* Badge */}
                                {tier.badge && (
                                    <div className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-bold mb-4 ${tierStyles[i].highlight
                                            ? "bg-accent-blue/20 text-accent-blue"
                                            : tierStyles[i].decoy
                                                ? "bg-gray-600/20 text-gray-500"
                                                : "bg-accent-gold/20 text-accent-gold"
                                        }`}>
                                        {tier.badge}
                                    </div>
                                )}

                                <h3 className={`text-lg font-bold mb-2 ${tierStyles[i].decoy ? "text-gray-500" : "text-white"}`}>
                                    {tier.name}
                                </h3>

                                {/* Price */}
                                <div className="mb-4">
                                    <span className={`text-3xl font-bold ${tierStyles[i].highlight ? "text-accent-blue" : tierStyles[i].decoy ? "text-gray-500" : "text-accent-gold"
                                        }`}>
                                        {tier.price}
                                    </span>
                                    <span className={`text-sm ml-1 ${tierStyles[i].decoy ? "text-gray-600" : "text-gray-400"}`}>
                                        {tier.period}
                                    </span>
                                </div>

                                <p className={`text-sm mb-6 ${tierStyles[i].decoy ? "text-gray-600" : "text-gray-400"}`}>
                                    {tier.desc}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8 flex-grow">
                                    {tier.features.map((feature: string) => (
                                        <li key={feature} className={`flex items-start gap-2 text-sm ${tierStyles[i].decoy ? "text-gray-600" : "text-gray-400"}`}>
                                            <svg className={`w-4 h-4 mt-0.5 shrink-0 ${tierStyles[i].highlight ? "text-accent-blue" : tierStyles[i].decoy ? "text-gray-600" : "text-accent-gold"
                                                }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <button
                                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${tierStyles[i].highlight
                                            ? "bg-gradient-to-r from-accent-blue to-accent-blue-deep text-white hover:shadow-lg hover:shadow-accent-blue/20"
                                            : tierStyles[i].decoy
                                                ? "bg-gray-800/50 text-gray-600 cursor-default"
                                                : "bg-navy-700/50 text-white border border-glass-border hover:bg-navy-700"
                                        }`}
                                >
                                    {tier.cta}
                                </button>
                            </div>

                            {/* Decoy arrow pointing to Tier 1 */}
                            {tierStyles[i].decoy && (
                                <div className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 items-center gap-1">
                                    <svg className="w-5 h-5 text-accent-blue/40 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Psychology note */}
                <AnimatedSection delay={0.4} className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800/50 border border-glass-border text-sm text-gray-500">
                        <svg className="w-4 h-4 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {t("pricing.psychologyNode")}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
