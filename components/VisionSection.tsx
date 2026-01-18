"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function VisionSection() {
    return (
        <section className="relative py-32 flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/images/vision-bg.png"
                    alt="Vision Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/50" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Building India's Largest <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            Hyper-Local Network
                        </span>
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
                        Our vision is to empower 10 million "Chotus" and connect 100 million households by 2030. Be a part of the change.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/partner">
                            <Button size="lg" className="bg-white text-brand-navy hover:bg-slate-100 font-bold px-10 h-14 rounded-full text-lg shadow-xl shadow-white/10">
                                Become a Partner
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 h-14 rounded-full text-lg bg-transparent">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
