function prime(n) {
  if (n < 2) {
    return false;
  }
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
const res = prime(6);
console.log(res);
