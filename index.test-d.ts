import {expectType} from 'tsd';
import pSeries = require('.');

expectType<Promise<(number | boolean)[]>>(
	pSeries<number | boolean>([() => Promise.resolve(1), () => true])
);
expectType<Promise<(number | boolean)[]>>(
	pSeries<number | boolean>(new Set([() => Promise.resolve(1), () => true]))
);
