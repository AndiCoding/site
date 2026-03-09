'use client'
import React, { useState } from 'react'

type SocialLink = {
    label: string
    href: string
    icon: string
}

const links: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com/AndiCoding', icon: 'GH' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andreas-valdal-563b402b3/', icon: 'IN' },
    { label: 'andreasnilsenvaldal@gmail.com', href: 'mailto:andreasnilsenvaldal@gmail.com', icon: '@' },
]

const Sidebar = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div className="fixed bottom-8 md:left-8 z-50 flex md:flex-col w-full justify-center md:items-start gap-3">
            {links.map((link, index) => (
                <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="flex items-center gap-3 overflow-hidden group"
                >
                    <span className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-gray-400 group-hover:border-green-400 group-hover:text-green-400 transition-colors duration-200 text-xs font-bold shrink-0">
                        {link.icon}
                    </span>
                    <span
                        className={`text-sm text-gray-400 group-hover:text-green-400 transition-all duration-300 whitespace-nowrap overflow-hidden ${
                            hoveredIndex === index ? 'md:max-w-60 opacity-100' : 'max-w-0 opacity-0'
                        }`}
                    >
                        {link.label}
                    </span>
                </a>
            ))}

            {/* Vertical line going slightly up */}
            <div className="mt-2 ml-3.5 md:w-px m:h-16 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
    )
}

export default Sidebar