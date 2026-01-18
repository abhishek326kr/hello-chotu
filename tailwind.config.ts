import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-gold": "#FACC15",
                "brand-navy": "#1E293B",
                "brand-indigo": "#4F46E5",
                "theme-start": "#9741f1",
                "theme-end": "#5256f6",
            },
            backgroundImage: {
                "primary-gradient": "linear-gradient(to right, #9741f1, #5256f6)",
            },
        },
    },
    plugins: [],
};
export default config;
