// uses hash table to store complement values until solution is found
function twoSum(numbers: number[], target: number): number[] | undefined {
  const hashTable = new Map()

  // check each number in list
  for (let i = 0; i < numbers.length; i++) {
    // find complement
    const alt = target - numbers[i]

    // if complement exists in hash table already,
    // return solution as [index of complement, index of current number]
    if (hashTable.has(alt)) {
      return [hashTable.get(alt) + 1, i + 1]
    }

    // else add current number to hash table
    hashTable.set(numbers[i], i)
  }
}
