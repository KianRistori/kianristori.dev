import Link from "next/link";
import Image from 'next/image'
import { HiOutlineCalendar } from "react-icons/hi";

function PostCard({ title, date, description, image, slug }) {
  return (
      <Link href="/[slug]" as={`/${slug}`}>
        <div className="flex justify-center mb-10 transition duration-500 hover:scale-105">
          <div className="flex flex-col md:flex-row rounded-lg hover:dark:bg-gray-800 shadow-lg dark:shadow-gray-800 hover:bg-gray-100 w-full">
            <img className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={image} alt="post-image" />
            <div className="p-6 flex flex-col justify-start w-full">
              <h3 className="tracking-tight text-gray-900 dark:text-white text-2xl font-medium mb-2">{title}</h3>
              <p className="font-normal text-gray-700 dark:text-gray-400 mb-8">{description}</p>
              <div className="flex justify-end">
                <p className="flex font-normal text-sm text-gray-500 dark:text-gray-500"><HiOutlineCalendar className="h-auto mr-1"/>{date}</p>
              </div>
          </div>
        </div>
      </div>
      </Link>
  );
}

export default PostCard;