'use client'
import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
]

const Experience = ({ className = "", id }: ExperienceProps) => {
    const sectionRef = useRef<HTMLElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
                toggleActions: 'play none none none',
            }
        })

        tl.from('.exp-heading', {
            opacity: 0,
            y: 40,
            duration: 0.6,
            ease: 'power3.out',
        })
        tl.from('.exp-card', {
            opacity: 0,
            y: 60,
            stagger: 0.2,
            duration: 0.6,
            ease: 'power3.out',
        }, '-=0.3')
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} id={id} className={`px-8 md:px-30 py-24 ${className}`}>
            <h3 className="exp-heading text-4xl font-extrabold text-gray-100 text-center mb-16">
                My <span className="text-green-400">Experience</span>
            </h3>
            <div className="flex flex-col gap-6 max-w-3xl mx-auto">
                {experiences.map((exp, i) => (
                    <div
                        key={i}
                        className="exp-card border border-gray-700 rounded-xl p-6 bg-white/5 backdrop-blur-sm hover:border-green-400 transition-colors duration-300"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                            <h4 className="text-xl font-bold text-gray-100">{exp.title}</h4>
                            <span className="text-sm text-green-400 font-medium">{exp.period}</span>
                        </div>
                        <p className="text-gray-400 text-sm font-semibold mb-3">{exp.company}</p>
                        <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience