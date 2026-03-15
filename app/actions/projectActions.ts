import {db} from "@/firebase";
import { Project } from "@/types/Project"
import { collection, getDocs, query, where, limit } from "firebase/firestore"



// SSG. The projects are not fetched on every refresh, instead its fetched every 20 seconds
export async function getStaticProjects() {
    const q = collection(db, "projects");
    const snap = await getDocs(q);
    const projectsData = snap.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit <Project, "id">)
    }))

    return {
        props: {
            projects: projectsData,
        },
        revalidate: 20,
    }
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