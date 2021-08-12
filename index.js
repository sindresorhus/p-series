export default async function pSeries(tasks) {
	for (const task of tasks) {
		if (typeof task !== 'function') {
			throw new TypeError(`Expected task to be a \`Function\`, received \`${typeof task}\``);
		}
	}

	const results = [];

	for (const task of tasks) {
		results.push(await task()); // eslint-disable-line no-await-in-loop
	}

	return results;
}
