/**
Run promise-returning & async functions in series.

@param tasks - Functions are expected to return a value. If a Promise is returned, it's awaited before continuing with the next task.
@returns A `Promise` that is fulfilled when all promises returned from calling the functions in `tasks` are fulfilled, or rejects if any of the promises reject. The fulfilled value is an `Array` of the fulfilled values.

@example
```
import pSeries from 'p-series';
import got from 'got';

const tasks = [
	() => got('https://sindresorhus.com'),
	() => checkSomething(),
	() => doSomethingElse()
];

console.log(await pSeries(tasks));
```
*/
export default function pSeries<ValueType>(tasks: Iterable<() => Promise<ValueType> | ValueType>): Promise<ValueType[]>;
