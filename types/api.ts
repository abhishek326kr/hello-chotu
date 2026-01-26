
// Reusable section interface
export interface PageSection {
    id: number;
    headline: string;
    subheading: string;
    sectionName: string;
    text: string; // HTML content
    images: string[];
    order: number;
    createdAt: string;
    updatedAt: string;
}

// Alias for backward compatibility if needed, or just replace usages
export type HomepageSection = PageSection;

export interface HomepageApiResponse {
    success: boolean;
    message: string;
    data: {
        sections: PageSection[];
    };
}

export interface ServiceApiResponse {
    success: boolean;
    message: string;
    data: {
        sections: PageSection[];
    };
}

// Generic API Response wrapper
export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

export interface Service {
    id: number;
    title: string;
    description: string;
    icon?: string; // Expecting a URL or identifier
    createdAt: string;
    updatedAt: string;
}

export interface Author {
    id: number;
    name: string;
    email: string;
    role: string;
    avatar: string | null;
}

export interface BlogPost {
    id: number;
    title: string;
    content: string;
    images: string[];
    tags: string[];
    authorId: number;
    author: Author;
    createdAt: string;
    updatedAt: string;
}

export interface ContactSubmission {
    name: string;
    email: string;
    phone: string;
    message: string;
    type?: string; // Optional inquiry type
}
