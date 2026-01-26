
import React from "react";
import Hero from "@/components/Hero";
import { HomepageApiResponse } from "@/types/api";

async function getAboutData(): Promise<HomepageApiResponse | null> {
    try {
        const res = await fetch('https://webapi.cultnest.com/api/about', { cache: 'no-store' });

        if (!res.ok) {
            throw new Error(`Failed to fetch about data: ${res.status}`);
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching about data:", error);
        return null;
    }
}

export default async function AboutPage() {
    const apiResponse = await getAboutData();
    const sections = apiResponse?.data?.sections || [];

    // Sort sections by 'order' property
    sections.sort((a, b) => a.order - b.order);

    const heroData = sections.find(s => s.sectionName.toLowerCase() === 'hero');

    // Future proofing: If there are other sections, we can filter them similarly here.
    // const storyData = sections.find(s => s.sectionName.toLowerCase() === 'story');

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 overflow-x-hidden">
            {heroData ? (
                <Hero data={heroData} />
            ) : (
                <div className="py-20 text-center flex flex-col items-center justify-center min-h-[50vh]">
                    <h1 className="text-3xl font-bold mb-4">About Us</h1>
                    <p className="text-slate-500">Loading about content...</p>
                </div>
            )}

            {/* 
        If there are other sections in the future without specific components, 
        we can render them generically here. 
      */}
            {sections.filter(s => s.sectionName.toLowerCase() !== 'hero').map((section) => (
                <section key={section.id} className="py-20 container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-brand-navy dark:text-white">{section.headline}</h2>
                    {section.subheading && <p className="text-xl text-slate-500 mb-8">{section.subheading}</p>}
                    <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: section.text }} />
                </section>
            ))}
        </main>
    );
}
