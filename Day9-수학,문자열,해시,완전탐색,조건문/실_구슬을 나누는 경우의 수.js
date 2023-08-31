function solution(balls, share) {
  // 5,3 일 때
  let i = balls; // 5
  let n = 1;

  //n! 구하기
  while (i > 0) {
    n = n * i; // (1*5)->(5*4)->(20*3)->(60*2)->(120*1)=120
    i--; // 4,3,2,1
  }

  // (n-m)! 구하기
  let j = balls - share; // (5-3=2)
  let nm = 1;
  while (j > 0) {
    nm = nm * j; // (1*2)->(2*1) = 2
    j--;
  }

  // m! 구하기
  let k = share; //3
  let m = 1;
  while (k > 0) {
    m = m * k; //(1*3)->(3*2)->(6*1) =6
    k--;
  }
  return n / (nm * m);
}

// 정확성 77.1 /100

// 오답노트
