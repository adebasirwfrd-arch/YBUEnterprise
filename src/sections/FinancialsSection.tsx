"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useLanguage } from "@/context/LanguageContext";

function ProgressBar({ target, label }: { target: number; label: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <div ref={ref}>
            <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">{label}</span>
                <span className="text-accent-blue font-bold">{target} / 10 Clients</span>
            </div>
            <div className="h-3 rounded-full bg-navy-800 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${(target / 10) * 100}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="progress-bar-fill"
                />
            </div>
        </div>
    );
}

const metrics = [
    {
        value: 300000000,
        prefix: "Rp ",
        suffix: "",
        label: "The Ask (Seed Phase)",
        sublabel: "Zero R&D cost — 100% market penetration fund",
        color: "text-accent-blue",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        value: 4,
        prefix: "",
        suffix: " Clients",
        label: "Break-Even Point",
        sublabel: "Just 4 SaaS clients to cover all operations",
        color: "text-green-400",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        hasProgress: true,
    },
    {
        value: 240,
        prefix: "",
        suffix: "%",
        label: "Projected ROI (Year 1)",
        sublabel: "Net return on Rp 300M seed investment",
        color: "text-accent-gold",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
    },
    {
        value: 5,
        prefix: "",
        suffix: " Months",
        label: "Payback Period",
        sublabel: "Full capital recovery in under 6 months",
        color: "text-purple-400",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

export default function FinancialsSection() {
    const { t } = useLanguage();
    const metricsData = t("financials.metrics") as any[];

    const metricIcons = [
        (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    ];

    const metricStyles = [
        { value: 300000000, prefix: "Rp ", suffix: "", color: "text-accent-blue" },
        { value: 4, prefix: "", suffix: " Klien", color: "text-green-400", hasProgress: true },
        { value: 240, prefix: "", suffix: "%", color: "text-accent-gold" },
        { value: 5, prefix: "", suffix: " Bulan", color: "text-purple-400" },
    ];

    return (
        <section id="financials" className="relative py-24 sm:py-32">
            <div className="section-divider mb-24" />

            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/40 to-navy-950" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-blue/3 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <AnimatedSection className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-sm font-medium mb-4">
                        {t("financials.badge")}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        The <span className="text-gradient-gold">Holy Grail</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        {t("financials.subtitle")}
                    </p>
                </AnimatedSection>

                {/* Metrics grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    {metricsData.map((metric, i) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="glass rounded-2xl p-6 group hover:border-glass-bg-hover transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">{metric.label}</p>
                                    <div className={`text-3xl sm:text-4xl font-bold ${metricStyles[i].color}`}>
                                        <AnimatedCounter
                                            target={metricStyles[i].value}
                                            prefix={metricStyles[i].prefix}
                                            suffix={metricStyles[i].suffix}
                                            duration={metricStyles[i].value > 1000 ? 2500 : 1500}
                                        />
                                    </div>
                                </div>
                                <div className={`${metricStyles[i].color} opacity-50`}>{metricIcons[i]}</div>
                            </div>
                            <p className="text-xs text-gray-500">{metric.sublabel}</p>

                            {metricStyles[i].hasProgress && (
                                <div className="mt-4">
                                    <ProgressBar target={4} label={metric.progress} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* LTV:CAC ratio highlight */}
                <AnimatedSection delay={0.3}>
                    <div className="glass rounded-2xl p-8 text-center border border-accent-gold/20">
                        <h4 className="text-lg font-semibold text-gray-400 mb-4">
                            {t("financials.ltv.title")}
                        </h4>
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="text-center">
                                <p className="text-sm text-gray-500 mb-1">{t("financials.ltv.ltvLabel")}</p>
                                <p className="text-2xl font-bold text-accent-gold">Rp 600M</p>
                                <p className="text-xs text-gray-500 mt-1">{t("financials.ltv.ltvSub")}</p>
                            </div>
                            <span className="text-3xl text-gray-600">:</span>
                            <div className="text-center">
                                <p className="text-sm text-gray-500 mb-1">{t("financials.ltv.cacLabel")}</p>
                                <p className="text-2xl font-bold text-accent-blue">Rp 8.8M</p>
                                <p className="text-xs text-gray-500 mt-1">{t("financials.ltv.cacSub")}</p>
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
                            <span className="text-3xl font-bold text-green-400">68 : 1</span>
                            <span className="text-sm text-gray-400">({t("financials.ltv.gold")})</span>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
