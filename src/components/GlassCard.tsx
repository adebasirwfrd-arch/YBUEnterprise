"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    hover?: boolean;
}

export default function GlassCard({
    children,
    className = "",
    delay = 0,
    hover = true,
}: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={
                hover
                    ? { y: -8, scale: 1.02, transition: { duration: 0.3 } }
                    : undefined
            }
            className={`glass rounded-2xl p-6 ${className}`}
        >
            {children}
        </motion.div>
    );
}
