import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-5 md:py-32">
      <div className="md:flex md:space-x-6 space-y-6 md:space-y-0 items-center">
        <Image className="rounded-full bg-gradient-to-tl from-gray-700/60 to-gray-400/60 shadow-lg p-[3px] ring-[5px] ring-gray-500/10" src="/logo.webp" alt="logo" height={100} width={100} priority></Image>
        <div>
          <h1 className="font-bold text-4xl font-epilogue">Kian Ristori</h1>
          <p className="max-w-lg font-light text-lg">Student at <span className="font-bold">42Firenze</span></p>
        </div>
      </div>
      <p className="my-10 font-light text-lg">I&apos;m passionate about web development. Welcome to my digital garden where I share what I&apos;m learning, becoming a better developer and growing a career in tech.</p>
      <div className="flex justify-around">
        <Link href="/blog" className="">Blog</Link>
        <Link href="/projects" className="">Projects</Link>
        <Link href="/about" className="">About</Link>
      </div>
    </div>
  )
}
