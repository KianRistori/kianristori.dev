import getProjects from '../../data/getProjects';
import ProjectCard from 'components/ProjectCard';

export const metadata = {
	title: "Projects",
	description: 'Read my thoughts on software development, design, and more.',
};

export default async function Projects() {
	const projects = await getProjects();
	return (
	<div className="md:py-10">
		<h1 className="font-bold text-4xl mb-5">Projects</h1>

		<div className="flex flex-col space-y-5">
		{projects.map((project, i) => (
		<ProjectCard key={i}
			title={project.name}
			topics={project.topics}
			description={project.description}
			link={project.html_url}
			linkPage={project.homepage}
			/>
		))}
		</div>
	</div>
	)
}
