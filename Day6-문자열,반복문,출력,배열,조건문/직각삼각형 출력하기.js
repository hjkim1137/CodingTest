const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = []; // input은 빈 배열

rl.on('line', function (line) {
  // line은 문자 -> "3"
  input = line.split(' '); // 단어별로 잘라서 배열에 담기 -> [3]
}).on('close', function () {
  let number = Number(input[0]); // "3" -> 3
  for (let i = 1; i <= number; i++) {
    console.log('*'.repeat(i));
    // *
    // **
    // ***
  }
});

// 오답노트
// 1. readline 모듈 사용법
// readline 모듈을 사용할 때 close 이벤트가 발생하기 전까지는 입력값이 완전히 읽히지 않는다.
// 따라서 rl.on('close', function() {...}) 이벤트 안에서만 입력값을 처리할 수 있다.

// 2. split()함수
// 문자열을 배열로 저장하는 함수로 자주 사용되는데, 자주 까먹는다..

// [사용법]
// string.split(separator, limit)
// - 문자열을 separtaor로 잘라서 limit 크기 이하의 배열에 잘라진 문자열을 저장하여 리턴
// - separator 필수아님(값 입력되지 않으면 문자열 전체를 length 1인 배열에 담아 리턴)
// - limit 필수아님

// 3. Number() 함수
// - split 만큼 자주 사용되는 메소드. 문자열을 숫자로 변환하는 함수이다.
// - 오로지 숫자 타입의 문자열만 Number 타입으로 변환한다.

// 4. repeat 메소드
// 이것도 까먹지 말자!!
// (문자열).repeat(횟수) // 문자열만 받는다.
// 예) "hi".repeat(5) // "hihihihihi"

// 5. console.log 자동 줄바꿈
// console.log('*'.repeat(i))
//     // *
//     // **
//     // ***
// 위와 같이 출력값이 자동 줄바꿈이 되는 이유는 기본적으로 console.log() 함수 때문
