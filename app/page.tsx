import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className="md:py-32">
      <div className="md:flex md:space-x-6 space-y-6 md:space-y-0 items-center animate-in">
        <Image className="rounded-full bg-gradient-to-tl from-gray-700/60 to-gray-400/60 shadow-lg p-[3px] ring-[5px] ring-gray-500/10" src="/logo.webp" alt="logo" height={100} width={100} priority></Image>
        <div>
          <h1 className="text-4xl font-bold">Kian Ristori</h1>
          <p className="max-w-lg font-light text-lg animate-in">Student at <a href="https://42firenze.it/" className="font-bold">42Firenze</a></p>
        </div>
      </div>
      <p className="mt-10 text-lg animate-in" style={{ "--index": 1 } as React.CSSProperties}>I&apos;m passionate about web development. Welcome to my digital garden where I share what I&apos;m learning, becoming a better developer and growing a career in tech.</p>
      <ul className="flex flex-col mt-10 md:flex-row gap-2 md:gap-6 text-gray-400 animated-list animate-in" style={{ "--index": 2 } as React.CSSProperties}>
        <li className="transition-opacity">
          <a href="mailto:ristorikian@gmail.com" className="flex gap-2 items-center no-underline">
            <FiArrowUpRight className="text-xl"/>
            <span>Email me</span>
          </a>
        </li>
        <li className="transition-opacity">
          <a href="/links" className="flex gap-2 items-center no-underline">
            <FiArrowUpRight className="text-xl"/>
            <span>Connect with me</span>
          </a>
        </li>
      </ul>
      <div className="flex mt-10 justify-around animate-in" style={{ "--index": 3 } as React.CSSProperties}>
        <Link href="/blog" className="">Blog</Link>
        <Link href="/projects" className="">Projects</Link>
        <Link href="/about" className="">About</Link>
      </div>
    </div>
  )
}
