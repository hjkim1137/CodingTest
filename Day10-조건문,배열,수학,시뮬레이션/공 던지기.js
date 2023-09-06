function solution(numbers, k) {
  let answer = [];
  let result = 0;

  for (let i = 0; i < numbers.length; i += 2) {
    answer.push(numbers[i]); // [1,2,3,4,5,6] --> [1,3,5]
    if (answer.length < k) {
      let mylength = k - answer.length; // 5-3 =2
      result = answer[mylength]; // answer[1] =3
    } else result = answer[k - 1];
  }
  return result;
}
