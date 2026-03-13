import {db} from "@/firebase";
import { Project } from "@/types/Project"
import { collection, getDocs, query, where, limit } from "firebase/firestore"

export async function getProjects(): Promise<Project[]> {
    const q = collection(db, "projects");
    const snap = await getDocs(q);
    return snap.docs.map(doc => {
        const data = doc.data() as Omit<Project, "id">;
        return { id: doc.id, ...data};
    })
}

export async function getProjectBySlug(slug: string): Promise<(Project & { id?: string }) | null> {
    if (!slug || !slug.trim()) {
        return null
    }
    try {
        const q = query(collection(db, "projects"), where("slug", "==", slug), limit(1));
        const snap = await getDocs(q);
        if (!snap.empty) {
            const doc = snap.docs[0];
            return { id: doc.id, ...(doc.data() as Omit<Project, "id">) };
        }

        return null;
    } catch (err) {
        return null;
    }
}