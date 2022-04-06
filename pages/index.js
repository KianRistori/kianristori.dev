import Head from "next/head"
import PostCard from "../components/PostCard";
import getPosts from "../helpers/getPosts";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Kian Ristori</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="I'm Full Stack Web Developer based in Italy. Welcome to my blog"/>
        <meta property="og:title" content="Kian Ristori"/>
        <meta property="og:description" content="I'm Full Stack Web Developer based in Italy. Welcome to my blog"/>
        <meta property="og:url" content="https://kianristori.dev"/>
        <meta property="og:type" content="website"/>
      </Head>
      <Hero/>
      <h2 className="md:mt-24 mb-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 text-4xl">Latest Posts</h2>
      <div>
      {posts.slice(0,3).map((post) => (
        <PostCard
          key={post.slug}
          title={post.data.title}
          date={post.data.date}
          description={post.data.description}
          image={post.data.image}
          slug={post.slug}
        />
      ))}
      </div>
      <a href="blog" className="text-gray-600 text-base flex">Read all posts<HiArrowNarrowRight className="ml-1 h-auto mt-0.5"/></a>
      <h2 className="md:mt-24 mt-10 mb-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-orange-300 text-4xl">Skills</h2>
      <Skills/>
    </div>
  );
}

export const getStaticProps = () => {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
};
