export async function getProjects() {
	const res = await fetch(`https://api.github.com/users/kianristori/repos`, {
		headers: {
			Authorization: process.env.GITHUB_ACCESS_TOKEN,
		},
	});
	const data = await res.json();
	const projects = [];
	for (let i = 0; i < data.length; i++)
	{
		if(data[i].topics.includes("portfolio"))
			projects.push(data[i]);
	}
	return projects;
};

export default getProjects;
