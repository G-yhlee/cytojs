import { curryN } from '../curry/index.js';
import { log } from './log.js';

/**
@example
```ts
// 기존 log 함수와 동일하게 동작하지만, 커링을 지원한다. 커링 가능한 갯수만큼 2를 붙여주었다.
log2('some message:',...'hello') // some message: h e l l o
log2('some message:')('hello') // some message: hello

// log2 는 커링을 지원하지만, 2개의 인자값을 받도록 설계되어있기때문에, 인자값이 하나만 들어오면, 함수가 리턴된다.
log2(1) // (...args2) => curried(...args, ...args2)
```

@reference 
* {@link https://blog.carbonfive.com/easy-pipeline-debugging-with-curried-console-log/ | Easy pipeline debugging with curried console.log}


@param args arguments 를 받는다
@returns arguments 의 마지막 값을 리턴한다, 
즉, log 함수의 마지막 값을 data 로 넣으면, log 를 찍더라도 값은 보존된다.

*/

export const log2 = curryN(log, 2);
