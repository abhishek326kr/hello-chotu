"use client";

import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Smartphone, Truck, Package, Lightbulb, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesPage() {
    const services = [
        {
            icon: <Smartphone size={40} />,
            title: "Digital Integration",
            description: "Empowering local stores with a user-friendly app to manage orders, catalog, and payments seamlessly.",
            color: "from-blue-500 to-indigo-600",
            bg: "bg-blue-50 dark:bg-blue-900/20",
        },
        {
            icon: <Truck size={40} />,
            title: "Hyper-Local Delivery",
            description: "Dedicated delivery fleet ensuring goods reach customers within minutes, maintaining freshness and trust.",
            color: "from-green-500 to-emerald-600",
            bg: "bg-green-50 dark:bg-green-900/20",
        },
        {
            icon: <Package size={40} />,
            title: "Inventory Management",
            description: "Smart insights and restocking solutions to ensure shops never run out of essential items.",
            color: "from-orange-500 to-red-600",
            bg: "bg-orange-50 dark:bg-orange-900/20",
        },
        {
            icon: <Lightbulb size={40} />,
            title: "Marketing Support",
            description: "Helping small businesses reach effective audiences through digital promotions and branding.",
            color: "from-yellow-500 to-amber-600",
            bg: "bg-yellow-50 dark:bg-yellow-900/20",
        },
    ];

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Services Hero */}
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
                <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-brand-navy dark:text-white">{service.title}</h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Franchise Benefit Banner */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="bg-brand-navy rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-white shadow-2xl">
                        {/* Decorative Circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-theme-start/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-theme-end/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Become a Franchise Partner</h2>
                                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                    Join our network as a Regional Aggregator or Service Partner. Low investment, high returns, and the satisfaction of empowering your community.
                                </p>
                                <Link href="/partner">
                                    <Button size="lg" className="bg-primary-gradient text-white hover:opacity-90 font-bold px-8 py-6 h-auto text-lg rounded-full">
                                        Explore Opportunities <ArrowRight className="ml-2" />
                                    </Button>
                                </Link>
                            </div>
                            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/10">
                                <h4 className="font-bold text-xl mb-6 text-theme-start">Franchise Benefits</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <div className="bg-white/20 p-2 rounded-full"><Users size={18} /></div>
                                        <span>Access to extensive retailer network</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="bg-white/20 p-2 rounded-full"><Smartphone size={18} /></div>
                                        <span>Proven technology stack</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="bg-white/20 p-2 rounded-full"><Truck size={18} /></div>
                                        <span>Logistics support & training</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="bg-white/20 p-2 rounded-full"><Lightbulb size={18} /></div>
                                        <span>Marketing & branding collateral</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CSR Teaser */}
            <section className="relative py-32 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/csr-bg.png"
                        alt="Children Learning"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-navy/90 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-16 rounded-[3rem] max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold mb-6 text-white">"Rescue Every Chotu"</h2>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                            Our CSR initiative focuses on upskilling, education, and improving the quality of life for the workforce. We believe in creating a future where every child has access to education.
                        </p>
                        <Link href="/social-impact">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy font-bold px-10 py-6 h-auto text-lg rounded-full">
                                Learn About Social Impact
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
