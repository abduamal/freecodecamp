// Boiler:
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// Challenge:
  // Modify function multiplyAll so that it returns the product of all the
  // numbers in the sub-arrays of arr.
// Solution:
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j]
    }
  }
