// 다른 풀이
function solution(array) {
  // 배열 길이 중 중앙값 (중간 index) 찾기
  const mid_num = Math.floor(array.length / 2);

  // 오름차순으로 정렬하기 - sort() 메서드 사용
  const asc_array = array.sort((a, b) => a - b);

  // 오름차순된 새로운 배열 중 중간 index 반환하기
  return asc_array[mid_num];
}


// 내 풀이
function solution(array) {
  let answer = array.sort((a,b) => a-b) // 오름차순
  let index= Math.floor(answer.length/2) // 중앙값의 색인
  return answer[index]
}

// 배운점
1. 배열 정렬을 위한 sort 메소드 
let arr = [1,2,15]
arr.sort 
alert(arr) //1,15,2 
// 파라미터로 비교함수 생략되면 배열 요소는 문자열로 취급되어 유니코드 값 순서대로 정렬됨.
// 따라서 2 > 15

2. 기본정렬 외에 새로운 정렬 기준을 만들려면 arr.sort 에 새로운 함수를 넘겨야 함
반환 값이 0보다 작을 경우, a를 b보다 낮은 색인에 배치합니다.
반환 값이 0일 경우, a와 b의 순서를 변경하지 않습니다.
반환 값이 0보다 클 경우, a를 b보다 높은 색인에 배치합니다.

// 화살표 함수
arr.sort(function(a,b) {
  return a-b
})

arr.sort(function(a,b) {
  return b-a
})

오름차순의 경우:
a - b를 해보겠습니다.

a가 b보다 작을 경우, 결과는 음수입니다. 그래서 a가 b보다 앞에 위치하게 됩니다.
a와 b가 같을 경우, 결과는 0입니다. 그래서 순서가 그대로 유지됩니다.
a가 b보다 클 경우, 결과는 양수입니다. 그래서 a가 b보다 뒤에 위치하게 됩니다.

내림차순의 경우:
b - a를 사용하면 위의 로직과 반대로 작동하게 됩니다.

a가 b보다 작을 경우, b - a는 양수이므로, a가 b보다 뒤에 위치하게 됩니다.
a와 b가 같을 경우, 결과는 여전히 0입니다.
a가 b보다 클 경우, b - a는 음수이므로, a가 b보다 앞에 위치하게 됩니다.
결과적으로 b - a는 내림차순 정렬을 위해 사용됩니다!

// 내림차순은 잘 이해가 안되지만... 일단 넘어가자.