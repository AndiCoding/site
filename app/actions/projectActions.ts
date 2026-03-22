import { getAdminDb } from "@/firebase.admin";
import { Project } from "@/types/Project";

const MOCK_PROJECTS: Project[] = [
    {
        title: "Website",
        slug: "portfolio-website",
        order: 1,
        shortDescription: "My website built with Next.js, TypeScript, and Tailwind. Run on kubernetes cluster",
        detailedDescription: "",
        technologiesUsed: ["Next.js", "TypeScript", "Tailwind", "kubernetes"],
        github: "https://github.com",
    },
    {
        title: "Sleep app",
        slug: "sleep-app",
        order: 2,
        shortDescription: "Application that lets users set alarm window to wake up, take notes, and see alarm history.",
        detailedDescription: "",
        technologiesUsed: ["Kotlin Multiplatform", "Compose Multiplatform", "Koin"],
        github: "https://github.com",
    },
    
]

const USE_MOCK = true

export async function getStaticProjects(): Promise<Project[]> {
    if (USE_MOCK) return MOCK_PROJECTS
    const snap = await getAdminDb().collection("projects").get();
    return snap.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Project, "id">)
    }));
}

export async function getProjectBySlug(slug: string): Promise<(Project & { id?: string }) | null> {
    if (USE_MOCK) return MOCK_PROJECTS.find(p => p.slug === slug) ?? null
    if (!slug || !slug.trim()) {
        return null;
    }
    try {
        const snap = await getAdminDb().collection("projects").where("slug", "==", slug).limit(1).get();
        if (!snap.empty) {
            const doc = snap.docs[0];
            return { id: doc.id, ...(doc.data() as Omit<Project, "id">) };
        }
        return null;
    } catch (err) {
        return null;
    }
}
