import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <div className={cn("bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow duration-300", className)}>
            {children}
        </div>
    );
}

export function CardHeader({ children, className }: CardProps) {
    return <div className={cn("p-6 pb-3", className)}>{children}</div>;
}

export function CardContent({ children, className }: CardProps) {
    return <div className={cn("p-6 pt-0", className)}>{children}</div>;
}

export function CardFooter({ children, className }: CardProps) {
    return <div className={cn("p-6 pt-0 flex items-center", className)}>{children}</div>;
}
