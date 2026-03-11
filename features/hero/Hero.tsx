'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import React, { useRef } from 'react'

gsap.registerPlugin(SplitText)

type HeroProps = {
    className?: string
    id: string
}

const Hero = ({className = 'name', id}: HeroProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLImageElement | null>(null)

    useGSAP(() => {
        const isMobile = window.innerWidth < 768
        const split = new SplitText('.text', { type: 'words, chars' })
        const splitParagraph = new SplitText('.description', { type: 'lines' })

        const endClipPath = isMobile
            ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'   // top banner strip
            : 'polygon(40% 0%, 100% 0%, 100% 100%, 60% 100%)' // right side panel



        gsap.set(containerRef.current, { autoAlpha: 0 })
        gsap.set(imageRef.current, { clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' })
        gsap.set(split.chars, { opacity: 0, y: 20 })

        const tl = gsap.timeline()

        tl.to(containerRef.current, { autoAlpha: 1, duration: 0 })
        tl.fromTo(imageRef.current,
            { clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' },
            { clipPath: endClipPath, duration: 1.2, ease: 'power3.inOut' }
        )
        tl.to(split.chars, {
            opacity: 1,
            y: 0,
            stagger: 0.01,
            ease: 'power3.out',
        })
        tl.from(splitParagraph.lines, {
            opacity: 0,
            x: 200,
            stagger: 0.07,
            ease: 'power3.out',
        })
    }, [])


    return (
        <section id={id} className={`flex flex-col justify-center ${className}`}>
            <img
                ref={imageRef}
                src="/milad-fakurian-tGTa40GKSRI-unsplash.jpg"
                alt=""
                aria-hidden="true"
                style={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }}
                className="absolute w-full h-screen object-cover opacity-50 pointer-events-none select-none"
            />
            <div ref={containerRef} className="z-10 space-y-4 px-8 md:px-30">
                <div className="md:mt-40 space-y-2 min-w-sm">
                    <p className="text-3xl text-soft-periwinkle-400 text">Hi, my name is</p>
                    <h1 className="sm:min-w-md text-6xl font-extrabold text-foreground text">Andreas Valdal</h1>
                    <h2 className="text-2xl font-extrabold text-soft-periwinkle-200  text">I´m passionate about <span className="block md:inline text-soft-periwinkle-400">software development</span></h2>
                </div>
                <div className="description text-soft-periwinkle-200 max-w-xs">
                    <span>A dedicated developer focused on building </span>
                    <span>seamless web and mobile applications, </span>
                    <span>with a passion for solving technical problems.</span>
                </div>
            </div>
        </section>
    )
}
export default Hero