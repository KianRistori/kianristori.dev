// import { MDXRemote } from "next-mdx-remote";
import getPost from "/helpers/getPost";
import getPosts from "/helpers/getPosts";
import markdownToHtml from "../../lib/markdown";
// import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head"
import { BiTime } from "react-icons/bi";
import ViewCounter from "/components/ViewCounter";
import {AiFillEye} from "react-icons/ai";

function Post({ data, content, time, slug }) {
  const theme = 'tomorrow';
  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <meta property="og:title" content={data.title}/>
        <meta name="description" content={data.description}></meta>
        <meta property="og:description" content={data.description}/>
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          as="script"
        />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-${theme}.css`}
          rel="stylesheet"
        />
      </Head>
      <h1 className="font-bold text-4xl md:text-7xl md:mt-24 mt-10 mb-6">{data.title}</h1>
      <div className="flex justify-between">
        <time className="text-gray-500 italic">{data.date}</time>
        <div className="flex space-x-5">
          <p className="text-gray-500 italic flex"><AiFillEye className="h-auto w-5 mr-1"/>{<ViewCounter slug={slug} blogPage={true}/>}</p>
          <p className="text-gray-500 italic flex"><BiTime className="w-5 h-auto mr-1"/>{time} min read</p>
        </div>
      </div>
      <img className="w-max rounded-xl mt-10" src={data.image} alt={data.image}></img>
      <p className="prose dark:prose-invert mt-12 max-w-none">
        {/* <MDXRemote lazy="true" {...content} /> */}
        <article dangerouslySetInnerHTML={{__html: content}}></article>
      </p>
    </div>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { id: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.id);
  // const mdxSource = await serialize(post.content);
  const mdxSource = await markdownToHtml(post.content);
  const readTime = getWordCount(post.content)/200;
  return {
    props: {
      slug: params.id,
      data: post.data,
      content: mdxSource,
      time: readTime.toFixed(0),
    },
  };
};

function getWordCount(str) {
  return str.split(' ')
    .filter(function(n) { return n != '' })
    .length;
}
