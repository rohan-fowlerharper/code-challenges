import { describe, expect, it } from 'vitest'

import { whoEatsWho } from './index'

describe('whoEatsWho', () => {
  it('returns correct results', () => {
    var input = 'fox,bug,chicken,grass,sheep'
    var expected = [
      'fox,bug,chicken,grass,sheep',
      'chicken eats bug',
      'fox eats chicken',
      'sheep eats grass',
      'fox eats sheep',
      'fox',
    ]
    expect(whoEatsWho(input)).toEqual(expected)
  })
})
