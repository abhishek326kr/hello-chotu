"use client";

import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import {
    Store,
    CreditCard,
    Truck,
    ShoppingBag,
    Pill,
    Zap,
    Smartphone,
    ArrowRight,
    TrendingUp,
    Users
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FranchisePage() {
    const services = [
        {
            icon: <ShoppingBag className="w-8 h-8 text-white" />,
            title: "Smart Grocery",
            desc: "AI-driven inventory for daily essentials and local favorites.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <CreditCard className="w-8 h-8 text-white" />,
            title: "Banking Point",
            desc: "AePS, Money Transfer, and Micro-ATM services for the community.",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <Truck className="w-8 h-8 text-white" />,
            title: "Logistics Hub",
            desc: "First & last-mile delivery center for major e-commerce players.",
            color: "from-amber-500 to-orange-500"
        },
        {
            icon: <Zap className="w-8 h-8 text-white" />,
            title: "Bill Payments",
            desc: "One-stop utility bill payments for electricity, water, and recharge.",
            color: "from-emerald-500 to-green-500"
        },
        {
            icon: <Pill className="w-8 h-8 text-white" />,
            title: "E-Pharmacy",
            desc: "Digital access to medicines and healthcare consultations.",
            color: "from-rose-500 to-red-500"
        },
        {
            icon: <Smartphone className="w-8 h-8 text-white" />,
            title: "Digital Services",
            desc: "Pan card, Government schemes, and ticket bookings.",
            color: "from-indigo-500 to-blue-600"
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background - using generated image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/franchise-hero.png"
                        alt="Hello Chotu Franchise Store"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-gold font-bold mb-6">
                            Next-Gen Retail Franchise
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Own a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-orange-400">Digital Superstore</span>
                        </h1>
                        <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
                            Transform your local shop into a "Hello Chotu" smart store.
                            Combine the trust of a neighborhood kiriya with the power of modern technology.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/partner">
                                <Button size="lg" className="bg-brand-gold text-brand-navy hover:bg-yellow-400 font-bold px-10 h-14 rounded-full text-lg shadow-lg shadow-yellow-500/20">
                                    <Store className="mr-2 h-5 w-5" /> Start Your Franchise
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 h-14 rounded-full text-lg font-semibold backdrop-blur-sm">
                                    Download Brochure
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Smart Store Concept */}
            <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <SectionHeader
                                title="Not Just a Shop. A Hub."
                                subtitle="A fully integrated retail ecosystem designed for the modern Indian consumer."
                                className="mb-8"
                            />

                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                                        <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">Multiple Revenue Streams</h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            Don't rely on just grocery margins. Earn from banking, logistics, and digital services from day one.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                                        <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">Tech-Powered Operations</h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            Manage inventory, track sales, and handle payments with our proprietary "ChotuOS" app.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                        <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">Community Trust</h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            Be the go-to person for your neighborhood's every need, building lasting relationships.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Interior Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group">
                                <Image
                                    src="/images/store-interior.png"
                                    alt="Inside Hello Chotu Store"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Tech overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent pointer-events-none" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex items-center gap-2 text-white/90 text-sm font-mono mb-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        System Active • Live Store View
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex flex-col items-center">
                                <span className="text-3xl font-bold text-brand-indigo">350+</span>
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Stores</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        title="Everything Under One Roof"
                        subtitle="Explore the comprehensive suite of services that makes every Hello Chotu store a powerhouse."
                        centered
                        className="mb-16"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group bg-white dark:bg-slate-950 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 relative overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity`} />

                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-3 text-brand-navy dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-navy group-hover:to-brand-indigo dark:group-hover:from-white dark:group-hover:to-slate-300 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                                    {service.desc}
                                </p>

                                <div className="flex items-center text-sm font-bold text-brand-indigo">
                                    Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-navy z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-theme-start to-theme-end opacity-90" />
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                        </svg>
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
                        Join thousands of store owners who have doubled their income with Hello Chotu.
                    </p>
                    <Link href="/partner">
                        <Button size="lg" className="bg-white text-brand-navy hover:bg-slate-100 font-bold px-12 h-16 rounded-full text-xl shadow-2xl">
                            Apply for Franchise Now
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
