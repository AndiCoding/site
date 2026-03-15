"use client"
import React, {useRef} from "react"
import {useGSAP}       from "@gsap/react";
import {gsap} from "gsap"


type SocialLink = {
    label: string
    href: string
    icon: string
}

const links: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com/AndiCoding', icon: 'Github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andreas-valdal-563b402b3/', icon: 'LinkedIn' },
    { label: 'andreasnilsenvaldal@gmail.com', href: 'mailto:andreasnilsenvaldal@gmail.com', icon: '@' },
]


const ExternalLinks = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const tl = useRef<gsap.core.Timeline | null>(null)

    useGSAP(() => {
        gsap.set('a', {
            opacity: 0,
            x: 40,
            scale: 0.2,
        })
        
        tl.current = gsap
            .timeline()
            .to('a', {
                duration: 1.2,
                ease: 'elastic.inOut',
                stagger: 0.2,
                opacity: 1,
                x:0,
                scale: 1,
            })
    }, {scope: containerRef})

    return (
        <div ref={containerRef} className="bottom-8 md:left-8 z-50 flex w-full justify-center md:items-start gap-3">
            {links.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    // `group` allows us to animate children on hover.
                    // We keep the `external-link` marker class for possible styling.
                    aria-label={link.label}
                    className="external-link animated-btn flex items-center gap-3 overflow-hidden group"
                >
                    
                    <span
                        className='w-24 h-16 flex items-center justify-center rounded border text-gray-500 transition-colors duration-200 whitespace-nowrap overflow-hidden group-hover:text-indigo-400 motion-reduce:transition-none'
                    >
                        {link.icon}
                    </span>
                </a>
            ))}

        </div>
    )
}

export default ExternalLinks