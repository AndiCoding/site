import { getAdminDb } from "@/firebase.admin";
import { Project } from "@/types/Project";

export async function getStaticProjects(): Promise<Project[]> {
    const snap = await getAdminDb().collection("projects").get();
    return snap.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Project, "id">)
    }));
}

export async function getProjectBySlug(slug: string): Promise<(Project & { id?: string }) | null> {
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
