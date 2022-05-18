import Head from "next/head"
import getPosts from "../helpers/getPosts";
import PostCard from "../components/PostCard";
import { useState } from "react";

export default function Blog({ posts }) {

  const [searchValue, setSearchValue] = useState('');
  const filterBlogPost = posts.filter((post) =>
    post.data.title.toLowerCase().includes(searchValue.toLowerCase())
  );

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
      <h1 className="md:mt-20 mt-10 mb-6 font-bold text-5xl">Blog ✍🏻</h1>
      <p className="font-IBM text-gray-400 mb-10">Welcome to my blog page. Here you can find lot of things about coding and of me.</p>
      <div className="relative w-full mb-10">
        <input
          aria-label="Search articles"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-gray-600 focus:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        />
        <svg
          className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      {filterBlogPost.map((post) => (
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
