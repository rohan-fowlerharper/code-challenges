function reverseString(s: string[]): void {
  for (let i = 0; i < s.length / 2; i++) {
    const temp = s[i]
    s[i] = s[s.length - i - 1]
    s[s.length - i - 1] = temp
  }
}
