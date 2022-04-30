import Head from "next/head"
import getPosts from "../helpers/getPosts";
import PostCard from "../components/PostCard";
export default function Blog({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Welcome to my blog"/>
        <meta property="og:title" content="Blog Kian Ristori"/>
        <meta property="og:description" content="Welcome to my blog"/>
        <meta property="og:type" content="website"/>
      </Head>
      <h1 className="md:mt-20 mt-10 mb-6 font-bold text-5xl">Blog</h1>
      <p className="font-ligh text-gray-400 mb-10">Welcome to my blog page. Here you can find lot of things about coding and of me.</p>
      {posts.map((post) => (
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
