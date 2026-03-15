"use client"
import React from "react"


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


const ExternalLinks = () => {

    return (
        <div className="bottom-8 md:left-8 z-50 flex w-full justify-center md:items-start gap-3">
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
                        className={
                            // Animate scale and slight lift on hover. Respect reduced motion.
                            'w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 text-xs font-bold shrink-0 '
                            + 'transition duration-200 transform '
                            + 'group-hover:scale-105 group-hover:-translate-y-1 group-hover:border-indigo-400 group-hover:text-indigo-400 '
                            + 'motion-reduce:transition-none motion-reduce:transform-none'
                        }
                    >
                        {link.icon}
                    </span>
                    <span
                        className={
                            'text-sm text-gray-500 transition-colors duration-200 whitespace-nowrap overflow-hidden '
                            + 'group-hover:text-indigo-400 motion-reduce:transition-none'
                        }
                    >
                        {link.label}
                    </span>
                </a>
            ))}

        </div>
    )
}

export default ExternalLinks