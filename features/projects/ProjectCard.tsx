import React from 'react'
import {Project}       from "@/types/Project";
import {LucideArrowRight} from "lucide-react";

type ProjectCardProps = {
    project: Project
    positionClasses?: string
    onHeaderClick?: () => void
}

const ProjectCard = ({project, positionClasses, onHeaderClick}: ProjectCardProps) => {
     return (
         <div
              onClick={onHeaderClick}
              className={` ${positionClasses}
                cursor-pointer
                bg-white dark:bg-zinc-900
                transition-colors duration-300 group
                select-none
              `}
         >
        <div className="flex justify-between items-start gap-x-4">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white transition-all duration-200 group-hover:translate-x-2 group-hover:text-accent ">
                {project.title}
            </h4>
            {project.githubUrl && (
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="cursor-pointer hover:text-accent  shrink-0 text-sm">
                    View on Github
                    <LucideArrowRight className="inline" height={16} width={16} />
                </a>
            )}
        </div>

        <div className="card-body flex flex-col gap-4 mt-3">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
                {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2">
                {project.technologies && project.technologies.map((technology, j) => (
                    <span
                        key={j}
                        className="text-xs tag-accent border rounded-full px-3 py-1"
                    >
                        {technology}
                    </span>
                ))}
            </div>
        </div>
        </div>
    )
}
export default ProjectCard
