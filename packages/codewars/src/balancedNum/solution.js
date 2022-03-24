export function balancedNum(number) {
  const numArray = number.toString().split('')
  let forwardSum = 0
  let backwardSum = 0
  for (let i = 0; i < numArray.length / 2 - 1; i++) {
    forwardSum += parseInt(numArray[i])
    backwardSum += parseInt(numArray[numArray.length - 1 - i])
  }

  return forwardSum === backwardSum ? 'Balanced' : 'Not Balanced'
}

module.exports = { balancedNum }
