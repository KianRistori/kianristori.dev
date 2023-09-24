"use client"

import { Post } from 'contentlayer/generated'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi"

export default function FilterBlogPost(props: {allPost: Post[]}) {
  const [searchValue, setSearchValue] = useState<string>("");

  const filterBlogPost = props.allPost.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
        <div className="relative my-5 animate-in">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FiSearch className="text-gray-400"/>
				</div>
				<input onChange={(e) => setSearchValue(e.target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-white border border-gray-700 rounded-lg bg-gray-800 focus:outline-none" placeholder="Search ..." required />
			</div>
			<div className="space-y-3">
				{filterBlogPost.map((post, i) =>
					<div key={i} className="animate-in" style={{ "--index": i + 1 } as React.CSSProperties}>
						<div>
							<Link href={`/blog/${post.slug}`}>{post.title}</Link>
						</div>
						<p className="text-sm text-gray-300">{post.publishedAt}</p>
					</div>
				)}
			</div>
    </div>
  )
}
