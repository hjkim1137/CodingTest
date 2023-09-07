function solution(numbers, k) {
  let answer = [];
  let result = 0;

  for (let i = 0; i < numbers.length; i += 2) {
    answer.push(numbers[i]); // [1,2,3,4,5,6] --> [1,3,5]
    // answer의 길이가 짝수 일때(배열 내 쓰는 수만 쓴다)
    // k의 길이가 answer 보다 짧거나 같은 경우
    if (k <= answer.length) {
      result = answer[k - 1];
    }
    // k의 길이가 answer 보다 긴 경우
    else if (k > answer.length) {
      result = answer[k - answer.length - 1];
    }
    // answer의 길이가 홀수 일때(배열 내 모든 수를 쓴다)
  }
  return result;
}
