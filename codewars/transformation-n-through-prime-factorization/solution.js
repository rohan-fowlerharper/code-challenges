// https://en.wikipedia.org/wiki/Prime_factorization
// https://en.wikipedia.org/wiki/Transformation_%28mathematics%29
// https://en.wikipedia.org/wiki/Transformation_%28mathematics%29#Prime_factorization

/**
 * accepts any natural number, n, and returns the geometric derivatives of the product of its prime factors
 * @param { number } num
 * @returns number
 */
function f(num) {
  const factors = getPrimeFactors(num)
  return Object.entries(factors).reduce(
    (nStar, [p, k]) => nStar * (k * Math.pow(Number(p), k - 1)),
    1
  )
}

const getPrimeFactors = (num) => {
  const factors = {}
  let divisor = 2
  while (num > 1) {
    while (num % divisor === 0) {
      if (factors[divisor]) factors[divisor]++
      else factors[divisor] = 1
      num /= divisor
    }
    divisor++
  }
  return factors
}

module.exports = { f }
