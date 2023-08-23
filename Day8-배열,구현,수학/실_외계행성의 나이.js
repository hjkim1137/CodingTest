//시도과정
function solution(age) {
  // 초기값: 문자열
  let answer = '';

  //age는 number이므로 문자로 바꾸기
  let str = String(age); // 23 --> "23"

  //문자를 각 배열로 만들어 주기
  let arr = Array.from(str); // "23" --> ["2", "3"]

  let match = {
    "0":"a", 
    "1":"b",
    "2":"c",
    "3":"d",
    "4":"e",
    "5":"f",
    "6":"g",
    "7":"h",
    "8":"i",
    "9":"j"
   }
  answer = arr.forEach((el) => match[el]); //["c", "d"]

  return answer;
}

// 오답노트
1. forEach는 배열의 각 요소에 대해 함수를 실행하기 위한 메서드이다. 그러나 그 자체로는 값을 반환하지 않는다. 즉, forEach의 반환 값은 undefined이다.
작업의 결과로 어떤 값을 직접 반환하려는 경우에는(이 예제에서도 반드시 return값이 있어야 하므로) 이럴 때는 map, filter, reduce와 같은 다른 배열 메서드를 사용하는 것이 더 적합하다.

2. join 메소드의 역할과 예제
배열을 전체 하나의 문자열로 바꿀 때 사용한다.

let fruits = ['apple', 'banana', 'cherry'];

let result1 = fruits.join();      // "apple,banana,cherry"
let result2 = fruits.join(' - '); // "apple - banana - cherry"
let result3 = fruits.join('');    // "applebananacherry"

console.log(result1); // apple,banana,cherry
console.log(result2); // apple - banana - cherry
console.log(result3); // applebananacherry

// 정답
function solution(age) {
  // 초기값: 문자열
  let answer = '';

  //age는 number이므로 문자로 바꾸기
  let str = String(age); // 23 --> "23"

  //문자를 각 배열로 만들어 주기
  let arr = Array.from(str); // "23" --> ["2", "3"]

  let match = {
    "0":"a", 
    "1":"b",
    "2":"c",
    "3":"d",
    "4":"e",
    "5":"f",
    "6":"g",
    "7":"h",
    "8":"i",
    "9":"j"
   }
  // 여기서 join을 해주면,
  answer = arr.map((el) => match[el]).join(''); // ["c", "d"] --> cd"

  return answer;
}


// 정답2: 한 줄로 쓰기
function solution(age) {
  // 매핑 딕셔너리
  let match = {
   "0":"a", 
   "1":"b",
   "2":"c",
   "3":"d",
   "4":"e",
   "5":"f",
   "6":"g",
   "7":"h",
   "8":"i",
   "9":"j"
  }

  // 나이를 문자열로 변환한 다음 각 숫자를 해당 문자로 매핑
  let answer = Array.from(String(age)).map((el) => match[el]).join('');
  
  return answer;
}

// 테스트 케이스
console.log(solution(23)); // "cd"
console.log(solution(51)); // "fb"
console.log(solution(100)); // "baa"
