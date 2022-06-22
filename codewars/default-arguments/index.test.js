import { describe, expect, it } from 'vitest'

import { defaultArguments } from './index'

describe('Tests', () => {
  it('test', () => {
    function add(a, b) {
      return a + b
    }
    var add_ = defaultArguments(add, { b: 9 })
    expect(add_(10)).toEqual(19)
    expect(add_(10, 5)).toEqual(15)
  })
})
