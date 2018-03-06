import test from 'ava';
import m from '.';

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

test('throw if input is not a function', async t => {
	const input = [Promise.resolve(1 + 1)];
	const type = /^v4\./.test(process.version) ? 'Object' : 'Promise';
	await t.throws(m(input), `Expected task to be a \`Function\`, received \`${type}\``);
});
