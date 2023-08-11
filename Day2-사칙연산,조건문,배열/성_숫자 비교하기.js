function solution(num1, num2) {
  if (num1 == num2) return 1;
  else return -1;
}

// num1 == num2 를 괄호안에 넣어줘야 한다.

// 다른 풀이
function solution(num1, num2) {
  var answer = num1 === num2 ? 1 : -1;
  return answer;
}
