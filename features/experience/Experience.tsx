'use client'
import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ExperienceCard from "@/features/experience/ExperienceCard";

gsap.registerPlugin(ScrollTrigger)

type ExperienceProps = {
    className?: string
}

const experiences = [
    {
        title: 'Frontend Developer',
        company: 'Company A',
        period: '2023 – Present',
        description: 'Built modern web applications using React and TypeScript.',
    },
    {
        title: 'Fullstack Developer',
        company: 'Company B',
        period: '2021 – 2023',
        description: 'Developed REST APIs and maintained frontend dashboards.',
    },
    {
        title: 'Junior Developer',
        company: 'Company C',
        period: '2019 – 2021',
        description: 'Assisted in building mobile apps and internal tools.',
    },
    {
        title: 'Junior Developer',
        company: 'Company C',
        period: '2019 – 2021',
        description: 'Assisted in building mobile apps and internal tools.',
    },
    {
        title: 'Junior Developer',
        company: 'Company C',
        period: '2019 – 2021',
        description: 'Assisted in building mobile apps and internal tools.',
    },
]

const SCROLL_PER_CARD = 300

const Experience = ({ className = ""}: ExperienceProps) => {
    const sectionRef = useRef<HTMLElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>('.exp-card')
        const totalCards = cards.length

        // 1) All cards start off-screen to the right, stacked at same position
        const containerWidth = containerRef.current!.offsetWidth
        cards.forEach((card, i) => {
            gsap.set(card, {
                position: 'absolute',
                top: 0,
                left: 0,
                width: containerWidth,
                xPercent: 200,
                zIndex: i,
            })
        })

        // 2) Scrubbed stacking timeline — one card per segment, no overlap
        const totalScroll = totalCards * SCROLL_PER_CARD
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80px',
                end: `+=${totalScroll}`,
                pin: true,
                pinSpacing: true,
                scrub: 1,
            }
        })

        cards.forEach((card, i) => {
            const segmentStart = i / totalCards
            tl.to(card, {
                xPercent: 0,
                duration: 1 / totalCards,
                ease: 'power2.out',
            }, segmentStart)
        })

    }, { scope: sectionRef })

    return (
        <section
            ref={sectionRef}
            className={`px-8 md:px-30 py-24 mt-16 flex justify-between gap-16 items-start ${className}`}
        >
            <h3 className="exp-heading hidden sm:block self-start text-4xl font-extrabold text-gray-900 dark:text-white shrink-0">
                My <span className="text-indigo-600 dark:text-indigo-300">Experience</span>
            </h3>
            <div ref={containerRef} className="relative w-1/2" style={{ minHeight: '30rem' }}>
                {experiences.map((exp, i) => (
                    <ExperienceCard
                        className="exp-card"
                        key={i}
                        title={exp.title}
                        company={exp.company}
                        period={exp.period}
                        description={exp.description}
                    />
                ))}
            </div>
        </section>
    )
}

export default Experience