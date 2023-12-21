import Link from "next/link"
import { motion } from "framer-motion"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "me - henri",
  description: "my name is henri, I'm a web dev, based in germany"
}
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFFF0] ">
      <h2 className="text-black text-4xl font-clash-display">I am henri.</h2>
      <p className="text-black">I code weird stuff on the internet.</p>
      <div className="absolute bottom-2 right-2">

        <Link className="text-black underline" href="https://github.com/i-am-henri" target="_blank">GitHub</Link>
      </div>
    </div>
  )
}