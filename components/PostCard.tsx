import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function PostCard(props: {name: string, date: string, link: string}) {
  return (
    <Link href={props.link} className="flex justify-between items-center w-full p-4 border rounded-lg shadow bg-gray-800 border-gray-700">
        <div>
          <h1 className="md:text-lg text-md font-bold tracking-tight text-white">{props.name}</h1>
          <p className="md:font-normal text-sm text-gray-300">{props.date}</p>
        </div>
        <FiArrowUpRight className="text-xl text-gray-300" />
    </Link>
  )
}
