/**

@example 
```ts
async function test() {
  console.log("before");
  await sleep(3000);
  console.log("after");
  console.log("done!");
}
```


@reference 
{@link https://www.daleseo.com/js-sleep/ | 비동기 지연}

*/

function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default sleep;
