import React from 'react'


type ExperienceCardProps = {
    title: string
    company: string
    period: string
    description: string
    className?: string
}

const ExperienceCard = ({title, company, period, description, className = ""} : ExperienceCardProps) => {
    return (
        <div
            className={`${className} border min-h-120 border-gray-300 dark:border-zinc-800 rounded-xl p-6 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm hover:border-indigo-500 transition-colors duration-300`}
        >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h4>
                <span className="text-sm text-indigo-600 dark:text-indigo-300 font-medium">{period}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm font-semibold mb-3">{company}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
    )
}
export default ExperienceCard
