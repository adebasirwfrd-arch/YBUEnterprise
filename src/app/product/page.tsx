"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import {
    ChevronDown,
    Layout,
    ShieldCheck,
    Leaf,
    ArrowRight,
    Activity,
    Check,
    Cpu,
    Lock,
    Smartphone,
    Zap,
    Globe,
    Mail,
    MapPin,
    Menu,
    X
} from "lucide-react";

import styles from "./product.module.css";

// Dynamic import for Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ProductPage = () => {
    return (
        <div className={styles.productPage}>
            <div className={styles.noiseOverlay} />

            {/* Navigation */}
            <nav className={`${styles.nav} ${styles.navScrolled}`}>
                <div className={styles.navContainer}>
                    <a href="#" className={styles.navLogo}>
                        <div className={styles.navLogoIcon}>
                            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 36, height: 36 }}>
                                <rect width="32" height="32" rx="8" fill="url(#logo-grad-prod)" />
                                <path d="M8 22L16 10L24 22H20L16 16L12 22H8Z" fill="white" opacity="0.9" />
                                <defs>
                                    <linearGradient id="logo-grad-prod" x1="0" y1="0" x2="32" y2="32">
                                        <stop stopColor="#3B82F6" />
                                        <stop offset="1" stopColor="#06B6D4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span className={styles.navLogoText}>YBU<span className={styles.navLogoAccent}>Enterprise</span></span>
                    </a>
                    <div className={styles.navLinks}>
                        <a href="#solutions" className={styles.navLink}>Solutions</a>
                        <a href="#features" className={styles.navLink}>Features</a>
                        <a href="#industries" className={styles.navLink}>Industries</a>
                        <a href="#pricing" className={styles.navLink}>Pricing</a>
                        <a href="#contact" className={styles.navLink}>Contact</a>
                    </div>
                    <div className={styles.navActions}>
                        <a href="#contact" className="btn btn-primary btn-sm">Request Demo</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className={styles.hero} id="hero">
                <div className={styles.heroBackground}>
                    <div className={styles.heroGradient} />
                    <div className={styles.heroGrid} />
                </div>

                <div className="container">
                    <div className={styles.heroContent}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className={styles.heroBadge}>
                                <span className={styles.heroBadgeDot} />
                                Now serving Indonesia's top industrial companies
                            </div>
                            <h1 className={styles.heroTitle}>
                                Enterprise-Grade <span className="gradient-text">Safety, ERP</span> <br />
                                & Compliance Platform
                            </h1>
                            <p className={styles.heroSubtitle}>
                                Digitize HSE management, contractor safety compliance, and environmental operations with AI-powered
                                insights. Trusted by Oil & Gas, Shipping, and Mining leaders.
                            </p>
                            <div className={styles.heroCta}>
                                <button className="btn btn-primary btn-lg">
                                    Schedule a Demo <ArrowRight size={20} />
                                </button>
                                <button className="btn btn-ghost btn-lg">Explore Solutions</button>
                            </div>
                        </motion.div>

                        <motion.div
                            className={styles.heroVisual}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            {/* Floating cards and visual content ported from index.html */}
                            <div className={styles.visualPlaceholder}>
                                <Cpu size={120} color="#3B82F6" className="animate-pulse" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className={styles.solutions} id="solutions">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Our Solutions</span>
                        <h2 className="section-title">Three Platforms.<br /><span className="gradient-text">One Ecosystem.</span></h2>
                    </div>

                    <div className={styles.solutionsGrid}>
                        {/* HSEPLAN */}
                        <SolutionCard
                            title="HSEPLAN V.2"
                            type="HSE Management System"
                            desc="Track, manage, and analyze Health, Safety & Environment metrics with AI-powered insights."
                            color="#3B82F6"
                            icon={<Layout size={28} color="white" />}
                            features={["AI Consultant", "Real-time KPI Dashboard", "ISO 45001 Ready"]}
                        />
                        {/* CSMS */}
                        <SolutionCard
                            title="CSMS Digital Portal"
                            type="Contractor Safety Management"
                            desc="8-Element contractor safety compliance framework with automated scoring."
                            color="#10B981"
                            icon={<ShieldCheck size={28} color="white" />}
                            features={["Contractor Scoring", "8-Element Framework", "Schedule Mgmt"]}
                            featured
                        />
                        {/* EcoCompliant */}
                        <SolutionCard
                            title="EcoCompliant-OS"
                            type="Environmental Management"
                            desc="Automate ISO 14001 compliance, PROPER ratings prediction, and ESG reporting."
                            color="#F59E0B"
                            icon={<Leaf size={28} color="white" />}
                            features={["PROPER Predictor", "B3 Waste Manifest", "GHG Tracking"]}
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footerBrand}>
                        <span className={styles.navLogoText}>YBU<span className={styles.navLogoAccent}>Enterprise</span></span>
                        <p className={styles.footerTagline}>Engineered for Industrial Excellence.</p>
                    </div>
                    <div className={styles.footerBottom}>
                        <p>&copy; 2026 YBU Enterprise Solutions. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

interface SolutionCardProps {
    title: string;
    type: string;
    desc: string;
    color: string;
    icon: React.ReactNode;
    features: string[];
    featured?: boolean;
}

const SolutionCard = ({ title, type, desc, color, icon, features, featured = false }: SolutionCardProps) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            className={`${styles.solutionCard} ${featured ? styles.solutionCardFeatured : ""}`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
            <div className={styles.solutionCardHeader}>
                <div className={styles.solutionCardIcon} style={{ background: color }}>
                    {icon}
                </div>
                <div className={styles.solutionCardBadge}>Live in Production</div>
            </div>
            <h3 className={styles.solutionCardTitle}>{title}</h3>
            <p className={styles.solutionCardType}>{type}</p>
            <p className={styles.solutionCardDesc}>{desc}</p>
            <ul className={styles.solutionCardFeatures}>
                {features.map((f: string, i: number) => (
                    <li key={i}><Check size={16} color="#10B981" /> {f}</li>
                ))}
            </ul>
            <button className="btn btn-outline btn-full">Get Started</button>
        </motion.div>
    );
};

export default ProductPage;
