export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!(l1 && l2)) return null

  let head = new ListNode(0)
  let curr = head

  let sum = 0
  let carry = 0

  while (l1 || l2 || sum > 0) {
    if (l1 !== null) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2 !== null) {
      sum += l2.val
      l2 = l2.next
    }
    if (sum >= 10) {
      carry = 1
      sum %= 10
    }

    curr.next = new ListNode(sum)
    curr = curr.next

    sum = carry
    carry = 0
  }

  return head.next
}
