function summation(n) {
  sum = 0;
  for (i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
let res = summation(4);
console.log(res);
