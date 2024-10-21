function linearSearch(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
}
const arr = [1, 2, 4, 9, 20];
const t = 91;
const res = linearSearch(arr, t);
console.log(res);
