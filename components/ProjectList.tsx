"use client"
import { useState } from "react"
import ProjectCard from "./ProjectCard"

export default function ProjectList({topics, projects}) {
  const [topicState, setTopicState] = useState("");

  const filterProjects = projects.filter((project) =>
  	(topicState == "" ? project : project.topics.includes(topicState))
  )
  return (
	<div>
		<div className="space-y-2 mb-5 hidden md:block">
			{topics.map((topic, i) => (
				(topicState == topic ? <button key={i} onClick={() => (topicState != topic ? setTopicState(topic) : setTopicState(""))} type="button" className="text-black focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-white focus:outline-none focus:ring-white">{topic}</button> : <button key={i} type="button" onClick={() => (topicState != topic ? setTopicState(topic) : setTopicState(""))} className="text-white mr-2 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700">{topic}</button>)
			))}
		</div>
		<div className="flex flex-col space-y-5">
			{filterProjects.map((filterProject, i) => (
				<ProjectCard key={i}
					title={filterProject.name}
					topics={filterProject.topics}
					description={filterProject.description}
					link={filterProject.html_url}
					linkPage={filterProject.homepage}
					/>
			))}
		</div>
	</div>
  )
}
