// 오답: 실행시간 10초 이상 소요
function solution(my_string, letter) {
  var answer = '';
  for (let i = 0; i < my_string.length; i++) {
    while (my_string[i] === letter) {
      answer = my_string.replace(letter, '');
    }
  }
  return answer;
}
// 오답노트
replace 메소드와 정규 표현식을 사용할 경우 for 루프는 필요하지 않다. 


// 오답: 테스트 케이스 1개만 통과
function solution(my_string, letter) {
  let answer = '';
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === letter) answer = my_string.replace(/letter/g, '');
  }
  return answer;
}

// 오답노트
전역에서 문자 찾는 로직이 필요하다. 
my_string.replace(/letter/g, "");
하지만 위와 같이는 사용할 수 없다. letter가 변수로 인식되지 않고 하나의 문자열 값으로 인식되어 정상 동작하지 않기 때문.


// 해결방법(정답)
function solution(my_string, letter) {
  return my_string.replace(new RegExp(letter, 'g'), "");
}
// 따라서, 동적으로 변하는 문자열을 찾을 때는 정규 표현식 객체 생성자를 이용한다.
// replace 안에 변수를 넣을 수 있다. 또는 아래와 같이 풀어쓸 수도 있다.

function solution(my_string, letter) {
  let regexAll = new RegExp(letter, 'g')
  return my_string.replace(regexAll, "")
}

[참고]
let regexOne = new RegExp(pattern); // 일치하는 패턴 중 최초 등장하는 패턴 한 번만 찾음
let regexAll = new RegExp(pattern, "g"); // 모든 패턴을 찾음
let regexAllCase = new RegExp(pattern, "gi"); // 대소문자 구분 없이 모든 패턴을 찾음


[참고자료]
https://jess2.xyz/JavaScript/variable-regex/