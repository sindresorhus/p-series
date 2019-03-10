import {expectType} from 'tsd-check';
import pSeries from '.';

expectType<Promise<(number | boolean)[]>>(
	pSeries<number | boolean>([() => Promise.resolve(1), () => true])
);
expectType<Promise<(number | boolean)[]>>(
	pSeries<number | boolean>(new Set([() => Promise.resolve(1), () => true]))
);
