// 피자 한 판당 6조각
// 6*피자의 수가 n(사람 수)의 배수여야 한다.(=나누어 떨어져야 한다)

function solution(n) {
  let pizzas = 1; // 시작은 1판으로 설정
  while (true) {
    let totalSlices = 6 * pizzas; // 현재 주문한 피자의 총 조각 수
    if (totalSlices % n == 0) {
      // n명이 같은 수의 조각을 먹을 수 있는지 확인
      return pizzas; // 같은 수의 조각을 먹을 수 있다면 피자의 수를 반환
    }
    pizzas++; // 피자의 수를 1 증가
  }
}

// 다른 사람 풀이
const solution = (n) => {
  let piece = 6;

  while (true) {
    if (piece % n === 0) {
      break;
    }
    piece += 6;
  }

  return piece / 6;
};
