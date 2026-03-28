'use client'
import React, {useEffect, useRef} from 'react'
import {gsap}                     from "gsap";
import {ReactLenis}               from "lenis/react";
import {LenisRef} from 'lenis/react'

type LenisWrapperProps = {
    className?: string
    children: React.ReactNode
}


const LenisWrapper = ({className, children}: LenisWrapperProps) => {
    const lenisRef = useRef<LenisRef | null>(null)

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000)
        }

        gsap.ticker.add(update)
        gsap.ticker.lagSmoothing(0)
        
        

        return () => {
            gsap.ticker.remove(update)
        }
    }, [])
    return (
        <ReactLenis ref={lenisRef} root options={{autoRaf: false, anchors: true}} className={className} >
            {children}
        </ReactLenis>
    )
}
export default LenisWrapper
