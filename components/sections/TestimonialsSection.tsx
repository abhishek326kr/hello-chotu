"use client";

import React from "react";
import { motion } from "framer-motion";
import { HomepageSection } from "@/types/api";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection({ data }: { data: HomepageSection }) {
    const imageUrl = data.images && data.images.length > 0 ? `${process.env.NEXT_PUBLIC_API_URL}${data.images[0]}` : null;

    return (
        <section className="py-24 bg-brand-navy relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-theme-start/10 mix-blend-overlay" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 font-bold text-sm mb-8">
                            {data.sectionName}
                        </div>

                        <div className="mb-8 flex justify-center text-white/20">
                            <Quote size={64} />
                        </div>

                        <div
                            className="text-3xl md:text-5xl font-bold leading-tight mb-10"
                            dangerouslySetInnerHTML={{ __html: data.text }} // The API puts the quote in the text
                        />

                        <div className="flex items-center justify-center gap-4">
                            {imageUrl && (
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                                    <Image src={imageUrl} alt="Testimonial" width={64} height={64} className="object-cover w-full h-full" />
                                </div>
                            )}
                            <div className="text-left">
                                <div className="text-xl font-bold">{data.subheading}</div>
                                <div className="text-white/60">Client</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
