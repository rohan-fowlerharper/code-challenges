import { describe, it, expect } from 'vitest'
import { ListNode, addTwoNumbers } from './solution'

describe('addTwoNumbers', () => {
  it('should return null if both lists are null', () => {
    const l1 = null
    const l2 = null
    const result = addTwoNumbers(l1, l2)
    expect(result).toBeNull()
  })
  it('should return null if one of the lists is null', () => {
    const l1 = new ListNode(1)
    const l2 = null
    const result = addTwoNumbers(l1, l2)
    expect(result).toBeNull()
  })
  it('should return the sum of the two lists', () => {
    const l1 = new ListNode(1)
    const l2 = new ListNode(2)
    const result = addTwoNumbers(l1, l2)
    expect(result).toEqual(new ListNode(3))
  })
  it('should return the sum of the two lists', () => {
    // 321 + 654 = 987
    const l1 = new ListNode(1, new ListNode(2, new ListNode(3)))
    const l2 = new ListNode(4, new ListNode(5, new ListNode(6)))
    const result = addTwoNumbers(l1, l2)
    expect(result).toEqual(new ListNode(5, new ListNode(7, new ListNode(9))))
  })
  it('should return teh sum of the two lists', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
    const result = addTwoNumbers(l1, l2)
    expect(result).toEqual(new ListNode(7, new ListNode(0, new ListNode(8))))
  })
})
