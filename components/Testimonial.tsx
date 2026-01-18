import React from "react";
import { Star } from "lucide-react";

interface TestimonialProps {
    name: string;
    city: string;
    quote: string;
    rating?: number;
}

export default function Testimonial({ name, city, quote, rating = 5 }: TestimonialProps) {
    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                ))}
            </div>
            <p className="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">
                "{quote}"
            </p>
            <div>
                <h4 className="font-bold text-slate-900 dark:text-white">{name}</h4>
                <p className="text-sm text-slate-500">{city}</p>
            </div>
        </div>
    );
}
