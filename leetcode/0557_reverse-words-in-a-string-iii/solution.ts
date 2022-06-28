function reverseWords(s: string): string {
  let words = s.split(' ')
  return words
    .map((word) => {
      const string = word.split('')
      reverseString(string)
      return string
    })
    .join(' ')
}

function reverseWordsButEasier(s: string): string {
  return s.split('').reverse().join('')
}

function reverseString(s: string[]): string[] {
  for (let i = 0; i < s.length / 2; i++) {
    const temp = s[i]
    s[i] = s[s.length - i - 1]
    s[s.length - i - 1] = temp
  }
  return s
}
