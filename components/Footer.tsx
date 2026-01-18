import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="bg-brand-navy text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">
                            <span className="text-theme-start">Hello</span> Chotu
                        </h3>
                        <p className="text-slate-300 text-sm">
                            {BRAND.description}
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-theme-start"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-theme-start"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-theme-start"><Twitter size={20} /></Link>
                            <Link href="#" className="hover:text-theme-start"><Linkedin size={20} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-theme-start transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Our Services</h4>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li><Link href="/services" className="hover:text-theme-start">Digital Integration</Link></li>
                            <li><Link href="/services" className="hover:text-theme-start">Delivery Solutions</Link></li>
                            <li><Link href="/services" className="hover:text-theme-start">Inventory Management</Link></li>
                            <li><Link href="/partner" className="hover:text-theme-start">Franchise Opportunities</Link></li>
                            <li><Link href="/demo-store" className="text-brand-gold font-semibold hover:text-white">Live Store Demo</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-slate-300">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="shrink-0 text-theme-start" />
                                <span>{BRAND.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-theme-start" />
                                <span>{BRAND.phone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-theme-start" />
                                <span>{BRAND.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
                    <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
