import getProjects from '../../data/getProjects';
import getTopics from '../../data/getTopics';
import ProjectList from 'components/ProjectList';

export const metadata = {
	title: "Projects",
	description: 'Read my thoughts on software development, design, and more.',
};

export const revalidate = 3600;

export default async function Projects() {
	const projects = await getProjects();
	const topics = getTopics(projects);
	return (
	<div className="md:py-10">
		<h1 className="font-bold text-4xl mb-5">Projects</h1>
		<ProjectList
			topics={topics}
			projects={projects}
		/>
	</div>
	)
}
