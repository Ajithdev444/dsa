function recursivefactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursivefactorial(n - 1);
}
const res = recursivefactorial(4);
console.log(res);
