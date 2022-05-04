import Link from "next/link";

function PostCard({ title, description, logo, github, slug }) {
  return (
    <div class="md:max-w-sm w-full rounded-lg border-2 border-gray-400 shadow-2xl dark:border-gray-500 ">
      <div class="flex justify-end w-full px-4 pt-8">
        <div class="flex flex-col w-full items-center pb-10">
            <img class="mb-3 w-24 h-24 shadow-lg object-cover rounded-lg" src={logo} alt="Project Image"/>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{title}</h5>
            <span class="text-sm text-center text-gray-500 dark:text-gray-400">{description}</span>
            <div class="flex mt-4 space-x-3 lg:mt-6">
                <Link href="/projects/[id]" as={`/projects/${slug}`}><a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read More</a></Link>
                <a href={github} class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Show on GitHub</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;