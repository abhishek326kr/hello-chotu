# Hello Chotu - Hyper-Local Delivery Network

**Hello Chotu** is a modern, high-performance web application designed to bridge the gap between local retail traditions and digital speed. We empower neighborhood stores ("Chotus") with next-gen technology to provide hyper-local delivery services.

**Written by abhishek326kr**

## 🚀 Features

-   **Dynamic Homepage**: Content is fetched dynamically from an external API (`cultnest.com`) to allow real-time updates of sections like Hero, About, Services, and Testimonials.
-   **Modern UI/UX**: Built with a "Midnight Navy" commercial aesthetic, featuring glassmorphism, smooth animations (`framer-motion`), and responsive design.
-   **Server-Side Rendering (SSR)**: optimized for performance and SEO using Next.js 14 App Router.
-   **Interactive Elements**: Floating cards, scroll animations, and gradient effects.
-   **Type-Safe**: Full TypeScript implementation for robust code quality.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Font**: Inter / Playfair Display (via Google Fonts)

## 🏁 Getting Started

To run the project locally:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/abhishek326kr/hello-chotu.git
    cd hello-chotu
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open your browser**:
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🌐 Deployment

This project is a Next.js application, making it extremely easy to deploy on platforms like Vercel, Netlify, or self-hosted servers.

### Deploying on Vercel (Recommended)

1.  Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2.  Go to [Vercel](https://vercel.com/) and sign up/login.
3.  Click **"Add New..."** -> **"Project"**.
4.  Import your `hello-chotu` repository.
5.  Vercel will automatically detect the Next.js framework.
6.  Click **"Deploy"**.
7.  Your site will be live in minutes! Vercel handles the build settings automatically.

### Deploying on Netlify

1.  Push your code to a Git repository.
2.  Log in to Netlify and click **"Add new site"** -> **"Import an existing project"**.
3.  Select your repository.
4.  Build settings should be automatically detected:
    -   **Build command**: `npm run build`
    -   **Publish directory**: `.next`
5.  Click **"Deploy site"**.

### Manual Deployment (Docker / VPS)

To build the application for production usage:

1.  **Build the project**:
    ```bash
    npm run build
    ```

2.  **Start the production server**:
    ```bash
    npm start
    ```

The application will now be running in production mode, usually on port 3000.

## 📁 Project Structure

```
hello-chotu/
├── app/                  # Next.js App Router pages and layouts
│   ├── (marketing)/      # Marketing routes (Home, About, etc.)
│   ├── admin/            # Admin dashboard routes
│   └── layout.tsx        # Root layout
├── components/           # Reusable React components
│   ├── sections/         # Homepage specific section components
│   └── ui/               # Generic UI components (buttons, etc.)
├── types/                # TypeScript type definitions
├── public/               # Static assets (images, fonts)
└── next.config.mjs       # Next.js configuration
```

---

<p align="center">
  Built with ❤️ by <strong>abhishek326kr</strong>
  <br>
  <a href="https://www.linkedin.com/in/abhishek326kr">
    <img src="https://img.shields.io/badge/LinkedIn-abhishek326kr-blue?style=flat&logo=linkedin" alt="LinkedIn">
  </a>
</p>
