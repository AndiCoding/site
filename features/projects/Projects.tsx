'use client'
import { useGSAP }                            from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {Project}         from "@/types/Project";
import ProjectCard       from "@/features/projects/ProjectCard";
import React, { useRef} from "react";


gsap.registerPlugin(ScrollTrigger)

type ProjectsProps = {
    className?: string
    projects: Project[]
}


export const Projects = ({ className = "", projects}: ProjectsProps) => {
    const sectionRef = useRef<HTMLElement>(null)

    return (
        <section ref={sectionRef} id="projects" className={`px-8 md:px-30 py-24 ${className}`}>
            <h3 className="proj-heading text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-16">
                My <span className="text-violet-600 dark:text-violet-300">Projects</span>
            </h3>
            <div className="flex flex-col md:flex-row md:grid-cols-2 lg:grid-cols-3 gap-6 w-3xl mx-auto">
                {projects && projects.map((project, i) => (
                        <ProjectCard 
                            key={i} 
                            project={project}
                        />
                ))}
            </div>
        </section>
    )
}
