/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid

  while (left <= right) {
    mid = Math.floor((right + left) / 2)

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}

// console.log(search([-1, 0, 3, 5, 9, 12], 9) === 4)
console.log(search([2, 5], 5) === 1)
