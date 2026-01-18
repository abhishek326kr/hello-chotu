import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardHeader } from "@/components/Card";
import Testimonial from "@/components/Testimonial";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
    const blogs = [
        {
            title: "How Digitalization is Saving the Kirana Store",
            excerpt: "Technology isn't replacing local stores; it's giving them superpowers. Here is how Hello Chotu is leading the charge.",
            date: "October 10, 2023",
            imageColor: "bg-blue-200",
        },
        {
            title: "From Delivery Boy to Franchise Owner: Ravi's Story",
            excerpt: "Ravi started as a delivery partner. Today, he manages a fleet of 50 riders in Hyderabad. Read his inspiring journey.",
            date: "September 22, 2023",
            imageColor: "bg-orange-200",
        },
        {
            title: "Identifying Child Labor in Supply Chains",
            excerpt: "A guide on how we audit our partners and ensure ethical practices at every step of the logistics chain.",
            date: "August 15, 2023",
            imageColor: "bg-green-200",
        },
    ];

    const testimonials = [
        {
            name: "Rajesh Kumar",
            city: "Bangalore",
            quote: "Hello Chotu increased my daily orders by 40%. The app is so easy to use, even for my father.",
        },
        {
            name: "Lakshmi Devi",
            city: "Mysore",
            quote: "I get my groceries delivered in 15 minutes. It's faster than going to the market myself!",
        },
        {
            name: "Ankit Singh",
            city: "Hubli",
            quote: "Partnering as an RA was the best investment decision. The support from the team is incredible.",
        },
    ];

    return (
        <main className="min-h-screen pt-20 pb-20">
            <SectionHeader
                title="Stories & Insights"
                subtitle="Read about the impact we are making and the people who drive our mission forward."
                className="container mx-auto px-4"
            />

            <section className="container mx-auto px-4 mb-20">
                <h3 className="text-2xl font-bold mb-8">Latest Articles</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <Card key={index} className="hover:shadow-xl transition-shadow cursor-pointer">
                            <div className={`h-48 w-full ${blog.imageColor} flex items-center justify-center text-slate-500 font-bold`}>
                                Blog Image
                            </div>
                            <CardContent className="pt-6">
                                <p className="text-xs text-theme-start font-bold uppercase tracking-wider mb-2">{blog.date}</p>
                                <h4 className="text-xl font-bold mb-3 hover:text-theme-end transition-colors">{blog.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                                    {blog.excerpt}
                                </p>
                                <Button variant="link" className="px-0 text-theme-end">Read More &rarr;</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="bg-slate-50 dark:bg-slate-900 py-20">
                <div className="container mx-auto px-4">
                    <SectionHeader title="Community Voices" centered className="mb-12" />
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((t, index) => (
                            <Testimonial key={index} {...t} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
