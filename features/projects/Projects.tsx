'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {Project}         from "@/types/Project";

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
        <section ref={sectionRef}  className={`px-8 md:px-30 py-24 ${className}`}>
            <h3 className="proj-heading text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-16">
                My <span className="text-violet-600 dark:text-violet-300">Projects</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {projects && projects.map((proj, i) => (
                    <div
                        key={i}
                        className="proj-card flex flex-col justify-between border border-gray-300/70 dark:border-gray-700 rounded-xl p-6 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm hover:border-violet-500 transition-colors duration-300 group"
                    >
                        <div>
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors duration-300">
                                {proj.title}
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                                {proj.shortDescription}
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap gap-2">
                                {proj.technologiesUsed && proj.technologiesUsed.map((technology, j) => (
                                    <span
                                        key={j}
                                        className="text-xs text-violet-700 dark:text-violet-300 border border-violet-300/60 dark:border-violet-800 bg-violet-100/60 dark:bg-violet-950/40 rounded-full px-3 py-1"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={proj.slug}
                                className="text-sm text-sky-700 dark:text-sky-300 hover:text-violet-600 dark:hover:text-violet-300 transition-colors duration-300 font-medium"
                            >
                                View Project →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
