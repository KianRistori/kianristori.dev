import Head from "next/head"
import PostCard from "../components/PostCard";
import getPosts from "../helpers/getPosts";
import getProjects from "../helpers/getProjects";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import { HiArrowNarrowRight } from "react-icons/hi";
import ProjectCard from "../components/ProjectCard"

export default function Home({ posts, projects }) {
  return (
    <div>
      <Head>
        <title>Kian Ristori</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="I'm Full Stack Web Developer based in Italy. Welcome to my blog"/>
        <meta property="og:title" content="Kian Ristori"/>
        <meta property="og:description" content="I'm Full Stack Web Developer based in Italy. Welcome to my blog"/>
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
      <a href="blog" className="text-gray-600 text-base flex">Read all posts<HiArrowNarrowRight className="ml-1 h-auto mt-0.5"/></a>

      <h2 className="md:mt-24 mt-10 mb-12 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-800 text-4xl">My Projects</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      {projects.slice(0,2).map((project) => (
        <ProjectCard
          key={project.slug}
          title={project.data.title}
          description={project.data.description}
          image={project.data.image}
          github={project.data.github}
          slug={project.slug}
        />
      ))}
      </div> 
      <a href="projects" className="mt-10 text-gray-600 text-base flex">Show all Projects<HiArrowNarrowRight className="ml-1 h-auto mt-0.5"/></a>
      </div>

      <h2 className="md:mt-24 mt-10 mb-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-orange-300 text-4xl">Skills</h2>
      <Skills/>
    </div>
  );
}

export const getStaticProps = () => {
  const posts = getPosts();
  const projects = getProjects();
  return {
    props: {
      posts,
      projects,
    },
  };
};
