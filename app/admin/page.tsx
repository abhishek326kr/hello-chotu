"use client";

import React from "react";
import {
    ArrowUpRight,
    ArrowDownRight,
    Users,
    Store,
    IndianRupee,
    Clock
} from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-brand-navy dark:text-white">Dashboard Overview</h1>
                <p className="text-slate-500">Welcome back, get a quick update on your franchise network.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Revenue", value: "₹45.2 Lakh", change: "+12.5%", isPositive: true, icon: IndianRupee, color: "blue" },
                    { label: "Active Stores", value: "342", change: "+4 this week", isPositive: true, icon: Store, color: "green" },
                    { label: "Pending Requests", value: "18", change: "-2 from yesterday", isPositive: false, icon: Clock, color: "orange" },
                    { label: "Total Customers", value: "1.2 Lakh", change: "+8.1%", isPositive: true, icon: Users, color: "purple" }
                ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl bg-${stat.color}-50 text-${stat.color}-600`}>
                                <stat.icon size={20} />
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 ${stat.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {stat.isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                                {stat.change}
                            </span>
                        </div>
                        <div className="text-3xl font-bold text-brand-navy dark:text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-slate-500">{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Mock Revenue Chart */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg font-bold text-brand-navy dark:text-white">Revenue Growth</h3>
                        <select className="bg-slate-100 text-sm p-2 rounded-lg border-none focus:ring-0">
                            <option>Last 6 Months</option>
                            <option>Last Year</option>
                        </select>
                    </div>

                    {/* CSS Based Bar Chart */}
                    <div className="h-[300px] flex items-end justify-between gap-4 px-4">
                        {[30, 45, 35, 60, 52, 75, 68, 85, 90, 82, 95, 100].map((h, i) => (
                            <div key={i} className="w-full flex flex-col items-center gap-2 group">
                                <div
                                    className="w-full bg-brand-indigo/80 rounded-t-lg group-hover:bg-brand-indigo transition-all relative"
                                    style={{ height: `${h}%` }}
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        ₹{h * 0.8}L
                                    </div>
                                </div>
                                <span className="text-xs text-slate-400 font-medium">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-6">Recent Activity</h3>
                    <div className="space-y-6">
                        {[
                            { title: "New Store Approved", desc: "Sharma General Store (Noida)", time: "2h ago", type: "success" },
                            { title: "Application Pending", desc: "Gupta Electronics (Delhi)", time: "5h ago", type: "warning" },
                            { title: "Payout Processed", desc: "Batch #4421 - ₹12.5L", time: "1d ago", type: "info" },
                            { title: "New Feature Live", desc: "AePS v2.0 deployed", time: "2d ago", type: "system" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 relative">
                                {i !== 3 && <div className="absolute top-8 left-[11px] w-[2px] h-full bg-slate-100 dark:bg-slate-800 -z-10" />}
                                <div className={`w-6 h-6 rounded-full shrink-0 mt-1 border-2 border-white dark:border-slate-900 shadow-sm
                                ${item.type === 'success' ? 'bg-green-500' :
                                        item.type === 'warning' ? 'bg-orange-500' :
                                            item.type === 'info' ? 'bg-blue-500' : 'bg-slate-500'}`}
                                />
                                <div>
                                    <h4 className="text-sm font-bold text-brand-navy dark:text-white">{item.title}</h4>
                                    <p className="text-xs text-slate-500 mb-1">{item.desc}</p>
                                    <span className="text-[10px] text-slate-400">{item.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-2 text-sm text-brand-indigo font-bold hover:bg-brand-indigo/5 rounded-lg transition-colors">
                        View All Activity
                    </button>
                </div>
            </div>
        </div>
    );
}
