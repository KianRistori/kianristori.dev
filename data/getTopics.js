export function getTopics(projects) {
	const topics = [];
	projects.map((project) =>
		project.topics.map((topic) =>
			!topics.includes(topic) && topic != "portfolio" ? topics.push(topic) : null
		)
	)
	return topics;
};
export default getTopics;
