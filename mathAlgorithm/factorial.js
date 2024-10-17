function factorial(n) {
  fact = 1;
  for (i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
const res = factorial(2);
console.log(res);
