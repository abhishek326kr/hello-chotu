import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, HeartHandshake } from "lucide-react";

export default function SocialImpactPage() {
    return (
        <main className="min-h-screen">
            {/* Hero for CSR */}
            <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-theme-start/30 to-brand-navy/80 z-0" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl font-bold mb-6">Social Impact</h1>
                    <p className="text-xl max-w-3xl mx-auto text-slate-300">
                        Beyond business, we are a movement for change. Our initiatives are dedicated to uplifting the lives of those who power India's informal economy.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
                        <div className="md:w-1/2">
                            <div className="bg-yellow-400 w-full h-80 rounded-2xl flex items-center justify-center text-brand-navy font-bold text-2xl shadow-xl transform rotate-2">
                                "Rescue Every Chotu" Image
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-4xl font-bold mb-6 text-brand-navy dark:text-white">Rescue Every Chotu</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                                The name "Chotu" is often used to address young helpers in varied industries. We aim to reclaim this identity by ensuring dignity, fair wages, and eliminating child labor.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-300">
                                Our initiative identifies vulnerable youth and provides them with pathways to education or formal employment training.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border-t-4 border-t-theme-start text-center">
                            <div className="bg-theme-start/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-theme-start">
                                <BookOpen size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Educational Support</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Scholarships and study materials for children of our partners and gig workers.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border-t-4 border-t-theme-end text-center">
                            <div className="bg-theme-end/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-theme-end">
                                <Briefcase size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Job Creation</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Formalizing the informal sector by creating salaried jobs with benefits and insurance.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border-t-4 border-t-green-500 text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                <HeartHandshake size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Community Development</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Health camps, financial literacy workshops, and support groups for families.
                            </p>
                        </div>
                    </div>

                    <div className="mt-24 text-center">
                        <h2 className="text-3xl font-bold mb-6">Join Our Cause</h2>
                        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
                            Your support can help us reach more lives. Partner with our CSR wing or volunteer your time.
                        </p>
                        <Button size="lg" className="bg-brand-navy text-white hover:bg-brand-navy/90 font-bold px-8">
                            Support Our Initiatives
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
