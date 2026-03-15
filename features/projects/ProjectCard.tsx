import React, {useRef} from 'react'
import {Project}       from "@/types/Project";
import {useGSAP}       from "@gsap/react";
import {gsap} from "gsap"

type ProjectCardProps = {
    project: Project
    expandedProject: string
    addAnimation: (animation: gsap.core.Tween ,index: number) => void,
    index: number
    onSelect: (projectTitle: string) => void
}

const ProjectCard = ({project, index, addAnimation, expandedProject, onSelect}: ProjectCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    
    useGSAP(() => {
        const element = cardRef.current
        if (!element) return 
        
        const entryTween = gsap.from(element, {
            duration: 1,
            ease: 'bounce.out'
        })
        
        addAnimation && addAnimation(entryTween, index)
    }, [addAnimation])
    
    useGSAP(() => {
        const element = cardRef.current
        const exp = expandedProject === project.title
        if (!element) return
        gsap.to(element, {
            scale: exp ? 1.4 : 1,
            zIndex: exp ? 1 : 0,
            duration: 0.2,
            ease: 'power1.out',
            overwrite: 'auto',
            immediateRender: false
        })
    }, [expandedProject, project.title])

    const handleClick = () => {
        onSelect && onSelect(project.title)
    }
    
    return (
        <div ref={cardRef}
             onClick={handleClick}
             role="button"
             tabIndex={0}
             aria-expanded={expandedProject === project.title}
            className="proj-card flex flex-col justify-between border w-full border-gray-300/70 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-zinc-900 backdrop-blur-sm hover:border-violet-500 transition-colors duration-300 group"
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
        {/*{ expandedProject === project.title && <a*/}
        {/*    href={project.slug}*/}
        {/*    className="text-sm text-sky-700 dark:text-sky-300 hover:text-violet-600 dark:hover:text-violet-300 transition-colors duration-300 font-medium"*/}
        {/*>*/}
        {/*    View Project →*/}
        {/*</a>}*/}
    </div>
        </div>
    )
}
export default ProjectCard
