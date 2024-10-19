function recursivefib(n) {
  if (n < 2) {
    return n;
  }
  return recursivefib(n - 2) + recursivefib(n - 1);
}
console.log(recursivefib(10));
