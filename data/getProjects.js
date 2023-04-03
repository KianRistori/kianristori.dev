export async function getProjects() {
	const res = await fetch(`https://api.github.com/users/kianristori/repos`, {
		headers: {
			Authorization: process.env.GITHUB_ACCESS_TOKEN,
		},
	});
	const projects = await res.json();
	projects.map((project, i) => project.topics.includes("portfolio") || project.topics.includes("42firenze") === true ? null : projects.splice(i, 1))
	return projects;
};
export default getProjects;
