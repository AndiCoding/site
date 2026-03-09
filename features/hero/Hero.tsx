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

    useGSAP(() => {
        const split = new SplitText('.text', { type: 'words, chars' })

        const tl = gsap.timeline()
        tl.from(split.chars, {
            opacity: 0,
            y:20,
            stagger: 0.01,
            ease: 'power3.out',
        })
        tl.from('.description', {
            opacity: 0,
            y:100,
            ease: 'power3.out',
            duration: 0.5,
        })


    }, [])

    return (
        <section id={id} className={`px-8 md:px-30 flex flex-col justify-center ${className}`}>
            <div className="z-10  space-y-4">
                <div className="sm:mt-40 space-y-2 min-w-sm">
                    <p className="text-3xl text-green-400 text">Hi, my name is</p>
                    <h1 className="sm:min-w-md text-6xl font-extrabold text-gray-100 text">Andreas Valdal</h1>
                    <h2 className="text-2xl font-extrabold text-gray-400 text">I´m passionate about <span className="block sm:inline">computers</span></h2>
                </div>
                <div className="description text-gray-500 max-w-xs ">
                    <span>A dedicated developer focused on building </span>
                    <span>seamless web and mobile applications, </span>
                    <span>with a passion for solving technical problems.</span>
                </div>
            </div>
            {/*<div className="right-0 absolute bg-red-400 border-2 rounded-xl z-0 w-full lg:w-5/12 h-3/4" />*/}
        </section>
    )
}
export default Hero