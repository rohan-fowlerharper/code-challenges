function lengthOfLongestSubstring(s: string): number {
  if (!s) {
    return 0
  }
  let start = 0
  let end = 0
  let maxLength = 0
  const uniqueCharacters = new Set<string>()
  while (end < s.length) {
    if (!uniqueCharacters.has(s[end])) {
      uniqueCharacters.add(s[end])
      end++
      maxLength = Math.max(maxLength, uniqueCharacters.size)
    } else {
      uniqueCharacters.delete(s[start])
      start++
    }
  }
  return maxLength
}

console.log(lengthOfLongestSubstring('abcabcbb'))
