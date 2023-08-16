function solution(money) {
  var answer = [];
  let number = Math.floor(money / 5500);
  let change = money - number * 5500;
  answer.push(number);
  answer.push(change);
  // 한 번에 쓸 수도 있음 answer.push(number, change)
  return answer;
}
