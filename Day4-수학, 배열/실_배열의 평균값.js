function solution(numbers) {
  var sum = 0;
  var avrg = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    var avrg = sum / numbers.length;
  }
  return avrg;
}

// 오답노트
// 1. var sum += numbers[i] 이렇게 선언을 한 번 더 해줬다.
// sum += numbers[i] 이렇게 수정해야 한다.

// 2. legth 글자 오타
// legth 라고 썼다.. legth로 바꾸자
// 이러한 오류가 발생했다. (TypeError: Cannot read properties of null (reading 'should'))

// 변수에 오타가 있을 경우, 해당 변수는 선언되지 않았기 때문에 undefined로 간주될 수 있습니다.
// 그래서 이 변수의 속성에 접근하려고 시도하면, 비슷한 종류의 오류가 발생할 수 있습니다.
// 하지만 오류 메시지가 정확히 (TypeError: Cannot read properties of null (reading '...'))로 나타날지,
// (TypeError: Cannot read properties of undefined (reading '...'))로 나타날지는 상황에 따라 다를 수 있습니다.

// #case1
// let someObject = null;
// console.log(someObject.someProperty);
// TypeError: Cannot read properties of null (reading 'someProperty')

// 선언에 사용된 메소드에 오타가 나서 결과적으로 null 값임
// 따라서 문제의 예제에서는 var avrg = sum/numbers."legth"로 오타를 냈기 때문에
// 선언만하고 사용된 메소드에 오타가 나서 오류가 발생하는 것이다.

// #case2
// let typoVariable;
// console.log(typoVariable.someProperty);
// TypeError: Cannot read properties of undefined (reading 'someProperty')
// 선언만 하고 값을 넣지 않았음
