function generator(sequencer, ...args) {
  let seq = sequencer(...args)
  return {
    next: () => {
      return seq.next()
    },
  }
}

function dummySeq() {
  return {
    next: () => {
      return 'dummy'
    },
  }
}

function factorialSeq() {
  let fact = 1,
    i = 0
  return {
    next: () => {
      if (i > 0) {
        fact *= i
      }
      i++
      return fact
    },
  }
}

function fibonacciSeq() {
  let a = 1,
    b = 1,
    i = 0
  return {
    next: () => {
      if (i > 0) {
        let c = a
        a = b
        b += c
      }
      i++
      return a
    },
  }
}

function rangeSeq(start, step) {
  let i = start
  return {
    next: () => {
      let value = i
      i += step
      return value
    },
  }
}

function primeSeq() {
  let i = 2

  return {
    next: () => {
      while (!isPrime(i)) {
        i++
      }
      return i++
    },
  }
}

function isPrime(n) {
  for (let j = 2; j < n; j++) {
    if (n % j === 0) {
      return false
    }
  }
  return true
}

function partialSumSeq(...nums) {
  let sum = 0
  return {
    next: () => {
      sum += nums.shift()
      if (isNaN(sum)) {
        return new Error('Done')
      }
      return sum
    },
  }
}

module.exports = {
  generator,
  dummySeq,
  factorialSeq,
  fibonacciSeq,
  rangeSeq,
  primeSeq,
  partialSumSeq,
}
