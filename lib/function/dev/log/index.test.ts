import { log } from './log.js';
import { log2 } from './log2.js';
import logger from './logger.js';

let list_processed = [1, 2, 3]
  .map((d) => log2('제곱하기', d ** 2))
  .reduce((acc, a, i) => log(acc + a));

let logged = logger({
  log: list_processed,
  some_data: { some_msg: 'hello' },
});

console.log(list_processed); // = 14
console.log(logged);

// log,log2,logger 함수는 결과값에 영향을 주지않는다.
