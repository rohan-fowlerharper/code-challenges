import { describe, it, expect } from 'vitest'
import { balancedNum } from './solution.js'

describe('balancedNum', () => {
  it('returns correct values', () => {
    expect(balancedNum(1)).toBe('Balanced')
    expect(balancedNum(12)).toBe('Balanced')
    expect(balancedNum(123)).toBe('Not Balanced')
    expect(balancedNum(1230987)).toBe('Not Balanced')
    expect(balancedNum(56239814)).toBe('Balanced')
  })
})
