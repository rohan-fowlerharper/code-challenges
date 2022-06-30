function checkInclusion(s1: string, s2: string): boolean {
  // base conditions
  const s1Len = s1.length
  const s2Len = s2.length
  if (s1Len > s2Len) return false

  // create hashmap of s1
  const s1Map = new Map<string, number>()
  for (let i = 0; i < s1Len; i++) {
    const char = s1[i]
    s1Map.set(char, (s1Map.get(char) ?? 0) + 1)
  }

  // sliding window across s2
  let left = 0
  let right = 0
  let count = 0
  while (right < s2Len) {
    const char = s2[right]
    if (s1Map.has(char)) {
      s1Map.set(char, s1Map.get(char)! - 1)
      if (s1Map.get(char) === 0) {
        count++
      }
    }
    right++
    while (count === s1Map.size) {
      if (right - left === s1Len) {
        return true
      }
      const leftChar = s2[left]
      if (s1Map.has(leftChar)) {
        s1Map.set(leftChar, s1Map.get(leftChar)! + 1)
        if (s1Map.get(leftChar)! > 0) {
          count--
        }
      }
      left++
    }
  }
  return false
}

console.log(checkInclusion('ab', 'eidbaooo'))
