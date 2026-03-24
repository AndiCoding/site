import { client } from "@/sanity";
import { Project } from "@/types/Project";

const MOCK_PROJECTS: Project[] = [
    {
        title: "Website",
        slug: "portfolio-website",
        order: 1,
        shortDescription: "My website built with Next.js, TypeScript, and Tailwind. Run on kubernetes cluster",
        description: [],
        technologies: ["Next.js", "TypeScript", "Tailwind", "kubernetes"],
        githubUrl: "https://github.com",
    },
    {
        title: "Sleep app",
        slug: "sleep-app",
        order: 2,
        shortDescription: "Application that lets users set alarm window to wake up, take notes, and see alarm history.",
        description: [],
        technologies: ["Kotlin Multiplatform", "Compose Multiplatform", "Koin"],
        githubUrl: "https://github.com",
    },
]

export async function getStaticProjects(): Promise<Project[]> {
    try {
        return await client.fetch(
            `*[_type == "project"] | order(order asc) {
                title,
                "slug": slug.current,
                order,
                shortDescription,
                categories,
                technologies,
                githubUrl,
            }`,
            {},
            { next: { revalidate: 60 } }
        );
    } catch (err) {
        console.error("Sanity fetch failed, using mock data", err);
        return MOCK_PROJECTS;
    }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
    if (!slug?.trim()) return null;
    try {
        return await client.fetch(
            `*[_type == "project" && slug.current == $slug][0] {
                title,
                "slug": slug.current,
                order,
                shortDescription,
                description,
                categories,
                technologies,
                githubUrl
            }`,
            { slug },
            { next: { revalidate: 60 } }
        );
    } catch (err) {
        console.error("Sanity fetch failed, using mock data", err);
        return MOCK_PROJECTS.find(p => p.slug === slug) ?? null;
    }
}