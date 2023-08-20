// 시도과정
function solution(num_list) {
  var answer = [];
  for (let i = 0; i < num_list.length; i++) {
    let even = [];
    let odd = [];
    if (num_list[i] % 2 == 0) {
      console.log('짝수들:', num_list[i]);
      even.push(num_list[i]);
      console.log('짝수테스트:', even);
    } else if (num_list[i] % 2 !== 0) {
      console.log('홀수들:', num_list[i]);
      odd.push(num_list[i]);
      console.log('홀수테스트:', odd);
    }
    answer.push(even.length);
    answer.push(odd.length);
  }
  return answer;
}

// 오답노트
1. even과 odd 배열을 for 루프 안에서 매번 초기화하고 있다. 
이렇게 되면 for 루프의 각 반복마다 이 배열들이 비워지므로, 짝수와 홀수의 총 개수를 세는 데 실패하게 된다.

2. answer 배열에 for 루프의 각 반복에서 짝수와 홀수의 개수를 넣고 있다.
이렇게 되면 num_list의 길이만큼 answer 배열에 데이터가 추가되므로, 결과가 올바르지 않게 된다.


// 다시고쳐보기1
function solution(num_list) {
  var answer = [];
    let even = [];
    let odd = [];
  for (let i = 0; i < num_list.length; i++) {
    if(num_list[i] % 2 == 0) {
      even.push(num_list[i])
    } else if(num_list[i] %2 !== 0) {
      odd.push(num_list[i])
    }
  }
  answer.push(even.length)
  answer.push(odd.length)
  return answer
}

// 다시고쳐보기2(삼항연산자)
function solution(num_list) {
  var answer = [];
    let even = [];
    let odd = [];
  for (let i = 0; i < num_list.length; i++) {
    num_list[i] % 2 == 0 ? even.push(num_list[i]): odd.push(num_list[i])
    }
  answer.push(even.length)
  answer.push(odd.length)
  return answer
}


// 다른 풀이
function solution(num_list) {
  var evenCount = 0; // 짝수 개수를 저장할 변수
  var oddCount = 0; // 홀수 개수를 저장할 변수

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 == 0) {
      evenCount++; // 짝수라면 evenCount를 1 증가시킵니다.
    } else {
      oddCount++; // 홀수라면 oddCount를 1 증가시킵니다.
    }
  }

  return [evenCount, oddCount]; // 짝수와 홀수의 개수를 반환합니다.
}
