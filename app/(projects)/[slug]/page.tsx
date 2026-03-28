import type { Project } from "@/types/Project";
import {getProjectBySlug} from "@/app/actions/projectActions";
import {LucideArrowUpRight} from "lucide-react";
import { PortableText } from "@portabletext/react";

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project: Project | null = await getProjectBySlug(slug);

    if (!project) {
        return <div className="p-8 text-center">Project not found</div>;
    }

    return (
        <main className="max-w-4xl mx-auto py-32 px-6 text-gray-800 dark:text-gray-100">
            <div className="flex justify-between align-bottom items-center gap-4 mb-4">
                <h1 className="text-3xl font-bold">{project.title}</h1>
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-accent hover:underline"
                    >
                        GitHub <LucideArrowUpRight size={16} />
                    </a>
                )}
            </div>
            <div className="mb-6">
                {project.technologies?.map((technology, i) => (
                    <span key={i} className="inline-block mr-2 px-3 py-1 bg-gray-100 dark:bg-zinc-900 rounded-full text-xs text-gray-700 dark:text-gray-200">
            {technology}
          </span>
                ))}
            </div>
            {project.description && (
                <div className="space-y-4 leading-relaxed">
                    <PortableText value={project.description} />
                </div>
            )}
        </main>
    );
}