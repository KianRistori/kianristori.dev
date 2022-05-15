import { MDXRemote } from "next-mdx-remote";
import getProject from "/helpers/getProject";
import getProjects from "/helpers/getProjects"
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head"

function Project({ data, content}) {
  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <meta property="og:title" content={data.title}/>
        <meta name="description" content={data.description}></meta>
        <meta property="og:description" content={data.description}/>
      </Head>
      <h1 className="font-bold text-7xl md:mt-24 mt-10 mb-6">{data.title}</h1>
      <img className="w-max rounded-xl mt-10" src={data.image} alt={data.image}></img>
      <p className="prose dark:prose-invert mt-12 max-w-none">
        <MDXRemote lazy="true" {...content} />
      </p>
    </div>
  );
}

export default Project;

export const getStaticPaths = async () => {
  const projects = await getProjects();
  const paths = projects.map((project) => ({ params: { id: project.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getProject(params.id);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};

