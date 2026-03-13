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
            y: 40,
            duration: 0.6,
            ease: 'power3.out',
        })
        tl.from('.proj-card', {
            opacity: 0,
            y: 60,
            stagger: 0.2,
            duration: 0.6,
            ease: 'power3.out',
        }, '-=0.3')
    }, { scope: sectionRef })


    return (
        <section ref={sectionRef}  className={`px-8 md:px-30 py-24 ${className}`}>
            <h3 className="proj-heading text-4xl font-extrabold text-foreground text-center mb-16">
                My <span className="text-highlight">Projects</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {projects && projects.map((proj, i) => (
                    <div
                        key={i}
                        className="proj-card flex flex-col justify-between border border-soft-periwinkle-300/30 rounded-xl p-6 bg-soft-periwinkle-100/50 dark:bg-soft-periwinkle-700 backdrop-blur-sm hover:border-highlight transition-colors duration-300 group"
                    >
                        <div>
                            <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-highlight transition-colors duration-300">
                                {proj.title}
                            </h4>
                            <p className="text-soft-periwinkle-200 text-sm leading-relaxed mb-4">
                                {proj.shortDescription}
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap gap-2">
                                {proj.technologiesUsed && proj.technologiesUsed.map((technology, j) => (
                                    <span
                                        key={j}
                                        className="text-xs text-highlight border border-soft-periwinkle-400/30 bg-soft-periwinkle-400/10 rounded-full px-3 py-1"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={proj.slug}
                                className="text-sm text-soft-periwinkle-300 hover:text-highlight transition-colors duration-300 font-medium"
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
