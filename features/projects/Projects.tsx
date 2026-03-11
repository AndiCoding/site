'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type ProjectsProps = {
    className?: string
    id: string
}

const projects = [
    // {
    //     title: 'Portfolio Website',
    //     tech: ['Next.js', 'TypeScript', 'Tailwind', 'GSAP'],
    //     description: 'Personal portfolio built with Next.js and animated with GSAP.',
    //     link: '#',
    // },
    // {
    //     title: 'E-Commerce App',
    //     tech: ['React', 'Node.js', 'MongoDB'],
    //     description: 'Full-stack e-commerce platform with auth, cart and payment integration.',
    //     link: '#',
    // },
    // {
    //     title: 'Mobile Finance Tracker',
    //     tech: ['React Native', 'Expo', 'Firebase'],
    //     description: 'Cross-platform app for tracking personal income and expenses.',
    //     link: '#',
    // },
]

const Projects = ({ className = "", id }: ProjectsProps) => {
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
        <section ref={sectionRef} id={id} className={`px-8 md:px-30 py-24 ${className}`}>
            <h3 className="proj-heading text-4xl font-extrabold text-foreground text-center mb-16">
                My <span className="text-highlight">Projects</span>
            </h3>
            <h4 className="text-center font-bold text-lg">Work in progress 🛠️</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {projects.map((proj, i) => (
                    <div
                        key={i}
                        className="proj-card flex flex-col justify-between border border-soft-periwinkle-300/30 rounded-xl p-6 bg-soft-periwinkle-100/50 dark:bg-soft-periwinkle-700 backdrop-blur-sm hover:border-highlight transition-colors duration-300 group"
                    >
                        <div>
                            <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-highlight transition-colors duration-300">
                                {proj.title}
                            </h4>
                            <p className="text-soft-periwinkle-200 text-sm leading-relaxed mb-4">
                                {proj.description}
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap gap-2">
                                {proj.tech.map((t, j) => (
                                    <span
                                        key={j}
                                        className="text-xs text-highlight border border-soft-periwinkle-400/30 bg-soft-periwinkle-400/10 rounded-full px-3 py-1"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={proj.link}
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

export default Projects