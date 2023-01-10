/** 
@description

target 객체를 업데이트 하는 함수

조건1) source 객체 와 target 객체 동시에 존재하는 프로퍼티만 업데이트한다.

@example 
const target = { name: "홍길동", age: "30" ,  gender: 'male', }
const source = { name: "bob", age: "22" , nationality: 'USA' }

updateObject(target,source) // { name: "bob", age: "22", gender: 'male', }


@param target 업데이트될 객체
@param source 업데이트될 객체의 상대 객체

@returns 업데이트 된 객체

*/

type anyObject = { [key: string]: any };

export const updateObject = (target: anyObject, source: anyObject) => {
  for (const key in target) {
    if (key in source) {
      target[key] = source[key];
    }
  }
  return target;
};
