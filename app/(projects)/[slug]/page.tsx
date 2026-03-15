import type { Project } from "@/types/Project";
import {getProjectBySlug} from "@/app/actions/projectActions";

type Props = { params: { slug: string } };

export default async function ProjectPage({ params }: Props) {
    const project: Project | null = await getProjectBySlug(params.slug);

    if (!project) {
        return <div className="p-8 text-center">Project not found</div>;
    }

    return (
        <main className="max-w-4xl mx-auto py-16 px-6 text-gray-800 dark:text-gray-100">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">{project.shortDescription}</p>
            <div className="mb-6">
                {project.technologiesUsed?.map((t, i) => (
                    <span key={i} className="inline-block mr-2 px-3 py-1 bg-gray-100 dark:bg-zinc-900 rounded-full text-xs text-gray-700 dark:text-gray-200">
            {t}
          </span>
                ))}
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-2">Details</h2>
                <p>{project.detailedDescription}</p>
            </div>
        </main>
    );
}