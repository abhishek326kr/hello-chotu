export interface HomepageSection {
    id: number;
    headline: string;
    subheading: string;
    sectionName: "Hero" | "About Us" | "Services" | "Why Choose Us" | "Testimonials";
    text: string; // HTML content
    images: string[];
    order: number;
    createdAt: string;
    updatedAt: string;
}

export interface HomepageApiResponse {
    success: boolean;
    message: string;
    data: {
        sections: HomepageSection[];
    };
}
