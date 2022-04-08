/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = (nums) => {
  let i = 0
  for (let j = 0; j < 15; j++) {
    console.log(i)
    console.log(nums)
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      continue
    }
    i++
  }
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
