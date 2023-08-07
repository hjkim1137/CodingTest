// 시도 과정
function solution(numer1, denom1, numer2, denom2) {
  if (denom1 % denom2) === 0 {
      var answer = [];
      var my_numer = numer1 + denom1*numer2
      answer.push(my_numer)
      answer.push(denom1)
      return answer
  } else if (denom2 % denom1) === 0 {
      var answer = [];
      var mymynumer = numer2+ numer1*denom2
      answer.push(mymynumer)
      answer.push(denom2)
      return answer
  }
  var mydenom = denom1*denom2
  var mynumer1 = numer1*denom2
  var mynumer2 = numer2*denom1
  answer.push(mynumer1+mynumer2)
  answer.push(mydenom)
  return answer;
}

// 다른 풀이
function solution(numer1, denom1, numer2, denom2) {
  let up = numer1 * denom2 + numer2 * denom1
  let down = denom1 * denom2
  let gcd = 1 // 모든 수는 1을 약수로 가지므로(gcd: greatest common divisor)
  
  for (let i = 1; i <= up; i++) { // 1부터 시작해서 최대공약수 찾기
      if(up % i === 0 && down % i === 0) { // 분자와 분모의 공약수(동시에 약분해서 떨어지게 하는 수)중 가장 큰 수(최대공약수)
          gcd = i // i를 찾은 최대공약수로 교체
      }
  }
  return [up / gcd, down / gcd] // 분자와 분모를 최대공약수로 각각 약분하여 출력
}

// 배운점
1. return 문을 [up/gcd, down/ gcd]와 같이 배열로 나타낼 수 있다. 초기에 let answer =[] 이렇게 안해도 되어 편리하다.
2. 모든 수는 1을 약수로 가진다. 따라서 1부터 하나씩 늘리면서 최대공약수를 찾을 수 있다. 만약에 공약수가 없으면 1이 최대공약수 이다.
3. &&는 두 조건을 동시에 만족시키는 AND 조건이다. 다시 한 번 상기해보자.
4. 계산한 최대공약수로 분자와 분모를 각각 약분한다.