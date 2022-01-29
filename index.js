function hasTargetSum(array, target) {
  // Write your algorithm here
  let newArray = []
  for(let i = 0; i < array.length; i++) {
    for(let j = i +1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        newArray.push(i, j)
      }
    }
  }  
  if(newArray.length > 1) {
    return true
  } else {return false}
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  i(i + rest of array)
  
*/

/*
  Add written explanation of your solution here
  start at first number, iterate thru array and add the element, and itrerate thru all numbers in the array
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
