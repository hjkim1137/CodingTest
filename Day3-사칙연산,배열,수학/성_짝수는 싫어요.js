function solution(n) {
  var arr = [];
  for (let i = 1; i < n + 1; i++) {
    arr.push(i);
    var oddNum = arr.filter((num) => num % 2 !== 0);
  }
  return oddNum;
}

// 사고흐름
// 정수로 input을 받으면 배열로 어떻게 늘어트릴까?
//  1) 일단 1씩 다 분해한다. -> for 문으로 1씩 증가하면서 i를 넣는다.
//  2) 거기서 홀수만 발라낸다. --> filter를 사용해서 0으로 떨어지지 않는 수만 발라냈다.
