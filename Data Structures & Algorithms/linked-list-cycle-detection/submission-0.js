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
     * @return {boolean}
     */
    hasCycle(head) {
        if(head === null || head.next === null ) return false
        let tail = head
        let i = new Map()
        while(tail != null){
            if(i.has(tail.next)) return true
            i.set(tail, true)
            tail = tail.next
            
        }
        return false
    }
}
