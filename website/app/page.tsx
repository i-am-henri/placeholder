import Link from "next/link"
import {motion} from  "framer-motion"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "me - henri"
}
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFFFF0]">
      <h2  className="text-black text-4xl">I am henri.</h2>
      <p className="text-black">I code weird stuff on the internet.</p>
      <Link className="text-black underline" href="https://github.com/i-am-henri">GitHub</Link>
    </div>
  )
}