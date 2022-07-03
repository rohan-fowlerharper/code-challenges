class INode {
  val: number
  left: INode | null
  right: INode | null
  next: INode | null
  constructor(val?: number, left?: INode, right?: INode, next?: INode) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
    this.next = next === undefined ? null : next
  }
}

function connect(root: INode | null): INode | null {
  if (!root) return null
  if (root.left) {
    root.left.next = root.right
    if (root.next) {
      root!.right!.next = root.next.left
    }
  }
  connect(root.left)
  connect(root.right)
  return root
}
