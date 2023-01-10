/**

@example 
log(1,2,3) // 1 2 3
log('hello') // hello
log(...'hello') // h e l l o
log('메세지',1) === 1 // true
log(log('메세지',1)) === 1 // true

// map , reduce 중간에 로그를 찍어도 결과값에 영향을 주지 않는다.
let result = [1,2,3].map(d=>log('map:',d**d)).reduce((acc,a)=>log('reduce:',acc+a)) // log...
log('result::',result) // 32

@param args arguments 를 받는다
@returns arguments 의 마지막 값을 리턴한다, 
즉, log 함수의 마지막 값을 data 로 넣으면, log 를 찍더라도 값은 보존된다.

*/

export const log = (...args: any): any => {
  console.log.apply(null, args.concat());
  return args.at(-1);
};
