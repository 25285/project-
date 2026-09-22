/**
 * Portfolio Data Configuration
 * Beginners: You can update any of these fields directly in this file,
 * OR use the "Edit Profile" button on the website UI to customize live!
 */

const portfolioData = {
    profile: {
        name: "Alex Morgan",
        role: "Senior Full-Stack & AI Engineer",
        tagline: "Crafting high-performance web applications, cloud systems, and intelligent digital experiences.",
        about: "I am a passionate Full-Stack Software Engineer with 5+ years of experience engineering scalable web systems, intuitive user interfaces, and modern cloud solutions. I love bridging technical complexity with elegant user-centric design.",
        location: "San Francisco, CA / Remote",
        email: "alex.morgan.dev@example.com",
        phone: "+1 (555) 234-5678",
        status: "Open to New Opportunities",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
        links: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            portfolio: "https://alexmorgan.dev"
        },
        stats: [
            { label: "Years Experience", value: "5+" },
            { label: "Projects Completed", value: "32+" },
            { label: "Certifications", value: "6" },
            { label: "Code Commits", value: "2.4K+" }
        ]
    },

    skills: [
        { name: "JavaScript / TypeScript", category: "Frontend", level: 95, icon: "code" },
        { name: "React.js / Next.js", category: "Frontend", level: 90, icon: "layout" },
        { name: "HTML5 / CSS3 / Tailwind", category: "Frontend", level: 95, icon: "palette" },
        { name: "Node.js / Express", category: "Backend", level: 88, icon: "server" },
        { name: "Python / FastAPI", category: "Backend", level: 85, icon: "terminal" },
        { name: "PostgreSQL / MongoDB", category: "Database", level: 82, icon: "database" },
        { name: "Docker / Kubernetes", category: "DevOps", level: 78, icon: "container" },
        { name: "AWS / Cloud Architecture", category: "DevOps", level: 80, icon: "cloud" },
        { name: "REST APIs & GraphQL", category: "Backend", level: 92, icon: "network" },
        { name: "Git / CI/CD Pipelines", category: "DevOps", level: 90, icon: "git-branch" }
    ],

    experience: [
        {
            company: "Apex Tech Solutions",
            role: "Senior Full-Stack Engineer",
            duration: "2023 - Present",
            location: "San Francisco, CA",
            description: "Leading the development of cloud-native enterprise web tools, microservices, and design systems for client dashboards.",
            highlights: [
                "Architected a real-time analytics platform handling 1M+ daily API requests.",
                "Reduced application bundle size by 35% through modular code-splitting and asset optimization.",
                "Mentored a team of 5 junior/mid-level software engineers."
            ],
            tech: ["TypeScript", "React", "Next.js", "Node.js", "AWS", "PostgreSQL"]
        },
        {
            company: "Nexus Digital Studio",
            role: "Full-Stack Web Developer",
            duration: "2021 - 2023",
            location: "Austin, TX",
            description: "Developed custom web platforms, interactive e-commerce suites, and APIs for fast-growing startup clients.",
            highlights: [
                "Built 12+ responsive web apps from scratch with custom design systems.",
                "Implemented automated CI/CD pipelines reducing deployment time by 50%.",
                "Integrated Stripe payment gateways and third-party SaaS integrations."
            ],
            tech: ["JavaScript", "React", "Node.js", "MongoDB", "Express", "TailwindCSS"]
        },
        {
            company: "Vanguard Software Inc.",
            role: "Frontend Developer Engineer",
            duration: "2019 - 2021",
            location: "Remote",
            description: "Focused on building responsive UI components, web accessibilities (WCAG 2.1), and cross-browser state management.",
            highlights: [
                "Refactored legacy web UI to modern component-based architecture.",
                "Improved accessibility score from 68 to 98 on Google Lighthouse.",
                "Collaborated closely with UX designers to translate Figma mockups into reusable UI kits."
            ],
            tech: ["HTML5", "CSS3", "JavaScript ES6+", "React", "Sass", "Jest"]
        }
    ],

    projects: [
        {
            id: "project-1",
            title: "PulseFlow - Enterprise SaaS Analytics Dashboard",
            category: "Full Stack",
            description: "A real-time data monitoring dashboard featuring customizable widgets, webhooks, user authorization, and live metrics visualization.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tags: ["React", "TypeScript", "Node.js", "Chart.js", "Tailwind"],
            demoUrl: "https://example.com/demo1",
            githubUrl: "https://github.com/example/pulseflow",
            featured: true,
            details: "PulseFlow provides interactive visual telemetry for high-traffic Web APIs. Built with WebSocket live feeds, role-based security access, dark/light theme switching, and automated report generation in PDF format."
        },
        {
            id: "project-2",
            title: "SynapseAI - Smart Knowledge Base & Assistant",
            category: "AI / Web",
            description: "An AI-powered document search and assistant app that summarizes documentation, answers queries, and organizes research.",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
            tags: ["Python", "FastAPI", "React", "OpenAI API", "Vector DB"],
            demoUrl: "https://example.com/demo2",
            githubUrl: "https://github.com/example/synapse-ai",
            featured: true,
            details: "SynapseAI leverages modern LLM embeddings and semantic vector indexing to enable instant natural language search across complex software documentations and PDFs."
        },
        {
            id: "project-3",
            title: "OmniCart - Modern Headless E-Commerce Suite",
            category: "Full Stack",
            description: "A ultra-fast headless e-commerce store with instant product search, dynamic filtering, cart persistence, and Stripe integration.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            tags: ["Next.js", "TypeScript", "Stripe API", "GraphQL", "CSS Modules"],
            demoUrl: "https://example.com/demo3",
            githubUrl: "https://github.com/example/omnicart",
            featured: true,
            details: "Designed for extreme speed with static page pre-rendering, lazy image loading, serverless payment webhooks, and streamlined checkout UX."
        },
        {
            id: "project-4",
            title: "CloudVault - Secure Encrypted Storage",
            category: "Cloud / DevOps",
            description: "Zero-knowledge end-to-end encrypted cloud file storage app with instant link sharing and audit logs.",
            image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
            tags: ["Node.js", "AWS S3", "Web Crypto API", "Docker", "Express"],
            demoUrl: "https://example.com/demo4",
            githubUrl: "https://github.com/example/cloudvault",
            featured: false,
            details: "Features client-side AES-GCM 256-bit encryption before uploading to S3, ensuring zero file access visibility to backend servers."
        }
    ],

    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of California, Berkeley",
            duration: "2015 - 2019",
            honors: "Magna Cum Laude (GPA: 3.88/4.0)",
            description: "Specialized in Software Engineering, Algorithms & Data Structures, Computer Systems Architecture, and Database Management."
        }
    ],

    certifications: [
        {
            title: "AWS Certified Solutions Architect – Associate",
            issuer: "Amazon Web Services (AWS)",
            date: "Issued 2023 · Valid thru 2026",
            badgeIcon: "aws",
            credentialUrl: "https://aws.amazon.com"
        },
        {
            title: "Meta Certified Senior Front-End Developer",
            issuer: "Meta / Coursera Professional Certificate",
            date: "Issued 2022",
            badgeIcon: "meta",
            credentialUrl: "https://coursera.org"
        },
        {
            title: "MongoDB Certified Developer Associate",
            issuer: "MongoDB Inc.",
            date: "Issued 2021",
            badgeIcon: "database",
            credentialUrl: "https://mongodb.com"
        }
    ],

    achievements: [
        {
            title: "1st Place Winner - Global Hackathon 2023",
            description: "Developed an AI-assisted accessible web reader app out of 150+ international developer teams.",
            icon: "award"
        },
        {
            title: "Top 1% Open Source Contributor",
            description: "Contributed bug fixes and feature enhancements to major JavaScript UI libraries and developer tooling.",
            icon: "git-commit"
        },
        {
            title: "Published Technical Author",
            description: "Wrote over 15+ popular technical articles on medium & Dev.to reaching over 200,000+ developer readers.",
            icon: "book-open"
        }
    ]
};
