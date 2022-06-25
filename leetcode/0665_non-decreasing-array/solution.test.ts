import { describe, it, expect } from 'vitest'
import { checkPossibility } from './solution'

describe('checkPossibility', () => {
  // test cases
  it('[4,2,3]', () => {
    expect(checkPossibility([4, 2, 3])).toEqual(true)
  })
  it('[4,2,1]', () => {
    expect(checkPossibility([4, 2, 1])).toEqual(false)
  })
  it('[3,4,2,3]', () => {
    expect(checkPossibility([3, 4, 2, 3])).toEqual(false)
  })
  it('[5,7,1,8]', () => {
    expect(checkPossibility([5, 7, 1, 8])).toEqual(true)
  })
})
