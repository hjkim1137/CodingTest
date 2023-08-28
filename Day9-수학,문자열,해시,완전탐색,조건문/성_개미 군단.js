// 최소한의 병력을 구성하려면 공격력 큰 개미부터 할당
function solution(hp) {
  let ant1 = Math.floor(hp / 5); // 24/5 = 4 used(4 left)
  let ant2 = Math.floor((hp - ant1 * 5) / 3); // 4/3 = 1 used(1 left)
  let ant3 = hp - (ant1 * 5 + ant2 * 3); // left ant

  return ant1 + ant2 + ant3;
}
