function differentiate(equation, point) {
  const terms = equation.split(/([+\-*\/])/i).filter((e) => e)

  const differentiatedEquation = terms
    .map((term) => {
      if (term.includes('^')) {
        const [coefficientWithX, exponent] = term.split('^')
        const coefficient = coefficientWithX.replace('x', '') || 1
        return `${+coefficient * +exponent}x^${+exponent - 1}`
      }

      if (term.includes('x')) {
        const coefficient = term.replace('x', '')
        if (!coefficient) return '1'
        return `${coefficient}`
      }

      if (!isNaN(term)) return '0'

      return term
    })
    .join('')
    .replace(/\^/gi, '**')
    .replace(/\x/gi, `*(${point})`)
  return eval(differentiatedEquation)
}

module.exports = { differentiate }
