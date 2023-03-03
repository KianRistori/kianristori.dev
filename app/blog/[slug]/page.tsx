import type { Metadata } from 'next';
import { allPosts } from "contentlayer/generated";
import { Mdx } from "components/mdx";
import Balancer from 'react-wrap-balancer'
import ViewCounter from '../../../components/view-counter';

export async function generateStaticParams() {
	return allPosts.map((post) => ({
	  slug: post.slug,
	}));
}

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
	const post = allPosts.find((post) => post.slug === params.slug);

	if (!post) {
		return;
	}

	const {
		title,
		publishedAt: publishedTime,
		summary: description,
		slug,
		image,
	} = post;
	const ogImage = image
	? `https://kianristori.dev${image}`
	: `https://kianristori.dev/api/og?title=${title}`;

	return {
		title,
		description,
		openGraph: {
			title,
			type: 'article',
			publishedTime,
			url: `https://kianristori.dev/blog/${slug}`,
			images: [
				{
					url: ogImage
				},
			],
		}
	};
}

export default async function Blog({ params }) {
	const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
	return (
		<div className="my-20 p-5 md:p-0">
			<h1 className="font-bold text-4xl font-epilogue mb-5">
				<Balancer>{post.title}</Balancer>
			</h1>
			<div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
				<div className="bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">{post?.publishedAt}</div>
				<div className="h-[0.2em] bg-neutral-800 mx-2"></div>
				<p className="font-mono text-sm text-neutral-500 tracking-tighter"><ViewCounter slug={post.slug} blogPage={true}></ViewCounter></p>
			</div>
			<Mdx code={post.body.code} />
		</div>
	)
}
