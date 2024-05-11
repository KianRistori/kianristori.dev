import Image from "next/image";

export default function LinkButton(props: {img: string, name: string, link: string, alt: string}) {
  return (
    <a href={props.link} className="text-white bg-gray-800 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center">
        <Image width={100} height={100} src={props.img} alt={props.alt} className="w-4 mr-2" />
        {props.name}
    </a>
  )
}
