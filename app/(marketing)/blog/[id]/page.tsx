
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BlogPost, ApiResponse } from '@/types/api';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

async function getBlogPost(id: string): Promise<BlogPost | null> {
    try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://webapi.cultnest.com';
        const res = await fetch(`${API_URL}/api/blogs/${id}`, {
            cache: 'no-store', // fetch fresh data every time
        });

        if (!res.ok) {
            // If the single endpoint fails, traditionally we might try to find it in the list
            // or return null. For now, assuming standard REST endpoint exists.
            if (res.status === 404) return null;
            throw new Error(`Failed to fetch blog post: ${res.status}`);
        }

        const json: ApiResponse<BlogPost> = await res.json();

        // Handle different response structures gracefully
        // Sometimes APIs return the object directly, sometimes wrapped in 'data'
        if (json.success && json.data) {
            return json.data;
        }

        // If the structure matches the listing structure but for single item (unlikely but possible)
        // or if the API returns the object directly at the root (less common with the specific wrapper pattern seen)
        // Adjust based on actual API behavior. 
        // Based on user snippet: { success: true, data: { blogs: [...] } } for list.
        // For single, it's likely { success: true, data: { ...blogObject } } or just { ...blogObject } inside data.

        return json.data;
    } catch (error) {
        console.error("Error fetching blog post:", error);
        return null;
    }
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
    const blog = await getBlogPost(params.id);

    if (!blog) {
        notFound();
    }

    const imageUrl = blog.images && blog.images.length > 0
        ? `${process.env.NEXT_PUBLIC_API_URL}${blog.images[0]}`
        : null;

    const dateStr = blog.createdAt ? new Date(blog.createdAt).toLocaleDateString(undefined, {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }) : "Recent";

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            {/* Hero Section */}
            <div className="bg-brand-navy relative pt-32 pb-20 text-white overflow-hidden">
                <div className="absolute inset-0 bg-theme-start/20 mix-blend-overlay" />
                <div className="container mx-auto px-4 relative z-10">
                    <Link href="/blog" className="inline-flex items-center text-slate-300 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                    </Link>

                    <div className="max-w-4xl">
                        {blog.tags && blog.tags.length > 0 && (
                            <div className="flex gap-2 mb-6">
                                {blog.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wide uppercase backdrop-blur-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-slate-300 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                {blog.author?.avatar ? (
                                    <img src={blog.author.avatar} alt={blog.author.name} className="w-10 h-10 rounded-full object-cover border-2 border-white/20" />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-theme-start flex items-center justify-center text-white font-bold border-2 border-white/20">
                                        {blog.author?.name ? blog.author.name[0] : "A"}
                                    </div>
                                )}
                                <span className="font-medium text-white">{blog.author?.name || "Admin"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{dateStr}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <article className="container mx-auto px-4 -mt-10 relative z-20">
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto">
                    {imageUrl && (
                        <div className="w-full aspect-video relative">
                            <Image
                                src={imageUrl}
                                alt={blog.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    <div className="p-8 md:p-12 lg:p-16">
                        <div
                            className="prose prose-lg dark:prose-invert max-w-none 
                                prose-headings:font-bold prose-headings:text-brand-navy dark:prose-headings:text-white
                                prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-loose
                                prose-a:text-theme-start hover:prose-a:text-theme-end prose-a:no-underline hover:prose-a:underline
                                prose-img:rounded-2xl prose-img:shadow-lg"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </div>
                </div>
            </article>

            {/* CTA or Related (Optional) */}
            <section className="container mx-auto px-4 mt-20 max-w-4xl text-center">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800 p-12 rounded-3xl border border-blue-100 dark:border-slate-700">
                    <h3 className="text-2xl font-bold mb-4 text-brand-navy dark:text-white">Have questions?</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">Contact us to learn more about our services and how we can help your business grow.</p>
                    <Link href="/contact" className="inline-block bg-primary-gradient text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </main>
    );
}
