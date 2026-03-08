import React from 'react'

type FooterProps = {
    className?: string;
    style?: React.CSSProperties;
}

const Footer = ({className= '', style }: FooterProps) => {
    return (
        <footer className={`${className}`} style={style}>
            <h1>Footer</h1>

        </footer>
    )
}
export default Footer
