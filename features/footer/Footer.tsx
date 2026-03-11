import React from 'react'

type FooterProps = {
    className?: string;
    style?: React.CSSProperties;
}

const Footer = ({ className = '', style }: FooterProps) => {
    return (
        <footer
            className={`w-full border-t border-soft-periwinkle-300/30 bg-soft-periwinkle-900 text-soft-periwinkle-200 ${className}`}
            style={style}
        >
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">

                {/* Brand */}
                <div className="space-y-2">
                    <h2 className="text-lg font-bold text-foreground">Andreas Valdal</h2>
                    <p className="text-sm text-soft-periwinkle-200">
                        Passionate developer building seamless web & mobile applications.
                    </p>
                </div>

                {/* Links */}
                {/*<div className="space-y-2">*/}
                {/*    <h3 className="text-sm font-semibold uppercase tracking-wider text-highlight-subtle">Navigation</h3>*/}
                {/*    <ul className="space-y-1 text-sm">*/}
                {/*        {['Home', 'About', 'Projects', 'Contact'].map((item) => (*/}
                {/*            <li key={item}>*/}
                {/*                <a*/}
                {/*                    href={`#${item.toLowerCase()}`}*/}
                {/*                    className="hover:text-highlight transition-colors duration-200"*/}
                {/*                >*/}
                {/*                    {item}*/}
                {/*                </a>*/}
                {/*            </li>*/}
                {/*        ))}*/}
                {/*    </ul>*/}
                {/*</div>*/}

                {/* Social */}
                {/*<div className="space-y-2">*/}
                {/*    <h3 className="text-sm font-semibold uppercase tracking-wider text-highlight-subtle">Connect</h3>*/}
                {/*    <ul className="space-y-1 text-sm">*/}
                {/*        {[*/}
                {/*            { label: 'GitHub', href: 'https://github.com/AndiCoding' },*/}
                {/*            { label: 'LinkedIn', href: '#' },*/}
                {/*            { label: 'Email', href: 'mailto:your@email.com' },*/}
                {/*        ].map(({ label, href }) => (*/}
                {/*            <li key={label}>*/}
                {/*                <a*/}
                {/*                    href={href}*/}
                {/*                    target="_blank"*/}
                {/*                    rel="noopener noreferrer"*/}
                {/*                    className="hover:text-highlight transition-colors duration-200"*/}
                {/*                >*/}
                {/*                    {label}*/}
                {/*                </a>*/}
                {/*            </li>*/}
                {/*        ))}*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </div>

            {/* Bottom bar */}
            <div className="border-t border-soft-periwinkle-300/30 px-6 py-4 text-center text-xs text-soft-periwinkle-200">
                © {new Date().getFullYear()} Andreas Valdal. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer