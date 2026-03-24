'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type AboutMeProps = {
    className?: string
}

const stack = [
    { label: 'Next.js', category: 'frontend' },
    { label: 'TypeScript', category: 'frontend' },
    { label: 'kotlin', category: 'frontend' },
    { label: 'Tailwind CSS', category: 'frontend' },
    { label: 'C#', category: 'backend' },
    { label: 'Kubernetes', category: 'infra' },
    { label: 'Docker', category: 'infra' },
    { label: 'Azure', category: 'infra' },
]

const AboutMe = ({ className }: AboutMeProps) => {
    const sectionRef = useRef<HTMLElement>(null)

    useGSAP(() => {
        gsap.from('.about-content', {
            opacity: 0,
            y: 40,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
            },
        })
    }, { scope: sectionRef })

    return (
        <section
            ref={sectionRef}
            id="about-me"
            className={`px-8 md:px-30 py-24 flex flex-col sm:flex-row justify-around gap-16 items-start ${className}`}
        >
            <h3 className="about-content shrink-0 text-4xl font-extrabold text-gray-900 dark:text-white">
                About <span className="text-indigo-600 dark:text-indigo-300">Me</span>
            </h3>

            <div className="flex flex-col gap-6 max-w-2xl">
                <p className="about-content text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I'm passionate about software development and deployment — a path I found by reconnecting
                    with the kid who was always fascinated by technology and problem-solving. What drives me
                    most is the compounding nature of the work: every challenge I tackle sharpens my ability
                    to face the next one.
                </p>
                <p className="about-content text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    My strongest experience so far is in React, kotlin, docker and C#. I'm currently deepening my knowledge
                    on Kubernetes, container orchestration, and Azure — focused on building and deploying
                    highly available applications.
                </p>
                {/*<div className="about-content flex flex-wrap gap-2 pt-2">*/}
                {/*    {stack.map(({ label, category }) => (*/}
                {/*        <span*/}
                {/*            key={label}*/}
                {/*            className={`px-3 py-1 rounded-full text-sm font-medium border ${*/}
                {/*                category === 'infra'*/}
                {/*                    ? 'border-indigo-400 text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40'*/}
                {/*                    : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/40'*/}
                {/*            }`}*/}
                {/*        >*/}
                {/*            {label}*/}
                {/*        </span>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </section>
    )
}

export default AboutMe