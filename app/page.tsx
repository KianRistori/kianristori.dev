/* eslint-disable @next/next/no-img-element */
import { allPosts } from 'contentlayer/generated';
import { FiArrowUpRight } from "react-icons/fi";
import LinkButton from 'components/LinkButton';
import getAge from 'data/getAge'
import PostCard from 'components/PostCard';

export default function Home() {
	allPosts.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));
  return (
    <div className="md:pt-10 pb-40">
		  <h1 className="font-bold text-2xl mb-5 animate-in">hy, I&apos;m Kian</h1>
      <p className="text-gray-200 font-normal animate-in" style={{ "--index": 1 } as React.CSSProperties}>I&apos;m a {getAge()} year old guy diving deep into the world of programming. Follow my journey as I study at <LinkButton img="/42Logo.png" name="42 Firenze" link="https://42firenze.it/" alt="42 Firenze Logo"/> and share my experiences with you. Let&apos;s embark on this tech adventure together! 🚀</p>
      <div className="grid md:grid-cols-4 grid-cols-2 items-center my-10 animate-in-reverse" style={{ "--index": 2 } as React.CSSProperties}>
        <img className="z-40 rounded-lg -rotate-3 hover:scale-110 transition duration-200" src="/logo.webp" alt="My best photo" />
        <img className="rounded-lg object-cover hover:z-40 rotate-3 hover:scale-110 transition duration-200" src="/images/home/photo2.webp" alt="My badge at 42Firenze" />
        <img className="rounded-lg md:h-52 object-cover z-30 md:-rotate-3 hover:z-40 hover:scale-110 transition duration-200" src="/images/home/photo3.webp" alt="My first public presentation" />
        <img className="rounded-lg z-30 h-52 md:rotate-3 -rotate-3 object-cover hover:z-40 hover:scale-110 transition duration-200" src="/images/home/photo4.webp" alt="My IT & Italian Professor from High School" />
      </div>
      <div className="mt-10 animate-in" style={{ "--index": 3 } as React.CSSProperties}>
        <p>This is the section dedicated to my blog post. Here you will find the most recent and interesting articles on the news, trends and resources of the industry. Discover the languages, tools, techniques and projects that are most innovative and useful. Follow the blog and interact with me.</p>
      </div>
      <div className="mt-10 mb-5 space-y-5">
        {allPosts.slice(0,3).map((post, i) =>
            <div key={i} className="animate-in" style={{ "--index": i + 4 } as React.CSSProperties}>
              <PostCard name={post.title} link={`/blog/${post.slug}`} date={post.publishedAt} />
            </div>
          )}
      </div>
      <ul className="flex flex-col mt-10 md:flex-row gap-2 md:gap-6 text-gray-400 animated-list animate-in" style={{ "--index": 4 } as React.CSSProperties}>
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
    </div>
  )
}
