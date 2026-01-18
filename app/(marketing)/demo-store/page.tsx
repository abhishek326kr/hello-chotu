"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Star,
    MapPin,
    Clock,
    Phone,
    ShieldCheck,
    ShoppingBag,
    Banknote,
    Zap,
    ArrowUpRight,
    Smartphone,
    CheckCircle2,
    Menu
} from "lucide-react";
import { motion } from "framer-motion";

export default function DemoStorePage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 md:pb-0 font-sans selection:bg-brand-gold/30">

            {/* Top Banner - Sleek */}
            <div className="bg-brand-navy text-white/80 text-center py-2 text-xs font-bold tracking-widest uppercase sticky top-0 z-50 backdrop-blur-md bg-brand-navy/90">
                Live Demo • Hello Chotu Partner Store
            </div>

            {/* IMMERSIVE HERO SECTION */}
            <section className="relative h-[85vh] w-full overflow-hidden">
                {/* Background Image with Parallax-like feel */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/store-interior.png"
                        alt="Sharma General Store Interior"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Cinematic Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 to-transparent" />
                </div>

                <div className="container mx-auto px-4 h-full relative z-10 flex flex-col justify-end pb-20 md:pb-32">
                    <div className="flex flex-col md:flex-row items-end gap-8">
                        {/* Store Identity Card - Glassmorphism */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-auto md:min-w-[500px] backdrop-blur-xl bg-white/10 border border-white/10 p-8 rounded-3xl shadow-2xl"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                                    <ShieldCheck size={12} /> Verified Partner
                                </span>
                                <div className="h-1 w-1 rounded-full bg-white/40" />
                                <span className="text-white/60 text-xs font-medium uppercase tracking-widest">Est. 2009</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                                Sharma <br />
                                <span className="text-brand-gold">General Store</span>
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    <div className="flex text-brand-gold"><Star fill="currentColor" size={16} /></div>
                                    <span>4.8 (2.5k reviews)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} className="text-brand-gold" />
                                    <span>Sector 4, Noida</span>
                                </div>
                            </div>

                            <div className="mt-8 flex gap-4">
                                <Button className="flex-1 bg-white text-brand-navy hover:bg-white/90 font-bold h-12 rounded-xl border-0 shadow-lg shadow-white/10">
                                    View Offers
                                </Button>
                                <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10 h-12 rounded-xl backdrop-blur-sm">
                                    <Phone size={16} className="mr-2" /> Call Now
                                </Button>
                            </div>
                        </motion.div>

                        {/* Owner Pill - Floating */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hidden md:flex items-center gap-4 bg-black/30 backdrop-blur-md rounded-full pl-2 pr-6 py-2 border border-white/10 ml-auto mb-8"
                        >
                            <div className="w-12 h-12 rounded-full border-2 border-brand-gold overflow-hidden relative">
                                <Image src="/images/shopkeeper.png" alt="Mr. Sharma" fill className="object-cover" />
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold text-sm leading-none mb-1">Mr. Rajesh Sharma</p>
                                <p className="text-white/60 text-xs text-left">Your Trusted Shopkeeper</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* SUPER SAVER DEALS - Modern Horizontal Scroll */}
            <section className="py-20 relative bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="flex items-end justify-between mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-brand-navy dark:text-white mb-2">Today's Best Deals</h2>
                            <p className="text-slate-500 font-medium">Exclusive prices for our loyal neighbors</p>
                        </div>
                        <div className="hidden md:flex gap-2">
                            <Button size="icon" variant="outline" className="rounded-full border-slate-200"><ArrowUpRight className="rotate-[-135deg]" /></Button>
                            <Button size="icon" variant="outline" className="rounded-full border-slate-200"><ArrowUpRight className="rotate-45" /></Button>
                        </div>
                    </div>

                    {/* Promo Banner - Styled */}
                    <div className="relative w-full h-[200px] md:h-[320px] rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-brand-indigo/10 transform hover:scale-[1.01] transition-transform duration-500">
                        <Image src="/images/promo-banner.png" alt="Super Saver Weekend" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <span className="bg-brand-gold text-brand-navy px-3 py-1 rounded-full text-xs font-bold uppercase mb-2 inline-block">Weekend Special</span>
                            <h3 className="text-3xl md:text-5xl font-bold">50% OFF</h3>
                            <p className="text-lg opacity-90">On all organic pulses & rice</p>
                        </div>
                    </div>

                    {/* Products - Carousel Style */}
                    <div className="flex gap-6 overflow-x-auto pb-10 pt-4 px-2 snap-x hide-scrollbar scroll-smooth">
                        {[
                            { name: "Aashirvaad Atta", weight: "10kg Pack", price: "₹450", oldPrice: "₹520", discount: "15% OFF", image: "/images/product-placeholder.png" },
                            { name: "Fortune Sun Lite", weight: "1L Pouch", price: "₹120", oldPrice: "₹145", discount: "SAVE ₹25" },
                            { name: "India Gate Rice", weight: "Dubar 5kg", price: "₹600", oldPrice: "₹750", discount: "BEST SELLER" },
                            { name: "Tata Salt", weight: "1kg Pack", price: "₹28", oldPrice: "₹30", discount: "6% OFF" },
                            { name: "Maggi Noodles", weight: "Pack of 6", price: "₹80", oldPrice: "₹96", discount: "SAVE ₹16" },
                        ].map((item, i) => (
                            <div key={i} className="min-w-[260px] md:min-w-[280px] bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-2 transition-transform duration-300 border border-slate-100 dark:border-slate-700 relative overflow-hidden group snap-start">
                                {/* Discount Tag */}
                                <div className="absolute top-4 left-4 bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full z-10">
                                    {item.discount}
                                </div>

                                {/* Image Placeholder */}
                                <div className="h-40 bg-slate-50 dark:bg-slate-700/50 rounded-2xl mb-4 flex items-center justify-center relative group-hover:bg-slate-100 transition-colors">
                                    <ShoppingBag className="text-slate-300 w-12 h-12" />
                                </div>

                                <h3 className="font-bold text-brand-navy dark:text-white text-lg leading-tight mb-1">{item.name}</h3>
                                <p className="text-slate-500 text-sm mb-4">{item.weight}</p>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="block font-bold text-xl text-brand-navy dark:text-white">{item.price}</span>
                                        <span className="text-xs text-slate-400 line-through font-medium">{item.oldPrice}</span>
                                    </div>
                                    <Button size="icon" className="h-10 w-10 rounded-xl bg-brand-navy text-white hover:bg-brand-indigo shadow-lg shadow-brand-navy/20">
                                        <span className="text-lg">+</span>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* PREMIUM SERVICES GRID */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">Complete Neighborhood Hub</h2>
                        <p className="text-slate-500 text-lg">More than just a store. We are your local bank, pharmacy, and courier point.</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { title: "Smart Grocery", icon: <ShoppingBag />, desc: "Fresh stock daily", color: "blue" },
                            { title: "Banking Point", icon: <Banknote />, desc: "Withdraw & Transfer", color: "purple" },
                            { title: "Utility Bills", icon: <Zap />, desc: "Pay in seconds", color: "yellow" },
                            { title: "Home Delivery", icon: <Clock />, desc: "Under 15 mins", color: "green" },
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="group bg-slate-50 dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-800 hover:border-brand-indigo/30 transition-all hover:shadow-2xl hover:shadow-brand-indigo/5 relative overflow-hidden"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-6 text-brand-navy dark:text-white group-hover:scale-110 transition-transform duration-300`}>
                                    {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                                </div>
                                <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">{service.title}</h3>
                                <p className="text-slate-500 text-sm font-medium">{service.desc}</p>

                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300 text-brand-indigo">
                                    <ArrowUpRight />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CONCIERGE REQUEST - Feature Section */}
            <section className="py-24 bg-brand-navy relative overflow-hidden">
                {/* Abstract BG */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-brand-indigo blur-3xl" />
                    <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-theme-start blur-3xl" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-brand-gold text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
                                Concierge Service
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Can't find what you need? <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-orange-400">Just ask Chotu.</span>
                            </h2>
                            <p className="text-slate-300 text-lg mb-8 max-w-md leading-relaxed">
                                From special grocery requests to scheduling a plumber, Mr. Sharma is here to specific requests.
                            </p>

                            <div className="flex flex-col gap-4">
                                {["Priority sourcing for rare items", "Home service scheduling", "Bulk order discounts"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white/90 font-medium">
                                        <div className="p-1 rounded-full bg-green-500/20 text-green-400"><CheckCircle2 size={16} /></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Request Card */}
                        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl shadow-black/20 relative">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-gold to-orange-500" />
                            <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-6">Make a Special Request</h3>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-500 uppercase">Your Name</label>
                                        <input type="text" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-brand-indigo/50" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-500 uppercase">Phone</label>
                                        <input type="tel" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-brand-indigo/50" placeholder="+91 98..." />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500 uppercase">Your Request</label>
                                    <textarea className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3 text-sm font-medium h-32 resize-none focus:ring-2 focus:ring-brand-indigo/50" placeholder="I need 5kg of Basmati Rice and a packet of Organic Sugar..." />
                                </div>
                                <Button className="w-full h-14 bg-brand-navy text-white hover:bg-brand-indigo font-bold text-lg rounded-xl shadow-lg shadow-brand-navy/30 mt-2">
                                    Send Request Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LOCATION & FOOTER SIMPLE */}
            <section className="bg-slate-50 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 text-slate-400 text-sm font-medium mb-8">
                        <MapPin size={16} />
                        Shop No. 12, Main Market, Sector 4, Noida
                    </div>
                    <p className="text-slate-300 text-xs">Powered by Hello Chotu Franchise Network</p>
                </div>
            </section>

            {/* MOBILE FLOATING BAR */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-md bg-brand-navy/90 backdrop-blur-xl text-white p-3 rounded-2xl shadow-2xl z-50 md:hidden flex items-center justify-between border border-white/10">
                <div className="flex gap-2">
                    <Button size="icon" className="rounded-xl bg-green-600 hover:bg-green-700">
                        <span className="text-xl">📱</span>
                    </Button>
                    <div className="flex flex-col justify-center">
                        <span className="text-[10px] text-slate-300 uppercase font-bold tracking-wider">Order via</span>
                        <span className="text-sm font-bold leading-none">WhatsApp</span>
                    </div>
                </div>
                <div className="h-8 w-[1px] bg-white/20" />
                <Button variant="ghost" className="text-white hover:bg-white/10 rounded-xl font-bold">
                    <Phone size={18} className="mr-2" /> Call
                </Button>
            </div>

        </main>
    );
}
