'use client'
import { useGSAP }       from '@gsap/react'
import { gsap }          from 'gsap'
import { Project }       from "@/types/Project"
import ProjectCard       from "@/features/projects/ProjectCard"
import React, { useRef, useState } from "react"
import { useRouter } from "next/navigation"

type ProjectsProps = {
    className?: string
    projects: Project[]
}


export const Projects = ({ className = "", projects }: ProjectsProps) => {
    const sectionRef     = useRef<HTMLElement>(null)
    const [active, setActive] = useState(0)

    const router = useRouter()

    const { contextSafe } = useGSAP({ scope: sectionRef })

    const handleCardClick = contextSafe((index: number) => {
        if (index === active) {
            router.push(`/${projects[index].slug}`)
            return
        }

        const cards = gsap.utils.toArray<HTMLElement>('.project-card')

        gsap.to(cards[active], { height: 80, duration: 0.4, ease: 'power2.inOut' })
        gsap.to(cards[active].querySelector('.card-body'), { opacity: 0, duration: 0.15 })

        gsap.to(cards[index], { height: cards[index].scrollHeight, duration: 0.4, ease: 'power2.inOut' })
        gsap.to(cards[index].querySelector('.card-body'), { opacity: 1, duration: 0.2, delay: 0.25 })

        setActive(index)
    })


    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>('.project-card')
        cards.forEach((card, i) => {
            gsap.set(card, { height: i === 0 ? card.scrollHeight : 80 })
            gsap.set(card.querySelector('.card-body'), { opacity: i === 0 ? 1 : 0 })
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} id="projects" className={`py-24 min-h-screen flex flex-col sm:flex-row sm:justify-around sm:px-8 md:px-30 ${className}`}>
            <h3 className="proj-heading order-first sm:order-last shrink-0 self-start text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-16 sm:mb-0 px-8 sm:px-0">
                My <span className="text-accent">Projects</span>
            </h3>
            <div className="w-full max-w-xl flex flex-col divide-y divide-zinc-200 dark:divide-zinc-700">
                {projects && projects.map((project, i) => (
                    <ProjectCard
                        positionClasses={"p-4 flex flex-col project-card overflow-hidden"}
                        key={i}
                        project={project}
onHeaderClick={() => handleCardClick(i)}
                    />
                ))}
            </div>
        </section>
    )
}