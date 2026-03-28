'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import React, { useRef } from 'react'
import ExternalLinks from "@/features/hero/ExternalLinks";

gsap.registerPlugin(SplitText)

type HeroProps = {
    className?: string
    id: string
}

const Hero = ({className = 'name', id}: HeroProps) => {
    const sectionRef = useRef<HTMLElement>(null)

    useGSAP(() => {
        const split = new SplitText('.text', { type: 'words, chars' })

        gsap.set(split.chars, { opacity: 0, y: 20 })

        gsap.timeline()
            .to(split.chars, {
                opacity: 1,
                y: 0,
                stagger: 0.01,
                ease: 'power3.out',
            })

       }, { scope: sectionRef })

    return (
        <section ref={sectionRef} id={id} className={`relative overflow-hidden ${className}`}>
            <div className="sm:w-1/2 sm:left-1/2 sm:-translate-x-1/2 absolute inset-0 hero-grid" />

            <div
                className="hero-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-15"
                style={{ background: 'var(--accent)' }}
            />

            <div className="absolute space-y-8 min-w-sm text-center left-1/2 top-1/2 transform -translate-1/2">
                <p className="text text-3xl text-accent font-[family-name:var(--font-display)]">Hi, my name is</p>
                <h1 className="text sm:min-w-md text-6xl sm:text-8xl extra-bold font-black text-gray-900 dark:text-white font-[family-name:var(--font-display)]">ANDREAS VALDAL</h1>
                <h2 className="text text-2xl font-bold text-gray-700 dark:text-gray-200">I am passionate about <span className="block md:inline text-accent">software development</span></h2>
                <ExternalLinks />
            </div>
        </section>
    )
}

export default Hero