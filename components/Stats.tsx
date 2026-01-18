"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
    { label: "Active Partners", value: "5000+" },
    { label: "Daily Transactions", value: "25K+" },
    { label: "Cities Covered", value: "12+" },
    { label: "Happy Customers", value: "1M+" },
];

export default function Stats() {
    return (
        <section className="py-10 bg-white dark:bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-theme-start to-theme-end">
                                {stat.value}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-theme-start/5 blur-3xl rounded-full -z-0" />
        </section>
    );
}
