// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

function findEvenIndex(arr) {
let equalIndex = -1
arr.forEach((item,index) => {
    let leftSide = arr.slice(0,index).reduce((sum,item) => sum + item,0)
    let rightSide = arr.slice(index + 1).reduce((sum, item) => sum + item, 0)
    if (leftSide == rightSide) {equalIndex = index}
    console.log(index)
})
    return equalIndex
}