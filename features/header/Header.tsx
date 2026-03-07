import React from 'react'

type HeaderProps = {
    className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
    return (
        <header className={`${className} fixed top-4 left-1/2 -translate-x-1/2 z-50`}>
            <ul className="flex items-center py-3 px-2 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm shadow-lg divide-x divide-white/10">
                <li>
                    <a
                        href="#hero"
                        className="text-sm text-gray-400 hover:text-green-400 border border-transparent hover:drop-shadow-[0_0_6px_rgba(74,222,128,0.5)] transition-all duration-200 font-medium tracking-wide px-5 py-1 rounded-lg block"
                    >
                        Hero
                    </a>
                </li>
                <li>
                    <a
                        href="#experience"
                        className="text-sm text-gray-400 hover:text-green-400 border border-transparent hover:drop-shadow-[0_0_6px_rgba(74,222,128,0.5)] transition-all duration-200 font-medium tracking-wide px-5 py-1 rounded-lg block"
                    >
                        Experience
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className="text-sm text-gray-400 hover:text-green-400 border border-transparent hover:drop-shadow-[0_0_6px_rgba(74,222,128,0.5)] transition-all duration-200 font-medium tracking-wide px-5 py-1 rounded-lg block"
                    >
                        Projects
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header