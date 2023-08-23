// 오답
function solution(n) {
  var answer = n;
  let arr = [];

  while (n = 1) {
    answer = answer - 1;
    arr.push(answer);
    console.log('arr', arr);
    break;
  }
  return arr;
}

//오답노트
1. while(n=1)에서 =는 할당 연산자 이다.
2. 원하는 결과를 얻으려면 while 반복문에서 answer 값이 0이 될 때까지 answer를 1씩 감소시켜야 합니다. 현재 코드에서는 break로 인해 한 번만 반복됩니다.

// 1단계
function solution(n) {
  let arr = [];

  while (n > 0) {
      arr.push(n);
      n--;
  }
  return arr;
}

console.log(solution(5)); // [1, 2, 3, 4, 5]

// 2단계(정답)
function solution(n) {
  let arr = [n];
  let answer = 0
  while(n > 1) { // 2-1 ==1이 될때 까지이므로
    n--
    arr.push(n)
  }
  
  for(let i= 0; i<arr.length; i++) {
       if(arr[i]%2 ==0) answer+= arr[i] 
}
    return answer
}