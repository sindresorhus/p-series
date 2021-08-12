import {expectType} from 'tsd';
import pSeries from './index.js';

expectType<Promise<Array<number | boolean>>>(
	pSeries<number | boolean>([async () => Promise.resolve(1), () => true]),
);
expectType<Promise<Array<number | boolean>>>(
	pSeries<number | boolean>(new Set([async () => Promise.resolve(1), () => true])),
);
