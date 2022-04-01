import Link from "next/link";

function PostCard({ title, date, description, image, slug }) {
  return (
      <Link href="/[slug]" as={`/${slug}`}>
        <div class="flex justify-center mb-10">
          <div class="flex flex-col md:flex-row rounded-lg dark:bg-gray-800 shadow-lg">
            <img class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={image} alt="" />
            <div class="p-6 flex flex-col justify-start">
            <h5 class="tracking-tight text-gray-900 dark:text-white text-2xl font-medium mb-2">{title}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400 mb-4">{description}</p>
          </div>
        </div>
      </div>
      </Link>
  );
}

export default PostCard;