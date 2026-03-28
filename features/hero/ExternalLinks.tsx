"use client"
import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { Github, Linkedin, Mail } from "lucide-react"

type SocialLink = {
    label: string
    href: string
    icon: React.ReactNode
}

const links: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com/AndiCoding', icon: <Github size={20} /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andreas-valdal-563b402b3/', icon: <Linkedin size={20} /> },
    { label: 'Email', href: 'mailto:andreasnilsenvaldal@gmail.com', icon: <Mail size={20} /> },
]

const ExternalLinks = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        gsap.set('.social-link', {
            opacity: 0,
            x: 40,
            scale: 0.2,
        })

        gsap.timeline().to('.social-link', {
            duration: 1.2,
            ease: 'elastic.inOut',
            stagger: 0.2,
            opacity: 1,
            x: 0,
            scale: 1,
        })
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="z-50 flex w-full justify-center gap-4">
            {links.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    aria-label={link.label}
                    className="social-link"
                >
                    <span className="w-14 h-14 flex items-center justify-center rounded-xl border border-gray-300/70 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-sm text-gray-500 transition-colors duration-200 hover:text-accent hover:border-accent/40">
                        {link.icon}
                    </span>
                </a>
            ))}
        </div>
    )
}

export default ExternalLinks
