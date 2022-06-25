function add(a, b) {
  let aN = a.split('').map(Number).reverse()
  let bN = b.split('').map(Number).reverse()
  let length = Math.max(a.length, b.length)
  let carry = 0
  let sum = ''
  for (let i = 0; i < length; i++) {
    let first = aN[i] || 0
    let second = bN[i] || 0
    let local = parseInt(first) + parseInt(second) + carry
    sum += local % 10
    carry = local > 9 ? 1 : 0
  }
  if (carry) sum += 1
  return sum.split('').reverse().join('')
}

export default add
