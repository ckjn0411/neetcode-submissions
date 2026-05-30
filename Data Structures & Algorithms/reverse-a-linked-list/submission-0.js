
//  class ListNode {
//      constructor(val = 0, next = null) {
//          this.val = val;
//         this.next = next;
//      }
// }

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if(head === null || head.next === null) return head
        let pre = null
        let crr = head
        while(crr != null){
            let nxt = crr.next
            crr.next = pre
            pre = crr
            crr = nxt
        }
        return pre
    }
}
