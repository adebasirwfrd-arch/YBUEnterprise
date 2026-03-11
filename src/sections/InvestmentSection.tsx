"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const investmentOptions = [
    {
        letter: "A",
        title: "The Lean Start",
        subtitle: "15% Equity (Milestone-based)",
        description:
            "Classic equity model with milestone vesting. Investor gains equity proportional to capital injection, unlocked at quarterly performance milestones.",
        highlights: [
            "15% equity stake",
            "Quarterly milestone vesting",
            "Board observer seat",
            "Priority on future rounds",
        ],
        color: "accent-blue",
        gradient: "from-accent-blue/10 to-transparent",
        borderColor: "border-accent-blue/30",
    },
    {
        letter: "B",
        title: "Revenue Share",
        subtitle: "25% Gross Rev until 150% ROI",
        description:
            "Zero equity dilution. Investor receives 25% of gross monthly revenue until total returns reach 150% of initial investment (Rp 450M on Rp 300M).",
        highlights: [
            "0% equity — you keep full ownership",
            "25% gross revenue monthly",
            "Capped at 150% total return",
            "Transparent revenue dashboard",
        ],
        color: "accent-gold",
        gradient: "from-accent-gold/10 to-transparent",
        borderColor: "border-accent-gold/30",
        featured: true,
    },
    {
        letter: "C",
        title: "Smart Money",
        subtitle: "20% Equity with Active Network KPI",
        description:
            "For investors with C-level connections to Pertamina, PLN, or Mind ID. Reduced cash (Rp 200-300M), equity earned through active client introductions.",
        highlights: [
            "20% equity with strict KPI vesting",
            "Must deliver 3 enterprise clients in 6 months",
            "Reduced capital requirement",
            "Active board participation",
        ],
        color: "purple-400",
        gradient: "from-purple-500/10 to-transparent",
        borderColor: "border-purple-500/30",
    },
];

export default function InvestmentSection() {
    return (
        <section id="invest" className="relative py-24 sm:py-32 pb-32">
            <div className="section-divider mb-24" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <AnimatedSection className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-sm font-medium mb-4">
                        The Ask
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        <span className="text-gradient-gold">Partner</span> With Us
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        Three flexible investment structures designed to match your risk
                        appetite, capital capacity, and strategic network.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {investmentOptions.map((option, i) => (
                        <motion.div
                            key={option.letter}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className={`relative flex flex-col glass rounded-2xl p-8 border ${option.borderColor} overflow-hidden`}
                        >
                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${option.gradient} pointer-events-none`} />

                            {/* Featured badge */}
                            {option.featured && (
                                <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-accent-gold/20 text-accent-gold text-xs font-bold">
                                    Recommended
                                </div>
                            )}

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Letter badge */}
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-lg`}
                                    style={{
                                        background: option.color === "accent-blue" ? "rgba(0,212,255,0.15)" : option.color === "accent-gold" ? "rgba(232,168,56,0.15)" : "rgba(168,85,247,0.15)",
                                        color: option.color === "accent-blue" ? "#00d4ff" : option.color === "accent-gold" ? "#e8a838" : "#a78bfa",
                                    }}
                                >
                                    {option.letter}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-1">
                                    {option.title}
                                </h3>
                                <p className="text-sm font-medium mb-4" style={{
                                    color: option.color === "accent-blue" ? "#00d4ff" : option.color === "accent-gold" ? "#e8a838" : "#a78bfa",
                                }}>
                                    {option.subtitle}
                                </p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {option.description}
                                </p>

                                {/* Highlights */}
                                <ul className="space-y-2 flex-grow">
                                    {option.highlights.map((highlight) => (
                                        <li key={highlight} className="flex items-start gap-2 text-sm text-gray-400">
                                            <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                style={{
                                                    color: option.color === "accent-blue" ? "#00d4ff" : option.color === "accent-gold" ? "#e8a838" : "#a78bfa",
                                                }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Handshake CTA */}
                <AnimatedSection className="text-center">
                    <div className="glass rounded-2xl p-12 border border-accent-gold/20 max-w-3xl mx-auto">
                        {/* Handshake icon */}
                        <div className="flex justify-center mb-6">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <svg className="w-16 h-16 text-accent-gold" viewBox="0 0 64 64" fill="none">
                                    <path d="M8 32l12-8 8 6 12-10 8 4 8-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20 30l-4 16h6l4-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M40 24l4 22h-6l-6-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <circle cx="32" cy="18" r="6" stroke="currentColor" strokeWidth="2" />
                                    <path d="M26 18c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </motion.div>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Let&apos;s Build The Future of
                            <br />
                            <span className="text-gradient-gold">Heavy Industry Compliance</span>
                        </h3>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Schedule a confidential presentation to see our live ERP systems,
                            full financial model, and discuss the partnership structure that works for you.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="mailto:contact@ybu-enterprise.com"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-gold-light text-navy-950 font-bold rounded-full text-lg hover:scale-105 transition-transform duration-300 animate-pulse-glow"
                                style={{
                                    boxShadow: "0 0 20px rgba(232,168,56,0.3), 0 0 40px rgba(232,168,56,0.1)",
                                }}
                            >
                                Schedule Presentation
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="mailto:contact@ybu-enterprise.com"
                                className="inline-flex items-center gap-2 px-8 py-4 border border-glass-border text-gray-400 rounded-full text-lg hover:border-accent-blue/30 hover:text-accent-blue transition-all duration-300"
                            >
                                contact@ybu-enterprise.com
                            </a>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-glass-border text-center">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} YBU Enterprise. All rights reserved.
                        <span className="mx-2">·</span>
                        Confidential — For Qualified Investors Only.
                    </p>
                </div>
            </div>
        </section>
    );
}
