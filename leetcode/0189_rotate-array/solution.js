/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// naive
// let rotate = (nums, k) => {
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums.pop())
//   }
// }

// doesn't work for edge case where nums.length < k
// let rotate = (nums, k) => {
//   nums.splice(0, 0, ...nums.splice(nums.length - k, k))
// }

let rotate = (nums, k) => {
  if (nums.length < k) {
    for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop())
    }
  } else {
    nums.splice(0, 0, ...nums.splice(nums.length - k, k))
  }
}

let nums = [1, 2, 3, 4, 5, 6, 7]
console.log(nums)
rotate(nums, 3)
console.log(nums)
