"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
	const pathname = usePathname();
	return (
		<div className="md:my-10 mb-10">
			<div className="flex space-x-10 text-neutral-400">
				{pathname === "/" ? <Link className="text-white" href="/">home</Link> : <Link href="/">home</Link>}
				{pathname.includes("/blog") ? <Link className="text-white" href="/blog">blog</Link> : <Link href="/blog">blog</Link>}
				{pathname === "/projects" ? <Link className="text-white" href="/projects">projects</Link> : <Link href="/projects">projects</Link>}
			</div>
		</div>
	)
}