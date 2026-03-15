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
    
    useGSAP(()=> {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
            }});
        
        timeline.from('.project-card', {
                opacity: 0, 
                y: 50,
            ease: 'power1.inOut',
            stagger: 0.2,
            duration: 1,
            }
            )
           
            
        }, []);

    return (
        <section ref={sectionRef} id="projects" className={`px-4 py-24 ${className}`}>
            <h3 className="proj-heading text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-16">
                My <span className="text-violet-600 dark:text-violet-300">Projects</span>
            </h3>
            <div className="flex flex-col  sm:flex-row gap-2 sm:gap-4 justify-center flex-wrap">
                {projects && projects.map((project, i) => (
                        <ProjectCard
                            positionClasses={"sm:rounded-xl p-4 w-full  project-card  sm:w-104"}
                            key={i} 
                            project={project}
                        />
                ))}
            </div>
        </section>
    )
}
