import type { Metadata } from 'next';
import { createOgImage } from "../../../lib/createOgImage"
import { allPosts } from "contentlayer/generated";
import { Mdx } from "components/mdx";
import Balancer from 'react-wrap-balancer'

interface ParamsProps {
	slug: string
}
interface MdxProps {
	code: string;
}
interface PostProps {
	slug: string,
	title: string,
	publishedAt: string,
	summary: string,
	body: MdxProps
}

export async function generateStaticParams() {
	return allPosts.map((post) => ({
	  slug: post.slug,
	}));
}

export async function generateMetadata(props: { params: ParamsProps }): Promise<Metadata | undefined> {
	const post: PostProps = allPosts.find((post) => post.slug === props.params.slug)!;
	const ogImage = createOgImage({
		title: post.title,
		meta: ["kianristori.dev", post.publishedAt].join(" · "),
	})
	if (!post) {
		return;
	}

	const {
		title,
		publishedAt: publishedTime,
		summary: description,
		slug,
	} = post;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `https://kianristori.dev/blog/${slug}`,
			images: [
				{
					url: ogImage,
					alt: description,
					width: 1600,
					height: 863,
				}
			]
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
		},
	};
}

export default function Blog(props: {params: ParamsProps}) {
	const post: PostProps = allPosts.find((post) => post._raw.flattenedPath === props.params.slug)!;
	return (
	<div className="md:my-20 pb-40">
		<h1 className="text-4xl font-epilogue mb-5 animate-in">
			<Balancer>{post.title}</Balancer>
		</h1>
		<div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px] animate-in" style={{ "--index": 1 } as React.CSSProperties}>
			<div className="bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">{post.publishedAt}</div>
			<div className="h-[0.2em] bg-neutral-800 mx-2"></div>
		</div>
		<div className="animate-in" style={{ "--index": 2 } as React.CSSProperties}>
			<Mdx code={post.body.code} />
		</div>
	</div>
	)
}
