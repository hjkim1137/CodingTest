// 이번에야 말로 map메소드, Map 객체 사용법을 끝장내보자.

// 1. map()
// 값을 여러개 가지고 있는 배열에서 값을 꺼내는 방법
// 모든 값에 대해 function을 실행하고 나온 값을 저장해 새로운 배열 만듦

// const arr = [10, 20, 30, 40, 50];

// arr.map(function (item, index) {
//   console.log(index + '번 값', item);
// });

// 화살표 함수 형태
const arr = [10, 20, 30, 40, 50];
arr.map((item, index) => {
  console.log(index + '번 값', item);
});

// 이모티콘 추가하기 예제
const days = ['Mon', 'Tue', 'Wed', 'Thus', 'Fri'];
const smilmingDays = days.map((day) => `😃 ${day}`);

console.log(smilmingDays);

// 객체 값 추출하기 예제
var testJson = [
  { name: '이건', salary: 50000000 },
  { name: '홍길동', salary: 1000000 },
  { name: '임신구', salary: 3000000 },
  { name: '이승룡', salary: 2000000 },
];

var newJson = testJson.map(function (element, index) {
  var returnObj = {};
  returnObj[element.name] = element.salary;
  return returnObj;
});
console.log('newObj', newJson);

// 2. Map 객체
let max = new Map();
​
// set으로 맵 객체에 삽입
max.set('id', 0);
max.set('이름', '마이클');
max.set('전공', '영문학');
max.set('나이', 25);
​
// 이차원 배열로 넘겨주는 것도 가능합니다
let michael = new Map([
  ['id', 0],
  ['이름', '마이클'],
  ['전공', '영문학'],
  ['나이', 29],
]);
​
// get으로 맵 객체 조회
max.get('이름'); // "마이클"
​
// delete로 삭제
max.delete('나이'); // 삭제가 성공하면 true를 반환
​
// clear로 맵 안의 프로퍼티 전부삭제
max.clear();


// gpt 풀이
function solution(arr) {
  let freqMap = {}; // 빈 객체로 초기화 하여 배열 내 숫자 빈도수 저장
  let maxCount = 0; // 초기화, 배열 내 가장 높은 빈도수를 저장

  // 배열의 각 원소별로 빈도수를 계산합니다.
  for (let num of arr) { // num는 각 배열의 요소
      freqMap[num] = (freqMap[num] || 0) + 1; // 각 숫자의 빈도수 확인: 첫 번째 피연산자가(freqMap[num]) falsy 값일 때 두 번째 피연산자(0)를 반환합니다. 이 문장에서는 freqMap[num]의 값이 존재하지 않을 때 0을 반환
      maxCount = Math.max(maxCount, freqMap[num]); // 해당 숫자의 빈도수가 maxCount와 동일한 지 확인: 전달된 모든 인자 중 가장 큰 숫자 반환. 예) Math.max(1,5,3) 은 5를 반환
      // 인자로 두 값을 전달하고 있음. 따라서 이 두 값 중에서 더 큰 값을 반환함, 즉 가장 빈번하게 등장하는 숫자의 빈도수를 저장함
  }

  // 최빈값을 찾습니다.
  let mode = [];
  for (let num in freqMap) {
      if (freqMap[num] === maxCount) {
          mode.push(Number(num));
      }
  }

  // 최빈값이 1개면 해당 값을 반환하고, 2개 이상이면 -1을 반환합니다.
  return mode.length === 1 ? mode[0] : -1;
}

// 배운점
1. 논리 연산자
JavaScript에서 ||는 "또는(OR)" 논리 연산자입니다. 그런데 JavaScript에서는 이 연산자를 다른 방식으로도 종종 사용합니다.
예를 들어, 
let fruit = undefined;
let result = fruit || "apple";
console.log(result); // "apple"

위의 코드에서 fruit는 undefined입니다. JavaScript에서 undefined는 "falsy" 값입니다. 
"falsy"란, 논리 연산에서 false로 간주되는 값들을 말합니다. (undefined, null, 0, "", NaN 등이 이에 포함됩니다.)

따라서, 위의 코드에서 fruit || "apple"을 평가하면 fruit가 falsy(undefined) 값이므로 apple을 반환하게 됩니다.

이제, freqMap[num] = (freqMap[num] || 0) + 1; 이 부분을 본다면:

freqMap[num]의 값이 없거나 0이면, (freqMap[num] || 0) 부분은 0을 반환합니다.
그렇지 않다면, freqMap[num]의 값을 반환합니다.
결과적으로, freqMap[num] = (0) + 1 즉, 1을 할당하고, 이미 값이 있다면 freqMap[num] = freqMap[num] + 1와 같이 그 값을 1 증가시킵니다.

첫 번째로 숫자 3을 만났을 때: freqMap[3]은 없습니다. 따라서 (freqMap[3] || 0)은 0을 반환하고, 그 결과 freqMap[3]에는 0 + 1 = 1이 저장됩니다.
두 번째로 다시 숫자 3을 만났을 때: freqMap[3]은 1입니다. 따라서 (freqMap[3] || 0)은 1을 반환하고, 그 결과 freqMap[3]에는 1 + 1 = 2가 저장됩니다.


2. freqMap[num]와 같은 [] 사용에 대한 설명
JavaScript에서는 객체의 속성에 접근할 때 . 연산자를 사용할 수도 있고 []를 사용할 수도 있습니다. 
. 연산자는 리터럴 속성 이름을 사용할 때 사용합니다. 반면, []는 동적인 속성 이름이나 변수를 통한 속성 이름을 사용할 때 활용됩니다.

예를 들어, 객체가 let obj = { name: "Alice" };와 같이 있다면:
obj.name 혹은 obj["name"]은 모두 "Alice"를 반환합니다.
하지만 만약 속성 이름을 동적으로 결정하거나 변수를 통해 얻는다면, []를 사용합니다.

예: let propName = "name";
console.log(obj[propName]);  // "Alice"
freqMap[num]에서 num은 변수이며, 이 변수의 값에 따라 다양한 속성에 접근합니다. 따라서 이 경우에는 []를 사용하여 속성에 접근합니다.


1. 대괄호 표기법: 
const arr = ['a', 'b', 'a', 'b', 'c'];

const result = {};
arr.forEach((x) => { 
  result[x] = (result[x] || 0)+1; 
});

document.write(JSON.stringify(result));

// result[x] = (result[x] || 0)+1; 해석: 
if(result[x])	{
	result[x] = result[x] + 1;
}else {
    result[x] = 0 + 1;
}

// 2. for..of 구문과 활용
let blueprint = new Map([
  ['naver', 'green'],
  ['kakao', 'yellow'],
  ['woowahan', 'sky'],
]);

for (let [k, v] of blueprint) {
  return [k, v]; // ['naver', "green"], ['kakao', "yellow"], ['woowahan', "sky"]
}

function solution(array) {
  let map = new Map();


  for(let i = 0; i <= Math.max(...array); i++){
      map.set(i, 0);    
  }
  

  for(let i = 0; i < array.length; i++){
      map.set(array[i], map.get(array[i]) + 1);
  }

  let arr = Array.from(map.values());
  

  let max = Math.max(...arr);
  

  if(arr.indexOf(max) !== arr.lastIndexOf(max)){
      return -1;
  } else {
      return arr.indexOf(max);
  }
}