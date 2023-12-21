"use client"
import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"

export default function PageContent() {
    const [styletext, setStyleText] = useState<string>()
    const ref = useRef(null)
    const [windowHeight, setWindowHeight] = useState<number>()
    useEffect(() => {
        setWindowHeight(window.innerHeight)
    })
    const isInView = useInView(ref, {
        margin: `0px 100px -40% 0px`
    })
    useEffect(() => {
        if (isInView) {
            setStyleText(`blur-lg `)
        } else {
            setStyleText(``)
        }
    }, [isInView])
    return (
        <div className="min-h-screen flex flex-col transition-all items-center  bg-[#FFFFF0] dark:bg-[#1E1E1E]">
            {/* Mein Name, oben rechts */}
            <div className="fixed top-5 left-5">
                <Link href="/">
                    <h1 className="font-clash-display text-3xl dark:text-[#FFFFF0] ">henri</h1></Link>
            </div>
            {/* Das Div für den Hintergrund */}

            <div className={`flex flex-col items-center justify-center fixed top-[50%] ${styletext} `}>
                <h2 className="dark:text-[#FFFFF0] text-4xl font-clash-display">My name is henri.</h2>
                <p className="dark:text-[#FFFFF0]">I create weird stuff on the internet.</p>
            </div>
            {/* Der GitHub Link */}
            <div className="fixed z-50 bottom-2 right-2">
                <Link className="dark:text-[#FFFFF0] underline " href="https://github.com/i-am-henri" target="_blank">GitHub</Link>
            </div>
            {/* Ein Platzhalter, damit man den Hintergrund sieht */}
            <div style={{ minHeight: "100dvh" }}>

            </div>
            {/* Erste section */}
            <section className="min-h-screen flex flex-col items-center justify-center">
                <div ref={ref} className="bg-[#FFFFF0] w-[50vw] h-[75vh] rounded-lg flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-clash-display">i like programming</h2>
                </div>
            </section>
        </div>
    )
}