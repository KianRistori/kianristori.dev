import PostCard from "../components/PostCard";
import getPosts from "../helpers/getPosts";
import Hero from "../components/Hero";

export default function Home({ posts }) {
  return (
    <div>
      <Hero/>
      <h1 className="mt-24 mb-12 font-bold text-4xl">Latest Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          title={post.data.title}
          date={post.data.date}
          description={post.data.description}
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
