import { describe, it, expect } from 'vitest'
import { differentiate } from './index'

describe('differentiate', () => {
  it('differentiates polynomial', () => {
    expect(differentiate('12x+2', 3)).toBe(12)
    expect(differentiate('x^2-x', 3)).toBe(5)
    expect(differentiate('-5x^2+10x+4', 3)).toBe(-20)
  })
})
