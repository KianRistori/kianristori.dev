import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getProjects = () => {
  const files = fs.readdirSync(path.join("data/projects"));
  const allProjectsData = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fileContents = fs.readFileSync(
      path.join(`data/projects/${slug}.mdx`),
      "utf8"
    );
    const { data } = matter(fileContents);
    return {
      slug,
      data,
    };
  });
  return allProjectsData;
};

export default getProjects;
