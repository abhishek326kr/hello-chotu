"use client";

import React from "react";
import { Search, Filter, MoreVertical, ShieldCheck, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FranchisePage() {
    const franchises = [
        { id: 1, name: "Sharma General Store", owner: "Rajesh Sharma", location: "Sector 4, Noida", status: "Active", revenue: "₹2.4L" },
        { id: 2, name: "Gupta Electronics", owner: "Amit Gupta", location: "Saket, Delhi", status: "Pending", revenue: "-" },
        { id: 3, name: "Singh Supermart", owner: "Vikram Singh", location: "Gurgaon, HR", status: "Active", revenue: "₹5.1L" },
        { id: 4, name: "Easy Day Local", owner: "Meera Reddy", location: "Indiranagar, BLR", status: "Suspended", revenue: "₹0.8L" },
        { id: 5, name: "Chotu Point", owner: "Karan Johar", location: "Mumbai, MH", status: "Active", revenue: "₹3.2L" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-brand-navy dark:text-white">Franchise Management</h1>
                    <p className="text-slate-500">Manage your network of 342 active stores.</p>
                </div>
                <Button className="bg-brand-navy text-white hover:bg-brand-indigo">
                    + Add New Store
                </Button>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                {/* Filters */}
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by name, owner, or location..."
                            className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-brand-indigo/50"
                        />
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <Button variant="outline" className="gap-2 text-slate-600 border-slate-200">
                            <Filter size={16} /> Filters
                        </Button>
                        <Button variant="outline" className="gap-2 text-slate-600 border-slate-200">
                            Export
                        </Button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 border-b border-slate-200 dark:border-slate-800">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Store Name</th>
                                <th className="px-6 py-4 font-semibold">Owner</th>
                                <th className="px-6 py-4 font-semibold">Location</th>
                                <th className="px-6 py-4 font-semibold">Monthly Revenue</th>
                                <th className="px-6 py-4 font-semibold">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {franchises.map((store) => (
                                <tr key={store.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-brand-navy dark:text-white">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                                                {store.name[0]}
                                            </div>
                                            {store.name}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{store.owner}</td>
                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{store.location}</td>
                                    <td className="px-6 py-4 text-brand-navy dark:text-white font-medium">{store.revenue}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold
                                    ${store.status === 'Active' ? 'bg-green-100 text-green-700' :
                                                store.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                                                    'bg-red-100 text-red-700'}`}>
                                            {store.status === 'Active' ? <ShieldCheck size={12} /> : <AlertCircle size={12} />}
                                            {store.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-brand-navy">
                                            <MoreVertical size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-sm text-slate-500">
                    <span>Showing 5 of 342 stores</span>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled>Previous</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
