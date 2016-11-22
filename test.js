import test from 'ava';
import m from './';

test(async t => {
	const input = [
		async () => 1 + 1,
		() => 2 + 2,
		async () => 3 + 3
	];

	t.deepEqual(await m(input), [2, 4, 6]);

	const fixtureErr = new Error('fixture');
	await t.throws(m([async () => Promise.reject(fixtureErr)]), fixtureErr.message);
});
