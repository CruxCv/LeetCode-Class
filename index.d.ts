declare module 'leetcode-class' {
  export class ListNode {
    static create(arr: Array<T>): ListNode
    static show(root: ListNode | null = null): Array<T>
    constructor(val: T)
    visualShow(): void
  }
  export class TreeNode {
    static create(arr: Array<T>): TreeNode
    static show(root: TreeNode | null = null): Array<T>
    constructor(val: T)
    visualShow(): void
  }
}
