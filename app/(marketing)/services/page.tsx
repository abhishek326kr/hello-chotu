"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceApiResponse, PageSection } from "@/types/api";

export default function ServicesPage() {
    const [sections, setSections] = useState<PageSection[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                // User provided endpoint: https://web.cultnest.com/api/services
                const response = await fetch('https://web.cultnest.com/api/services');
                if (!response.ok) throw new Error("Failed to fetch services");
                const result: ServiceApiResponse = await response.json();

                if (result.success && Array.isArray(result.data.sections)) {
                    // Sort by order
                    const sortedSections = result.data.sections.sort((a, b) => a.order - b.order);
                    setSections(sortedSections);
                }
            } catch (err) {
                console.error(err);
                setError("Could not load services.");
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    const COLORS = [
        { color: "from-blue-500 to-indigo-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
        { color: "from-green-500 to-emerald-600", bg: "bg-green-50 dark:bg-green-900/20" },
        { color: "from-orange-500 to-red-600", bg: "bg-orange-50 dark:bg-orange-900/20" },
        { color: "from-yellow-500 to-amber-600", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
    ];

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Services Hero - Restored Static Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services-hero.png"
                        alt="Logistics Technology"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-start to-theme-end">Services</span>
                        </h1>
                        <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
                            Comprehensive technology and logistics solutions designed to uplift the unorganized retail sector into the digital age.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 -mt-20 relative z-20">
                <div className="container mx-auto px-4">
                    {loading ? (
                        <div className="text-center py-20 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl">Loading Services...</div>
                    ) : error ? (
                        <div className="text-center py-20 text-red-500 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl">{error}</div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {sections.map((section, index) => {
                                const style = COLORS[index % COLORS.length];

                                const imageUrl = section.images && section.images.length > 0
                                    ? `https://web.cultnest.com${section.images[0]}`
                                    : null;

                                return (
                                    <motion.div
                                        key={section.id || index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ y: -10 }}
                                        className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden text-left`}
                                    >
                                        <div className={`w-full h-56 relative bg-gradient-to-br ${style.color}`}>
                                            {imageUrl ? (
                                                <Image
                                                    src={imageUrl}
                                                    alt={section.headline}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-white/20">
                                                    <span className="text-6xl font-bold">{section.headline[0]}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-2xl font-bold mb-3 text-brand-navy dark:text-white">{section.headline}</h3>
                                            <div
                                                className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm line-clamp-4 prose prose-sm dark:prose-invert max-w-none"
                                                dangerouslySetInnerHTML={{ __html: section.text || section.subheading || "Experience our world-class services." }}
                                            />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
