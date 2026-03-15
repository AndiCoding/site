import React, {useRef} from 'react'
import {Project}       from "@/types/Project";
import {useGSAP}       from "@gsap/react";
import {gsap} from "gsap"

type ProjectCardProps = {
    project: Project
}

const ProjectCard = ({project}: ProjectCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    
    const { contextSafe } = useGSAP({scope: cardRef});
    
    const onCardClick = contextSafe(() => {
        gsap.to(cardRef.current, {rotation: 180});
    })

     return (
        <div ref={cardRef}
             tabIndex={0}
             onClick={onCardClick}
             role="button"
            className="project-card flex flex-col justify-between border w-full border-gray-300/70 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-zinc-900 backdrop-blur-sm hover:border-violet-500 transition-colors duration-300 group"
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
        <div className="flex flex-wrap gap-2 categories">
            {project.technologiesUsed && project.technologiesUsed.map((technology, j) => (
                <span
                    key={j}
                    className="text-xs text-violet-700 dark:text-violet-300 border border-violet-300/60 dark:border-violet-800 bg-violet-100/60 dark:bg-violet-950/40 rounded-full px-3 py-1"
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
