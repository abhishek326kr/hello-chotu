import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    centered?: boolean;
}

export default function SectionHeader({ title, subtitle, className, centered = true }: SectionHeaderProps) {
    return (
        <div className={cn("mb-12", centered && "text-center", className)}>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className={cn("h-1 w-20 bg-primary-gradient mt-4 rounded-full", centered && "mx-auto")} />
        </div>
    );
}
