import React from "react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import VisionSection from "@/components/VisionSection";
import { HomepageApiResponse } from "@/types/api";

// Helper to determine section type for generic rendering
function getSectionType(name: string): 'hero' | 'services' | 'testimonials' | 'why' | 'generic' {
  const normalized = name.toLowerCase();
  if (normalized.includes('hero')) return 'hero';
  if (normalized.includes('services')) return 'services';
  if (normalized.includes('testimonial')) return 'testimonials';
  if (normalized.includes('why') && normalized.includes('choose')) return 'why';
  return 'generic'; // Default to generic content block (About style)
}

async function getHomepageData(): Promise<HomepageApiResponse | null> {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://webapi.cultnest.com';
    const res = await fetch(`${API_URL}/api/homepage`, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error(`Failed to fetch homepage data: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return null;
  }
}

export default async function Home() {
  const apiResponse = await getHomepageData();
  const sections = apiResponse?.data?.sections || [];

  // Sort sections by 'order' property to ensure correct display order
  sections.sort((a, b) => a.order - b.order);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 overflow-x-hidden">
      {sections.length === 0 ? (
        <div className="py-20 text-center">Loading Content...</div>
      ) : (
        sections.map((section, index) => {
          const type = getSectionType(section.sectionName);

          switch (type) {
            case 'hero':
              return <Hero key={section.id || index} data={section} />;
            case 'services':
              return <ServicesSection key={section.id || index} data={section} />;
            case 'testimonials':
              return <TestimonialsSection key={section.id || index} data={section} />;
            case 'why':
              return <WhyChooseUsSection key={section.id || index} data={section} />;
            case 'generic':
            default:
              // Use AboutSection as the generic content renderer
              // Alternate layout based on index (odd indexes reversed = Image Right)
              return <AboutSection key={section.id || index} data={section} isReversed={index % 2 !== 0} />;
          }
        })
      )}

      {/* Static Sections that haven't been API-fied yet, or keep them if they are separate */}
      {/* <Stats /> and <VisionSection /> seem to be static components not in the API list yet. 
          The user said "all api will work like this", implying we might replace everything eventually.
          For now, I'll keep them effectively "hardcoded" at the bottom or interleave them if needed. 
          But the user asked to render sections from API. 
          Let's assume Stats and Vision are part of the layout but not dynamic yet.
          I will place them at the bottom for now.
      */}
      <Stats />
      <VisionSection />
    </main>
  );
}
