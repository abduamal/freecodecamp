// Boiler:
function sum(arr, n) {
  // Only change code below this line

  // Only change code above this line
}

// Challenge:
  // Write a recursive function, sum(arr, n), that returns the
  // sum of the first n elements of an array arr.
// Solution:
if (n <= 0) {
  return 0;
} else {
  return sum(arr, n - 1) + arr[n - 1]
}
