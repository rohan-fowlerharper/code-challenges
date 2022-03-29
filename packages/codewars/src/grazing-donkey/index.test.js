import { describe, it, expect } from 'vitest'

import { getRopeLength } from './index'

describe('example tests', () => {
  it('it should work for basic tests', () => {
    expect(getRopeLength(200, 0.5)).toEqual(115)
    expect(getRopeLength(10, 0.5)).toEqual(5)
  })
})

describe.skip('edge cases', () => {
  it('Eat nothing.', () => {
    expect(getRopeLength(200, 0)).toEqual(0)
  })
  it('Eat all.', () => {
    expect(getRopeLength(200, 1)).toEqual(200)
  })
  it('No grass.', () => {
    expect(getRopeLength(0, 0)).toEqual(0)
    expect(getRopeLength(0, 0.5)).toEqual(0)
    expect(getRopeLength(0, 1)).toEqual(0)
  })
})
