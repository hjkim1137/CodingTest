function solution(my_string, n) {
  let answer = '';
  for (let i = 0; i < my_string.length; i++) {
    let repeat = my_string[i].repeat(n);
    console.log('repeat:', repeat);
    answer += repeat;
  }
  return answer;
}
