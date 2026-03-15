'use client'
import React, {useCallback, useRef, useState} from 'react'
import { useGSAP }                            from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {Project}         from "@/types/Project";
import ProjectCard       from "@/features/projects/ProjectCard";

gsap.registerPlugin(ScrollTrigger)

type ProjectsProps = {
    className?: string
    projects: Project[]
}

export const Projects = ({ className = "", projects}: ProjectsProps) => {
    const sectionRef = useRef<HTMLElement>(null)
    const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null)
    const [expandedProject, setExpandedProject] = useState<string>(projects[0].title)


     useGSAP(() => {
     
         const container = sectionRef.current
         if (!container) return

         const tl = gsap.timeline({
             scrollTrigger: {
                 trigger: container,
                 start: 'top 80%',
                 toggleActions: 'play none none none',

             },
             defaults: { ease: 'power1.out' }
         })
         tl.from('.proj-card', {
             duration: 1,
             opacity: 0,
             y: 40,
             ease: 'power1.out',
             stagger: 0.3,
         })
        setTimeline(tl)
    })
    
    const addAnimation = useCallback((animation, index) => {
        timeline && timeline.add(animation, index * 0.1)
    }, [timeline, expandedProject])

    const handleSelect = useCallback((projectTitle: string) => {
        setExpandedProject(projectTitle)
    }, [])
 


    return (
        <section ref={sectionRef} id="projects" className={`px-8 md:px-30 py-24 ${className}`}>
            <h3 className="proj-heading text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-16">
                My <span className="text-violet-600 dark:text-violet-300">Projects</span>
            </h3>
            <div className="flex flex-col md:flex-row md:grid-cols-2 lg:grid-cols-3 gap-6 w-3xl mx-auto">
                {projects && projects.map((project, i) => (
                        <ProjectCard 
                            key={i} 
                            index={i} 
                            addAnimation={addAnimation} 
                            expandedProject={expandedProject} 
                            project={project}
                            onSelect={handleSelect}
                        />
                ))}
            </div>
        </section>
    )
}
