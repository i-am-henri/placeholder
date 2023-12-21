import Link from "next/link"
import { motion } from "framer-motion"
import { Metadata } from "next"
import PageContent from "./PageContent"
export const metadata: Metadata = {
  title: "me - henri",
  description: "my name is henri, I'm a web dev, based in germany"
}
export default function Home() {
  return (
    <PageContent />
  )
}