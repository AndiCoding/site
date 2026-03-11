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
            className={`${className} border min-h-120 border-gray-700 rounded-xl p-6 bg-gradient dark:dark-bg-gradient backdrop-blur-sm hover:border-green-400 transition-colors duration-300`}
        >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h4 className="text-xl font-bold text-gray-100">{title}</h4>
                <span className="text-sm text-green-400 font-medium">{period}</span>
            </div>
            <p className="text-gray-400 text-sm font-semibold mb-3">{company}</p>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>
    )
}
export default ExperienceCard
