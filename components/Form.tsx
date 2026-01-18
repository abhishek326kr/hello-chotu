"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        type: "General Inquiry",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for your inquiry! We will get back to you soon.");
        setFormData({ name: "", email: "", phone: "", type: "General Inquiry", message: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-theme-start focus:border-transparent outline-none transition-all dark:bg-slate-900 dark:border-slate-600"
                    placeholder="John Doe"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-theme-start focus:border-transparent outline-none transition-all dark:bg-slate-900 dark:border-slate-600"
                        placeholder="john@example.com"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-theme-start focus:border-transparent outline-none transition-all dark:bg-slate-900 dark:border-slate-600"
                        placeholder="+91 98765 43210"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium text-slate-700 dark:text-slate-300">Inquiry Type</label>
                <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-theme-start focus:border-transparent outline-none transition-all dark:bg-slate-900 dark:border-slate-600"
                >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Regional Aggregator">Regional Aggregator (RA)</option>
                    <option value="Franchise">Franchise</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Career">Career / Job</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-theme-start focus:border-transparent outline-none transition-all dark:bg-slate-900 dark:border-slate-600"
                    placeholder="How can we help you?"
                ></textarea>
            </div>

            <Button type="submit" size="lg" className="w-full font-bold text-lg py-6">
                Submit Inquiry
            </Button>
        </form>
    );
}
