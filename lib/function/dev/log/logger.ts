/**
 
@beta
- 베타 버젼, 향후 변경될 가능성이 있는 함수.

@example
```ts
// feature1 : 로그 데이터를 펼쳐서 보고싶을때 사용한다. log 키워드가 붙으면, 로그함수로 찍어서 보여준다.
// feature2 : logger 객체의 결과값은 입력값 그대로 리턴한다
// feature3 : 로그 찍힌 시간을 기록한다

logger({
    '펼쳐보고싶은데이터_1': 'some data...', 
    '펼쳐보고싶은데이터_2': 'some data...', 
    log: {
        req: {a:1,b:2,c:4}, 
        res: {a:1,b:2,c:3}, 
        '펼쳐보고싶지않은데이터': 'Big results....' 
    }
})
```
@param logObject 오브젝트를 인자값으로 받는다
@returns 
- 로그 실행후, 입력값을 보존하여 리턴한다.

*/

function logger(logObject: { [key: string]: any }) {
  let { log } = logObject;
  delete logObject.log;

  console.log(`
LOG TIME : ${new Date()}
${JSON.stringify(logObject, null, 2)}
    
    `);

  log && console.log(`response =>`, log);

  return { ...logObject, log };
}

export default logger;
