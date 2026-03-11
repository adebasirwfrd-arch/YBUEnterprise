"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const PRODUCT_URL = process.env.NEXT_PUBLIC_PRODUCT_URL || "http://localhost:3000";

const modules = [
    { name: "HSE Plan V2", status: "Production Ready", href: `${PRODUCT_URL}/#solutions` },
    { name: "Personnel Readiness", status: "Production Ready", href: `${PRODUCT_URL}/#solutions` },
    { name: "CSMS Digital Portal", status: "Production Ready", href: `${PRODUCT_URL}/#solutions` },
    { name: "EcoCompliant-OS", status: "Production Ready", href: `${PRODUCT_URL}/#solutions` },
];

const techBadges = [
    "Next.js", "Cloud Native", "Offline-First", "Real-time Sync",
    "Mobile Ready", "REST API", "Role-Based Access", "Encrypted",
];

export default function ArsenalSection() {
    return (
        <section id="arsenal" className="relative py-24 sm:py-32">
            <div className="section-divider mb-24" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <AnimatedSection className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
                        Unfair Advantage
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        The <span className="text-gradient-gold">Arsenal</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        Your investment funds market penetration — not R&amp;D.
                        All products are 100% complete and battle-tested.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text & modules */}
                    <AnimatedSection direction="left">
                        <div className="space-y-6">
                            {/* Badge */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30"
                            >
                                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-green-400 font-bold text-sm tracking-wider uppercase">
                                    100% Development Completed
                                </span>
                            </motion.div>

                            <h3 className="text-2xl font-bold text-white">
                                Zero R&amp;D Risk. Instant Time-to-Market.
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Designed for <span className="text-accent-blue font-medium">Offline-First Data Sync</span> in
                                remote mining and offshore sites. Input data without internet,
                                automatic synchronisation when connectivity returns.
                            </p>

                            <div className="space-y-3 mt-6">
                                {modules.map((mod, i) => (
                                    <motion.a
                                        key={mod.name}
                                        href={mod.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center justify-between p-3 rounded-xl bg-navy-800/50 border border-glass-border hover:bg-navy-700/50 hover:border-accent-blue/30 transition-all duration-300 group/item"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-green-400 group-hover/item:animate-pulse" />
                                            <span className="text-white font-medium group-hover/item:text-accent-blue transition-colors">
                                                {mod.name}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400 font-medium">
                                                {mod.status}
                                            </span>
                                            <svg
                                                className="w-4 h-4 text-gray-500 group-hover/item:text-accent-blue transition-colors"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right: Dashboard mockup */}
                    <AnimatedSection direction="right" delay={0.2}>
                        <div className="relative">
                            {/* Glow behind */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-gold/10 rounded-2xl blur-2xl" />

                            {/* Mockup frame */}
                            <motion.a
                                href={`${PRODUCT_URL}/#solutions`}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.01 }}
                                className="relative glass rounded-2xl overflow-hidden border border-glass-border block group/mockup"
                            >
                                {/* Browser chrome */}
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-glass-border bg-navy-900/50 group-hover/mockup:bg-navy-800/70 transition-colors">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                    </div>
                                    <div className="flex-1 mx-4 px-3 py-1 rounded-md bg-navy-800/50 text-xs text-gray-400 text-center flex items-center justify-center gap-2">
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        app.ybu-enterprise.com/dashboard
                                    </div>
                                    <div className="w-8" /> {/* Spacer */}
                                </div>

                                {/* Dashboard content */}
                                <div className="p-6 space-y-4">
                                    {/* Stats row */}
                                    <div className="grid grid-cols-3 gap-3">
                                        {[
                                            { label: "Active Sites", value: "24", color: "accent-blue" },
                                            { label: "Compliance", value: "98%", color: "green-400" },
                                            { label: "Incidents", value: "0", color: "accent-gold" },
                                        ].map((stat) => (
                                            <div key={stat.label} className="p-3 rounded-lg bg-navy-800/50 border border-glass-border text-center">
                                                <p className={`text-xl font-bold text-${stat.color}`}>{stat.value}</p>
                                                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Chart placeholder */}
                                    <div className="h-32 rounded-lg bg-navy-800/30 border border-glass-border flex items-end p-4 gap-2">
                                        {[40, 65, 45, 80, 55, 90, 70, 95, 85, 75, 92, 88].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${h}%` }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                                                className="flex-1 bg-gradient-to-t from-accent-blue/50 to-accent-blue rounded-sm"
                                            />
                                        ))}
                                    </div>

                                    {/* Table rows */}
                                    <div className="space-y-2">
                                        {["Site Alpha - Balikpapan", "Site Bravo - Morowali", "Site Charlie - Dumai"].map((site, i) => (
                                            <div key={site} className="flex items-center justify-between p-2 rounded-lg bg-navy-800/30 text-xs">
                                                <span className="text-gray-400">{site}</span>
                                                <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400">Compliant</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover overlay for external link hint */}
                                <div className="absolute inset-0 bg-accent-blue/5 opacity-0 group-hover/mockup:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="bg-navy-900/90 border border-accent-blue/30 px-4 py-2 rounded-full flex items-center gap-2 translate-y-4 group-hover/mockup:translate-y-0 transition-transform">
                                        <span className="text-xs font-bold text-white uppercase tracking-wider">Live Demo</span>
                                        <svg className="w-4 h-4 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.a>

                            {/* Floating tech badges */}
                            <div className="flex flex-wrap gap-2 mt-6 justify-center">
                                {techBadges.map((badge, i) => (
                                    <motion.span
                                        key={badge}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8 + i * 0.05 }}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-navy-800/50 border border-glass-border text-gray-400"
                                    >
                                        {badge}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
