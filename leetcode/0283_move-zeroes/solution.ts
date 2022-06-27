let moveZeroes = (nums: number[]): void => {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      continue
    }
    i++
  }
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
