function binarySearch(arr, t) {
  let leftIndex = 0;
  let rightIndex = arr.length;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (t === arr[middleIndex]) {
      return middleIndex;
    }
    if (t < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
const arr = [-2, 0, 2, 11, 23];
const t = 111;
const res = binarySearch(arr, t);
console.log(res);
