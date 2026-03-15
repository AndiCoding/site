'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
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
    

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
                toggleActions: 'play none none none',
            }
        })

        tl.from('.proj-heading', {
            opacity: 0,
            x: 200,
            duration: 0.6,
            ease: 'power3.out',
        })
        tl.from('.proj-card', {
            opacity: 0,
            x: 60,
            y: 30,
            stagger: 0.3,
            duration: 1,
            ease: 'elastic.out',
        }, '-=0.3')
    }, { scope: sectionRef })


    return (
        <section ref={sectionRef} id="projects" className={`px-8 md:px-30 py-24 ${className}`}>
            <h3 className="proj-heading text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-16">
                My <span className="text-violet-600 dark:text-violet-300">Projects</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {projects && projects.map((project, i) => (
                        <ProjectCard key={i} timeline={tl} project={project} />
                ))}
            </div>
        </section>
    )
}
