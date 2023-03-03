import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import ViewCounter from '../../components/view-counter';

export const metadata = {
	title: "Blog",
	description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
	allPosts.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));
	return (
		<div className="p-5 md:py-32">
			<h1 className="font-bold text-4xl mb-5">Blog</h1>
			<div className="space-y-3">
				{allPosts.map((post, i) =>
					<div key={i} className="">
						<div>
							<Link className="font-light" href={`/blog/${post.slug}`}>{post.title}</Link>
						</div>
						<p className="text-sm text-neutral-500 font-mono tracking-tighter"><ViewCounter slug={post.slug}/></p>
					</div>
				)}
			</div>
		</div>
	);
  }
