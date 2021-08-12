import test from 'ava';
import pSeries from './index.js';

test('main', async t => {
	const input = [
		async () => 1 + 1,
		() => 2 + 2,
		async () => 3 + 3,
	];

	t.deepEqual(await pSeries(input), [2, 4, 6]);

	const fixtureError = new Error('fixture');
	await t.throwsAsync(pSeries([async () => Promise.reject(fixtureError)]), {
		message: fixtureError.message,
	});
});

test('throw if input is not a function', async t => {
	const input = [Promise.resolve(1 + 1)];
	await t.throwsAsync(pSeries(input), {
		message: 'Expected task to be a `Function`, received `object`',
	});
});
