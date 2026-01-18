"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Truck } from "lucide-react";
import { HomepageSection } from "@/types/api";

interface HeroProps {
    data: HomepageSection;
}

export default function Hero({ data }: HeroProps) {
    // If no image from API, use default.
    // The API images array might be present.
    const heroImage = data.images && data.images.length > 0 ? `https://web.cultnest.com${data.images[0]}` : "/images/shopkeeper.png";

    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-navy pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-theme-start/20 rounded-full blur-3xl opacity-50 animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-theme-end/20 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />
                <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center lg:text-left"
                >
                    <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <span className="text-theme-start font-semibold text-sm tracking-wide">{data.subheading}</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
                        {data.headline}
                    </h1>

                    <div
                        className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed prose prose-invert"
                        dangerouslySetInnerHTML={{ __html: data.text }}
                    />

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button size="lg" className="bg-primary-gradient text-white hover:opacity-90 font-bold px-8 py-6 text-lg rounded-full shadow-lg shadow-theme-start/25 transition-all hover:scale-105">
                            Get Started <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/20 text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg rounded-full">
                            Learn More
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-slate-400 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span>Verified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-brand-gold" />
                            <span>Premium Quality</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Content - Floating Glass Cards */}
                <div className="relative h-[500px] w-full hidden lg:block perspective-1000">
                    {/* Floating Elements Container */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="relative w-full h-full"
                    >
                        {/* Main Glass Card */}
                        <div className="absolute top-10 right-10 w-[320px] h-[400px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-2xl p-6 transform rotate-[-6deg] z-20">
                            <div className="w-full h-full rounded-2xl bg-brand-navy/50 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent z-10" />
                                <div className="w-full h-full relative">
                                    <img src={heroImage} alt={data.headline} className="object-cover w-full h-full opacity-80" />
                                </div>
                            </div>
                        </div>

                        {/* Decorative Circle */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full z-0 animate-[spin_20s_linear_infinite]" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-dashed border-white/10 rounded-full z-0 animate-[spin_15s_linear_infinite_reverse]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
