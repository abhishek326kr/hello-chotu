"use client";

import React from "react";
import {
    BarChart3,
    Map,
    TrendingUp,
    DollarSign,
    Package,
    CreditCard
} from "lucide-react";

export default function AnalyticsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-brand-navy dark:text-white">Analytics & Reports</h1>
                <p className="text-slate-500">Deep dive into your network performance.</p>
            </div>

            {/* Top Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-brand-navy to-slate-900 rounded-2xl p-6 text-white shadow-xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/10 rounded-lg"><TrendingUp size={20} /></div>
                        <span className="text-sm font-medium text-slate-300">Net Profit</span>
                    </div>
                    <div className="text-4xl font-bold mb-2">₹12.8L</div>
                    <div className="text-xs text-green-400 bg-green-500/20 inline-block px-2 py-1 rounded">+18% vs last month</div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Package size={20} /></div>
                        <span className="text-sm font-medium text-slate-500">Order Volume</span>
                    </div>
                    <div className="text-4xl font-bold text-brand-navy dark:text-white mb-2">8.5k</div>
                    <div className="text-xs text-slate-500">~280 daily orders</div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><CreditCard size={20} /></div>
                        <span className="text-sm font-medium text-slate-500">Txn Value</span>
                    </div>
                    <div className="text-4xl font-bold text-brand-navy dark:text-white mb-2">₹1.2Cr</div>
                    <div className="text-xs text-slate-500">Processed this month</div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Service Mix */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-6">Revenue by Service</h3>
                    <div className="space-y-4">
                        {[
                            { label: "Smart Grocery", value: 45, color: "bg-theme-start" },
                            { label: "Banking (AePS)", value: 30, color: "bg-blue-500" },
                            { label: "Logistics", value: 15, color: "bg-orange-500" },
                            { label: "Utility Payments", value: 10, color: "bg-purple-500" },
                        ].map((item, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-medium text-slate-600 dark:text-slate-300">{item.label}</span>
                                    <span className="font-bold text-brand-navy dark:text-white">{item.value}%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div className={`h-full ${item.color}`} style={{ width: `${item.value}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Regional Performance (Placeholder) */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                        <Map className="text-slate-400" size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-2">Regional Heatmap</h3>
                    <p className="text-slate-500 text-sm max-w-xs">
                        Visual map data requires external integration (Google Maps/Leaflet). Feature enabled in Production build.
                    </p>
                </div>
            </div>
        </div>
    );
}
