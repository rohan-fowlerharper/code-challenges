/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = (nums, target) => {
  let left = 0
  let right = nums.length - 1
  let mid

  while (left <= right) {
    mid = Math.floor((right + left) / 2)
    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] < target) {
      left = mid + 1
    }
    if (nums[mid] > target) {
      right = mid - 1
    }
  }
  return left
}

// console.log(searchInsert([1, 3, 5, 6], 5) === 2)
// console.log(searchInsert([1, 3, 5, 6], 2)) // 1
// console.log(searchInsert([1, 3, 5, 6], 7)) // 4
