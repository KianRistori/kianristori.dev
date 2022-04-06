import { MDXRemote } from "next-mdx-remote";
import getPost from "../helpers/getPost";
import getPosts from "../helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head"
import { BiTime } from "react-icons/bi";

function Post({ data, content, time }) {
  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description}></meta>
        <meta property="og:title" content={data.time}/>
        <meta property="og:description" content={data.description}/>
        <meta property="og:url" content={"https://kianristori.dev/"+{slug}}/>
        <meta property="og:type" content="website"/>
      </Head>
      <h1 className="font-bold text-7xl md:mt-24 mt-10 mb-6">{data.title}</h1>
      <div className="flex justify-between">
        <time className="text-gray-500 italic">{data.date}</time>
        <p className="text-gray-500 italic flex"><BiTime className="w-5 h-auto mr-1"/>{time} min read</p>
      </div>
      <img className="w-max rounded-xl mt-10" src={data.image} alt={data.image}></img>
      <p className=" prose dark:prose-invert dark:text-white mt-12">
        <MDXRemote lazy="true" {...content} />
      </p>
    </div>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content);
  const readTime = getWordCount(post.content)/200;
  return {
    props: {
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
