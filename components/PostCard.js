import Link from "next/link";
import { HiOutlineCalendar } from "react-icons/hi";

function PostCard({ title, date, description, image, slug, time }) {
  return (
      <Link href="/[slug]" as={`/${slug}`}>
        <div class="flex justify-center mb-10 transition duration-500 hover:scale-105">
          <div class="flex flex-col md:flex-row rounded-lg hover:dark:bg-gray-800 shadow-lg dark:shadow-gray-900">
            <img class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={image} alt="" />
            <div class="p-6 flex flex-col justify-start">
            <h5 class="tracking-tight text-gray-900 dark:text-white text-2xl font-medium mb-2">{title}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400 mb-4">{description}</p>
            <p class="font-normal text-gray-700 dark:text-gray-400 mb-4">{time}</p>
            <div>
              <p class="flex font-normal text-sm text-gray-500 dark:text-gray-500"><HiOutlineCalendar className="h-auto mr-1"/>{date}</p>
            </div>
          </div>
        </div>
      </div>
      </Link>
  );
}

export default PostCard;