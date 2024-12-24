function sortedSquaredArray(arr) {
  const n = arr.length;
  let left = 0,
    right = n - 1;
  const result = new Array(n).fill(0);
  let index = n - 1; // Start filling the result from the end

  while (left <= right) {
    if (Math.abs(arr[left]) > Math.abs(arr[right])) {
      result[index] = arr[left] ** 2;
      left++;
    } else {
      result[index] = arr[right] ** 2;
      right--;
    }
    index--;
  }

  return result;
}

// Example usage
const inputArray = [-12, -8, -7, -5, 2, 4, 5, 11, 15];
const output = sortedSquaredArray(inputArray);
console.log(output);
