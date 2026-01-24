import React from "react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import VisionSection from "@/components/VisionSection";
import { HomepageApiResponse } from "@/types/api";

async function getHomepageData(): Promise<HomepageApiResponse | null> {
  try {
    // Using no-store to ensure we get fresh data on every request, 
    // or use revalidate if we want some caching. 
    // Given 'add this api', assume user wants to see results immediately.
    const res = await fetch('https://webapi.cultnest.com/api/homepage', { cache: 'no-store' });

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

  // Map sections to their data. 
  // We can also just iterate through the sorted sections and render dynamically, 
  // but mapping guarantees we use the specific component designed for that section type.
  const heroData = sections.find(s => s.sectionName.toLowerCase() === 'hero');
  const aboutData = sections.find(s => s.sectionName.toLowerCase() === 'about us');
  const servicesData = sections.find(s => s.sectionName.toLowerCase() === 'services');
  const whyData = sections.find(s => s.sectionName.toLowerCase() === 'why choose us');
  const testimonialsData = sections.find(s => s.sectionName.toLowerCase() === 'testimonials');

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 overflow-x-hidden">
      {heroData ? (
        <Hero data={heroData} />
      ) : (
        // Fallback if API fails or no Hero section
        <div className="py-20 text-center">Hero Section Loading or Unavailable</div>
      )}

      <Stats />

      {aboutData && <AboutSection data={aboutData} />}

      {servicesData && <ServicesSection data={servicesData} />}

      {whyData && <WhyChooseUsSection data={whyData} />}

      {testimonialsData && <TestimonialsSection data={testimonialsData} />}

      <VisionSection />
    </main>
  );
}
