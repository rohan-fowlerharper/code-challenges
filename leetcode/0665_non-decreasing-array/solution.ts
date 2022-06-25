// make array non-decreasing by modifying up to 1 number in the existing array
export function checkPossibility(nums: number[]): boolean {
  let count = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count++
      if (i === 0 || nums[i - 1] <= nums[i + 1]) {
        nums[i] = nums[i + 1]
      } else {
        nums[i + 1] = nums[i]
      }
    }
  }
  return count <= 1
}
