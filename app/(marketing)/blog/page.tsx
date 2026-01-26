"use client";

import React, { useEffect, useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardHeader } from "@/components/Card";
import Testimonial from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import { ApiResponse, BlogPost } from "@/types/api";

export default function BlogPage() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                // User provided specific endpoint: https://webapi.cultnest.com/api/blogs
                // URL explicitly adjusted to match user request
                const response = await fetch('https://webapi.cultnest.com/api/blogs');
                if (!response.ok) throw new Error("Failed to fetch blogs");
                const result: ApiResponse<{ blogs: BlogPost[] }> = await response.json();

                if (result.success && result.data && Array.isArray(result.data.blogs)) {
                    setBlogs(result.data.blogs);
                }
            } catch (err) {
                console.error(err);
                setError("Could not load blog posts.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Fallback colors for blog images if no image URL is provided
    const BG_COLORS = ["bg-blue-200", "bg-orange-200", "bg-green-200", "bg-purple-200", "bg-red-200"];

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

                {loading ? (
                    <div className="py-10 text-center text-slate-500">Loading articles...</div>
                ) : error ? (
                    <div className="py-10 text-center text-red-500">{error}</div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.length === 0 ? (
                            <div className="col-span-full text-center text-slate-500">No articles found.</div>
                        ) : (
                            blogs.map((blog, index) => {
                                const bgClass = BG_COLORS[index % BG_COLORS.length];
                                // Format date if available, else placeholder
                                const dateStr = blog.createdAt ? new Date(blog.createdAt).toLocaleDateString(undefined, {
                                    year: 'numeric', month: 'long', day: 'numeric'
                                }) : "Recent";

                                const imageUrl = blog.images && blog.images.length > 0
                                    ? `https://webapi.cultnest.com${blog.images[0]}`
                                    : null;

                                return (
                                    <Card key={blog.id || index} className="hover:shadow-xl transition-shadow cursor-pointer">
                                        <div className={`h-48 w-full ${bgClass} flex items-center justify-center text-slate-500 font-bold overflow-hidden relative`}>
                                            {imageUrl ? (
                                                <img src={imageUrl} alt={blog.title} className="w-full h-full object-cover" />
                                            ) : (
                                                "Blog Image"
                                            )}
                                        </div>
                                        <CardContent className="pt-6">
                                            <div className="flex justify-between items-center mb-2">
                                                <p className="text-xs text-theme-start font-bold uppercase tracking-wider">{dateStr}</p>
                                                {blog.tags && blog.tags.length > 0 && (
                                                    <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full text-slate-500">
                                                        {blog.tags[0]}
                                                    </span>
                                                )}
                                            </div>
                                            <h4 className="text-xl font-bold mb-3 hover:text-theme-end transition-colors line-clamp-2">{blog.title}</h4>

                                            {/* Render HTML content safely - stripping tags for excerpt if needed, or just clamping */}
                                            <div className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }}></div>

                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                                    <span>By {blog.author?.name || "Admin"}</span>
                                                </div>
                                                <Button variant="link" className="px-0 text-theme-end">Read More &rarr;</Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })
                        )}
                    </div>
                )}
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
