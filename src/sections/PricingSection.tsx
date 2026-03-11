"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const tiers = [
    {
        name: "Tier 1: SaaS OpEx",
        badge: "Most Popular",
        price: "Rp 8M – 15M",
        period: "/ month",
        description: "Cloud-based subscription. The smart choice for modern enterprises.",
        features: [
            "Full ERP Access (All Modules)",
            "Cloud Hosting & Security",
            "Automatic Updates & Patches",
            "24/7 Technical Support",
            "Offline-First Data Sync",
            "Unlimited Users",
            "Quarterly Compliance Reports",
            "Training & Onboarding",
        ],
        highlight: true,
        gradient: "from-accent-blue to-accent-blue-deep",
        cta: "Start Free Trial",
    },
    {
        name: "Tier 2: Managed License",
        badge: null,
        price: "Rp 100M",
        period: "setup + Rp 5M/mo",
        description: "Perpetual license with managed hosting. Compiled version without source code.",
        features: [
            "Compiled Application License",
            "Dedicated Server Setup",
            "Monthly Maintenance & Hosting",
            "Priority Support Channel",
            "Custom Branding Available",
            "Data Ownership Guarantee",
        ],
        highlight: false,
        gradient: "from-accent-gold to-accent-gold-light",
        cta: "Contact Sales",
    },
    {
        name: "Tier 3: Enterprise IP",
        badge: "Full Code Transfer",
        price: "Rp 1.5B – 2.5B",
        period: "one-time",
        description: "Complete source code and intellectual property handover.",
        features: [
            "Full Source Code Transfer",
            "Complete IP Ownership",
            "Architecture Documentation",
            "6 Months Dev Support",
            "Internal Team Training",
        ],
        highlight: false,
        gradient: "from-gray-500 to-gray-600",
        cta: "Request Proposal",
        decoy: true,
    },
];

export default function PricingSection() {
    return (
        <section id="pricing" className="relative py-24 sm:py-32">
            <div className="section-divider mb-24" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <AnimatedSection className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-4">
                        Pricing Strategy
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Decoy <span className="text-gradient-blue">Pricing</span> Architecture
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        Psychologically engineered pricing tiers that guide procurement
                        decisions toward optimal cash flow for the business.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={!tier.decoy ? { y: -8, transition: { duration: 0.3 } } : undefined}
                            className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${tier.highlight
                                    ? "border-2 border-accent-blue/50 shadow-lg shadow-accent-blue/10"
                                    : tier.decoy
                                        ? "border border-glass-border opacity-60"
                                        : "border border-glass-border"
                                }`}
                        >
                            {/* Highlight glow */}
                            {tier.highlight && (
                                <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent pointer-events-none" />
                            )}

                            <div className={`relative flex flex-col h-full p-8 ${tier.decoy ? "bg-navy-900/30" : "glass"}`}>
                                {/* Badge */}
                                {tier.badge && (
                                    <div className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-bold mb-4 ${tier.highlight
                                            ? "bg-accent-blue/20 text-accent-blue"
                                            : tier.decoy
                                                ? "bg-gray-600/20 text-gray-500"
                                                : "bg-accent-gold/20 text-accent-gold"
                                        }`}>
                                        {tier.badge}
                                    </div>
                                )}

                                <h3 className={`text-lg font-bold mb-2 ${tier.decoy ? "text-gray-500" : "text-white"}`}>
                                    {tier.name}
                                </h3>

                                {/* Price */}
                                <div className="mb-4">
                                    <span className={`text-3xl font-bold ${tier.highlight ? "text-accent-blue" : tier.decoy ? "text-gray-500" : "text-accent-gold"
                                        }`}>
                                        {tier.price}
                                    </span>
                                    <span className={`text-sm ml-1 ${tier.decoy ? "text-gray-600" : "text-gray-400"}`}>
                                        {tier.period}
                                    </span>
                                </div>

                                <p className={`text-sm mb-6 ${tier.decoy ? "text-gray-600" : "text-gray-400"}`}>
                                    {tier.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8 flex-grow">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className={`flex items-start gap-2 text-sm ${tier.decoy ? "text-gray-600" : "text-gray-400"}`}>
                                            <svg className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlight ? "text-accent-blue" : tier.decoy ? "text-gray-600" : "text-accent-gold"
                                                }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <button
                                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${tier.highlight
                                            ? "bg-gradient-to-r from-accent-blue to-accent-blue-deep text-white hover:shadow-lg hover:shadow-accent-blue/20"
                                            : tier.decoy
                                                ? "bg-gray-800/50 text-gray-600 cursor-default"
                                                : "bg-navy-700/50 text-white border border-glass-border hover:bg-navy-700"
                                        }`}
                                >
                                    {tier.cta}
                                </button>
                            </div>

                            {/* Decoy arrow pointing to Tier 1 */}
                            {tier.decoy && (
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
                        Tier 3 acts as a price anchor — making Tier 1 feel like an absolute bargain for procurement teams.
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
