/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export default function EducationCard(props: {image: string, name: string, type: string, yearStart: string, yearEnd: string, link: string}) {
  return (
    <Link href={props.link}>
      <li className="flex transition-opacity justify-between">
        <div className="flex items-center gap-4">
          <img className="rounded-full" width={60} height={60} src={props.image} alt={props.name} />
          <div>
            <h1 className="text-base">{props.name}</h1>
            <p className="text-sm text-gray-300">{props.type}</p>
        </div>
        </div>
        <div>
          <p className="text-gray-300">{props.yearStart} - {props.yearEnd}</p>
        </div>
      </li>
    </Link>
  )
}
