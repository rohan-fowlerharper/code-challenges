import { describe, it, expect } from 'vitest'

import { minDeletions } from './solution'

describe('minDeletions', () => {
  it('should return 0 for "aab"', () => {
    expect(minDeletions('aab')).toEqual(0)
  })
  it('should return 2 for "aaabbbcc"', () => {
    expect(minDeletions('aaabbbcc')).toEqual(2)
  })
  it('should return 2 for "ceabaacb"', () => {
    expect(minDeletions('ceabaacb')).toEqual(2)
  })
})
