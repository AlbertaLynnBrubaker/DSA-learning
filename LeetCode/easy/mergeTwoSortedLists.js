var mergeTwoLists = function (list1, list2) {
  let preHead = { val: 0, next: null }
  let tail = preHead

  while (list1 && list2) {
      const isL1LessOrEqual = list1.val <= list2.val
      const isL1Greater = list1.val > list2.val

      if (isL1LessOrEqual) {
          tail.next = list1
          list1 = list1.next
      }
      if (isL1Greater) {
          tail.next = list2
          list2 = list2.next
      }
      tail = tail.next
  }
  tail.next = list1 || list2

  return preHead.next
};