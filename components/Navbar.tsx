"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; // Will create this later or mock it for now

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-slate-950/80 dark:border-slate-800">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-brand-navy dark:text-white">
                    <span className="text-theme-start">Hello</span>
                    <span>Chotu</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-slate-700 hover:text-theme-start transition-colors dark:text-slate-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:flex">
                    <button className="bg-primary-gradient text-white px-4 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition-all">
                        Download App
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-slate-700 dark:text-slate-200"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t bg-white dark:bg-slate-950">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-base font-medium text-slate-700 hover:text-theme-start transition-colors dark:text-slate-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button className="bg-primary-gradient text-white px-4 py-3 rounded-full font-semibold text-sm w-full">
                            Download App
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
