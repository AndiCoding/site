'use client'

import React, {useState, useRef, useEffect} from 'react'
import {Moon, Sun}                          from "lucide-react";

type HeaderProps = {
    className?: string;
}

const resolveInitialTheme = () => {
    if (typeof window === 'undefined') {
        return 'dark'
    }

    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') {
        return stored
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const Header = ({ className = '' }: HeaderProps) => {
    const [visible, setVisible] = useState(true)
    const lastScrollY = useRef(0)
    const [isDark, setIsDark] = useState(() => resolveInitialTheme() === 'dark')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    }, [isDark])

    const toggleTheme = () => {
        const next = isDark ? 'light' : 'dark'
        setIsDark(!isDark)
        localStorage.setItem('theme', next)
        document.documentElement.setAttribute('data-theme', next)
    }


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
                // Scrolling up or near top → show
                setVisible(true)
            } else {
                // Scrolling down → hide
                setVisible(false)
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <header className={`${className} fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 ${
            visible ? 'translate-y-0' : '-translate-y-24'
        }`}>
            <ul className="flex items-center py-3 px-2 border border-gray-300/70 dark:border-white/10 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-sm shadow-lg divide-x divide-gray-300/70 dark:divide-white/10">
                <li>
                    <a
                        href="#hero"
                        className={`text-sm ${isDark ? "text-gray-100" : "text-gray-700"} hover:text-indigo-600 dark:hover:text-indigo-300 border border-transparent transition-colors duration-200 font-medium tracking-wide px-2 py-1 rounded-lg block`}
                    >
                        Hero
                    </a>
                </li>
                <li>
                    <a
                        href="#experience"
                        className={`text-sm ${isDark ? "text-gray-100" : "text-gray-700"} hover:text-indigo-600 dark:hover:text-indigo-300 border border-transparent transition-colors duration-200 font-medium tracking-wide px-2 py-1 rounded-lg block`}

                    >
                        Experience
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className={`text-sm ${isDark ? "text-gray-100" : "text-gray-700"} hover:text-indigo-600 dark:hover:text-indigo-300 border border-transparent transition-colors duration-200 font-medium tracking-wide px-2 py-1 rounded-lg block`}

                    >
                        Projects
                    </a>
                </li>
                <li>
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className={`text-sm ${isDark ? "text-gray-100" : "text-gray-700"} hover:text-indigo-600 dark:hover:text-indigo-300 border border-transparent transition-colors duration-200 font-medium tracking-wide px-2 py-1 rounded-lg block`}

                    >
                        {isDark ? <Sun /> : <Moon />}
                    </button>
                </li>
            </ul>
        </header>
    )
}

export default Header