'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
	const pathname = usePathname();
	if (pathname != '/')
	{
		return (
		<div className="md:my-10 mb-10">
			<div className="flex space-x-10 text-neutral-400">
				<Link href="/">Home</Link>
				<Link href="/blog">Blog</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/about">About</Link>
			</div>
		</div>
		)
	}
}
