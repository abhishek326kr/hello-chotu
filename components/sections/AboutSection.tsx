"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HomepageSection } from "@/types/api";

export default function AboutSection({ data }: { data: HomepageSection }) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://webapi.cultnest.com';
    const imageUrl = data.images && data.images.length > 0 ? `${API_URL}${data.images[0]}` : "/images/why-image.png";

    return (
        <section className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 aspect-video">
                            <Image
                                src={imageUrl}
                                alt={data.headline}
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-theme-end/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-theme-start/10 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-theme-start/10 text-theme-start font-bold text-sm mb-6">
                            {data.sectionName}
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-brand-navy dark:text-white leading-tight">
                            {data.headline}
                        </h2>
                        <h3 className="text-xl text-theme-start font-medium mb-4">{data.subheading}</h3>
                        <div
                            className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed prose dark:prose-invert"
                            dangerouslySetInnerHTML={{ __html: data.text }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
