import { describe, expect, it } from 'vitest'

import { f } from './solution.js'

describe('Transformation of a Number Through Prime Factorization', () => {
  it('returns correct results', () => {
    expect(f(24500)).toBe(4200)
    expect(f(997)).toBe(1)
  })
})
