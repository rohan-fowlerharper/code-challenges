/**
 * @param {number[]} nums
 * @return {number[]}
 */
// naive solution
let sortedSquaresNaive = (nums) => {
  return nums.map((num) => num * num).sort((a, b) => a - b)
}

let sortedSquares = (nums) => {
  let left = 0,
    right = nums.length - 1,
    i = right,
    leftSquare,
    rightSquare
  ;(result = []).length = right
  while (left <= right) {
    leftSquare = nums[left] * nums[left]
    rightSquare = nums[right] * nums[right]
    if (leftSquare > rightSquare) {
      result[i--] = leftSquare
      left++
    } else {
      result[i--] = rightSquare
      right--
    }
  }
  return result
}

console.log(sortedSquares([-4, -1, 0, 3, 10])) // [0, 1, 9, 16, 100]
