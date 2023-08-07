//나의 풀이
function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    let double = numbers[i] * 2;
    answer.push(double);
  }
  return answer;
}

// map을 사용하여 푸는 방법1
const solution = (numbers) => numbers.map((number) => number * 2);

// map을 사용하여 푸는 방법2
function solution(numbers) {
  const results = [];

  numbers.map((item) => {
    results.push(item * 2);
  });

  return results;
}
