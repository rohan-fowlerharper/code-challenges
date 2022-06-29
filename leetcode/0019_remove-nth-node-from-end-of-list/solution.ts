class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// second attempt: one pass, forgive the bangs, I'm a bad TS person
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast = head
  let slow = head

  while (n > 0) {
    fast = fast!.next
    n--
  }

  if (fast === null) return head!.next

  while (fast.next !== null) {
    slow = slow!.next
    fast = fast.next
  }

  slow!.next = slow!.next!.next

  return head
}
