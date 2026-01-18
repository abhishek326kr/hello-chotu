import { Metadata } from "next";

export function constructMetadata({
    title = "Hello Chotu - Bridging Local Retail with Digital Convenience",
    description = "Empowering local shopkeepers and delivering convenience to communities across India.",
    image = "/images/og-image.jpg",
    icons = "/favicon.ico",
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@hellochotu",
        },
        icons,
        metadataBase: new URL("https://hellochotu.in"), // Placeholder URL
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}
