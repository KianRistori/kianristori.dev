import Head from "next/head"
import getProjects from "../helpers/getProjects";
import ProjectCard from "../components/ProjectCard"

export default function Projects({ projects }) {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Welcome to my projects page"/>
        <meta property="og:title" content="Projects Kian Ristori"/>
        <meta property="og:description" content="Welcome to my project page"/>
        <meta property="og:type" content="website"/>
      </Head>
      <h1 className="md:mt-20 mt-10 mb-6 font-bold text-5xl">Projects 🚀</h1>
      <p className="font-IBM text-gray-400 mb-10">Welcome to my project page. Here you can find my projects.</p>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          title={project.data.title}
          description={project.data.description}
          logo={project.data.logo}
          image={project.data.image}
          github={project.data.github}
          slug={project.slug}
        />
      ))}
      </div>  
    </div>
  );
}

export const getStaticProps = () => {
  const projects = getProjects();
  return {
    props: {
      projects,
    },
  };
};
