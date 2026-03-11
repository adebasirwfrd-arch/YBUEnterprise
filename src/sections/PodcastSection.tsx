"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const strategies = [
    {
        icon: "🎙️",
        title: "Triangular Dialogue",
        description: "SME Expert + Tech Lead + Female Co-Host (Audience Proxy). Three perspectives, one compelling narrative.",
    },
    {
        icon: "🎯",
        title: "Thought Leadership",
        description: "Position our SMEs as industry authorities. Every episode is a trust-building asset that attracts decision-makers.",
    },
    {
        icon: "💰",
        title: "Micro-Content Ads",
        description: "Repurpose long-form into bite-sized LinkedIn, Instagram, and TikTok content. Maximum reach, minimal spend.",
    },
];

export default function PodcastSection() {
    return (
        <section id="podcast" className="relative py-24 sm:py-32">
            <div className="section-divider mb-24" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                <AnimatedSection className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
                        Growth Engine
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Why We <span className="text-purple-400">Don&apos;t</span> Do Cold Calls
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        Our lean marketing engine attracts decision-makers organically
                        through B2B thought-leadership content.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                    {/* Left: Podcast visual */}
                    <AnimatedSection direction="left" className="lg:col-span-2">
                        <div className="relative">
                            <div className="glass rounded-2xl p-8 text-center">
                                {/* Soundwave animation */}
                                <div className="flex items-center justify-center gap-1 mb-6 h-24">
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                height: [
                                                    `${20 + Math.random() * 30}%`,
                                                    `${50 + Math.random() * 50}%`,
                                                    `${20 + Math.random() * 30}%`,
                                                ],
                                            }}
                                            transition={{
                                                duration: 1 + Math.random() * 0.5,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: i * 0.05,
                                            }}
                                            className="w-1.5 rounded-full bg-gradient-to-t from-purple-600 to-purple-400"
                                            style={{ minHeight: "8px" }}
                                        />
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">
                                    Industry Insider Podcast
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Live conversations with industry leaders
                                </p>

                                {/* Cost savings highlight */}
                                <div className="mt-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-400">Studio Rental</span>
                                        <span className="text-sm text-gray-500 line-through">Rp 50M/yr</span>
                                    </div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-sm text-gray-400">Our Setup</span>
                                        <span className="text-sm text-purple-400 font-bold">Rp 10M/yr</span>
                                    </div>
                                    <div className="h-px bg-glass-border mb-3" />
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-2xl font-bold text-purple-400">80%</span>
                                        <span className="text-sm text-gray-400">CapEx Saved</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right: Strategy cards */}
                    <div className="lg:col-span-3 space-y-4">
                        {strategies.map((strategy, i) => (
                            <GlassCard key={strategy.title} delay={i * 0.15} className="flex items-start gap-4">
                                <span className="text-3xl">{strategy.icon}</span>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">
                                        {strategy.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {strategy.description}
                                    </p>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
