import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Check, Download, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PartnerPage() {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section className="bg-brand-navy text-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Partner With Us</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                        Join the fastest growing retail network in India. Choose your path to growth and impact.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg" className="bg-primary-gradient text-white hover:opacity-90 font-bold px-8">
                                Apply Now
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy font-bold px-8">
                            <Download className="mr-2 h-4 w-4" /> Download Brochure
                        </Button>
                    </div>
                </div>
            </section>

            {/* Opportunities */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <SectionHeader title="Partnership Models" subtitle="Tailored opportunities for different investment appetites." />

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* RA Model */}
                        <div className="border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="bg-theme-start/20 text-theme-start font-bold inline-block px-4 py-1 rounded-full text-sm mb-6">
                                Most Popular
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-brand-navy dark:text-white">Regional Aggregator (RA)</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-8">
                                Become the master franchisee for your district. Manage a network of service points and earn override commissions on every transaction.
                            </p>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <Check className="text-green-500" /> <span>Exclusive territory rights</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="text-green-500" /> <span>High ROI potential</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="text-green-500" /> <span>Technology & hiring support</span>
                                </li>
                            </ul>

                            <Link href="/contact">
                                <Button className="w-full bg-brand-navy text-white hover:bg-brand-navy/90">
                                    Inquire as RA <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>

                        {/* Service Partner Model */}
                        <div className="border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="bg-theme-end/20 text-theme-end font-bold inline-block px-4 py-1 rounded-full text-sm mb-6">
                                Low Investment
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-brand-navy dark:text-white">Service Partner</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-8">
                                Start your own Hello Chotu service point. Ideal for existing shopkeepers or individuals looking to start a small logistics business.
                            </p>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <Check className="text-green-500" /> <span>Minimal setup cost</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="text-green-500" /> <span>Instant activation</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="text-green-500" /> <span>Weekly payouts</span>
                                </li>
                            </ul>

                            <Link href="/contact">
                                <Button className="w-full bg-primary-gradient text-white hover:opacity-90">
                                    Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
