function solution(emergency) {
  let sorted = [...emergency].sort((a, b) => b - a); // 내림차순 정렬
  return emergency.map((e) => sorted.indexOf(e) + 1); //원래 배열에서 원소가 있으면 인덱스를 반환(1부터 시작하므로 1 더해줌)
}

[배열 복사는 스프레드 연산자]
오답: emergency.sort((a,b) => b-a)
정답: [...emergency].sort((a,b) => b-a)

[indexOf 메소드]
arr.indexOf(searchElement[, fromIndex])
- searchElement: 배열에서 찾을 요소입니다.
- fromIndex (옵션): 검색을 시작할 인덱스입니다. 이 값을 생략하면 배열의 처음부터 검색을 시작합니다.

[예시]
const animals = ["cat", "dog", "elephant", "bee", "ant"];

console.log(animals.indexOf("cat"));     // 0
console.log(animals.indexOf("elephant"));// 2
console.log(animals.indexOf("tiger"));   // -1 (배열에 "tiger"는 없음)
console.log(animals.indexOf("dog", 2));  // -1 (인덱스 2 이후에서는 "dog"를 찾을 수 없음)

그러나 위의 solution 함수에서 indexOf를 사용하는 방식은 배열에 중복된 원소가 없을 때만 적절하게 동작합니다. 
만약 중복된 원소가 있다면, 항상 중복된 원소의 첫 번째 위치를 반환하게 됩니다.