import getPosts from "../helpers/getPosts";
import PostCard from "../components/PostCard";
export default function Blog({ posts }) {
  return (
    <div>
      <h1 className="mt-20 mb-6 font-bold text-5xl">Blog</h1>
      <p className="font-ligh text-gray-400 mb-10">Welcome to my blog page. Here you can find lot of things of coding and so on</p>
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
