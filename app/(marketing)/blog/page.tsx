"use client";

import React, { useEffect, useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardHeader } from "@/components/Card";
import Testimonial from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import { ApiResponse, BlogPost } from "@/types/api";
import Link from "next/link";

export default function BlogPage() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    // Fallback to hardcoded URL if env var is missing (e.g. dev server not restarted)
    // For client-side, we use relative path to use Next.js rewrites (CORS fix)
    const API_URL = '';
    const LIMIT = 6;

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            try {
                // Fetch with limit and page
                const response = await fetch(`${API_URL}/api/blogs?limit=${LIMIT}&page=${page}`);
                if (!response.ok) throw new Error(`Failed to fetch blogs: ${response.status}`);
                const result: ApiResponse<{ blogs: BlogPost[] }> = await response.json();

                if (result.success && result.data && Array.isArray(result.data.blogs)) {
                    setBlogs(result.data.blogs);
                } else {
                    setBlogs([]);
                }
            } catch (err) {
                console.error(err);
                setError("Could not load blog posts.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
        // Scroll to top when page changes
        if (page > 1) {
            const section = document.getElementById('blog-listing');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        }
    }, [page, API_URL]);

    const handleNext = () => {
        setPage(prev => prev + 1);
    };

    const handlePrev = () => {
        setPage(prev => Math.max(prev - 1, 1));
    };

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

            <section id="blog-listing" className="container mx-auto px-4 mb-20">
                <h3 className="text-2xl font-bold mb-8">Latest Articles</h3>

                {loading ? (
                    <div className="py-20 text-center text-slate-500 flex flex-col items-center justify-center">
                        <div className="w-8 h-8 border-4 border-theme-start border-t-transparent rounded-full animate-spin mb-4"></div>
                        Loading articles...
                    </div>
                ) : error ? (
                    <div className="py-20 text-center text-red-500 bg-red-50 rounded-xl">
                        {error}
                        <Button variant="outline" size="sm" onClick={() => window.location.reload()} className="ml-4 mt-2">Retry</Button>
                    </div>
                ) : (
                    <>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {blogs.length === 0 ? (
                                <div className="col-span-full py-20 text-center text-slate-500 bg-slate-50 rounded-xl">
                                    <p className="text-lg">No articles found.</p>
                                    {page > 1 && (
                                        <Button variant="outline" onClick={handlePrev} className="mt-4">Go Back</Button>
                                    )}
                                </div>
                            ) : (
                                blogs.map((blog, index) => {
                                    const bgClass = BG_COLORS[index % BG_COLORS.length];
                                    // Format date if available, else placeholder
                                    const dateStr = blog.createdAt ? new Date(blog.createdAt).toLocaleDateString(undefined, {
                                        year: 'numeric', month: 'long', day: 'numeric'
                                    }) : "Recent";

                                    const imageUrl = blog.images && blog.images.length > 0
                                        ? `${API_URL}${blog.images[0]}`
                                        : null;

                                    return (
                                        <Link key={blog.id || index} href={`/blog/${blog.id}`} className="block h-full group">
                                            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col border-slate-200 dark:border-slate-800 group-hover:-translate-y-1">
                                                <div className={`h-48 w-full ${bgClass} flex items-center justify-center text-slate-500 font-bold overflow-hidden relative`}>
                                                    {imageUrl ? (
                                                        <img src={imageUrl} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                                    ) : (
                                                        "Blog Image"
                                                    )}
                                                </div>
                                                <CardContent className="pt-6 flex-grow flex flex-col">
                                                    <div className="flex justify-between items-center mb-3">
                                                        <p className="text-xs text-theme-start font-bold uppercase tracking-wider">{dateStr}</p>
                                                        {blog.tags && blog.tags.length > 0 && (
                                                            <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full text-slate-500 font-medium">
                                                                {blog.tags[0]}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <h4 className="text-xl font-bold mb-3 group-hover:text-theme-start transition-colors line-clamp-2 leading-tight">{blog.title}</h4>

                                                    {/* Render HTML content safely - stripping tags for excerpt if needed, or just clamping */}
                                                    <div className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 prose prose-sm dark:prose-invert max-w-none flex-grow" dangerouslySetInnerHTML={{ __html: blog.content }}></div>

                                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                                                        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                                                            {/* Placeholder avatar logic could be improved logic globally later */}
                                                            <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px]">
                                                                {(blog.author?.name || "A")[0]}
                                                            </div>
                                                            <span>{blog.author?.name || "Admin"}</span>
                                                        </div>
                                                        <span className="text-theme-end text-sm font-bold flex items-center group-hover:gap-2 transition-all">
                                                            Read More <span className="ml-1">&rarr;</span>
                                                        </span>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    );
                                })
                            )}
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex justify-center items-center gap-4">
                            <Button
                                variant="outline"
                                onClick={handlePrev}
                                disabled={page === 1 || loading}
                                className="px-6"
                            >
                                &larr; Previous
                            </Button>
                            <span className="text-sm font-medium text-slate-500">Page {page}</span>
                            <Button
                                variant="outline"
                                onClick={handleNext}
                                disabled={blogs.length < LIMIT || loading}
                                className="px-6"
                            >
                                Next &rarr;
                            </Button>
                        </div>
                    </>
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
