/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        function findMiddle(h) {
            let slow = h
            let fast = h
            while (fast && fast.next) {
                slow = slow.next
                fast = fast.next.next
            }
            return slow
        }

        function reverse(h) {
            let prev = null
            let cur = h
            while (cur) {
                const next = cur.next
                cur.next = prev
                prev = cur
                cur = next
            }
            return prev
        }

        const mid = findMiddle(head) 
        let p2 = reverse(mid)
        let p1 = head

        while (p1.next && p2.next) {
            const tmp1 = p1.next
            const tmp2 = p2.next

            p1.next = p2
            p2.next = tmp1
            p1 = tmp1
            p2 = tmp2
        }

        return head
    }
}
