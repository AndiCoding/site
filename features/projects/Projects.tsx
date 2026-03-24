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


const SCROLL_PER_CARD = 1000

export const Projects = ({ className = "", projects}: ProjectsProps) => {
    const sectionRef   = useRef<HTMLElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const cards      = gsap.utils.toArray<HTMLElement>('.project-card')
        const totalCards = cards.length
        const cardWidth  = containerRef.current!.offsetWidth

        // Place all cards absolutely, stacked at same spot, starting below



        cards.forEach((card, i) => {
            gsap.set(card, {
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: 0,
                width: cardWidth,
                yPercent: i === 0 ? 0 : 500,
                zIndex: i,
            })
        })


        // One scrubbed timeline — each card gets an equal segment of scroll
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80px',
                end: `+=${totalCards * SCROLL_PER_CARD}`,
                pin: true,
                pinSpacing: true,
                scrub: 1,
            },
        })

        gsap.to(cards[0], {
            duration: 1,
            opacity: 1,
            ease: "easeInOut",
            y: 0
        })

        cards.forEach((card, i) => {
            tl.to(card, {
                yPercent: 0,
                opacity: 1,
                ease: 'power2.out',
                duration: 1,
            }, i / totalCards)
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} id="projects" className={`py-24 flex flex-col sm:flex-row justify-around px-8 md:px-30 ${className}`}>
            <h3 className="proj-heading order-first sm:order-last shrink-0 self-start text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-16 sm:mb-0">
                My <span className="text-violet-600 dark:text-violet-300">Projects</span>
            </h3>
            <div ref={containerRef} className="relative w-1/2" style={{ minHeight: '20rem' }}>
                {projects && projects.map((project, i) => (
                    <ProjectCard
                        positionClasses={"rounded-xl p-4 flex flex-col justify-between project-card min-h-60"}
                        key={i}
                        project={project}
                    />
                ))}
            </div>
        </section>
    )
}
