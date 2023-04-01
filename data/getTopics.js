export function getTopics(data) {
	const topics = [];
	for (let i = 0; i < data.length; i++)
	{
		for (let j = 0; j < data[i].topics.length; j++)
		{
			if (!topics.includes(data[i].topics[j]))
			{
				if (data[i].topics[j] != "portfolio")
					topics.push(data[i].topics[j]);
			}
		}
	}
	return topics;
};
export default getTopics;
