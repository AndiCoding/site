'use client'
import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ExperienceCard from "@/features/experience/ExperienceCard";

gsap.registerPlugin(ScrollTrigger)

type ExperienceProps = {
    className?: string
    id: string
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

const HEADER_HEIGHT = 60
const SCROLL_PER_CARD = 300

const Experience = ({ className = "", id }: ExperienceProps) => {
    const sectionRef = useRef<HTMLElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>('.exp-card')
        const totalCards = cards.length

        // 1) Position cards FIRST — before any animation
        cards.forEach((card, i) => {
            if (i > 0) {
                gsap.set(card, {
                    position: 'absolute',
                    top: i * HEADER_HEIGHT,
                    left: 0,
                    width: '100%',
                    yPercent: 200,
                    zIndex: i,
                    opacity: 1, // already visible, just off-screen
                })
            } else {
                gsap.set(card, {
                    position: 'relative',
                    zIndex: 0,
                })
            }
        })

        // 2) Intro animation — only heading + first card
        const introTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
                toggleActions: 'play none none none',
            }
        })
        introTl.from('.exp-heading', {
            opacity: 0, y: 40, duration: 0.6, ease: 'power3.out',
        })
        introTl.from(cards[0], {
            opacity: 0, y: 60, duration: 0.6, ease: 'power3.out',
        }, '-=0.3')

        // 3) Scrubbed stacking timeline
        const totalScroll = (totalCards - 1) * SCROLL_PER_CARD
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80px',
                end: `+=${totalScroll}`,
                pin: true,
                pinSpacing: true,
                scrub: true,
            }
        })

        for (let i = 1; i < totalCards; i++) {
            const progress = (i - 1) / (totalCards - 1)

            tl.to(cards[i], {
                yPercent: 0,
                duration: 0.5,
                ease: 'none',
            }, progress)

            tl.to(cards[i - 1], {
                height: HEADER_HEIGHT,
                overflow: 'hidden',
                duration: 0.5,
                ease: 'none',
            }, progress)
        }

    }, { scope: sectionRef })

    return (
        <section
            ref={sectionRef}
            id={id}
            className={`px-8 md:px-30 py-24 mt-16  ${className}`}
        >
            <h3 className="exp-heading text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-16">
                My <span className="text-indigo-600 dark:text-indigo-300">Experience</span>
            </h3>
            <div ref={containerRef} className="relative max-w-3xl mx-auto" style={{ minHeight: '30rem' }}>
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