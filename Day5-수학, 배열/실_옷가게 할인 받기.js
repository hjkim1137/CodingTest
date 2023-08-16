// 나의 코드
function solution(price) {
  let answer= 0;
  if (price >= 100000) {
      answer = Math.floor(price * 0.95);
  } else if (price >= 300000) {
      answer = Math.floor(price* 0.9);
  } else (price >= 500000) {
     answer = Math.floor(price * 0.8);
  }
  return answer;
}

// 오답노트
1. 조건의 순서(가격 큰 순서대로)
현재 조건의 순서로 인해 300,000 이상 또는 500,000 이상의 경우에 
첫 번째 조건인 price >= 100000이 참이 되므로 뒷 부분의 조건은 확인되지 않는다. 
따라서 가격이 큰 순서부터 조건의 순서를 세워야 한다.

2. else 문은 어떤 조건도 충족 하지 않을 때 사용
else문은 어떤 조건도 만족하지 않을 때이므로. else if를 사용해야 한다.

3. answer= price 와 같이 기본값 설정
만약 price가 100,000 미만이면, 위의 코드에 따르면 answer의 값은 0이 반환된다.
조건 충족하지 않으면 할인 없이 원래의 가격을 반환하는 것이 적절하기 때문에 
기본값을 원래 가격으로 설정해야 한다.

// 정답
function solution(price) {
  let answer = price;
  if (price >= 500000) {
    answer = Math.floor(price * 0.8);
  } else if (price >= 300000) {
    answer = Math.floor(price * 0.9);
  } else if (price >= 100000) {
    answer = Math.floor(price * 0.95);
  }
  return answer;
}
