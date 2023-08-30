function solution(rsp) {
  let arr = Array.from(rsp);

  let win = (el) => {
    if (el == '2') return '0';
    else if (el == '0') return '5';
    else if (el == '5') return '2';
  };
  let newArr = arr.map((el) => win(el)); // ["0","5","2"]
  return newArr.join('');
}
