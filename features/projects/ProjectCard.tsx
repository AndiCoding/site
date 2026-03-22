import React, {useRef} from 'react'
import {Project}       from "@/types/Project";
import {useGSAP}       from "@gsap/react";
import {gsap} from "gsap"
import {LucideArrowRight} from "lucide-react";
import {useRouter} from "next/navigation";

type ProjectCardProps = {
    project: Project
    positionClasses?: string
}

const ProjectCard = ({project, positionClasses}: ProjectCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    
    // const { contextSafe } = useGSAP({scope: cardRef});
    //
    // const onCardClick = contextSafe(() => {
    //     gsap.to(cardRef.current, {rotation: 180});
    // })
     return (
         <div ref={cardRef}
              onClick={() => router.push(`/${project.slug}`)}
              className={` ${positionClasses}
                border border-transparent
                bg-white  dark:bg-zinc-900
                hover:border-violet-300 dark:hover:border-violet-700
                backdrop-blur-sm transition-colors duration-300 group
                select-none cursor-pointer
              `}
         >
        <div>
            <div className="flex justify-between items-start ">
                <h4 className="text-xl font-bold  text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                    {project.title}
                </h4>
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="cursor-pointer hover:text-violet-600 dark:hover:text-violet-300">
                        View on Github
                        <LucideArrowRight className="inline" height={16} width={16} />
                    </a>
                )}
            </div>

            <p className=" text-gray-700 dark:text-gray-300    text-sm  mb-4">
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
