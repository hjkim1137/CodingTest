// 오답
function solution(angle) {
  var answer = 0;

  if (angle === 180) {
    answer = 4;
  } else if (90 < angle < 180) {
    answer = 3;
  } else if (angle === 90) {
    answer = 2;
  } else if (0 < angle < 90) {
    answer = 1;
  }
  return answer;
}
// 오답노트
Python의 비교 연산자의 사용법을 JavaScript에서 그대로 사용하려 했습니다. 
예를 들어, 90 < angle < 180이라는 표현은 Python에서는 올바르지만 
JavaScript에서는 올바르지 않습니다. 

// 정답
function solution(angle) {
  var answer = 0;

  if (angle === 180) {
    answer = 4;
  } else if (90 < angle && angle < 180) {
    answer = 3;
  } else if (angle === 90) {
    answer = 2;
  } else if (0 < angle && angle < 90) {
    answer = 1;
  }

  return answer;
}

