/**
 
@description
N차 curried 함수를 만들기위한 함수.
일반적으로 함수의 차원(arguments 갯수)는 f.length 로 계산되지만,
전개연산자를 통해 arguments 를 받는 특수한 경우, f.length 값이 0이된다.
이럴때 맞춤형으로 커링 적용을 위해 n값 을 받아서 n차 curried 함수를 만든다.

@example 
const log = (...args:any ): any => {
    console.log.apply(null,args.concat());
    return args.at(-1);
}

export const log2 = curryN( log, 2 )
export const log3 = curryN( log, 3 )

log(1,2,3) // 1 2 3
log2(1,2)(3) // 1 2 3
log2(1)(2)(3) // error
log3(1)(2)(3) // 1 2 3
log3(1,2)(3) // return function
log3(1)(2)(3)(4) // error


@reference 
{@link https://javascript.info/currying-partials | Currying docs}

@param args arguments 를 받는다
@returns 함수를 인자값으로 받아서 crurried 함수를 반환한다.

*/

export const curryN = (f: any, n = 0) =>
  function curried<T>(...args: any[T]) {
    return args.length >= n ?? f.length
      ? f(...args)
      : <T>(...args2: any[T]) => curried(...args, ...args2);
  };
