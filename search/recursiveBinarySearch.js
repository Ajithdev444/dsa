function recursiveBinarySearch(arr, t) {
  return search(arr, t, 0, arr.length - 1);
}
function search(arr, t, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (t === arr[middleIndex]) {
    return middleIndex;
  }
  if (t < arr[middleIndex]) {
    return search(arr, t, leftIndex, middleIndex - 1);
  } else {
    return search(arr, t, middleIndex + 1, rightIndex);
  }
}
const arr = [-2, 0, 4, 9, 22];
const t = 9;
const res = recursiveBinarySearch(arr, t);
console.log(res);
