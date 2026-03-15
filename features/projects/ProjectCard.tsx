import React from 'react'
import {Project} from "@/types/Project";

type ProjectCardProps = {
    project: Project
}

const ProjectCard = ({project}: ProjectCardProps) => {
    return (
        <div
            className="proj-card flex flex-col justify-between border border-gray-300/70 dark:border-gray-700 rounded-xl p-6 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm hover:border-violet-500 transition-colors duration-300 group"
        >
        <div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors duration-300">
                {project.title}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {project.shortDescription}
            </p>
        </div>
    <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
            {project.technologiesUsed && project.technologiesUsed.map((technology, j) => (
                <span
                    key={j}
                    className="text-xs text-violet-700 dark:text-violet-300 border border-violet-300/60 dark:border-violet-800 bg-violet-100/60 dark:bg-violet-950/40 rounded-full px-3 py-1"
                >
                                        {technology}
                                    </span>
            ))}
        </div>
        <a
            href={project.slug}
            className="text-sm text-sky-700 dark:text-sky-300 hover:text-violet-600 dark:hover:text-violet-300 transition-colors duration-300 font-medium"
        >
            View Project →
        </a>
    </div>
        </div>
    )
}
export default ProjectCard
