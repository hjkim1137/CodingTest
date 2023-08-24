function solution(n) {
  let divisor = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) divisor.push(i);
  } // divisor: [1,2,4,5,10,20]

  let couple = [];
  for (let i = 0; i < divisor.length; i++) {
    for (let j = 0; j < divisor.length; j++) {
      if (divisor[i] * divisor[j] === n) {
        couple.push([divisor[i], divisor[j]]);
      }
    }
  }
  return couple.length;
}

[체크 포인트]
1. 약수(divisor) 구하는 법
2. 인덱스 값 잘보고 입력하기
오답: if (i * j === n) 
정답: if (divisor[i] * divisor[j] === n) 
3. 짝의 개수를 구해야 하므로 couple.push([divisor[i], divisor[j]]); []배열로 푸시하기