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
        // per-frame update
        function update(time: number) {
            // gsap.ticker passes time in seconds — Lenis expects ms
            lenisRef.current?.lenis?.raf(time * 1000)
        }

        // register the update once on mount
        gsap.ticker.add(update)
        // disable GSAP lag smoothing once (optional, follows Lenis docs)
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
