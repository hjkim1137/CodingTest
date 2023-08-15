// 시도 과정

// 피자 한판은 7조각
// n은 7이상이어야지 한 조각 이상 나눠 먹을 수 있다.
// 총 조각의 수 = 7*pizza, 7*pizza / n >=1
function solution(n) {
  var pizza = 1;
  if ((7 * pizza) / n >= 1) return 1;
  else if ((7 * pizza) / n < 1) return (pizza += 1);
  return pizza;
}

// 잘못된 이유
1. 7*pizza / n >= 1 이 조건은 항상 참입니다. 왜냐하면 pizza는 1로 시작하고, 7을 곱했기 때문에 n이 1 이상일 경우 무조건 7 이상의 값이 되기 때문입니다.
2. else if (7*pizza /n < 1) 이 조건도 항상 참입니다. 이전 조건에서 걸러지지 않은 모든 경우가 여기에 해당하기 때문입니다.
3. 피자의 수를 증가시키는 로직이 없습니다. 현재 코드에서는 pizza 값이 1 혹은 2로만 리턴됩니다.


// 쉬운 풀이
function solution(n) {
  // 한 피자에 7조각이므로, n명이 피자를 먹기 위해서는 총 n조각이 필요합니다.
  // 따라서 피자 판 수는 n을 7로 나눈 올림 값입니다.
  return Math.ceil(n / 7);
}
