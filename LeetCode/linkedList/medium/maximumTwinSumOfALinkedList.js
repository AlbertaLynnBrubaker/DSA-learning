
const { createList } = require('../../helper/createLinkedListFromArray')

const list = createList([5,4,2,1])

var pairSum = function(head) {
    // walk through the list and push the vals into a stack.
    let current = head
    const stack = []
    while(current) {
        stack.push(current.val)
        current = current.next
    }

    // run a loop with two pointers to add twin vals
    let maxSum = -Infinity
    for (let i = 0; i < stack.length; i++) {
        const left = stack[i]
        const right = stack[stack.length - 1 - i]
        maxSum = Math.max(maxSum, left + right)
    }
    
    return maxSum
};

// NO STACK -> BEST SOLUTION
// var pairSum = function(head) {
//     let slow = head;
//     let fast = head;
//     let prev = null;

//     while (fast && fast.next) {
//         fast = fast.next.next;
//         const tmp = slow.next;
//         slow.next = prev;
//         prev = slow;
//         slow = tmp;
//     }

//     let maxSum = 0;

//     while (slow) {
//         maxSum = Math.max(maxSum, slow.val + prev.val);
//         slow = slow.next;
//         prev = prev.next;
//     }

//     return maxSum;
// };

c({res: pairSum(list.head)})