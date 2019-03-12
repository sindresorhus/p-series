'use strict';
const pReduce = require('p-reduce');
const is = require('@sindresorhus/is');

const pSeries = async tasks => {
	const results = [];

	for (const task of tasks) {
		const type = is(task);

		if (type !== 'Function') {
			throw new TypeError(`Expected task to be a \`Function\`, received \`${type}\``);
		}
	}

	await pReduce(tasks, async (_, task) => {
		const value = await task();
		results.push(value);
	});

	return results;
};

module.exports = pSeries;
module.exports.default = pSeries;
