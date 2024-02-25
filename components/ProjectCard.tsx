import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard(props: {title: string, description: string, topics: [], link: string, linkPage: string, i: number}) {
	return (
		<div className="grid w-full py-5 shadow-md bg-transparent border-gray-700 animate-in" style={{ "--index": props.i + 2 } as React.CSSProperties}>
			<h1 className="mb-2 text-xl text-white">{props.title}</h1>
			<div className="flex flex-wrap">
				{props.topics.map((topic, i) =>
					(topic != "portfolio" ? <span key={i} className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300 mb-2">{topic}</span> : null)
				)}
			</div>
			<p className="mb-4 text-md text-gray-400">{props.description}</p>
			<div className="flex w-full self-end space-x-5">
				<a href={props.link} className="w-full">
					<button type="button" className="w-full inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-white bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700">
						<FaGithub className="text- mr-2 -ml-1" />
						Watch on GitHub
					</button>
				</a>
				{props.linkPage ? <a href={props.linkPage}>
					<button type="button" className="inline-flex flex-row-reverse items-center px-5 py-2.5 text-sm font-medium rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-white bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700">
						<FiArrowUpRight className="text-lg ml-2" />
						Link
					</button>
				</a> : null }
			</div>
		</div>
	);
}
