import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import FilterBlogPost from 'components/FilterBlogPost';

export const metadata = {
	title: "Blog",
	description: "Read my thoughts on software development, design, and more."
};

export default function BlogPage() {
	allPosts.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));
	return (
		<div className="md:py-10 mb-40">
			<h1 className="font-bold text-4xl mb-5 animate-in">blog</h1>
			<FilterBlogPost allPost={allPosts}/>
		</div>
	);
  }
