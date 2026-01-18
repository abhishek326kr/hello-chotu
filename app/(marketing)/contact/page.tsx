import React from "react";
import ContactForm from "@/components/Form";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-20 pb-20 bg-slate-50 dark:bg-slate-950">
            <SectionHeader
                title="Get in Touch"
                subtitle="Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
                className="container mx-auto px-4"
            />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
                {/* Form Column */}
                <div>
                    <ContactForm />
                </div>

                {/* Info Column */}
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border border-slate-100 dark:border-slate-700">
                        <h3 className="text-2xl font-bold mb-6 text-brand-navy dark:text-white">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-theme-start/10 text-theme-start rounded-full flex items-center justify-center shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">Our Office</h4>
                                    <p className="text-slate-600 dark:text-slate-400">{BRAND.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-theme-start/10 text-theme-start rounded-full flex items-center justify-center shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">Phone</h4>
                                    <p className="text-slate-600 dark:text-slate-400">{BRAND.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-theme-start/10 text-theme-start rounded-full flex items-center justify-center shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">Email</h4>
                                    <p className="text-slate-600 dark:text-slate-400">{BRAND.email}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-theme-start/10 text-theme-start rounded-full flex items-center justify-center shrink-0">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">Working Hours</h4>
                                    <p className="text-slate-600 dark:text-slate-400">Mon - Sat: 9:00 AM - 7:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-navy p-8 rounded-xl shadow-md text-white">
                        <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
                        <p className="text-slate-300 mb-6">
                            Are you passionate about empowering local communities? We are always looking for talented individuals to join our team.
                        </p>
                        <Button variant="secondary" className="w-full font-bold">
                            View Career Openings
                        </Button>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="container mx-auto px-4 mt-16">
                <div className="w-full h-[400px] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center text-slate-400 font-bold text-xl">
                    Google Maps Integration Placeholder
                </div>
            </div>
        </main>
    );
}
