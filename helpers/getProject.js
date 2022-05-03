import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getProject = (slug) => {
  const fileContents = fs.readFileSync(path.join(`data/projects/${slug}.mdx`), "utf8");
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export default getProject;
