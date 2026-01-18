"use client";

import React from "react";
import { motion } from "framer-motion";
import { HomepageSection } from "@/types/api";
import { CheckCircle2 } from "lucide-react";

export default function ServicesSection({ data }: { data: HomepageSection }) {
    // Parse HTML text to get services list if possible, otherwise just display text
    // The API example shows simple text. We'll try to split by comma if it looks like a list
    const cleanText = data.text.replace(/<[^>]*>/g, '');
    const servicesList = cleanText.includes(",") ? cleanText.split(",").map(s => s.trim()) : [cleanText];

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 font-bold text-sm mb-6">
                            {data.sectionName}
                        </div>
                        <h2 className="text-4xl font-bold mb-4 text-brand-navy dark:text-white">{data.headline}</h2>
                        <p className="text-xl text-slate-500">{data.subheading}</p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all hover:scale-105"
                        >
                            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                                <CheckCircle2 />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{service}</h3>
                        </motion.div>
                    ))}
                </div>

                {/* Fallback for the raw description if needed */}
                <div
                    className="mt-12 text-center text-slate-600 hidden"
                    dangerouslySetInnerHTML={{ __html: data.text }}
                />
            </div>
        </section>
    );
}
