"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "Arsenal", href: "#arsenal" },
    { label: "Pricing", href: "#pricing" },
    { label: "Financials", href: "#financials" },
    { label: "Invest", href: "#invest" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-navy-950/80 backdrop-blur-xl border-b border-glass-border shadow-lg shadow-navy-950/50"
                    : "bg-transparent"
                }`}
        >
            <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#hero" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-gold flex items-center justify-center text-navy-950 font-bold text-sm">
                        YBU
                    </div>
                    <span className="text-lg font-bold text-white group-hover:text-accent-blue transition-colors">
                        Enterprise
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-gray-400 hover:text-accent-blue transition-colors duration-200 font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#invest"
                        className="px-5 py-2 bg-accent-blue/10 border border-accent-blue/30 text-accent-blue rounded-full text-sm font-semibold hover:bg-accent-blue/20 transition-all duration-200"
                    >
                        Partner With Us
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`w-6 h-0.5 bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`w-6 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-navy-900/95 backdrop-blur-xl border-t border-glass-border px-6 py-6 flex flex-col gap-4"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-300 hover:text-accent-blue transition-colors py-2 font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}
