import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';

export const metadata = {
	title: "Blog",
	description: "Read my thoughts on software development, design, and more."
};

export default function BlogPage() {
	allPosts.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));
	return (
		<div className="md:py-10 mb-40">
			<h1 className="font-bold text-4xl mb-5 animate-in">blog</h1>
			<div className="space-y-3">
				{allPosts.map((post, i) =>
					<div key={i} className="animate-in" style={{ "--index": i + 1 } as React.CSSProperties}>
						<div>
							<Link href={`/blog/${post.slug}`}>{post.title}</Link>
						</div>
						<p className="text-sm text-gray-300">{post.publishedAt}</p>
					</div>
				)}
			</div>
		</div>
	);
  }
