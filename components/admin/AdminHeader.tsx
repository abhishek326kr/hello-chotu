"use client";

import React from "react";
import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminHeader() {
    return (
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 sticky top-0 z-40">
            {/* Search Bar */}
            <div className="flex items-center gap-4 flex-1">
                <div className="relative w-full max-w-md hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search stores, transactions, or users..."
                        className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-indigo/50"
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900" />
                </button>

                <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2" />

                <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 p-1.5 rounded-full pr-3 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-theme-end flex items-center justify-center text-white font-bold text-xs">
                        AD
                    </div>
                    <div className="text-sm font-medium hidden md:block">
                        <span className="block text-brand-navy dark:text-white leading-none">Admin User</span>
                        <span className="text-[10px] text-slate-500">Super Admin</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
