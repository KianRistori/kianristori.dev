import Link from "next/link";

function PostBlog({ title, date, description, slug }) {
  return (
      <Link href="/[slug]" as={`/${slug}`}>
        <div className="my-4 py-4 border-b border-gray-700 cursor-pointer">
            <h2 className="font-bold text-2xl my-4">{title}</h2>
            <time className="text-gray-400 font-light">{date}</time>
            <p className="mt-4">{description}</p>
        </div>
      </Link>
  );
}

export default PostBlog;
