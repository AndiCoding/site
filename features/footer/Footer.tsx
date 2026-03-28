import React from 'react'

type FooterProps = {
    className?: string;
    style?: React.CSSProperties;
}

const Footer = ({ className = '', style }: FooterProps) => {
    return (
        <footer
            className={`w-full border-t border-gray-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-gray-700 dark:text-gray-200 ${className}`}
            style={style}
        >
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">

                {/* Brand */}
                <div className="space-y-2">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white font-[family-name:var(--font-display)]">Andreas Valdal</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Passionate developer building seamless web & mobile applications.
                    </p>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-300 dark:border-zinc-800 px-6 py-4 text-center text-xs text-gray-600 dark:text-gray-300">
                © {new Date().getFullYear()} Andreas Valdal. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer