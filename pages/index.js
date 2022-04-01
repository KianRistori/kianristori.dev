import PostCard from "../components/PostCard";
import getPosts from "../helpers/getPosts";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Gradient from 'rgt';

export default function Home({ posts }) {
  return (
    <div>
      <Hero/>
      <h1 className="mt-24 mb-12 font-bold text-4xl">
        <Gradient dir="left-to-right" from="#A9C9FF" to="#FFBBEC" >
          Latest Posts
        </Gradient>
      </h1>
      <div className="pb-10">
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
      <a href="blog" className="text-gray-600 text-base">Read all posts</a>
      <h1 className="mt-24 mb-12 font-bold text-4xl">Skills</h1>
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
