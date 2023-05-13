import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function LinkCard(props: {icon: React.ReactElement, name: string, link: string}) {
  return (
    <Link href={props.link}>
      <li className="flex h-14 transition-opacity justify-between font-medium rounded-lg text-sm px-3 py-2.5 text-center items-center bg-gray-800 text-white">
        <div className="flex items-center">
          <span className="text-xl mr-2">{props.icon}</span>
          <h1 className="text-base">{props.name}</h1>
        </div>
        <div>
          <FiArrowUpRight className="text-xl text-gray-300"/>
        </div>
      </li>
    </Link>
  )
}
