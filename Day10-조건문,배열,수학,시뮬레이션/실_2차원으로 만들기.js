// 시도과정
function solution(num_list, n) {
  let arr = [];
  for (let i = 0; i < num_list.length; i++) {
    arr.push(num_list.slice(i, i + n));
    // arr [[1,2], [2,3], [3,4], [4,5], [5,6]...]
    // 원하는 답: [[1,2], [3,4], [5,6], [7,8]...]
    console.log('arr', arr);
  }
  let arr2 = [];
  for (let j = 0; j < arr.length; j++) {
    arr2.push(arr[j]);
    arr2.push(arr[j + n]);
    console.log('arr[j]', arr[j]);
    console.log('arr[j+n]', arr[j + n]);
  }
  return arr2;
}

// 오답노트
제시된 코드에서 문제가 발생하는 부분은 두 번째 반복문에서입니다. 
두 번째 반복문에서 arr2 배열에 원소를 추가할 때, 현재 원소와 그 다음 원소를 추가하려고 시도하고 있습니다. 
하지만 이렇게 하면 원하는 형태로 2차원 배열을 생성할 수 없습니다.
올바른 접근 방법은 첫 번째 반복문에서 이미 원하는 2차원 배열 형태로 arr 배열에 저장하는 것입니다. 
따라서 두 번째 반복문을 삭제하고, 다음과 같이 코드를 수정해야 합니다.

// 정답
function solution(num_list, n) {
  let arr = [];
  for (let i = 0; i < num_list.length; i += n) {
    // [1,2,3,4,5,6,7,8]
    // i=0, i=2, i=4, i=6 요소만 추출함
    arr.push(num_list.slice(i, i + n));
    // i = 0일 때, num_list.slice(0, 0 + 2)는 [1, 2]를 반환하고, 이 배열을 arr에 추가합니다.
    // i = 2일 때, num_list.slice(2, 2 + 2)는 [3, 4]를 반환하고, 이 배열을 arr에 추가합니다.
    // i = 4일 때, num_list.slice(4, 4 + 2)는 [5, 6]을 반환하고, 이 배열을 arr에 추가합니다.
    // i = 6일 때, num_list.slice(6, 6 + 2)는 [7, 8]을 반환하고, 이 배열을 arr에 추가합니다.
  }
  return arr;
}
